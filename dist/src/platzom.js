'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;
  //si la palabra termina en ar se le quitan esos dos caracteres.
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  //si la palabraa inicia con z se le añade pe al final

  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }
  //si al palabra yraducida tiene 10 o mas letras se parte a la mitad y unir co un guion del medio

  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  // si la palabvra selle de atras par delante ninguna regla se cuenta,,

  // y se intercaala

  var reverse = function reverse(str) {
    return str.split("").reverse().join("");
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.chartAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
    }
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}
console.log(platzom("programar"));
console.log(platzom("zorro"));
console.log(platzom("ZARPAR"));
console.log(platzom("abecedario"));
