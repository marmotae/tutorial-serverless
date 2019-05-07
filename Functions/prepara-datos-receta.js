/**
 * Prepara la entrada al recetario para ser persistida
 */
function main(params) {
    if (!params.nombre || !params.calorias) {
      return Promise.reject({ error: 'no se especifica nombre o calorías'});
    }
  
    return {
      doc: {
        creadoEl: new Date(),
         nombre: params.nombre,
         calorias: params.calorias,
         preparacion: params.preparacion
      }
    };
  }