import { Ng4helloPage } from './app.po';

describe('ng4hello App', () => {
  let page: Ng4helloPage;

  beforeEach(() => {
    page = new Ng4helloPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
