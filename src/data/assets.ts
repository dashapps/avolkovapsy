export type CloudinaryAsset = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  asset_folder: string;
  display_name: string;
};

export const assets = {
  "hero": {
    "desktop": {
      "leftImage": "",
      "rightImage": ""
    },
    "tablet": {
      "leftImage": "",
      "rightImage": ""
    },
    "mobile": {
      "leftImage": "",
      "rightImage": ""
    }
  },
  "cloudinary": {
    "desktop": [],
    "tablet": [],
    "mobile": [],
    "seo": [],
    "icons": []
  }
} as {
  readonly hero: {
    readonly desktop: { readonly leftImage: string; readonly rightImage: string };
    readonly tablet: { readonly leftImage: string; readonly rightImage: string };
    readonly mobile: { readonly leftImage: string; readonly rightImage: string };
  };
  readonly cloudinary: {
    readonly desktop: readonly CloudinaryAsset[];
    readonly tablet: readonly CloudinaryAsset[];
    readonly mobile: readonly CloudinaryAsset[];
    readonly seo: readonly CloudinaryAsset[];
    readonly icons: readonly CloudinaryAsset[];
  };
};

export const cloudinaryAssetSync = {
  "generatedAt": "2026-06-17T10:18:45.451Z",
  "folders": {
    "desktop": "Avolkovapsy/Desktop",
    "tablet": "Avolkovapsy/Tablet",
    "mobile": "Avolkovapsy/Mobile",
    "seo": "Avolkovapsy/SEO",
    "icons": "Avolkovapsy/Icons"
  },
  "env": {
    "CLOUDINARY_CLOUD_NAME": false,
    "CLOUDINARY_API_KEY": false,
    "CLOUDINARY_API_SECRET": false
  },
  "counts": {
    "desktop": 0,
    "tablet": 0,
    "mobile": 0,
    "seo": 0,
    "icons": 0
  },
  "heroMappedAutomatically": false,
  "unmappedCandidates": {
    "desktop": [],
    "tablet": [],
    "mobile": []
  }
} as const;
