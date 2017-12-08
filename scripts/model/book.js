'use strict';
var app = app || {};

(function(module) {
    function Book (obj) {
        this.id = obj.id;
        this.author = obj.author;
        this.title = obj.title;
        this.isbn = obj.isbn;
        this.imageUrl = obj.imageUrl;
        this.description = obj.description;
    }

    Book.all = [];

    Book.fetchAll = () => {
        $.get('https://pure-cove-37929.herokuapp.com/api/v1/books')
            .done(console.log);
    };

    module.Book = Book;
})(app);

app.Book.fetchAll();