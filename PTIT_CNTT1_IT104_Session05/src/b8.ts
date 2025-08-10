class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId(): number {
        return this.id;
    }
    setTitle(newTitle: string): void {
        this.title = newTitle;
    }
    setAuthor(newAuthor: string): void {
        this.author = newAuthor;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
}

class Library {
    private books: Book[] = [];
    constructor(books: Book[] = []) {
        this.books = books;
    }
    addBook(newBook: Book): void {
        this.books.push(newBook);
    }
    updateBookById(id: number, newTitle: string, newAuthor: string): boolean {
        for (const book of this.books) {
            if (book.getId() === id) {
                book.setTitle(newTitle);
                book.setAuthor(newAuthor);
                return true;
            }
        }
        return false;
    }
    searchBooksByTitle(keyword: string): void {
        const foundBooks = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );

        if (foundBooks.length > 0) {
            console.log(`Kết quả tìm kiếm cho từ khóa "${keyword}":`);
            for (const book of foundBooks) {
                console.log(`- ${book.getTitle()} (Tác giả: ${book.getAuthor()})`);
            }
        } else {
            console.log(`Không tìm thấy sách nào chứa từ khóa "${keyword}".`);
        }
    }
    displayBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        for (const book of this.books) {
            console.log(`- ${book.getTitle()} (Tác giả: ${book.getAuthor()})`);
        }
    }
}

const book1 = new Book(1, "Lập trình C cơ bản", "Nguyễn Văn A");
const book2 = new Book(2, "JavaScript nâng cao", "Trần Thị B");
const book3 = new Book(3, "Cấu trúc dữ liệu & Giải thuật", "Phạm Văn D");
const book4 = new Book(4, "Nhà Giả Kim", "Paulo Coelho");
const book5 = new Book(5, "Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn");

const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);

myLibrary.searchBooksByTitle("Java");
myLibrary.searchBooksByTitle("giả kim");
myLibrary.searchBooksByTitle("Python");
