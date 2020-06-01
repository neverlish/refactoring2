// 07 캡슐화 - 06 클래스 인라인하기

class TrackingInformation {
  get shippingCompany() { return this._shippingCompany; } // 배송 회사
  set shippingCompany(arg) { this._shippingCompany = arg; }
  get trackingNumber() { return this._trackingNumber; }
  set trackingNumber(arg) { this._trackingNumber = arg; }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  get trackingInfo() {
    return this._trackingInformation.display;
  }

  get trackingInformation() { return this._trackingInformation; }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
}

const trackingInformation = new TrackingInformation();
const aShipment = new Shipment();
aShipment.trackingInformation = trackingInformation;

aShipment.trackingInformation.shippingCompany = 'VENDOR';