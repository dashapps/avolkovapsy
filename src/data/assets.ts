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
  hero: {
    desktop: {
      leftImage:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681163/Rectangle_3_klsn6h.png",
      rightImage:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681161/Rectangle_2_onruuc.png"
    },
    tablet: {
      leftImage:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681362/Rectangle_3_qeak2y.png",
      rightImage:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681357/Rectangle_2_wnrxar.png"
    },
    mobile: {
      leftImage:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681392/Rectangle_3_ercxll.png",
      rightImage:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681396/Rectangle_2_wb5ufy.png"
    }
  },
  sections: {
    overload: {
      desktop:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681162/Rectangle_21_gmo3cl.png",
      tablet:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681360/Rectangle_21_rxgirq.png",
      mobile:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681394/Rectangle_21_qcvbwz.png"
    },
    restart: {
      desktop:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681164/Rectangle_4_ujjqa7.png",
      tablet:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681356/Rectangle_4_zluvrm.png",
      mobile:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681394/Rectangle_4_nkq0kr.png"
    },
    problems: {
      desktop:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681163/Rectangle_5_iqwcno.png",
      tablet:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681359/Rectangle_5_entnow.png",
      mobile:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681398/Rectangle_5_tpmob0.png"
    },
    product: {
      desktop:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681162/Rectangle_6_d81rca.png",
      tablet:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681361/Rectangle_6_pfj493.png",
      mobile:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681395/Rectangle_6_iit06b.png"
    },
    psycho: {
      desktop:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681163/Rectangle_8_oisvo6.png",
      tablet:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681358/Rectangle_8_zypjo2.png",
      mobile:
        "https://res.cloudinary.com/dffqytj06/image/upload/f_auto/q_auto/v1781681399/Rectangle_8_runp1s.png"
    }
  },
  cloudinary: {
    desktop: [] as CloudinaryAsset[],
    tablet: [] as CloudinaryAsset[],
    mobile: [] as CloudinaryAsset[],
    seo: [] as CloudinaryAsset[],
    icons: [] as CloudinaryAsset[]
  }
} as const;
