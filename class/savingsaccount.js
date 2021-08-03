class SavingAccount extends  Account{
    constructor (number, deposit, interest)
    {
        super(number);
        super.deposit(deposit);
        this._interest = interest;
    }

    setInterest (interest)
    {
        if(interest<=0)
        {
            throw new RangeError ("interest value should be greater than zero");
        }
        this._interest = interest;
    }
    getInterest (interest)
    {
        return this._interest;
    }
    addInterest(){
        this.deposit(super.getBalance()*(this._interest/100));
    }
    toString ()
    {
        return "Account " + this.getNumber() + ": balance " + this.getBalance()+ "interest amount "+ this._interest; 
    }
    endOfMonth() {
        return ""; // does nothing
    }
}