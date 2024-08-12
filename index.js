const display = document.getElementById("display");
function appendToDisplay(input) {
    display.value += input;
}
// Esta función toma el valor de input y lo concatena al final del contenido actual del campo display, lo que permite construir dinámicamente una expresión o texto a medida que el usuario interactúa con la interfaz.
function clearDisplay() {
    display.value = "";
}
// establece el valor del campo de entrada en una cadena vacía, efectivamente borrando todo el texto o números que estaban en el campo.
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}
/*se utiliza para evaluar una expresión matemática que se encuentra en un campo de entrada y mostrar el resultado.signa el resultado de la evaluación al campo de entrada display. Si la expresión es válida, display.value se actualizará con el resultado de la operación.
try: Utiliza un bloque try para intentar ejecutar el código que podría generar un error.
catch (error): Si ocurre un error durante la evaluación (por ejemplo, si display.value contiene una expresión inválida), el bloque catch captura el error y ejecuta el código dentro de él.*/
