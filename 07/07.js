// 07 캡슐화 - 07 위임 숨기기

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() { return this._name; }
  get department() { return this._department; }
  set department(arg) { this._department = arg; }
}

class Department {
  get chargeCode() { return this._chargeCode; }
  set chargeCode(arg) { this._chargeCode = arg; }
  get manager() { return this._manager; }
  set manager(arg) { this._manager = arg; }
}

const aPerson = new Person('jinho');
const manager = aPerson.department.manager;