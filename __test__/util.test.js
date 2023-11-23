const { generateText, validateInput } = require("../util.js");

describe("Test generateText", () => {
  test("Alumno edad válida", () => {
    const result = generateText("Juan", 30, "Intermedio");
    expect(result).toBe("Registro OK de Juan en: Intermedio.");
  });
  test("Alumno edad válida: 18", () => {
    const result = generateText("Juan", 18, "Intermedio");
    expect(result).toBe("Registro OK de Juan en: Intermedio.");
  });

  test("Alumno edad válida: 65", () => {
    const result = generateText("Juan", 65, "Intermedio");
    expect(result).toBe("Registro OK de Juan en: Intermedio.");
  });

  test("Alumno edad válida: 19", () => {
    const result = generateText("Juan", 19, "Intermedio");
    expect(result).toBe("Registro OK de Juan en: Intermedio.");
  });

  test("Alumno edad válida: 66", () => {
    const result = generateText("Juan", 66, "Intermedio");
    expect(result).toBe("No pudimos registrar a: Juan. Por favor contactá a soporte@dh.com para más información.");
  });

  test("Alumno edad válida", () => {
    const result = generateText("Juan", 100, "Intermedio");
    expect(result).toBe("No pudimos registrar a: Juan. Por favor contactá a soporte@dh.com para más información.");
  });

  test("Alumno edad no válida", () => {
    const result = generateText("Juan", 17, "Intermedio");
    expect(result).toBe("Edad ingresada no válida. Por favor intentá nuevamente.");
  });

  test("Alumno edad no válida: letras", () => {
    const result = generateText("Juan", "c", "Intermedio");
    expect(result).toBe("Edad ingresada no válida. Por favor intentá nuevamente.");
  });

  test("Alumno edad no válida: vacio", () => {
    const result = generateText("Juan", " ", "Intermedio");
    expect(result).toBe("Edad ingresada no válida. Por favor intentá nuevamente.");
  });

  test("Alumno edad no válida: valores negativos", () => {
    const result = generateText("Juan", -20, "Intermedio");
    expect(result).toBe("Edad ingresada no válida. Por favor intentá nuevamente.");
  });


});

describe("Test validateInput", () => {

  test("Cadena no vacía", () => {
    expect(validateInput("test", true)).toBeTruthy();
  });

  test("Cadena no vacía false", () => {
    expect(validateInput("test", false)).toBeTruthy();
  });

  test("Cadena nula ", () => {
    expect(validateInput(null, true)).toBeFalsy();
  });

  test("Cadena vacia", () => {
    expect(validateInput(" ", true)).toBeFalsy();
  });


});
