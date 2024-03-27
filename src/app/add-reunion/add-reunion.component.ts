import { Component } from '@angular/core';
import { Reunion} from '../model/reunion.model';
import { ReunionService } from '../services/reunion.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-reunion',
  templateUrl: './add-reunion.component.html',
  styleUrl: './add-reunion.component.css'
})
export class AddReunionComponent implements OnInit{
    newReunion = new Reunion();
constructor(private reunionService: ReunionService, private router : Router) { }

ngOnInit(): void {

}

addReunion(){
  //console.log(this.newFormation);
 this.reunionService.addReunion(this.newReunion).subscribe(prod => {
  console.log(prod);
  this.router.navigate(['reunions']);
  });


}
}
