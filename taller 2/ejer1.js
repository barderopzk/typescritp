function fnparametro(numero, cadenaPorDefecto, booleanoOpcional) {
    if (cadenaPorDefecto === void 0) { cadenaPorDefecto = "Por defecto"; }
    console.log("N\u00FAmero: " + numero);
    console.log("Cadena por defecto: " + cadenaPorDefecto);
    if (booleanoOpcional !== undefined) {
        console.log("Booleano opcional: " + booleanoOpcional);
    }
}
fnparametro(42); // Parámetro booleanoOpcional omite (por defecto undefined)
fnparametro(123, "Personalizado", true); // Todos los parámetros proporcionados
