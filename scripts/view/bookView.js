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


        module.Book.all.map(book => $('#books').append(book.toHtml())); // need this anymore?
    };

    bookView.initUpdatePage = (ctx, cb) => {
        console.log('ctx', ctx.book);
        const book = ctx.book;
        $('main section').hide();
        $('#update-book').parent().show();

        $('#update-book input[name="id"]').val(book.id);
        $('#update-book input[name="author"]').val(book.author);
        $('#update-book input[name="title"]').val(book.title);
        $('#update-book input[name="isbn"]').val(book.isbn);
        $('#update-book input[name="img_url"]').val(book.img_url);
        $('#update-book input[name="description"]').val(book.description);

        $('#update-book').on('submit', function () {
            event.preventDefault();
            const updatedData = {
                id: $('#update-book input[name="id"]').val(),
                author: $('#update-book input[name="author"]').val(),
                title: $('#update-book input[name="title"]').val(),
                isbn: $('#update-book input[name="isbn"]').val(),
                img_url: $('#update-book input[name="img_url"]').val(),
                description: $('#update-book input[name="description"]').val()
            };

            app.Book.update(book.id, updatedData);
        });
    };

    module.bookView = bookView;
})(app);