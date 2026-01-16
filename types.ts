
export enum Tab {
  PROFILE = 'PROFILE',
  GEAR = 'GEAR',
  ITEMS = 'ITEMS'
}

export interface Stat {
  label: string;
  value: number;
  max: number;
  unit: 'HP' | 'MP' | 'XP';
}

export interface Quest {
  id: string;
  title: string;
  date: string;
  status: 'COMPLETED' | 'ARCHIVED' | 'ACTIVE';
  description: string;
  order: number;
}

export interface InventoryItem {
  id: string;
  label: string;
  icon: string;
  empty?: boolean;
}

export interface Repository {
  id: string;
  title: string;
  description: string;
  url: string;
}
