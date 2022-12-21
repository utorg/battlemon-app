import { Scene, SceneLoader, ActionManager, ExecuteCodeAction, Vector3, TransformNode, AnimationGroup, Animation, Mesh, ArcRotateCamera, AssetContainer } from "@babylonjs/core"

export const Platforms = async (scene: Scene, camera: ArcRotateCamera, handleMint: () => Promise<void>, canvas: HTMLCanvasElement): Promise<() => void> => {
  const containers: { [key: string]: AssetContainer } = {}

  
  let activePlatform: number = 1;
  const direction = [
    {forward: 3, backward: 2},
    {forward: 1, backward: 3},
    {forward: 2, backward: 1}
  ];

  const models = {
    platforms: 'BTLMN_LemonPlatforms.glb',
    dots: 'BTLMN_LemonIcons.glb'
  }

  for (const [key, link] of Object.entries(models)) {
    containers[key] = await SceneLoader.LoadAssetContainerAsync(
      "/glb/", link, scene
    )
  }
  
  containers.platforms.addAllToScene()
  containers.dots.addAllToScene()
  const dots = scene.getTransformNodeByName('icons')
  if (dots) {
    dots.position.y = dots.position.y + 10
    dots.getChildMeshes().forEach(mesh => {
      mesh.renderingGroupId = 2;
    })
    dots.scaling = new Vector3(0,0,0);
  }
  const dotsMeshes = dots?.getChildMeshes() || [];

  let originalRotationAngle = 0;


  const Camera = scene.getCameraByName('Camera')
  if (Camera) {
    scene.activeCamera = Camera
  }

  const operator = scene.getMeshByName('operator')
  if (operator) operator.visibility = 0
  const target = scene.getMeshByName('target')
  if (target) target.visibility = 0
  const showPos_feature = scene.getMeshByName('showPos_feature')
  if (showPos_feature) showPos_feature.visibility = 0
  const showPos_outfit = scene.getMeshByName('showPos_outfit')
  if (showPos_outfit) showPos_outfit.visibility = 0

  // const platforms = models.meshes[0]
  // platforms.position.y = -100;

  const lookatObjects: string[] = ["LemonPos_1", "LemonPos_2", "LemonPos_3"];
  const lemonPositions: TransformNode[] = lookatObjects.map(pos => {
    return scene.getNodeByName(pos) as TransformNode
  })

  lemonPositions.forEach((position, index) => {
    position.rotate(new Vector3(0,1,0), Math.PI) // This is becouse new lemon rotated by default  
    const plus = scene.getMeshByName(`Plus_${index + 1}`)
    const plusStroke = scene.getMeshByName(`Plus_${index + 1}_Stroke`)
    if (plus) {
      plus.rotation = position.rotation;
    }
    if (plusStroke) {
      plusStroke.rotation = position.rotation;
      plusStroke.visibility = 0;
    }
    position.rotate(new Vector3(0,1,0), (Math.PI + Math.PI/3)*index)
  });

  const objects: string[] = ["Plus_Back", "Plus_Cap", "Plus_Cloth", "Plus_Face", "Plus_Back_Stroke", "Plus_Cap_Stroke", "Plus_Cloth_Stroke", "Plus_Face_Stroke", "Line_Back_1", "Line_Back_2", "Line_Cap_1", "Line_Cap_2", "Line_Cloth_1", "Line_Cloth_2", "Line_Face_1", "Line_Face_2", "Point_Back", "Point_Cap", "Point_Cloth", "Point_Face", "Background_Sphere"];

  const unusedObjects: string[] = ["Point_Weapon", "Plus_Weapon", "Plus_Weapon_Stroke", "Line_Weapon_1", "Line_Weapon_2"];

  [...objects, ...unusedObjects].forEach(name => {
    const object = scene.getMeshByName(name);
    if (!object) return;
    object.visibility = 0;
    object.checkCollisions = false;
    object.isPickable = false;
  });



  ["collider1", "collider2", "collider3"].forEach((name, index) => {
    const collider = scene.getMeshByName(name);
    if (!collider) return;
    collider.actionManager = new ActionManager(scene);
    collider.visibility = 0;

    let stroke = scene.getMeshByName(`Plus_${index + 1}_Stroke`)	
    collider.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnPointerOverTrigger, async function(){
      if (stroke) stroke.visibility = 1;
      scene.hoverCursor = "pointer";
    }));
    collider.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnPointerOutTrigger, async function(){
      if (stroke) stroke.visibility = 0;
      scene.hoverCursor = "default";
    }));
    
    collider.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnPickTrigger, async function(){
      let rotationAngle = 0;
      let platformAnimation: AnimationGroup | null = null;

      stroke = scene.getMeshByName(`Plus_${index + 1}_Stroke`) // refresh stroke
      if (stroke) {
        await handleMint();
        return;
      }

      if (activePlatform == direction[index].forward) {
        platformAnimation = scene.getAnimationGroupByName('Forward' + direction[index].forward) as AnimationGroup
        rotationAngle = 2*Math.PI/3
      } else
      if (activePlatform == direction[index].backward) {
        platformAnimation = scene.getAnimationGroupByName('Backward' + direction[index].backward) as AnimationGroup
        rotationAngle = -2*Math.PI/3
      }

      if (platformAnimation) {
        if (dots && dots.scaling.x > 0) {
          Animation.CreateAndStartAnimation(`Lemon_rotation`, dots, "scaling", 60, 25, new Vector3(120,120,120), new Vector3(0,0,0), 0)
        }
        platformAnimation.start(false, 1);
      } else {
        const position = lemonPositions[index];
        if (dots && dots.scaling.x < 120) {
          dots.parent = position;
          dots.rotation = position.rotation;
          Animation.CreateAndStartAnimation(`Lemon_rotation`, dots, "scaling", 60, 70, new Vector3(0,0,0), new Vector3(120,120,120), 0)
          const operatorAnimation = scene.getAnimationGroupByName('operator_FocusLemon_f')
          operatorAnimation?.start(false, 1);
          const targetAnimation = scene.getAnimationGroupByName('target_FocusLemon_f')
          targetAnimation?.start(false, 1);
        }
        return;
      }

      lookatObjects.forEach((name, index) => {
        const lemon = scene.getNodeByName(name) as TransformNode;
        if (activePlatform == index + 1) {
          lemon.rotate(new Vector3(0,1,0), originalRotationAngle)
          dotsMeshes.forEach(mesh => mesh.rotate(new Vector3(0,1,0), -1*originalRotationAngle))
          originalRotationAngle = 0;
        }
        Animation.CreateAndStartAnimation(`Lemon_rotation`, lemon, "rotation.y", 60, 25, lemon.rotation.y, lemon.rotation.y + rotationAngle, 0)
      })

      activePlatform = index + 1
    }));
    
  });

  dotsMeshes.forEach((dot) => {
    dot.actionManager = new ActionManager(scene);

    dot.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnPickTrigger, async function(){

    }));

  })
           
  const currentPosition = { x: 0, y: 0 };
  let clicked = false;

  function pointerDown(evt: MouseEvent) {
    currentPosition.x = evt.clientX;
    clicked = true;
  }
  
  function pointerUp() {
    clicked = false;
  }

  function pointerMove(evt: MouseEvent) {
    if (!clicked) {
      return;
    }
    
    const dx = evt.clientX - currentPosition.x;
    const angleY = dx * 0.01;
    lemonPositions[activePlatform - 1].rotate(new Vector3(0,1,0), angleY);
    dotsMeshes.forEach(mesh => mesh.rotate(new Vector3(0,1,0), -1*angleY))
    originalRotationAngle -= angleY;
    currentPosition.x = evt.clientX;
  }
  
  canvas.addEventListener("pointerdown", pointerDown);
  canvas.addEventListener("pointerup", pointerUp);
  canvas.addEventListener("pointermove", pointerMove);

  return () => {
    canvas.removeEventListener("pointerdown", pointerDown, false);
    canvas.removeEventListener("pointerup", pointerUp, false);
    canvas.removeEventListener("pointermove", pointerMove, false);
  }
}