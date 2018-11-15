// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

export { };
const baseString: string = 'rehfrzufg  wjrecfe vrzcecjrv ezjr12zjrz';

function putStarAfterEveryCharacter(convertThis: string) {
  if (convertThis.lastIndexOf('*') === convertThis.length - 2) {
    return convertThis;
  } else {
    return putStarAfterEveryCharacter(`${convertThis.slice(0, convertThis.lastIndexOf('*') + 2)}*${convertThis.slice(convertThis.lastIndexOf('*') + 2, convertThis.length)}`);
  }
}

console.log(putStarAfterEveryCharacter(baseString));
