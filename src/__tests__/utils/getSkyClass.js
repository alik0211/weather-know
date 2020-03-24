import getSkyClass from '../../utils/getSkyClass';

describe('getSkyClass', function() {
  it('if clouds less 20 return clear', function() {
    expect(getSkyClass(19)).toBe('clear');
  });

  it('if clouds less 40 return few-clouds', function() {
    expect(getSkyClass(39)).toBe('few-clouds');
  });

  it('if clouds less 60 return scattered-clouds', function() {
    expect(getSkyClass(59)).toBe('scattered-clouds');
  });

  it('if clouds less 80 return broken-clouds', function() {
    expect(getSkyClass(79)).toBe('broken-clouds');
  });

  it('if clouds over or equal 80 return overcast-clouds', function() {
    expect(getSkyClass(80)).toBe('overcast-clouds');
  });
});
