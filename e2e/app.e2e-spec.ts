import { BookshopPage } from './app.po';

describe('bookshop App', () => {
  let page: BookshopPage;

  beforeEach(() => {
    page = new BookshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
