
# Sprint 1


| Actividad | Responsable | Estado|
| --------- | ----------- | ----- |
| Crear repositorio para el proyecto | Rodrigo González | Listo |
| Confeccionar el mockup de la interfaz de donación | Javier Martinez  | Listo |
| Buscar librerías de next/react/js para los QR / correos | Rodrigo González | Listo |
| Seleccionar componentes chakra para la interfaz | Diego Mora | Listo |
| Crear código para guardar información del usuario/libro | Erick López | en progreso...|


## Mockup de la página

![Prototipo del ingreso de información del usuario](https://cdn.discordapp.com/attachments/1241914858228944907/1291049770433122414/image.png?ex=66feaf4b&is=66fd5dcb&hm=59059e716627f2b667b4f3d5e4b3bf82b4bdd644f06cdb39349f1ed718995b1a&)

![Prototipo del ingreso de información del libro](https://cdn.discordapp.com/attachments/1241914858228944907/1291050476946587789/image.png?ex=66feaff4&is=66fd5e74&hm=4d6136ecafd41f43e1868cf8d7a43a282ed62faaa04d97d3e0af218194d14334&)




## Documentación de librerías


-[Creación de códigos qr react](https://www.npmjs.com/package/qrcode.react)

-[Creación de códigos qr (node.js)](https://www.npmjs.com/package/qrcode)

-[Creación y envío de correos](https://resend.com/docs/send-with-nextjs)

## Retroalimentación Sprint 1

| Qué corregir... |
| ------------ |
| Consulta anónima |
| Base de datos de categorías / lista de categorías |
| Añadir tipo 'radio' para las opciones que lo necesiten | 
| Buscar una forma más óptima de agrupar los tipos de libro |

# Sprint 2

| Actividad | Responsable | Estado|
| --------- | ----------- | ----- |
| Diseño general y hacer funcionar los botones | - | - |
| Creación de códigos qr y descarga de estos | Rodrigo González | Listo |
| Creación de variables / adaptar a la API | - | - |
| Funcionalidad de botones informacion del usuario  | Alvaro Guarda  | Listo |
| - | - | - |

## Retroalimentación Sprint 2
### Función de los botones
- Definir texto de términos y condiciones
- Requisito de que se ingresen todos los datos antes de "guardar información"
- Alertar al usuario de los datos no rellenados

### Orden del formulario:
  - Datos del usuario
  - Términos y condiciones
  - ISBN
    
    > Autocompletar si: OpenLibrary no tiene problemas / los datos del libro se ingresaron correctamente
    > Ingresar datos manualmente si: OpenLibrary no responde / no se tiene el ISBN

  
  - Confirmación de los datos y enviar a la API
  - Recibir variable ID y crear el QR
  - Buscar información para transformar carátulas en base 64


### Código
  - Ordenar y organizar de mejor manera el código en general
  - Investigar y adaptar la librería del ISBN
  - Investigar ISSN
  - Adaptar la API


