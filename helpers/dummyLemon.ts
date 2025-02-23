import { type ItemType, type LemonType } from './lemonStore';

export const ITEMS_TYPE_PLACEHOLDERS: Record<string, string> = {
  back: 'placeholder_back',
  cap: 'placeholder_cap',
  belt: 'placeholder_belt',
  cloth: 'placeholder_cloth',
  glasses: 'placeholder_glasses',
  mask: 'placeholder_mask',
  fire_arms: 'placeholder_fire_arms',
  cold_arms: 'placeholder_cold_arms',
  shoes: 'placeholder_shoes',
};

export const allItems: ItemType[] = [
  {
    name: 'Back_Insecticide_Bottle',
    type: 'back',
    attachedTo: null,
    description: 'Large Insecticide bottle',
  },
  {
    name: 'Back_Bomb_Barrel',
    type: 'back',
    attachedTo: null,
    description: 'Wooden backpack full of bombs',
  },
  {
    name: 'Back_Tactical_Backpack',
    type: 'back',
    attachedTo: null,
    description: 'Tactical backpack with walkie-talkie',
  },
  {
    name: 'Back_Adventurer_Backpack',
    type: 'back',
    attachedTo: null,
    description: "Adventurer's backpack",
  },
  {
    name: 'Cap_Baseball_Cap_Red',
    type: 'cap',
    attachedTo: null,
    description: 'Red baseball cap with headphones',
  },
  {
    name: 'Cap_Ladle',
    type: 'cap',
    attachedTo: null,
    description: 'Old cracked ladle',
  },
  {
    name: 'Cap_Cheef_Hat',
    type: 'cap',
    attachedTo: null,
    description: "White cook's hat",
  },
  {
    name: 'Cap_Cone_Armored_Hat',
    type: 'cap',
    attachedTo: null,
    description: 'Eastern armored cone hat',
  },
  {
    name: 'Cap_Cowboy_Hat',
    type: 'cap',
    attachedTo: null,
    description: "Cowboy's hat",
  },
  {
    name: 'Cap_Sheriff_Hat',
    type: 'cap',
    attachedTo: null,
    description: "Sheriff's hat",
  },
  {
    name: 'Cap_Military_Cap',
    type: 'cap',
    attachedTo: null,
    description: 'Military kepi',
  },
  {
    name: 'Cap_Special_Forces_Beret',
    type: 'cap',
    attachedTo: null,
    description: 'Special forces beret',
  },
  {
    name: 'Cap_Tank_Helmet',
    type: 'cap',
    attachedTo: null,
    description: 'Helmet with protective glasses',
  },
  {
    name: 'Cap_Military_Helmet',
    type: 'cap',
    attachedTo: null,
    description: 'Old-style military helmet',
  },
  {
    name: 'Cap_Metallic_Cone_Hat',
    type: 'cap',
    attachedTo: null,
    description: 'Metallic cone hat',
  },
  {
    name: 'Cap_Assault_Helmet',
    type: 'cap',
    attachedTo: null,
    description: 'Assault Helmet',
  },
  {
    name: 'Cap_Cane_Cone_Hat',
    type: 'cap',
    attachedTo: null,
    description: 'Cane cone hat',
  },
  {
    name: 'Cap_Cocked_Hat',
    type: 'cap',
    attachedTo: null,
    description: 'Cocked hat',
  },
  {
    name: 'Cap_Pirate_Bandana',
    type: 'cap',
    attachedTo: null,
    description: 'Pirate bandana',
  },
  {
    name: 'Belt_Chain_Gold',
    type: 'belt',
    attachedTo: null,
    description: 'Gold chain with $ pendant',
  },
  {
    name: 'Belt_Cheef_Sash',
    type: 'belt',
    attachedTo: null,
    description: "White cook's sash",
  },
  {
    name: 'Belt_Eastern_Armor_Belt',
    type: 'belt',
    attachedTo: null,
    description: 'Metal belt made of plates',
  },
  {
    name: 'Belt_Ninja_Waistband',
    type: 'belt',
    attachedTo: null,
    description: 'Ninja waist with shurikens',
  },
  {
    name: 'Belt_Bandolier',
    type: 'belt',
    attachedTo: null,
    description: 'Belt with shotgun shells',
  },
  {
    name: 'Belt_Skull_Belt',
    type: 'belt',
    attachedTo: null,
    description: 'Pirate belt with a skull buckle',
  },
  {
    name: 'Cloth_Poncho',
    type: 'cloth',
    attachedTo: null,
    description: "Gunman's poncho",
  },
  {
    name: 'Glasses_Sunglasses',
    type: 'glasses',
    attachedTo: null,
    description: 'Standard black sunglasses',
  },
  {
    name: 'Glasses_Visor_VR',
    type: 'glasses',
    attachedTo: null,
    description: 'VR Visor',
  },
  {
    name: 'Glasses_Cheezee_Squeeze',
    type: 'glasses',
    attachedTo: null,
    description: 'Glasses Cheezee Squeeze',
  },
  {
    name: 'Glasses_Deep_Blue',
    type: 'glasses',
    attachedTo: null,
    description: 'Glasses Deep Blue',
  },
  {
    name: 'Glasses_Dev_Dream',
    type: 'glasses',
    attachedTo: null,
    description: 'Glasses Dev Dream',
  },
  {
    name: 'Glasses_Fizz_Visor_Pro',
    type: 'glasses',
    attachedTo: null,
    description: 'Glasses Fizz Visor Pro',
  },
  {
    name: 'Glasses_Flamingo_Blink',
    type: 'glasses',
    attachedTo: null,
    description: 'Glasses Flamingo Blink',
  },
  {
    name: 'Glasses_Green_Five',
    type: 'glasses',
    attachedTo: null,
    description: 'Glasses Green Five',
  },
  {
    name: 'Glasses_Spiky_Punky',
    type: 'glasses',
    attachedTo: null,
    description: 'Glasses Spiky Punky',
  },
  {
    name: 'Glasses_Techno_A',
    type: 'glasses',
    attachedTo: null,
    description: 'Glasses Techno A',
  },
  {
    name: 'Glasses_Visor_AR',
    type: 'glasses',
    attachedTo: null,
    description: 'Glasses Visor AR',
  },
  {
    name: 'Mask_Cowboy_Scarf',
    type: 'mask',
    attachedTo: null,
    description: "Red cowboy's scarf",
  },
  {
    name: 'FireArms_Sniper_Rifle',
    type: 'fire_arms',
    attachedTo: null,
    description: 'Sniper Rifle',
  },
  {
    name: 'FireArms_Revolver',
    type: 'fire_arms',
    attachedTo: null,
    description: "Cowboy's best choice",
  },
  {
    name: 'FireArms_Grenade_Launcher',
    type: 'fire_arms',
    attachedTo: null,
    description: 'Revolver grenade launcher',
  },
  {
    name: 'FireArms_Handgun_SMG',
    type: 'fire_arms',
    attachedTo: null,
    description: 'SMG handgun',
  },
  {
    name: 'FireArms_Assault_Rifle_A',
    type: 'fire_arms',
    attachedTo: null,
    description: 'Assault rifle',
  },
  {
    name: 'FireArms_Assault_Rifle_M',
    type: 'fire_arms',
    attachedTo: null,
    description: 'Assault rifle',
  },
  {
    name: 'ColdArms_Bottle_Rose',
    type: 'cold_arms',
    attachedTo: null,
    description: 'The most common bar weapon',
  },
  {
    name: 'ColdArms_Grappling_Hook',
    type: 'cold_arms',
    attachedTo: null,
    description: 'Grappling hook',
  },
  {
    name: 'ColdArms_Chopper_Knife',
    type: 'cold_arms',
    attachedTo: null,
    description: 'Chopper knife',
  },
  {
    name: 'ColdArms_Katana',
    type: 'cold_arms',
    attachedTo: null,
    description: 'Classic Katana',
  },
  {
    name: 'Shoes_Kicks_Red',
    type: 'shoes',
    attachedTo: null,
    description: 'Kicks',
  },
  {
    name: 'Shoes_Kicks_Green',
    type: 'shoes',
    attachedTo: null,
    description: 'Kicks',
  },
];

