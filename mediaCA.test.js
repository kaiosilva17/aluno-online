const mediaCA = require('./mediaCA')

test('retorna conceito SS - Superior', () => {
  expect(mediaCA(9.2)).toBe('SS - Superior');
});

test('retorna conceito MS - Médio Superior', () => {
  expect(mediaCA(7.8)).toBe('MS - Médio Superior');
});

test('retorna conceito MM - Médio', () => {
  expect(mediaCA(6.9)).toBe('MM - Médio');
});

test('retorna conceito MI - Médio Inferior', () => {
  expect(mediaCA(4.5)).toBe('MI - Médio Inferior');
});

test('retorna conceito II - Inferior', () => {
  expect(mediaCA(1.5)).toBe('II - Inferior');
});

test('retorna conceito SR - Sem rendimento', () => {
  expect(mediaCA(0.0)).toBe('SR - Sem rendimento');
});
