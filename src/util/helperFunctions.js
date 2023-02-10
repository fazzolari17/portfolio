export const capitalized = (string) => {
  string = string.split(' ');
  const capitalizedWords = string.map(word => {
    word = word.split('');
    let cap = word[0].toUpperCase();
    let endOfWord = word.slice(1);
    let caps = [...cap, ...endOfWord];
    return caps.join('');
  });

  return capitalizedWords.join(' ');
};

export const uppercase = string => {
  string = string.split('');
  let uppercase = [];
  let count = 0;

  while (count < string.length) {
    uppercase.push(string[count].toUpperCase());
    count++;
  }

  uppercase = uppercase.join('');
  return uppercase;

};

export const selectImageClass = index => {
  if (index % 2 === 0) {
    index = 2;
  }
  else if (index % 3 === 0) {
    index = 2;
  }

  switch (index) {
  case 1:
    index = 'span-1';
    break;
  case 2:
    index = 'span-2';
    break;
  default:
    index = 'span-1';
  }

  return index;
};

export const selectRandomQuote = (quotes) => {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
};
