function toCamelCase(str){
  let newStr = '';

  for (let i = 0, max = str.length; i < max; i++) {
    if ('_-'.includes(str[i])) {
      i++;
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  
  return newStr;
}
