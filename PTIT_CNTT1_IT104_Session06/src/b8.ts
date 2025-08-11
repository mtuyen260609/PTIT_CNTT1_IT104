class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public stock: number,
        public status: string
    ) {}
}

class Member {
    public lendedBooks: LendedBook[] = [];
    constructor(
        public id: number,
        public name: string,
        public contact: string,
        public status: string
    ) {}
}

class LendedBook {
    constructor(
        public memberId: number,
        public bookId: number,
        public dueDate: Date
    ) {}
}

class Library {
    public books: Book[] = [];
    public members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(b => {
            console.log(`ID: ${b.id}, Tiêu đề: ${b.title}, Tác giả: ${b.author}, Số lượng: ${b.stock}, Trạng thái: ${b.status}`);
        });
    }
}

const library = new Library();

const book1 = new Book(1, "Lập trình JavaScript", "Nguyễn Văn A", 5, "Có sẵn");
const book2 = new Book(2, "Học TypeScript", "Trần Thị B", 2, "Có sẵn");
const book3 = new Book(3, "Node.js từ cơ bản đến nâng cao", "Lê Văn C", 3, "Có sẵn");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.showBooks();