// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

const baseString: string = 'x x x x x x x x erfre fre f ererf  x x x erfx x xrerx re';

function changeAllXToY(convertThis: string) {
  let newStringWithoutX: string = convertThis;
  if (convertThis.indexOf('x') === -1) {
    return newStringWithoutX;
  }
  return changeAllXToY(convertThis.replace('x', 'y'));
}

console.log(changeAllXToY(baseString));