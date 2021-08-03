describe ("account and Saving methods test", function (){
    describe ("Account,Saving, Checking accounts", function(){
        let expected = 3000;
        let a = new Account(123);
        let number =123;
        a.deposit(3000);
        it(`it expected ${number} account number`,function(){
            assert.equal(a.getNumber(),number);
        });
        it(`it expected ${expected} balance`, function (){
            assert.equal(a.getBalance(), expected);
        });
        let interest =7;
        let ini = new SavingAccount(number,3000,7);
        it(`it expected ${interest} interest amount of saving account`, function(){
            assert.equal(ini.getInterest(),interest);
        });
        ini.addInterest();
        let balanceExpected = 3000+3000*.07;
        it(`it expected ${balanceExpected} balance after adding interest`,function (){
            assert.equal(ini.getBalance(),balanceExpected);
    });

    let overDraft= -200;
    let checking = new CheckingAccount(1234,3000,overDraft);
    it(`it expected ${overDraft} overdraft amount of checking account`, function(){
        assert.equal(checking.getOverDraft(),overDraft);
    });
    let amount = 3100;
    let  checkingBalance = -100;
    it(`it expected ${checkingBalance} balance after withdrawal of checking account`, function(){
        assert.equal(checking.withdraw(amount),checkingBalance);
    });
    
    let accnum =2;
    let b = new Bank();
    it(`it expected 1 adding new account to bank`, function(){
        assert.equal(b.addAccount(),2);
    });
    accnum =3;
    it(`it expected 2 adding new saving account to bank`, function(){
        assert.equal(b.addSavingsAccount(3000,7),3);
    });

    accnum =4

    it(`it expected ${accnum} adding new checking account to bank`, function(){
        assert.equal(b.addCheckingAccount(3000,-200),accnum);
    });

    let closenum =2;
    it(`it expected ${closenum} closing existing account from the bank`, function(){
        assert.equal(b.closeAccount(closenum) ,closenum);
    });

    it(`it expected account report of the bank`, function(){
        assert.equal(b.accountReport());
    });

    it(`end of month for each account`, function(){
        assert.equal(b.endOfMonth());
    });

});

    
});