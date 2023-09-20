export type UnsplashPhoto = {
    id: number;
    width: number;
    height: number;
    urls: { large: string; regular: string; raw: string; small: string };
    color: string | null;
    user: {
      username: string;
      name: string;
    };
  };

  export type PexelsPhoto = { 
    id: number;
     width: number; 
     height: number; 
     color: string;
     url: string; 
     src: { large: string; }; 
     alt: string; 
     blurredDataUrl?: string | undefined 
    }
