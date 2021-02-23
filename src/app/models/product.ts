export class Product{
  productId: string;
  title: string;
  store : {
    name : string
  };
  createdDate: Date;
  reviews: {
    description: string,
    title: string,
    ratingValue: string,
    customer: {
      name: string,
      country: {
        name: string
      }
    }
  }[];

}
