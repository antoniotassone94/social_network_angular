import {Component,Input} from "@angular/core";

@Component({
  selector: "app-livecard",
  templateUrl: "./livecard.component.html",
  styleUrl: "./livecard.component.css"
})

export class LiveCardComponent{
  @Input() title:string = "";
  @Input() partecipants:number = 0;
  @Input() dateTime:Date = new Date();
  private _numberClick:number;

  constructor(){
    this._numberClick = 0;
  }

  public get numberClick():number{
    return this._numberClick;
  }

  public handleClick():void{
    this._numberClick++;
  }
}
