import { HerbertClientPage } from './app.po';

describe('herbert-client App', function() {
  let page: HerbertClientPage;

  beforeEach(() => {
    page = new HerbertClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
