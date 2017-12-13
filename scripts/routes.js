page('/', app.Book.fetchAll, app.bookView.initIndexPage);

page('/books', app.Book.fetchAll, app.bookView.initIndexPage); // suspect
page('/books/:id', app.Book.fetchOne, app.bookView.initDetailView); // suspect
page('/books/:id/update', app.Book.fetchOne, app.bookView.initUpdatePage); // suspect

page('/new', app.bookView.initNewPage);

// page('/about', app.aboutView.initAboutPage);

page('*',(ctx, next) => { console.log('nothing to see here');
});


page.base('/client-side-repo');
page.start();