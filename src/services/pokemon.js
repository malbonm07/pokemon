import pokemonService from './pokemonApi'

const getApi = {};

getApi.search = function(q) {
  // const type = "pokemon";
  return pokemonService.get(`/pokemon/${q}`, {
    // params: {
    //   // type,
    //   q: q
    // }
  })

}

export default getApi;
