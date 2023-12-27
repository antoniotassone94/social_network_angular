import {Component} from "@angular/core";
import {LiveModel} from "../../models/live.model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css"
})

export class MainComponent{
  private _listLiveCard:LiveModel[];

  constructor(){
    this._listLiveCard = [];
    this._listLiveCard.push(new LiveModel());
    this._listLiveCard.push(new LiveModel());
    this._listLiveCard.push(new LiveModel());
    this._listLiveCard.push(new LiveModel());
  }

  public get listLiveCard():LiveModel[]{
    return this._listLiveCard;
  }
}
