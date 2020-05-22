class Currency {
    constructor(name, rateToGBP, symbol) {
        this.name = name;
        this.rateToGBP = rateToGBP;
        this.symbol = symbol;
    }
    toGBP = amount => amount * this.rateToGBP;
}

export default Currency;