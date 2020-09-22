const multiBracketValidation = require('../multi-bracket-validation');
describe('validate appropriate bracket encloser', ()=> {
  it('returns true when input is {}', ()=> {
    expect(multiBracketValidation('{}')).toBeTruthy();
  });
  it('returns true when input is {}(){}', ()=> {
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
  });
  it('returns true when input is ()[[Extra Characters]]', ()=> {
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
  });
  it('returns true when input is (){}[[]]', ()=> {
    expect(multiBracketValidation('(){}[[]]')).toBeTrue;
  });
  it('returns true when input is {}{Code}[Fellows](())', ()=> {
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
  });
  it('returns false when input is [({}]', ()=> {
    expect(multiBracketValidation('[({}]')).toBeFalsy();
  });
  it('returns false when input is (](', ()=> {
    expect(multiBracketValidation('(](')).toBeFalsy();
  });
  it('returns false when input is {(})', ()=> {
    expect(multiBracketValidation('{(})')).toBeFalsy();
  });
  it('returns false when input is {{(', ()=> {
    expect(multiBracketValidation('{{(')).toBeFalsy();
  });
});