export const allProperties: ItemType[] = [
  { name: 'Teeth_Grga', type: 'teeth', attachedTo: null },
  { name: 'Teeth_Hollywood', type: 'teeth', attachedTo: null },
  { name: 'Teeth_Oldstyle', type: 'teeth', attachedTo: null },
  { name: 'Teeth_Sharp', type: 'teeth', attachedTo: null },
  { name: 'Teeth_Grillz_Silver', type: 'teeth', attachedTo: null },
  { name: 'Eyes_Blue', type: 'eyes', attachedTo: null },
  { name: 'Eyes_Green', type: 'eyes', attachedTo: null },
  { name: 'Eyes_Alien', type: 'eyes', attachedTo: null },
  { name: 'Eyes_Zombie', type: 'eyes', attachedTo: null },
  { name: 'ExoTop_Snowwhite', type: 'exo_top', attachedTo: null },
  { name: 'ExoTop_Steel', type: 'exo_top', attachedTo: null },
  { name: 'ExoTop_Hacky', type: 'exo_top', attachedTo: null },
  { name: 'ExoTop_Golden', type: 'exo_top', attachedTo: null },
  { name: 'ExoBot_Snowwhite', type: 'exo_bot', attachedTo: null },
  { name: 'ExoBot_Steel', type: 'exo_bot', attachedTo: null },
  { name: 'ExoBot_Hacky', type: 'exo_bot', attachedTo: null },
  { name: 'ExoBot_Golden', type: 'exo_bot', attachedTo: null },
  { name: 'Feet_Snowwhite', type: 'feet', attachedTo: null },
  { name: 'Feet_Steel', type: 'feet', attachedTo: null },
  { name: 'Feet_Military', type: 'feet', attachedTo: null },
  { name: 'Feet_Golden', type: 'feet', attachedTo: null },
  { name: 'Hands_Snowwhite', type: 'hands', attachedTo: null },
  { name: 'Hands_Steel', type: 'hands', attachedTo: null },
  { name: 'Hands_Yellow_Plastic', type: 'hands', attachedTo: null },
  { name: 'Hands_Golden', type: 'hands', attachedTo: null },
  { name: 'Head_Fresh_Lemon', type: 'head', attachedTo: null },
  { name: 'Head_Zombie', type: 'head', attachedTo: null },
  { name: 'Head_Clementine', type: 'head', attachedTo: null },
  { name: 'Head_Lime', type: 'head', attachedTo: null },
  { name: 'Hair_Dragon_Short_Orange', type: 'hair', attachedTo: null },
  { name: 'Hair_Dragon_Red', type: 'hair', attachedTo: null },
  { name: 'Hair_Hedgehog_Neon_Red', type: 'hair', attachedTo: null },
  { name: 'Hair_Dreadlocks_Brown', type: 'hair', attachedTo: null },
  { name: 'Hair_Ponytail_Gray', type: 'hair', attachedTo: null },
  { name: 'Hair_Curly_Gray', type: 'hair', attachedTo: null },
  { name: 'Hair_Mohawk_Purple', type: 'hair', attachedTo: null },
  { name: 'Hair_Fitness_Blue', type: 'hair', attachedTo: null },
  { name: 'Hair_Box_Gray', type: 'hair', attachedTo: null },
  { name: 'Hair_Topknot_Blue', type: 'hair', attachedTo: null },
  { name: 'Hair_Mizura_Marine', type: 'hair', attachedTo: null },
  { name: 'Hair_Sakayaki_Gray', type: 'hair', attachedTo: null },
  { name: 'Hair_Leftover_Blue', type: 'hair', attachedTo: null },
  { name: 'Hair_Disco_Iroquois_Lime', type: 'hair', attachedTo: null },
  { name: 'Hair_Fauxhawk_Green_Orange', type: 'hair', attachedTo: null },
  { name: 'Hair_Spikes_Gray', type: 'hair', attachedTo: null },
  { name: 'Scar_Spartan_R', type: 'scar', attachedTo: null },
  { name: 'Scar_Gaul_R', type: 'scar', attachedTo: null },
  { name: 'Scar_Barbarian_R', type: 'scar', attachedTo: null },
  { name: 'Scar_Samurai_R', type: 'scar', attachedTo: null },
  { name: 'Scar_Macedonian_R', type: 'scar', attachedTo: null },
];

