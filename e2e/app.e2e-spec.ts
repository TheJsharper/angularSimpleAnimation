import { AngularAnimationsPage } from './app.po';

describe('angular-animations App', () => {
  let page: AngularAnimationsPage;

  beforeEach(() => {
    page = new AngularAnimationsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
