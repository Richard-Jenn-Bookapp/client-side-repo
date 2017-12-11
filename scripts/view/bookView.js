'use strict';

var app = app || {}; // eslint-disable-line


(function (module) {
    let bookView = {};

    bookView.initIndexPage = () => {
        $('main section').hide();


        $('#books').empty().show();

        $('#books').show();

        module.Book.all.map(book => $('#books').append(book.toHtml()));
    };
    module.bookView = bookView;
})(app);