function random(array: ItemType[], type: string): ItemType {
  array = array.filter((item) => item.type == type);
  return array[Math.floor(Math.random() * array.length)];
}

export const dummyLemon = (withoutItems?: boolean): LemonType => {
  const hairOrCap = 1; // Math.round(Math.random());

  const items: ItemType[] = [
    {
      name: random(allItems, 'back').name,
      type: 'back',
      attachedTo: null,
    },
    {
      name: random(allItems, 'glasses').name,
      type: 'glasses',
      attachedTo: null,
    },
    {
      name: !hairOrCap ? random(allItems, 'cap').name : null,
      type: 'cap',
      attachedTo: null,
    },
    {
      name: random(allItems, 'belt').name,
      type: 'belt',
      attachedTo: null,
    },
    {
      name: random(allItems, 'cold_arms').name,
      type: 'cold_arms',
      attachedTo: null,
    },
    {
      name: random(allItems, 'fire_arms').name,
      type: 'fire_arms',
      attachedTo: null,
    },
    {
      name: random(allItems, 'shoes').name,
      type: 'shoes',
      attachedTo: null,
    },
  ];

  const lemon: LemonType = {
    id: '',
    owner: '',
    properties: [
      {
        name: random(allProperties, 'exo_top').name,
        type: 'exo_top',
        title: 'Exoskeleton Top',
        attachedTo: null,
      },
      {
        name: random(allProperties, 'exo_bot').name,
        type: 'exo_bot',
        title: 'Exoskeleton Bottom',
        attachedTo: null,
      },
      {
        name: random(allProperties, 'eyes').name,
        type: 'eyes',
        title: 'Eyes',
        attachedTo: null,
      },
      {
        name: random(allProperties, 'feet').name,
        type: 'feet',
        title: 'Feet',
        attachedTo: null,
      },
      {
        name: random(allProperties, 'head').name,
        type: 'head',
        title: 'Head',
        attachedTo: null,
      },
      {
        name: random(allProperties, 'hands').name,
        type: 'hands',
        title: 'Hands',
        attachedTo: null,
      },
      {
        name: random(allProperties, 'teeth').name,
        type: 'teeth',
        title: 'Teeth',
        attachedTo: null,
      },
      {
        name: hairOrCap ? random(allProperties, 'hair').name : null,
        type: 'hair',
        title: 'Hair',
        attachedTo: null,
      },
      {
        name: random(allProperties, 'scar').name,
        type: 'scar',
        title: 'Scar',
        attachedTo: null,
      },
    ],
    items: withoutItems ? [] : items,
    type: 'lemon',
    url: 'https://promo.battlemon.com/assets/default-lemon.png',
  };

  return lemon;
};
