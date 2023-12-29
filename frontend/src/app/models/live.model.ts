export class LiveModel{
  private _title: string;
  private _partecipants: number;
  private _dateTime: Date;

  constructor(){
    this._title = "";
    this._partecipants = 0;
    this._dateTime = new Date();
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get partecipants(): number {
    return this._partecipants;
  }

  public set partecipants(value: number) {
    this._partecipants = value;
  }

  public get dateTime(): Date {
    return this._dateTime;
  }

  public set dateTime(value: Date) {
    this._dateTime = value;
  }
}
