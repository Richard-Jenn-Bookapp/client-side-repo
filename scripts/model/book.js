'use strict';
var app = app || {};

const API_URL = 'https://pure-cove-37929.herokuapp.com';
// const API_URL = 'http://localhost3000';

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

    Book.fetchOne = (cb) => {
        $.get(`${API_URL}/api/v1/books/3`)
            .then(console.log)
            .fail(console.error);
    };

    Book.fetchAll = (cb) => {

        $.get(`${API_URL}/api/v1/books`)
            .done(console.log) // how is this console logging the dataObj? Cause of the chain? Weird

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
