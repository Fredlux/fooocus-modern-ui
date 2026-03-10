// Configuration for Fooocus Modern UI
export interface AppConfig {
  fooocusApiUrl: string;
  fooocusApiKey?: string;
  defaultModel: string;
  defaultStyle: string;
  theme: 'dark' | 'light';
}

export const defaultConfig: AppConfig = {
  fooocusApiUrl: 'http://localhost:8888',
  fooocusApiKey: '',
  defaultModel: 'juggernautXL_v8Rundiffusion.safetensors',
  defaultStyle: 'Fooocus V2',
  theme: 'dark',
};

export const stylePresets = {
  default: {
    name: 'Fooocus V2',
    description: 'General purpose style for high-quality images',
  },
  realistic: {
    name: 'Realistic',
    description: 'Photorealistic output with realisticStockPhoto model',
  },
  anime: {
    name: 'Anime',
    description: 'Anime-style images with animaPencilXL model',
  },
};

export const aspectRatios = {
  '1:1': { width: 512, height: 512, name: 'Square (512x512)' },
  '16:9': { width: 768, height: 432, name: 'Landscape (768x432)' },
  '9:16': { width: 432, height: 768, name: 'Portrait (432x768)' },
  '4:3': { width: 640, height: 480, name: 'Standard (640x480)' },
};

export const defaultSteps = 30;
export const defaultCfgScale = 5;
