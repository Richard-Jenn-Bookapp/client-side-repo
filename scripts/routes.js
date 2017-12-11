page('/', (ctx, next) =>{
    app.Book.fetchAll(app.bookView.initIndexPage);
});

page('/book:id', app.Book.fetchOne);

page('/about', app.bookView.initIndexPage);

page('*',(ctx, next) => { console.log('nothing to see here'); });


page.start();