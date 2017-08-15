import { ReactiveFormPage } from './app.po';

describe('reactive-form App', () => {
  let page: ReactiveFormPage;

  beforeEach(() => {
    page = new ReactiveFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});