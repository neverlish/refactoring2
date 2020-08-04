
interface IDate {
  isBefore: (date: Date) => boolean;
  isAfter: (date: Date) => boolean;
}

class Plan {
  summerStart: Date;
  summerEnd: Date;

  summerRate: number;
  regularRate: number;

  regularServiceCharge: number;

  aDate: IDate;

  constructor(args: Plan) {
    this.summerStart = args.summerStart;
    this.summerEnd = args.summerEnd;
    this.summerRate = args.summerRate;
    this.regularRate = args.regularRate;
    this.regularServiceCharge = args.regularServiceCharge;
    this.aDate = args.aDate;
  }

  private isSummer(): boolean {
    return !this.aDate.isBefore(this.summerStart) && !this.aDate.isAfter(this.summerEnd)
  }

  getCharge(quantity): number {
    if (this.isSummer()) {
      return quantity * this.summerRate;
    } else {
      return quantity * this.regularRate + this.regularServiceCharge;
    }
  }
}

const plan = new Plan({});

plan.getCharge(3);