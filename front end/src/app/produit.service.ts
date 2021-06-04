import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Produit } from './components/produit';
import { CommonModule } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  


private addProduitUrl="http://localhost:3000/produit/add";
private getOneProduitUrl="http://localhost:3000/produit/one/"
private updateProduitUrl="http://localhost:3000/produit/update_info/"
private deleteProduitUrl="http://localhost:3000/produit/remove/"
constructor(private http:HttpClient) { }


// getAllProduits(){
  // let data= this.http.get<any>("http://localhost:3000/produit/all");
  // return data;
// }


getAllProduits(NumberOfResult=9) {
  return this.http.get('http://localhost:3000/produit/all', {
  params:{
    limit: NumberOfResult.toString()
  }
  });
}

    
  

getOneProduit(id:String){
 return this.http.get<any>(this.getOneProduitUrl+id);
}


addProduit(produit:Produit){
  return this.http.post<any>(this.addProduitUrl,produit);
}

updateProduit(produit:Produit, id:string){
  return this.http.put<any>(this.updateProduitUrl+id,produit);
}

deleteProduit(id:String){
  return this.http.delete<any>(this.deleteProduitUrl+id)
}

}