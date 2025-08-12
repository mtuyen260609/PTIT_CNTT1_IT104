class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }

    public login(password: string): void {
        if (password === this.password) {
            this.isLogin = true;
            console.log(` ${this.userName} đăng nhập thành công`);
        } else {
            console.log(` Sai mật khẩu`);
        }
    }

    public logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log(` ${this.userName} đã đăng xuất`);
        }
    }
}

class userAcc extends Account {
    public status: "active" | "banned";

    constructor(id: number, userName: string, password: string, role: string, status: "active" | "banned") {
        super(id, userName, password, role);
        this.status = status;
    }

    public login(password: string): void {
        if (this.status === "active") {
            super.login(password);
        } else {
            console.log(` Tài khoản ${this.userName} đã bị khóa`);
        }
    }
}

class adminAcc extends Account {
    public banUser(user: userAcc): void {
        user.status = "banned";
        console.log(` Admin ${this.userName} đã khóa tài khoản của ${user.userName}`);
    }
}

const user1 = new userAcc(1, "tuyen", "123456", "user", "active");
const admin1 = new adminAcc(100, "admin", "adminpass", "admin");
user1.login("123456");
admin1.banUser(user1);
user1.login("123456");