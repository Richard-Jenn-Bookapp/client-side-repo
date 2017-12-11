'use strict';

var app = app || {}; // eslint-disable-line


(function (module) {
    let bookView = {};

    bookView.initIndexPage = () => {
        $('main section').hide();
   gh-pages
        $('#books').show();

        $('#books').empty().show();
    master
        module.Book.all.map(book => $('#books').append(book.toHtml()));
    };
    module.bookView = bookView;
})(app);


