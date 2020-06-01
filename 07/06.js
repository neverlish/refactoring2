// 07 캡슐화 - 06 클래스 인라인하기

class Shipment {
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }

  get shippingCompany() { return this._shippingCompany; }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get trackingNumber() { return this._trackingNumber; }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
}

const aShipment = new Shipment();
aShipment.trackingInformation = {};

aShipment.shippingCompany = 'VENDOR';