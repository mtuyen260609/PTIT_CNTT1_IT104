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

class CheckingAccount extends Account {
    public overdraftLimit: number;

    constructor(accountNumber: string, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.log(" Số tiền rút phải lớn hơn 0");
            return;
        }

        if (amount > this.balance + this.overdraftLimit) {
            console.log(" Vượt quá hạn mức thấu chi cho phép");
            return;
        }

        this.balance -= amount;
        this.history.push(`-${amount} (Rút tiền - Checking)`);
        console.log(` Rút ${amount} thành công. Số dư: ${this.balance}`);
    }
}

const checkingAcc = new CheckingAccount("CK001", 2000, 1000);
checkingAcc.deposit(1500);
checkingAcc.withdraw(3000);
checkingAcc.withdraw(2000);
checkingAcc.showHistory();
