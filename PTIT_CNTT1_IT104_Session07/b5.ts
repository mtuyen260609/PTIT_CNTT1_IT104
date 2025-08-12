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
            console.log("Đăng nhập thành công");
        } else {
            console.log("Sai mật khẩu");
        }
    }

    public logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}

class UserAcc extends Account {
    public status: "active" | "banned";

    constructor(id: number, userName: string, password: string, role: string, status: "active" | "banned") {
        super(id, userName, password, role);
        this.status = status;
    }

    public login(password: string): void {
        if (this.status === "active") {
            super.login(password);
        } else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}

// Ví dụ sử dụng
const acc1 = new UserAcc(1, "tuyen", "123456", "user", "active");
acc1.login("123456");
acc1.logout();

const acc2 = new UserAcc(2, "hung", "654321", "user", "banned");
acc2.login("654321")
