import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/produit.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {serverResponse} from '../../models/product.models';



@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  // displayedColumns: string[] = ['image', 'prix', 'nom', 'categorie'];
  products: any[] = [];
  public produits: any [] = [];
  produitDelete;
  produitsList:any[]=[];

// 
  // image: string;
  // prix: string;
  // nom: string;
  // categorie: string;
  // 
// 
  constructor(private produitService:ProduitService) { 
    
  }

  ngOnInit(): void {
        // @ts-ignore
    this.produitService.getAllProduits().subscribe((prods: any[] ) => {
      debugger
      this.products =prods as [];
      console.log(prods);
    });
    console.log(this.products);
  }

  deleteRow(event) {
    this.produitDelete = event;
  } 

  delete(){
    let index = this.produitsList.indexOf(this.produitDelete);
    this.produitsList.splice(index,1);
    this.produitService.deleteProduit(this.produitDelete._id).subscribe(
     res => {
       console.log(res);
     },
     err => {
       console.log(err);
     }
  
   )
   document.getElementById("closeModalButton").click();
  }

  // getAllProduits(){
    // this.produitsList=[];

    // this.produitService.getAllProduits().subscribe(
      // result =>{
        // this.produitsList=result;
        // this.produits = result;
        // alert(JSON.stringify(this.produits))
      // },
      // error =>{
        // console.log(error);
      // }
    // )
  // }
  
  filter(value) {
    console.log(value);
    if (value != null || value != '' ) {
      this.produitsList=[];
      this.produitsList = this.produits.filter((ct) => { 
        return ct.nom.toLowerCase().includes(value.toLowerCase())
      })
    } else{
      this.produitsList=[];
      this.produitsList=this.produits;
    }
    
  }
}