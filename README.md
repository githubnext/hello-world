# Lista de contactos

Esta es una aplicación web que permite gestionar una lista de contactos. Se puede añadir, editar y eliminar contactos, así como verlos en una pantalla. También se puede cambiar el aspecto de la aplicación a un modo oscuro.

## Uso

Para usar la aplicación, se necesita un navegador web que soporte TypeScript y un servidor local que sirva los archivos estáticos. Se puede abrir el archivo `index.html` en el navegador y ver la aplicación. Los datos de los contactos se almacenan en el archivo `contactos.json`, que se lee y se escribe mediante peticiones HTTP al servidor.

## Funcionalidades

* Añadir contacto: se puede pulsar el botón "Añadir contacto" en la barra superior y se mostrará un formulario para introducir el nombre y el teléfono del nuevo contacto. Al pulsar el botón "Guardar", se añadirá el contacto a la lista y se actualizará el archivo `contactos.json`.
* Editar contacto: se puede pulsar el botón "Editar" al lado de cada contacto y se mostrará el mismo formulario que para añadir, pero con los datos del contacto seleccionado. Al pulsar el botón "Guardar", se modificará el contacto en la lista y se actualizará el archivo `contactos.json`.
* Eliminar contacto: se puede pulsar el botón "Eliminar" al lado de cada contacto y se mostrará una ventana de confirmación. Al pulsar el botón "Sí", se eliminará el contacto de la lista y se actualizará el archivo `contactos.json`.
* Ver contactos: se puede ver la lista de contactos en la pantalla principal, con el nombre y el teléfono de cada uno.
* Modo oscuro: se puede pulsar el botón "Modo oscuro" en la barra superior y se cambiará el aspecto de la aplicación a un fondo oscuro y un texto blanco. Se puede volver al modo normal pulsando el mismo botón.
