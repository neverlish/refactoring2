const thermostat = {
  selectedTemperature: 0,
  currentTemperature: 0,
}

class HeatingPlan {
  _max: number;
  _min: number

  get targetTemperature() {
    return this.xxNEWtargetTemperature(thermostat.selectedTemperature);
  }

  xxNEWtargetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min
    else return selectedTemperature;
  }
}

const thePlan = new HeatingPlan()

if (thePlan.xxNEWtargetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat();
else if (thePlan.xxNEWtargetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool();
else setOff();

function setToHeat() { }
function setToCool() { }
function setOff() { }