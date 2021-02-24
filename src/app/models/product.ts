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
    reviewDate: Date,
    ratingValue: number,
    customer: {
      name: string,
      country: {
        name: string
      }
    }
  }[];

}
