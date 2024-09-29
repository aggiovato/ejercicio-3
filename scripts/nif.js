/***
 *
 * Este script contiene la lógica de cálculo de la letra del DNI
 * y la lógica de validación de datos en el campo "input"
 *
 * recibe el elemento <input> y el array de objetos "letters"
 *
 */

export const calculateNIF = (nif_input, _letters) => {
  let isShowable = false; // muestra o no el <div> con el resultado

  const nif_str = nif_input.value; // extra el valor en el input
  const nif_num = parseInt(nif_str); // convierte a num el string

  if (nif_str && nif_str.length <= 8) {
    nif_input.value = ""; // limpia el <input>

    if (nif_num < 0) {
      window.alert("El número introducido no puede ser negativo.");
      isShowable = false;

      return ["", isShowable]; // < 0 => mensaje + null + false
    } else {
      isShowable = true;
      const _letter = _letters.find((each) => each.num === nif_num % 23);

      return [_letter ? _letter.letter : null, isShowable]; // > 0 && < 99999999 => letter + true
    }
  } else if (nif_str.length > 8) {
    window.alert("El número introducido no puede tener más de 8 carácteres.");
    isShowable = false;
    nif_input.value = nif_str.substring(0, 8);

    return ["", isShowable]; // > 99999999 => message + null + false
  } else {
    window.alert("Necesitas introducir un número para generar el NIF.");
    isShowable = false;

    return ["", isShowable]; // === null => message + null + false
  }
};
