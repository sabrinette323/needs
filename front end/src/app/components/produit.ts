export class Produit {
    constructor(
        public image:string,
        public nom: string,
        public prix : string,
        public categorie: string,
        public reference: string,
        public code: string,
        public description: string,
        public _id: string
        ) { }
}
