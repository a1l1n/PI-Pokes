const axios = require('axios');
const { Type } = require('../../db');

async function getTypes(req, res){
  try {
    let tp = await Type.findAll(); // -> chequeo si tengo algo en la base de datos
    if (tp.length > 0) return res.status(200).send(tp)
    const apiTypes = await axios.get(`https://pokeapi.co/api/v2/type`);
    const getTypes = apiTypes.data.results.map((p) => {
      return {
        name: p.name
      }
    });
      getTypes.forEach(async (t) => {
      await Type.findOrCreate({ 
        where:{ name: t.name }
        })
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getTypes
};