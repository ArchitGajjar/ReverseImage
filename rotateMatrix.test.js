describe(`STORY - Rotate image 90'`, ()=> {
  test('Input with 4*4 matrix image', ()=> {
    const input = [
      ['a', 'a', 'a', 'a'],
      ['b', 'b', 'b','b'],
      ['c', 'c', 'c','c'],
      ['d', 'd', 'd', 'd']
    ];
    const output = [
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
    ]
    const rotateImage = require('./index');
    expect(rotateImage(input)).toEqual(output);
  });

  test('Input with 3*3 matrix image', ()=> {
    const input = [
      ['p', 'q', 'r'],
      ['p', 'q', 'r'],
      ['p', 'q', 'r']
    ];
    const output = [
      ['p', 'p', 'p'],
      ['q', 'q', 'q'],
      ['r', 'r', 'r']
    ]
    const rotateImage = require('./index');
    expect(rotateImage(input)).toEqual(output);
  });

  test('Input with 2*2 matrix image', ()=> {
    const input = [
      ['a', 'a'],
      ['b', 'b']
    ];
    const output = [
      ['a', 'b'],
      ['a', 'b']
    ]
    const rotateImage = require('./index');
    expect(rotateImage(input)).toEqual(output);
  });
})