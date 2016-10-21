
export class payment {
  date: Date;
  amount: number;
  type: string;
  constructor(amount: number, type: string){
    this.date = new Date();
    this.amount = amount;
    this. type = type;
  }
}
