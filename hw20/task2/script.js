const Library = /** @class */ (function () {
    function Library() {
    }
    Library.prototype.addBook = function () {
        Library.totalBooks++;
    };
    Library.totalBooks = 0;
    return Library;
}());
/* Пример использования1:
const library1 = new Library();
const library2 = new Library();
const library3 = new Library();
const library4 = new Library();
library1.addBook();
library2.addBook();
library3.addBook();
library4.addBook()
console.log(Library.totalBooks); // 4*/

// Пример использования2:
const library1 = new Library();
const library2 = new Library();

library1.addBook();
library1.addBook();
library2.addBook();
console.log(Library.totalBooks); // 3