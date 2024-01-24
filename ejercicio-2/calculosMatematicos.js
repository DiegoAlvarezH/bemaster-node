// Función que calcula el seno de un resultado intermedio basado en tres parámetros.
function calcularSenoIntermedio(x, y, z) {
    // Calcula la suma de x e y.
    let sumaXY = x + y;

    // Calcula el producto de la suma anterior y z.
    let productoSumaZ = sumaXY * z;

    // Calcula el seno del producto anterior.
    let senoProducto = Math.sin(productoSumaZ);

    // Devuelve el resultado final.
    return senoProducto;
}
