import Denomination from "./denomination";

class ChangeAmount {
    constructor (denomination: Denomination, value: Number) {
        this.denomination = denomination;
        this.value = value;
    }
    denomination: Denomination;
    value: Number;

    print() {
        return `${this.value} x ${this.denomination.displayName}`;
    }

}

export default ChangeAmount;