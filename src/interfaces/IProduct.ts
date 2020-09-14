export enum EPlanterStyle {
  Balboa = "Balboa",
  Dolores = "Dolores",
  Grant = "Grant",
}

export interface IImg {
  src: string;
  alt: string;
}

export interface IPlanterStyle {
  name: EPlanterStyle;
  img: IImg;
}

export enum ESize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

export enum EColor {
  Black = "Black",
  Blush = "Blush",
  Cream = "Cream",
  Mint = "Mint",
}

export interface IProductVariant {
  id: string;
  planter_style: IPlanterStyle;
  size: ESize;
  color: EColor;
  photos: Array<IImg>;
  price: number;
}

export interface IPlantCare {
  light: string;
  water: string;
  tip: string;
}

export interface IProduct {
  name: string;
  description: string;
  note: string;
  variants: Array<IProductVariant>;
  care: IPlantCare;
}
