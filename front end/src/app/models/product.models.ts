export interface ProductModelServer {
  image : string ;
  prix : string ;
  nom : string ;
  categorie : string;
  // action : string;
}


export interface serverResponse  {
  count: number;
  products: ProductModelServer[]
};

