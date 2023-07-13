import {
  type Scene,
  SceneLoader,
  FreeCamera,
  Vector3,
  TransformNode,
  AnimationGroup,
  Animation,
  AbstractMesh,
  Mesh,
} from '@babylonjs/core';
import { useMiningStore } from '../../hooks/useMining';

export const Mining = async (scene: Scene): Promise<void> => {
  const c = await SceneLoader.ImportMeshAsync(
    '',
    `${process.env.NEXT_PUBLIC_MODELS}/mining/`,
    'BTLMN_Lemon_Mining.gltf',
    scene
  );

  const camera = scene.getCameraById('Camera.001') as FreeCamera;
  camera.rotation = new Vector3(0, 3, 0);
  scene.activeCamera = camera;

  const idleAnimation = scene.getAnimationGroupByName('Idle');
  idleAnimation?.start(true, 1);
  const miningAnimation = scene.getAnimationGroupByName('Mining');
  const gemAppearAnimation = scene.getAnimationGroupByName('GemAppear');

  const placeholderGem = scene.getMeshByName('placeholder_gem');
  if (placeholderGem) {
    placeholderGem.visibility = 0;
  }

  const pickAxes: TransformNode[] = [
    scene.getTransformNodeByName('IcePick_Blue') as TransformNode,
    scene.getTransformNodeByName('IcePick_Purple') as TransformNode,
    scene.getTransformNodeByName('IcePick_Yellow') as TransformNode,
  ];

  const showPickAxe = (rank: number) => {
    pickAxes.forEach((pickAxe, index) => {
      if (!pickAxe) return;
      if (index !== rank) pickAxe.scaling = new Vector3(0, 0, 0);
    });
    if (rank < 0 || !pickAxes[rank]) return;
    pickAxes[rank].scaling = new Vector3(1, 1, 1);
  };
  showPickAxe(-1);

  const startMining = (rank: number) => {
    showPickAxe(rank);
    miningAnimation?.start(true, 1);
  };

  const gems: Mesh[] = [
    scene.getMeshByName('Gem_Green_A') as Mesh,
    scene.getMeshByName('Gem_Blue_A') as Mesh,
    scene.getMeshByName('Gem_Yellow_A') as Mesh,
  ];

  const showGem = (rank: number) => {
    gems.forEach((gem, index) => {
      if (!gem) return;
      if (index !== rank) gem.scaling = new Vector3(0, 0, 0);
    });
    if (rank < 0 || !gems[rank]) return;
    gems[rank].scaling = new Vector3(1, 1, 1);
  };

  const startGemAppear = (rank: number) => {
    showGem(rank);
    miningAnimation?.stop();
    idleAnimation?.start(false, 1);
    gemAppearAnimation?.start(false, 1);
  };

  useMiningStore.setState({
    startMining,
    showPickAxe,
    startGemAppear,
  });
};
