page('/', app.Book.fetchAll, app.bookView.initIndexPage);

page('/books', app.Book.fetchAll, app.cardView.initIndexPage);
page('/books/:id', app.Book.fetchOne, app.bookView.initDetailPage);
page('/books/:id/update', app.Book.fetchOne, app.bookview.initUpdatePage);

page('/new', app.bookView.initNewPage);

page('/about', app.bookView.initAboutPage);

page('*', (ctx, next) => { console.log('nothing to see here');

});
page.base('/client-side-repo');
page.start();