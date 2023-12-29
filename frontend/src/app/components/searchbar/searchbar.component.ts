import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrl: "./searchbar.component.css"
})

export class SearchBarComponent{
  public searchNow(form:NgForm):void{
    if(form.valid){
      console.log(form.value);
    }
  }
}
