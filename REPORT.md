# Linktic-test
El código de prueba utiliza la biblioteca @testing-library/react para realizar pruebas en el componente Dropdown de React. Se realizan múltiples casos de prueba para verificar el comportamiento esperado del componente en diferentes situaciones.

### Primer caso de prueba:
se verifica que el componente renderice correctamente el texto del marcador de posición y el icono de flecha hacia abajo cuando el dropdown está cerrado.

### Segundo caso de prueba:
se verifica que el componente renderice correctamente el campo de búsqueda y el icono de flecha hacia arriba cuando el dropdown está abierto. Se simula el evento de clic en el encabezado del dropdown para abrirlo y luego se verifica la presencia del campo de búsqueda y el icono de flecha hacia arriba.

### Tercer caso de prueba:
 se verifica que el componente renderice correctamente la lista de frutas filtradas cuando se realiza una búsqueda. Se simula el evento de cambio en el campo de búsqueda, ingresando el valor "apple", y luego se espera hasta que la opción de fruta filtrada "apple" esté presente en la pantalla.

### Cuarto caso de prueba:
 se verifica que el componente renderice el mensaje "No items were found." cuando no se encuentran frutas que coincidan con la búsqueda. Se simula el evento de cambio en el campo de búsqueda, ingresando el valor "xyz", y luego se espera hasta que el mensaje "No items were found." esté presente en la pantalla.

### Quinto caso de prueba:
 se verifica que el componente seleccione una fruta al hacer clic en ella. Se simula el evento de clic en la opción de fruta "apple" y luego se verifica que el encabezado del dropdown muestre la fruta seleccionada correctamente.

Estas pruebas aseguran que el componente Dropdown funcione correctamente al renderizar los elementos apropiados, filtrar las frutas según la búsqueda y seleccionar una fruta correctamente.