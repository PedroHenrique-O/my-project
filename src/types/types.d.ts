interface IProduct {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  minimumOrderQuantity: number;
  availabilityStatus: string;
  rating: number;
  reviews: IReview[];
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;
  weight: number;
  dimensions: IDimensions;
  sku: string;
  images: string[];
  thumbnail: string;
  meta: IMeta;
  tags: string[];
}

interface IReview {
  id: number;
  reviewer: string;
  comment: string;
  rating: number;
}

interface IDimensions {
  width: number;
  height: number;
  depth: number;
}

interface IMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
