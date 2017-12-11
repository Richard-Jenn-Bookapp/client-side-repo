'use strict';

var app = app || {}; // eslint-disable-line


(function (module) {
    let bookView = {}; // eslint-disable-line

    bookView.initIndexPage = (ctx) => {
        $('main section').hide();
        $('#books').empty().show();
        $('#books').show();
        ctx.books.map(book => $('#books').append(book.toHtml()));
    };

    bookView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#books').empty().show();
        $('#books').append(ctx.book.toHtml());
    };

    bookView.initNewPage = (ctx) => {
        $('main section').hide();
        $('#new-book').parent().show();

        $('#new-book').one('submit', function(){
            event.preventDefault();
            const newBook = {
                id: this.id.value,
                author: this.author.value,
                title: this.title.value,
                isbn: this.isbn.value,
                img_url: this.image_url.value, // re-visit?
                description: this.description.value

            };

            app.Book.create(newBook);
        });


        module.Book.all.map(book => $('#books').append(book.toHtml()));
    };
    module.bookView = bookView;
})(app);