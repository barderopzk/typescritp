function fnparametro(numero: number, cadenaPorDefecto: string = "Por defecto", booleanoOpcional?: boolean) {
    console.log(`Número: ${numero}`);
    console.log(`Cadena por defecto: ${cadenaPorDefecto}`);
    if (booleanoOpcional !== undefined) {
      console.log(`Booleano opcional: ${booleanoOpcional}`);
    }
  }
  fnparametro(42); // Parámetro booleanoOpcional omite (por defecto undefined)
  fnparametro(123, "Personalizado", true); // Todos los parámetros proporcionados

  