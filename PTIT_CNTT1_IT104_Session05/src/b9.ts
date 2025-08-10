class BookV4 {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getYear(): number {
        return this.year;
    }

    setTitle(newTitle: string): void {
        this.title = newTitle;
    }
    setAuthor(newAuthor: string): void {
        this.author = newAuthor;
    }
    setYear(newYear: number): void {
        this.year = newYear;
    }
}

class LibraryV4 {
    private books: BookV4[] = [];

    constructor(books: BookV4[] = []) {
        this.books = books;
    }

    addBook(newBook: BookV4): void {
        this.books.push(newBook);
    }

    displayBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        for (const book of this.books) {
            console.log(`- ${book.getTitle()} | ${book.getAuthor()} | ${book.getYear()}`);
        }
    }

    deleteBookById(id: number): void {
        const initialLength = this.books.length;
        this.books = this.books.filter(b => b.getId() !== id);
        if (this.books.length < initialLength) {
            console.log(`Đã xóa sách có ID ${id}`);
        } else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }

    updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
            console.log(`Đã cập nhật sách có ID ${id}`);
        } else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }
}

const bookV4_1 = new BookV4(1, "Lập trình C cơ bản", "Nguyễn Văn A", 2020);
const bookV4_2 = new BookV4(2, "JavaScript nâng cao", "Trần Thị B", 2021);
const bookV4_3 = new BookV4(3, "Cấu trúc dữ liệu & Giải thuật", "Phạm Văn D", 2019);
const bookV4_4 = new BookV4(4, "Nhà Giả Kim", "Paulo Coelho", 1988);
const bookV4_5 = new BookV4(5, "Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn", 2016);
const myLibraryV4 = new LibraryV4();
myLibraryV4.addBook(bookV4_1);
myLibraryV4.addBook(bookV4_2);
myLibraryV4.addBook(bookV4_3);
myLibraryV4.addBook(bookV4_4);
myLibraryV4.addBook(bookV4_5);


myLibraryV4.updateBookById(3, "Nhà Giả Kim - Bản Mới", "Paulo Coelho (Sửa)", 2024);

myLibraryV4.deleteBookById(2);
myLibraryV4.displayBooks();