class CheckingAccount extends Account{
    constructor(number,deposit,overDraft)
    {
        super(number);
        super.deposit(deposit);
        this._overDraft = overDraft;
    }

    getOverDraft()
    {
        return this._overDraft;
    }
    setOverDraft(draft)
    {
        this._overDraft = draft;
    }
    withdraw(amount)
    {
        if(amount<this.overDraft)
        {
            throw new RangeError("amount should less than "+this._overDraft);
        }

        return super.getBalance()-amount;
    }
    toString ()
    {
        return "Account " + this.getNumber() + ": balance " + this.getBalance()+ "overdraft amount "+ this._overDraft; 
    }
    
    endOfMonth() {
        return ""; // does nothing
    }
}