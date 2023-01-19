const quotes = [
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
  {
    text: 'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\'s code.',
    author: 'Dan Salomon'
  },
  {
    text: 'It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive.',
    author: 'Steve McConnell'
  },
  {
    text: 'One of my most productive days was throwing away 1000 lines of code.',
    author: 'Ken Thompson'
  },
  {
    text: 'A programming language is for thinking about programs, not for expressing programs you\'ve already thought of. It should be a pencil, not a pen.',
    author: 'Paul Graham'
  },
  {
    text: 'Without requirements or design, programming is the art of adding bugs to an empty text file.',
    author: 'Unknown'
  },
  {
    text: 'One man\'s crappy software is another man\'s full time job.',
    author: 'Unknown'
  },
  {
    text: 'Walking on water and developing software from a specification are easy if both are frozen.',
    author: 'Unknown'
  },
  {
    text: 'Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it',
    author: 'Rajanand'
  },
  {
    text: "I don't care if it works on your machine! We are not shipping your machine!",
    author: 'Vidiu Platon'
  },
  {
    text: 'Software undergoes beta testing shortly before it\'s released. Beta is latin for "still doesn\'t work"',
    author: 'Unknown'
  },
  {
    text: 'Measuring programming progree by lines of code is like measuring aircraft building progree by weight',
    author: 'Bill Gates'
  },
  {
    text: 'If debudding is the process of removing software bugs, then programming must be the process of putting them in.',
    author: 'Edsger W. Dijkstra'
  },
  {
    text: 'The computer was born to solve problems that did not exist before.',
    author: 'Bill Gates'
  },
  {
    text: 'People don\'t care about what you say, they care about what you build',
    author: 'Mark Zuckerberg'
  },
  {
    text: 'We have to stop optimizing for programmers and start optimizing for users.',
    author: 'Jeff Atwood'
  },
  {
    text: 'If the code and the comments do not match, possibly both are incorrect.',
    author: 'Norm Schryer'
  },
  {
    text: 'Bad programmers worry about the code. Good programmers worry about data structures and their relationships.',
    author: 'Linus Torvalds'
  },
  {
    text: 'If you optimize everything, you will always be unhappy.',
    author: 'Donald Knuth'
  },
  {
    text: 'Your mind is programmable - if you\'re not programming your mind, else will program it for you. ',
    author: 'Jerry Hammond'
  },
  {
    text: 'The trouble with programmers is that you can never tell what a programmer is doing until it\'s too late.',
    author: 'Seymour Cray'
  },
  {
    text: 'Debugging becomes significantly easier if you first admit that you are the problem.',
    author: 'William Laeder'
  },
  {
    text: 'Everybody in this country should learn to program a computer because it teaches you how to think.',
    author: 'Steve Jobs'
  },
  {
    text: 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.',
    author: 'Rajanand'
  },
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler'
  },
  {
    text: 'First, solve the problem.Then write the code.',
    author: 'John Johnson'
  },
  {
    text:  <><h4>I HATE PROGRAMMING!</h4> <h4>I HATE PROGRAMMING!</h4> <h4>I HATE PROGRAMMING!</h4> <h4>IT WORKS!!</h4><h4>I LOVE PROGRAMMING</h4></>,
    author: 'John Johnson'
  },
  {
    text:  <><h4>I HATE PROGRAMMING!</h4> <h4>I HATE PROGRAMMING!</h4> <h4>I HATE PROGRAMMING!</h4> <h4>IT WORKS!!</h4><h4>I LOVE PROGRAMMING</h4></>,
    author: 'John Johnson'
  },
  {
    text: <>
      <h3>while (noSuccess) {`{`}</h3>
      <h3 style={{ marginLeft: '1.5rem', marginTop: '.25rem' }}>tryAgain();</h3>
      <h3 style={{ marginLeft: '2rem', marginTop: '.25rem' }}> if (dead) break; </h3>
      <h3 style={{ marginLeft: 'rem', marginTop: '.25rem' }}>{'}'}</h3>
    </>,
    author: 'Unknown'
  },
  {
    text: 'The function of a good software is to make the complex appear to be simple.',
    author: 'Grady Booch'
  },
  {
    text: 'Your most unhappy customers are your greatest source of learning.',
    author: 'Bill Gates'
  },
  {
    text: 'Small minds are concerned with the extraordinary, great minds with the ordinary.',
    author: 'Blaise Pascal'
  },
  {
    text: 'Everyday life is like programming, I guess. If you love something you can put beauty on it.',
    author: 'Donald Knuth'
  },
  {
    text: 'You are not responsible for the programming you picked up in childhood. However, as an adult, you are the one hundred percent responsible for fixing it.',
    author: 'Unknown'
  },
  {
    text: 'Developer is an organism that turns coffee into code.',
    author: 'Unknown'
  },
  {
    text: 'The purpose of software engineering is to control complexity, not to create it.',
    author: 'Unknown'
  },
  {
    text: 'As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow.',
    author: 'Doug Mcllroy'
  },
  {
    text: 'A good programmer is someone who always looks both ways before crossing a one-way street.',
    author: 'Doug Linder'
  },
  {
    text: 'Testing can only prove the presence of bugs, not their absence. ',
    author: 'Edsger W. Dijkstra'
  },
  {
    text: 'Experience is the name everyone gives to their mistakes.',
    author: 'Oscar Wilde'
  },
  {
    text: 'Code is like humor. When you have to explain it, it’s bad.',
    author: 'Cory House'
  },
  {
    text: 'Fix the cause, not the symptom.',
    author: 'Steve Maguire'
  },
  {
    text: 'Before software can be reusable it first has to be usable',
    author: 'Ralph Johnson'
  },
  {
    text: 'Make it work, make it right, make it fast.',
    author: 'Kent Beck'
  },
  {
    text: 'There is a big difference between making a simple product & making a product simple. ',
    author: 'Des Traynor'
  },
  {
    text: 'In programming, the hard part isn\'t solving problems, but deciding what problems to solve.',
    author: 'Paul Graham'
  },
  {
    text: 'No one in the brief history of computing has ever written a piece of perfect software. It\'s unlikely that you\'ll be the first.',
    author: 'Andy Hunt'
  },
  {
    text: 'Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime',
    author: 'David Leinweber'
  },
]

export default quotes;