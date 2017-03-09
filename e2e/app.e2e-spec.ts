import { SimplewebsitePage } from './app.po';

describe('simplewebsite App', () => {
  let page: SimplewebsitePage;

  beforeEach(() => {
    page = new SimplewebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
