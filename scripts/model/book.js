'use strict';
var app = app || {}; // eslint-disable-line

// const API_URL = 'https://pure-cove-37929.herokuapp.com';
const API_URL = 'http://localhost:3000';

(function(module) {
    function Book (obj) {
        this.id = obj.book_id;
        this.author = obj.author;
        this.title = obj.title;
        this.isbn = obj.isbn;
        this.img_url = obj.image_url;
        this.description = obj.description;
    }

    Book.all = [];

    Book.create = book => {
        $.post(`${API_URL}/api/v1/books`, book)
            .then(console.log)
            .catch(console.error);
    };

    Book.fetchOne = (ctx, cb) => {
        $.get(`${API_URL}/api/v1/books/${ctx.params.id}`)
            .then(data => {
                ctx.book = new Book(data[0]);
                cb();
            })
            .fail(console.error);
    };

    Book.fetchAll = (ctx, cb) => {

        $.get(`${API_URL}/api/v1/books/`)
            .then(data => {
                Book.loadAll(data);
                ctx.books = Book.all;
            })

            // .then(Book.loadAll) // OLD
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

    module.Book = Book;
})(app);
