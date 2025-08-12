class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: "active" | "closed";
    constructor(accountNumber: string, initialBalance: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            console.log(" Số tiền nạp phải lớn hơn 0");
            return;
        }
        this.balance += amount;
        this.history.push(`+${amount} (Nạp tiền)`);
        console.log(` Nạp ${amount} thành công. Số dư: ${this.balance}`);
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.log(" Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amount > this.balance) {
            console.log(" Số dư không đủ");
            return;
        }
        this.balance -= amount;
        this.history.push(`-${amount} (Rút tiền)`);
        console.log(` Rút ${amount} thành công. Số dư: ${this.balance}`);
    }

    public showHistory(): void {
        console.log(` Lịch sử giao dịch tài khoản ${this.accountNumber}:`);
        this.history.forEach((record, index) => {
            console.log(`${index + 1}. ${record}`);
        });
    }
}

class SavingAccount extends Account {
    public interestRate: number;
    constructor(accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.log(" Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amount > this.balance) {
            console.log(" Không thể rút quá số dư hiện tại");
            return;
        }
        this.balance -= amount;
        this.history.push(`-${amount} (Rút tiền)`);
        console.log(` Rút ${amount} thành công. Số dư: ${this.balance}`);
    }
}

const savingAcc = new SavingAccount("TK001", 5000, 0.05);
savingAcc.deposit(2000);
savingAcc.withdraw(3000);
savingAcc.withdraw(4000);
savingAcc.withdraw(1000);
savingAcc.showHistory();