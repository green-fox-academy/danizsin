class Thing {
  private _name: string;
  private _completed: boolean;

  constructor(_name: string){
      this._name = _name;
  }

  public complete() {
      this._completed = true;
  }

  get name(){
      return this._name;
  }
  get completed(){
      return this._completed;
  }
}

export { Thing };