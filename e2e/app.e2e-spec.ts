import { NgCliGeneratedProjectForTravisTestPage } from './app.po';

describe('ng-cli-generated-project-for-travis-test App', function() {
  let page: NgCliGeneratedProjectForTravisTestPage;

  beforeEach(() => {
    page = new NgCliGeneratedProjectForTravisTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
