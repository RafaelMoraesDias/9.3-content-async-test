require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('testa se o super-heroi é retornado',async () => {
   const character = await fetchCharacter('720');
  expect(character.name).toBe('Wonder Woman');
  });

  it('testa se o parametro for vazio',async () => {
    const failed = await fetchCharacter();
   expect(failed).toEqual(new Error('You must provide an url'));
   });
});