/**
 * Prepara la consulta al recetario
 */
function main(params) {
    if (!params.nombre || !params.calorias) {
      return Promise.reject({ error: 'no se especifica nombre o calorías'});
    }
  
    return {
      doc: {
          nombre: params.nombre,
          calorias: params.calorias
        }
    };
  }