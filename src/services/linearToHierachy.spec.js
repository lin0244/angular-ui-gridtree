
describe('Linear To Hierachy List', () => {
  
  let linearToHierachy;
  
  beforeEach(module('ui.treegrid'));
  beforeEach(() => {
    inject(($injector) => {
      linearToHierachy = $injector.get('LinearToHierachy');
    });
  });
  
  const testData = [
    {id:1, title:'node 1'},
    {id:2, title:'node 1.1', parent: 1},
    {id:3, title:'node 1.1.1', parent: 2},
  ];
  
  it('should return id', ()=> {
    expect(linearToHierachy.id).toBe(10);
  })
  
  it('should return 3 for depth', () => {
    let hier = linearToHierachy.toHierachy(testData);
    expect(hier.length).toBe(1);
    // expect(hier.nodes.length).toBe(1);
    // expect(hier.nodes[0].nodes.length).toBe(1);
  })
});