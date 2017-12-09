'use strict';
var app = app || {};

(function(module) {
    function Book (obj) {
        this.id = obj.id;
        this.author = obj.author;
        this.title = obj.title;
        this.isbn = obj.isbn;
        this.img_url = obj.image_url;
        this.description = obj.description;
    }

    Book.all = [];

    Book.fetchAll = (cb) => {
        $.get('https://pure-cove-37929.herokuapp.com/api/v1/books')
            .then(Book.loadAll)
            .then(cb)
            .fail(console.error);


    };

    Book.loadAll = (data) => {
        Book.all = data.map(obj => new Book(obj));
    };

    Book.prototype.toHtml = function () {
        let fillTemplate = Handlebars.compile($('#book-template').text());
        return fillTemplate(this);

    };

    Book.loadAll = (data) => {
        Book.all = data.map(obj => new Book(obj));
    };

    Book.prototype.toHtml = function () {
        let fillTemplate = Handlebars.compile($('#book-template').text());
        return fillTemplate(this);
    };


    module.Book = Book;
})(app);
