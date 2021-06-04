import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute} from '@angular/router';
import { Produit } from 'src/app/components/produit';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { ProduitService } from 'src/app/produit.service';


@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  public produit:any;

  constructor(builder: FormBuilder,private http:HttpClient , private router:Router, private route : ActivatedRoute, private produitService:ProduitService) {
  
  }
  
 
  ngOnInit(): void {
    this.produitsUser();
  }
  produitsUser() {
    let idProduit =this.route.snapshot.params.id;
    console.log(idProduit);
    this.produitService.getOneProduit(idProduit).subscribe(
      res => {
        console.log(res['produit']);
        let produit=res;
        this.produit=produit;
      },
      err => {
        console.log(err);
      }

    )
  }

  

}