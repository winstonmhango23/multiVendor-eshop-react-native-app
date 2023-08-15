interface Product {
    id: string;
    name: string;
    price: number;
    image: any;
    rating: number;
  }
  

export type RootStackParamList = {
    ProductList: undefined;
    ProductDetails: { product: Product };
  };

  
  