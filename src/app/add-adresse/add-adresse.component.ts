import { Component ,OnInit } from '@angular/core';
import { Adresse } from '../model/adresse.model';
import { AdresseService } from '../services/adresse.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-adresse',
  templateUrl: './add-adresse.component.html',
  styleUrl: './add-adresse.component.css'
}) 
export class AddAdresseComponent implements OnInit{
    newAdresse = new Adresse();
constructor(private adresseService: AdresseService, private router : Router) { }

ngOnInit(): void {

}

addAdresse(){
  //console.log(this.newFormation);
 this.adresseService.addAdresse(this.newAdresse).subscribe(prod => {
  console.log(prod);
  this.router.navigate(['adresses']);
  });


}
}
