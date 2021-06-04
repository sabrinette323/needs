import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroups , Formcontrol , FormBuilder , Validators 

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProduitService} from 'src/app/produit.service';
import { Produit } from 'src/app/components/produit';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  public produitsAddForm: FormGroup;
  filePath:string;
  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  constructor(builder: FormBuilder, private produitService: ProduitService, private router:Router) {

    let produitsAddControls = {
      image: new FormControl(""),
      nom: new FormControl("", [Validators.required]),
      prix:new FormControl("",[Validators.required]),
      categorie: new FormControl(""),
      reference: new FormControl(""),
      code: new FormControl(""),
      description: new FormControl("")


    }

    this.produitsAddForm = builder.group(produitsAddControls)

  }
  get image() { return this.produitsAddForm.get('image') }
  get nom() { return this.produitsAddForm.get('nom') }
  get prix() { return this.produitsAddForm.get('prix') }
  get categorie() { return this.produitsAddForm.get('categorie') }
  get reference() { return this.produitsAddForm.get('reference') }
  get code() { return this.produitsAddForm.get('code') }
  get description() { return this.produitsAddForm.get('description') }


  
  ngOnInit(): void {
  }
  changeType(e){
    console.log(e.target.value);
  }

  onFileChanged(event:Event){
    console.log(event);
    const file=(event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

 
  produitUser() {
    console.log('test');
    let data = this.produitsAddForm.value;
  let produit = new Produit( this.filePath, data.nom, data.prix, data.categorie,data.reference, data.code,data.description,data._id)
  //alert(JSON.stringify(data))
  console.log(produit);
   this.produitService.addProduit(produit).subscribe(
    res => {
      
      this.router.navigate(['/listeproduits']);
    }   ,
     error =>{
      alert(JSON.stringify(error));
    }
  ) 
 
  }


}

