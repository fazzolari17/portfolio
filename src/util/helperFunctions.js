export const capitalized = (string) => {
  string = string.split(' ');
  const capitalizedWords = string.map(word => {
    word = word.split('');
    let cap = word[0].toUpperCase();
    let endOfWord = word.slice(1);
    let caps = [...cap, ...endOfWord];
    return caps.join('');
  })

  return capitalizedWords.join(' ');
};

export const uppercase = string => {
  string = string.split('');
  let capitalized = [];
  let count = 0;

  while (count < string.length) {
    capitalized.push(string[count].toUpperCase());
    count++
  };
  
  capitalized.join('');
  return capitalized;

};

export const selectImageClass = index => {
      if (index % 2 === 0) {
        index = 2
      }
      else if (index % 3 === 0) { 
        index = 2
      }
    
    switch (index) {
      case 1:
        index = 'span-1';
        break;
      case 2:
        index = 'span-2';
        break;
      default:
        index = 'item--1';
    };
    
    return index;
}
  
export const selectRandomQuote = (quotes) => {
  console.log(quotes)
  const index = Math.floor(Math.random() * quotes.length);
console.log(index)
  return quotes[index];
}
