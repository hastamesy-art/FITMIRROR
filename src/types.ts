export interface Model {
  id: string;
  name: string;
  gender: 'female' | 'male';
  avatarUrl: string;
  description: string;
}

export interface Garment {
  id: string;
  name: string;
  category: string;
  brand: string;
  garmentUrl: string;
  resultUrl: string; // The try-on result URL for this specific model/garment combo
  accentColor: string;
  description: string;
}

export interface LookbookItem {
  id: string;
  modelName: string;
  garmentName: string;
  resultUrl: string;
  timestamp: string;
}
