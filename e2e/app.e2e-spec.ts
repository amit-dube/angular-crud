import { CurdAngularPage } from './app.po';

describe('curd-angular App', function() {
  let page: CurdAngularPage;

  beforeEach(() => {
    page = new CurdAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
