'use strict';

var app = app || {}; // eslint-disable-line


(function (module) {
    let bookView = {};

    bookView.initIndexPage = () => {
        $('main section').hide();
<<<<<<< 566cababb23dfd8584e58a9f5b1a2dc8e2c0141c
        $('#books').empty().show();
=======
        $('#books').show();
>>>>>>> removed console logs
        module.Book.all.map(book => $('#books').append(book.toHtml()));
    };
    module.bookView = bookView;
})(app);


