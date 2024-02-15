// Define your Book class here:
class Book {
    constructor(title,author,copyrightDate,isbn,pages,checkedOut,discarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pages = pages;
        this.checkedOut = checkedOut;
        this.discarded = discarded
    }
    checkout(uses) {
        this.checkedOut += uses;
    }

}

// Define your Manual and Novel classes here:
class Novel extends Book {
    constructor(title,author,copyrightDate,isbn,pages,checkedOut,discarded){
        super(title,author,copyrightDate,isbn,pages,checkedOut,discarded);
    }
    discard(){
        if (this.checkedOut > 100) {
            this.discard = 'Yes';
        }
    }
}

class Manual extends Book {
    constructor(title,author,copyrightDate,isbn,pages,checkedOut,discard) {
        super(title,author,copyrightDate,isbn,pages,checkedOut,discard);
    }
    discard(year) {
        if (year-this.copyrightDate > 5) {
            this.discarded = 'Yes';
        }
    }
}



let pnp = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No')

let tssbm = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 99999999, 1147, 1, 'No')


tssbm.discard(2023)

pnp.checkout(5)