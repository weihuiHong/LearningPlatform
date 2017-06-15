import { LearningPlatformPage } from './app.po';

describe('learning-platform App', () => {
  let page: LearningPlatformPage;

  beforeEach(() => {
    page = new LearningPlatformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
