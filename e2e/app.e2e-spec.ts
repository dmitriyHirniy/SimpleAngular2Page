import { GroceriePage } from './app.po';

describe('grocerie App', function() {
  let page: GroceriePage;

  beforeEach(() => {
    page = new GroceriePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
