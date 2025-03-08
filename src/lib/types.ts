
export type CategoryType = 
  | 'large-family'
  | 'birthday'
  | 'sculpture'
  | 'fruits-vegetables'
  | 'animals'
  | 'food'
  | 'archeology';

export interface CategoryInfo {
  id: CategoryType;
  label: string;
  description: string;
  fields: {
    label: string;
    placeholder: string;
    maxLength: number;
  }[];
}

export interface PromptTemplate {
  id: CategoryType;
  template: string;
}

export interface GalleryItem {
  id: string;
  category: CategoryType;
  image: string;
  title: string;
  description: string;
}

export interface APIKeyStore {
  key: string;
  timestamp: number;
}

export interface GenerateImageParams {
  prompt: string;
  apiKey: string;
  width?: number;
  height?: number;
  quality?: number;
  creativity?: number;
  watermark?: boolean;
  systemVersion?: number;
  mode?: string;
}

export interface GenerateImageResponse {
  success: boolean;
  imageUrl?: string;
  imageId?: string;
  error?: string;
}

export interface ImageData {
  id: string;
  prompt: string;
  status: 'new' | 'in progress' | 'ready' | 'failed';
  progress: number;
  previewImage: string;
  hasWatermark: boolean;
  privacy: 'private' | 'public';
  createdAt: string;
  imageVersions?: {
    original?: string;
    '1920x1920'?: string;
    '640x640'?: string;
    [key: string]: string | undefined;
  };
}
