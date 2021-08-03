class Bank {

    constructor(){
        this._accounts =[];
    }
  
    static nextNumber = 1;

    addAccount(){
        
        let counter = Bank.nextNumber;
        let acc = new Account(counter);
        this._accounts.push(acc)
        Bank.nextNumber+=1;
        return Bank.nextNumber;
    }

    addSavingsAccount(deposit,interest)
    {
        
        let counter =Bank.nextNumber;
        let acc = new SavingAccount(counter,deposit,interest);
        this._accounts.push(acc);
        Bank.nextNumber+=1;
        return Bank.nextNumber;
    }
    addCheckingAccount(deposit,overdraft){
        let acc = new CheckingAccount(Bank.nextNumber,deposit,overdraft);
        this._accounts.push(acc);
        Bank.nextNumber+=1;
        return Bank.nextNumber;
    }

    closeAccount(number)
    {
        console.log(this._accounts.splice(
            this._accounts.indexOf(number),1));
        return this._accounts.length;
    }

    accountReport()
    {
        return this._accounts.forEach(a=>console.log(a.toString()));
    }
    endOfMonth() {
        this._accounts.forEach((account) =>{
            console.log(account.endOfMonth());
        }); 
    }
}