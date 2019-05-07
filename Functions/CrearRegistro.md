# Función para crear un registro
## Introducción
Nuestro primer objetivo, consiste en crear una función para agregar registros a la base de datos

## Configuración
1. Entramos a el ![IBM Cloud](https://cloud.ibm.com) y nos firmamos en caso de ser necesario. Seleccionamos el icono superior izquierdo, lo que despliega un menú de donde seleccionaremos la opción __Functions__ ![Menu](./0001.png)

2. Al entrar al panel de control de los __IBM Cloud Functions__ elegimos del menú del lado izquierdo la función __Actions__ ![Actions Menu](./0002.png)

3. Una vez dentro de __Actions__ debemos dar click en el botón de crear acción ![Boton Create](./0003.png)

4. Para crear la acción debemos llenar la ficha de meta datos, para lo que crearemos el nombre (prepara-datos-receta) y acto seguido damos click en el botón de crear ![Boton Create Actions](./0004.png)

5. Al entrar al editor de código, debemos capturar los siguientes datos 
```
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
```

6. Una vez capturado el código, lo salvamos dando click en el botón de salvar ![Salvar](./0005.png)

7. Una vez que hemos salvado, debemos seleccionar la opción de __Enclosing Sequences__ del menú del la izquierda. ![Enclosing](./0006.png)

8. Como aún no hemos creado una secuencia, debemos dar click sobre el botón de __Add to Sequence__. ![Add to Sequence](./0007.png)

9. En la pantalla de creación de secuencia, debemos asegurarnos de que seleccionamos la opción __Create New__, luego ponemos el nombre __salva-receta__ y finalmente hacemos click en __Create & add__ ![Create Sequence](./0008.png)

10. Al finalizar la creación de la secuencia, la seleccionamos para agregar otros pasos. ![Edit Sequence](./0010.png)

11. Al entrar a editar la secuencia, vemos la acción anterior ya dentro de la secuencia. Ahora agregaremos una acción adicional para lo que daremos click en el botón de __Add__ ![Add](./0011.png)

12. Al crear una acción tenemos varias alternativas. En este caso, seleccionamos inicialmente la opción __Use Public__ y dentro de esta, la opción de __Cloudant__ ![Add Public](./0012.png)

13. Una vez creado, se nos muestra distintas opciones de acción con cloudant, para lo que seleccionaremos la opción para crear un nuevo documento, __create-document__ ![Create Document](./0013.png)

14. Ahora debemos especificar una conexion al la base de datos. Como aun no hemos creado una, debemos seleccionar la opción __New Binding__ ![Create Binding](./0014.png)

15. Una vez seleccionado, debemos nombrar la conexion, en este caso __binding-recetario__ y en la información de instancia seleccionamos la opción para usar credenciales previas ![Binding Params](./0015.png)

16. Ahora debemos proporcionar los parametros generados durante la creación de las credenciales, tomando de ellas el Username, el Password y el Host. Para el nombre de la base de datos usaremos el nombre definido previamente, que fue __recetario__. Luego de llenar los datos, damos click en el botón de __Add__ ![Binding Credentials](./0016.png)

17. Al agregar, regresamos a la pantalla de secuencia y damos click en el botón de __Save__ para grabar los cambios. ![Save Sequence](./0017.png)

18. Para probar, ahora deberemos generar una entrada. Para hacer esto debemos crear unos parámetros para lo que daremos click en el botón de __Change Input__ ![Change Input](./0018.png)

19. Ahora en el dialogo que nos aparece, debemos capturar la siguiente estructura json, al final presionamos __Apply__ para salvar el parámetro
```
{
  "nombre": "Chilaquiles con Claras",
  "calorias": "500",
  "preparacion": "Ejemplo"
}
```
20. Ahora damos click sobre el botón de __Invoke__ para probar nuestra primera función ![Change Input](./0020.png)

21. Si la ejecución es correcta, debemos ver una pantalla similar a la siguiente ![Change Input](./0021.png)

Ahora continuamos con [Acción para enlistar registros](./EnlistaRegistros.md)