'use strict';

var app = app || {}; // eslint-disable-line


(function (module) {
    const bookView = {};

    bookView.initIndexPage = () => {
        $('main section').hide();
        $('#books').show();
        console.log( app.Book.all);
        module.Book.all.map(book => $('#books').append(book.toHtml()));
    };
    module.bookView = bookView;
})(app);


