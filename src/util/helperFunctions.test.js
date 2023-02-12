import {
  capitalized,
  uppercase,
  selectImageClass,
  selectRandomQuote
} from './helperFunctions';

const testQuotes = [
  {
    text: 'Real programmers don\'t comment their code. If it was hard to write, it should be hard to understand.',
    author: 'Unknown'
  },
  {
    text: 'Talk is cheap. Show me the code.',
    author: 'Linus Torvalds'
  },
  {
    text: 'Always code as if the guy who ends up maintaning your code will be a violent psychopath who knows where you live.',
    author: 'Rick Obborne'
  },
  {
    text: ' Don\'t comment bad code - rewrite it.',
    author: 'Brian Kernighan'
  },
  {
    text: 'A programming language is for thinking about programs, not for expressing programs you\'ve already thought of. It should be a pencil, not a pen.',
    author: 'Paul Graham'
  },
];


describe('Helper Functions', () => {


  describe('capitalized function', () => {

    it('returns sentence with all words with first letter capitalized', () => {
      const testText = 'a random string of text to test';
      const capitalizedText = capitalized(testText);

      expect(testText).not.toBe(capitalizedText);
      expect(capitalizedText).toBe('A Random String Of Text To Test');
      expect(typeof capitalizedText).toBe('string');

    });
  });

  describe('uppercase function', () => {

    it('returns sentence with all letters uppercase', () => {
      const testText = 'a random string of text to test';
      const capitalizedText = uppercase(testText);

      expect(testText).not.toBe(capitalizedText);
      expect(capitalizedText).toBe('A RANDOM STRING OF TEXT TO TEST');
      expect(typeof capitalizedText).toBe('string');

    });
  });


  describe('setImageClass function', () => {

    it('function returns a string', () => {
      let result = selectImageClass(0);
      expect(typeof result).toBe('string');
    });

    it('takes an index and returns the correct class', () => {
      const indices = [...Array(10).keys()];

      indices.forEach((item, index) => {
        let result = selectImageClass(item);

        if (index % 2 === 0 || index % 3 === 0) {
          expect(typeof result).toBe('string');
          expect(result).toBe('span-2');
        } else {
          expect(typeof result).toBe('string');
          expect(result).toBe('span-1');
        }

      });
    });
  });


  describe('select random quote function', () => {
    it('function takes an array and returns an object', () => {
      const result = selectRandomQuote(testQuotes);

      expect(typeof result).toBe('object');
    });

    it('function returns a random item from an array', () => {
      const result = selectRandomQuote(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
      expect(result).toMatch(/0|1|2|3|4|5|6|7|8|9|10/);

    });
  });
});