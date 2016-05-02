
describe('Linear To Hierachy List', () => {
  
  let linearToHierachy;
  beforeEach(module('ui.treegrid'));
  beforeEach(() => {
    inject(($injector) => {
      linearToHierachy = $injector.get('LinearToHierachy');
    });
  });
  
  it('should return id', ()=> {
    expect(linearToHierachy.id).toBe(10);
  })
});