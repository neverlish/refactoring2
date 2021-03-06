// 조건부 로직 간소화 - 1 조건문 분해하기

interface IDate {
  isBefore: (date: Date) => boolean;
  isAfter: (date: Date) => boolean;
}

interface IPlan {
  summerStart: Date;
  summerEnd: Date;

  summerRate: number;
  regularRate: number;

  regularServiceCharge: number;
}

function getCharge(aDate: IDate, plan: IPlan, quantity: number): number {
  const charge = summer() ? summerCharge() : regularCharge();

  return charge;

  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
