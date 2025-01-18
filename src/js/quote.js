//                         __              _      
//   ____ _ __  __ ____   / /_ ___        (_)_____
//  / __ `// / / // __ \ / __// _ \      / // ___/
// / /_/ // /_/ // /_/ // /_ /  __/_    / /(__  ) 
// \__, / \__,_/ \____/ \__/ \___/(_)__/ //____/  
//   /_/                            /___/         

// Quotes provided by https://type.fit/api/quotes, credits to them :)

const quotes = [
  {
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    source: "Thomas Edison",
  },
  {
    quote: "You can observe a lot just by watching.",
    source: "Yogi Berra",
  },
  {
    quote: "A house divided against itself cannot stand.",
    source: "Abraham Lincoln",
  },
  {
    quote: "Difficulties increase the nearer we get to the goal.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote: "Fate is in your hands and no one elses",
    source: "Byron Pulsifer",
  },
  {
    quote: "Be the chief but never the lord.",
    source: "Lao Tzu",
  },
  {
    quote: "Nothing happens unless first we dream.",
    source: "Carl Sandburg",
  },
  {
    quote: "Well begun is half done.",
    source: "Aristotle",
  },
  {
    quote: "Life is a learning experience, only if you learn.",
    source: "Yogi Berra",
  },
  {
    quote: "Self-complacency is fatal to progress.",
    source: "Margaret Sangster",
  },
  {
    quote: "Peace comes from within. Do not seek it without.",
    source: "Buddha",
  },
  {
    quote: "What you give is what you get.",
    source: "Byron Pulsifer",
  },
  {
    quote: "We can only learn to love by loving.",
    source: "Iris Murdoch",
  },
  {
    quote: "Life is change. Growth is optional. Choose wisely.",
    source: "Karen Clark",
  },
  {
    quote: "You'll see it when you believe it.",
    source: "Wayne Dyer",
  },
  {
    quote: "Today is the tomorrow we worried about yesterday.",
    source: null,
  },
  {
    quote: "It's easier to see the mistakes on someone else's paper.",
    source: null,
  },
  {
    quote: "Every man dies. Not every man really lives.",
    source: null,
  },
  {
    quote: "To lead people walk behind them.",
    source: "Lao Tzu",
  },
  {
    quote: "Having nothing, nothing can he lose.",
    source: "William Shakespeare",
  },
  {
    quote: "Trouble is only opportunity in work clothes.",
    source: "Henry J. Kaiser",
  },
  {
    quote: "A rolling stone gathers no moss.",
    source: "Publilius Syrus",
  },
  {
    quote: "Ideas are the beginning points of all fortunes.",
    source: "Napoleon Hill",
  },
  {
    quote: "Everything in life is luck.",
    source: "Donald Trump",
  },
  {
    quote: "Doing nothing is better than being busy doing nothing.",
    source: "Lao Tzu",
  },
  {
    quote: "Trust yourself. You know more than you think you do.",
    source: "Benjamin Spock",
  },
  {
    quote: "Study the past, if you would divine the future.",
    source: "Confucius",
  },
  {
    quote: "The day is already blessed, find peace within it.",
    source: null,
  },
  {
    quote: "From error to error one discovers the entire truth.",
    source: "Sigmund Freud",
  },
  {
    quote: "Well done is better than well said.",
    source: "Benjamin Franklin",
  },
  {
    quote: "Bite off more than you can chew, then chew it.",
    source: "Ella Williams",
  },
  {
    quote: "Work out your own salvation. Do not depend on others.",
    source: "Buddha",
  },
  {
    quote: "One today is worth two tomorrows.",
    source: "Benjamin Franklin",
  },
  {
    quote: "Once you choose hope, anythings possible.",
    source: "Christopher Reeve",
  },
  {
    quote: "God always takes the simplest way.",
    source: "Albert Einstein",
  },
  {
    quote: "One fails forward toward success.",
    source: "Charles Kettering",
  },
  {
    quote: "From small beginnings come great things.",
    source: null,
  },
  {
    quote: "Learning is a treasure that will follow its owner everywhere",
    source: "Chinese proverb",
  },
  {
    quote: "Be as you wish to seem.",
    source: "Socrates",
  },
  {
    quote: "The world is always in movement.",
    source: "V. Naipaul",
  },
  {
    quote: "Never mistake activity for achievement.",
    source: "John Wooden",
  },
  {
    quote: "What worries you masters you.",
    source: "Haddon Robinson",
  },
  {
    quote: "One faces the future with ones past.",
    source: "Pearl Buck",
  },
  {
    quote: "Goals are the fuel in the furnace of achievement.",
    source: "Brian Tracy",
  },
  {
    quote: "Who sows virtue reaps honour.",
    source: "Leonardo da Vinci",
  },
  {
    quote: "Be kind whenever possible. It is always possible.",
    source: "Dalai Lama",
  },
  {
    quote: "Talk doesn't cook rice.",
    source: "Chinese proverb",
  },
  {
    quote: "He is able who thinks he is able.",
    source: "Buddha",
  },
  {
    quote: "A goal without a plan is just a wish.",
    source: "Larry Elder",
  },
  {
    quote: "To succeed, we must first believe that we can.",
    source: "Michael Korda",
  },
  {
    quote: "Learn from yesterday, live for today, hope for tomorrow.",
    source: "Albert Einstein",
  },
  {
    quote: "A weed is no more than a flower in disguise.",
    source: "James Lowell",
  },
  {
    quote: "Do, or do not. There is no try.",
    source: "Yoda",
  },
  {
    quote: "All serious daring starts from within.",
    source: "Harriet Beecher Stowe",
  },
  {
    quote: "The best teacher is experience learned from failures.",
    source: "Byron Pulsifer",
  },
  {
    quote: "Think how hard physics would be if particles could think.",
    source: "Murray Gell-Mann",
  },
  {
    quote: "Love is the flower you've got to let grow.",
    source: "John Lennon",
  },
  {
    quote: "Don't wait. The time will never be just right.",
    source: "Napoleon Hill",
  },
  {
    quote: "Time is the wisest counsellor of all.",
    source: "Pericles",
  },
  {
    quote: "You give before you get.",
    source: "Napoleon Hill",
  },
  {
    quote: "Wisdom begins in wonder.",
    source: "Socrates",
  },
  {
    quote: "Without courage, wisdom bears no fruit.",
    source: "Baltasar Gracian",
  },
  {
    quote: "Change in all things is sweet.",
    source: "Aristotle",
  },
  {
    quote: "What you fear is that which requires action to overcome.",
    source: "Byron Pulsifer",
  },
  {
    quote: "When performance exceeds ambition, the overlap is called success.",
    source: "Cullen Hightower",
  },
  {
    quote: "When deeds speak, words are nothing.",
    source: "African proverb",
  },
  {
    quote:
      "Real magic in relationships means an absence of judgement of others.",
    source: "Wayne Dyer",
  },
  {
    quote: "I never think of the future. It comes soon enough.",
    source: "Albert Einstein",
  },
  {
    quote: "Skill to do comes of doing.",
    source: "Ralph Emerson",
  },
  {
    quote: "Wisdom is the supreme part of happiness.",
    source: "Sophocles",
  },
  {
    quote: "I believe that every person is born with talent.",
    source: "Maya Angelou",
  },
  {
    quote: "Important principles may, and must, be inflexible.",
    source: "Abraham Lincoln",
  },
  {
    quote: "The undertaking of a new action brings new strength.",
    source: "Richard Evans",
  },
  {
    quote: "The years teach much which the days never know.",
    source: "Ralph Emerson",
  },
  {
    quote: "Our distrust is very expensive.",
    source: "Ralph Emerson",
  },
  {
    quote: "All know the way; few actually walk it.",
    source: "Bodhidharma",
  },
  {
    quote: "Great talent finds happiness in execution.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote: "Faith in oneself is the best and safest course.",
    source: "Michelangelo",
  },
  {
    quote:
      "Courage is going from failure to failure without losing enthusiasm.",
    source: "Winston Churchill",
  },
  {
    quote: "The two most powerful warriors are patience and time.",
    source: "Leo Tolstoy",
  },
  {
    quote: "Anticipate the difficult by managing the easy.",
    source: "Lao Tzu",
  },
  {
    quote: "Those who are free of resentful thoughts surely find peace.",
    source: "Buddha",
  },
  {
    quote: "A short saying often contains much wisdom.",
    source: "Sophocles",
  },
  {
    quote: "It takes both sunshine and rain to make a rainbow.",
    source: null,
  },
  {
    quote: "A beautiful thing is never perfect.",
    source: null,
  },
  {
    quote: "Only do what your heart tells you.",
    source: "Princess Diana",
  },
  {
    quote: "Life is movement-we breathe, we eat, we walk, we move!",
    source: "John Pierrakos",
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    source: "Eleanor Roosevelt",
  },
  {
    quote: "Argue for your limitations, and sure enough theyre yours.",
    source: "Richard Bach",
  },
  {
    quote: "Luck is what happens when preparation meets opportunity.",
    source: "Seneca",
  },
  {
    quote: "Victory belongs to the most persevering.",
    source: "Napoleon Bonaparte",
  },
  {
    quote: "Love all, trust a few, do wrong to none.",
    source: "William Shakespeare",
  },
  {
    quote: "In order to win, you must expect to win.",
    source: "Richard Bach",
  },
  {
    quote: "A goal is a dream with a deadline.",
    source: "Napoleon Hill",
  },
  {
    quote: "You can do it if you believe you can!",
    source: "Napoleon Hill",
  },
  {
    quote: "Set your goals high, and don't stop till you get there.",
    source: "Bo Jackson",
  },
  {
    quote: "Every new day is another chance to change your life.",
    source: null,
  },
  {
    quote: "Smile, breathe, and go slowly.",
    source: "Thich Nhat Hanh",
  },
  {
    quote: "Nobody will believe in you unless you believe in yourself.",
    source: "Liberace",
  },
  {
    quote: "Do more than dream: work.",
    source: "William Arthur Ward",
  },
  {
    quote: "No man was ever wise by chance.",
    source: "Seneca",
  },
  {
    quote: "Some pursue happiness, others create it.",
    source: null,
  },
  {
    quote: "He that is giddy thinks the world turns round.",
    source: "William Shakespeare",
  },
  {
    quote: "Don't ruin the present with the ruined past.",
    source: "Ellen Gilchrist",
  },
  {
    quote: "Do something wonderful, people may imitate it.",
    source: "Albert Schweitzer",
  },
  {
    quote: "We do what we do because we believe.",
    source: null,
  },
  {
    quote: "Do one thing every day that scares you.",
    source: "Eleanor Roosevelt",
  },
  {
    quote: "If you cannot be silent be brilliant and thoughtful.",
    source: "Byron Pulsifer",
  },
  {
    quote: "Who looks outside, dreams; who looks inside, awakes.",
    source: "Carl Jung",
  },
  {
    quote: "What we think, we become.",
    source: "Buddha",
  },
  {
    quote: "The shortest answer is doing.",
    source: "Lord Herbert",
  },
  {
    quote: "All our knowledge has its origins in our perceptions.",
    source: "Leonardo da Vinci",
  },
  {
    quote: "The harder you fall, the higher you bounce.",
    source: null,
  },
  {
    quote: "Trusting our intuition often saves us from disaster.",
    source: "Anne Wilson Schaef",
  },
  {
    quote: "Truth is powerful and it prevails.",
    source: "Sojourner Truth",
  },
  {
    quote: "Light tomorrow with today!",
    source: "Elizabeth Browning",
  },
  {
    quote: "Silence is a fence around wisdom.",
    source: "German proverb",
  },
  {
    quote: "Society develops wit, but its contemplation alone forms genius.",
    source: "Madame de Stael",
  },
  {
    quote: "The simplest things are often the truest.",
    source: "Richard Bach",
  },
  {
    quote: "Everyone smiles in the same language.",
    source: null,
  },
  {
    quote: "Yesterday I dared to struggle. Today I dare to win.",
    source: "Bernadette Devlin",
  },
  {
    quote: "No alibi will save you from accepting the responsibility.",
    source: "Napoleon Hill",
  },
  {
    quote: "If you can dream it, you can do it.",
    source: "Walt Disney",
  },
  {
    quote: "It is better to travel well than to arrive.",
    source: "Buddha",
  },
  {
    quote: "Life shrinks or expands in proportion to one's courage.",
    source: "Anais Nin",
  },
  {
    quote: "You have to believe in yourself.",
    source: "Sun Tzu",
  },
  {
    quote: "Our intention creates our reality.",
    source: "Wayne Dyer",
  },
  {
    quote: "Silence is a true friend who never betrays.",
    source: "Confucius",
  },
  {
    quote: "Character develops itself in the stream of life.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote: "From little acorns mighty oaks do grow.",
    source: "American proverb",
  },
  {
    quote: "You can't stop the waves, but you can learn to surf.",
    source: "Jon Kabat-Zinn",
  },
  {
    quote: "Reality does not conform to the ideal, but confirms it.",
    source: "Gustave Flaubert",
  },
  {
    quote: "Speak low, if you speak love.",
    source: "William Shakespeare",
  },
  {
    quote: "A really great talent finds its happiness in execution.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote: "Reality leaves a lot to the imagination.",
    source: "John Lennon",
  },
  {
    quote: "The greatest remedy for anger is delay.",
    source: "Seneca",
  },
  {
    quote: "Growth itself contains the germ of happiness.",
    source: "Pearl Buck",
  },
  {
    quote: "You can do what's reasonable or you can decide what's possible.",
    source: null,
  },
  {
    quote: "Nothing strengthens sourceity so much as silence.",
    source: "Leonardo da Vinci",
  },
  {
    quote: "Wherever you go, go with all your heart.",
    source: "Confucius",
  },
  {
    quote: "The only real valuable thing is intuition.",
    source: "Albert Einstein",
  },
  {
    quote: "Good luck is another name for tenacity of purpose.",
    source: "Ralph Emerson",
  },
  {
    quote: "Rainbows apologize for angry skies.",
    source: "Sylvia Voirol",
  },
  {
    quote: "Friendship isn't a big thing. It's a million little things.",
    source: null,
  },
  {
    quote: "Time is the most valuable thing a man can spend.",
    source: "Theophrastus",
  },
  {
    quote: "Whatever happens, take responsibility.",
    source: "Tony Robbins",
  },
  {
    quote: "Experience is simply the name we give our mistakes.",
    source: "Oscar Wilde",
  },
  {
    quote: "I think and that is all that I am.",
    source: "Wayne Dyer",
  },
  {
    quote: "A good plan today is better than a perfect plan tomorrow.",
    source: null,
  },
  {
    quote: "If the shoe doesn't fit, must we change the foot?",
    source: "Gloria Steinem",
  },
  {
    quote: "Each day provides its own gifts.",
    source: "Marcus Aurelius",
  },
  {
    quote: "While we stop to think, we often miss our opportunity.",
    source: "Publilius Syrus",
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    source: "Bernard Shaw",
  },
  {
    quote: "To bring anything into your life, imagine that it's already there.",
    source: "Richard Bach",
  },
  {
    quote: "Begin to weave and God will give you the thread.",
    source: "German proverb",
  },
  {
    quote: "The more you know yourself, the more you forgive yourself.",
    source: "Confucius",
  },
  {
    quote:
      "Someone remembers, someone cares; your name is whispered in someone's prayers.",
    source: null,
  },
  {
    quote:
      "Without faith, nothing is possible. With it, nothing is impossible.",
    source: "Mary Bethune",
  },
  {
    quote: "Once we accept our limits, we go beyond them.",
    source: "Albert Einstein",
  },
  {
    quote: "Don't be pushed by your problems; be led by your dreams.",
    source: null,
  },
  {
    quote:
      "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
    source: "Brian Tracy",
  },
  {
    quote: "Everything you can imagine is real.",
    source: "Pablo Picasso",
  },
  {
    quote: "Fear is a darkroom where negatives develop.",
    source: "Usman Asif",
  },
  {
    quote: "The truest wisdom is a resolute determination.",
    source: "Napoleon Bonaparte",
  },
  {
    quote: "Life is the flower for which love is the honey.",
    source: "Victor Hugo",
  },
  {
    quote: "Freedom is the right to live as we wish.",
    source: "Epictetus",
  },
  {
    quote: "Change your thoughts, change your life!",
    source: null,
  },
  {
    quote: "Never ignore a gut feeling, but never believe that it's enough.",
    source: "Robert Heller",
  },
  {
    quote: "Loss is nothing else but change,and change is Natures delight.",
    source: "Marcus Aurelius",
  },
  {
    quote: "Someone is special only if you tell them.",
    source: "Byron Pulsifer",
  },
  {
    quote: "Today is the tomorrow you worried about yesterday.",
    source: null,
  },
  {
    quote: "There is no way to happiness, happiness is the way.",
    source: "Thich Nhat Hanh",
  },
  {
    quote: "The day always looks brighter from behind a smile.",
    source: null,
  },
  {
    quote: "A stumble may prevent a fall.",
    source: null,
  },
  {
    quote: "He who talks more is sooner exhausted.",
    source: "Lao Tzu",
  },
  {
    quote: "He who is contented is rich.",
    source: "Lao Tzu",
  },
  {
    quote: "What we achieve inwardly will change outer reality.",
    source: "Plutarch",
  },
  {
    quote: "Our strength grows out of our weaknesses.",
    source: "Ralph Waldo Emerson",
  },
  {
    quote: "We must become the change we want to see.",
    source: "Mahatma Gandhi",
  },
  {
    quote: "Happiness is found in doing, not merely possessing.",
    source: "Napoleon Hill",
  },
  {
    quote: "Put your future in good hands your own.",
    source: null,
  },
  {
    quote: "We choose our destiny in the way we treat others.",
    source: "Wit",
  },
  {
    quote: "No snowflake in an avalanche ever feels responsible.",
    source: "Voltaire",
  },
  {
    quote: "Fortune favours the brave.",
    source: "Virgil",
  },
  {
    quote: "I believe in one thing only, the power of human will.",
    source: "Joseph Stalin",
  },
  {
    quote: "The best way out is always through.",
    source: "Robert Frost",
  },
  {
    quote: "The mind unlearns with difficulty what it has long learned.",
    source: "Seneca",
  },
  {
    quote: "I destroy my enemies when I make them my friends.",
    source: "Abraham Lincoln",
  },
  {
    quote: "No garden is without its weeds.",
    source: "Thomas Fuller",
  },
  {
    quote: "There is no failure except in no longer trying.",
    source: "Elbert Hubbard",
  },
  {
    quote: "Kind words will unlock an iron door.",
    source: "Turkish proverb",
  },
  {
    quote: "Problems are only opportunities with thorns on them.",
    source: "Hugh Miller",
  },
  {
    quote: "Life is just a chance to grow a soul.",
    source: "A. Powell Davies",
  },
  {
    quote: "Mountains cannot be surmounted except by winding paths.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote: "May our hearts garden of awakening bloom with hundreds of flowers.",
    source: "Thich Nhat Hanh",
  },
  {
    quote: "Fortune befriends the bold.",
    source: "John Dryden",
  },
  {
    quote: "Keep true to the dreams of thy youth.",
    source: "Friedrich von Schiller",
  },
  {
    quote: "You're never a loser until you quit trying.",
    source: "Mike Ditka",
  },
  {
    quote: "Science is organized knowledge. Wisdom is organized life.",
    source: "Immanuel Kant",
  },
  {
    quote: "Knowing is not enough; we must apply!",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote: "Strong beliefs win strong men, and then make them stronger.",
    source: "Richard Bach",
  },
  {
    quote: "Autumn is a second spring when every leaf is a flower.",
    source: "Albert Camus",
  },
  {
    quote: "If you surrender to the wind, you can ride it.",
    source: "Toni Morrison",
  },
  {
    quote: "Keep yourself to the sunshine and you cannot see the shadow.",
    source: "Helen Keller",
  },
  {
    quote: "Write your plans in pencil and give God the eraser.",
    source: "Paulo Coelho",
  },
  {
    quote: "Inspiration exists, but it has to find us working.",
    source: "Pablo Picasso",
  },
  {
    quote: "Pick battles big enough to matter, small enough to win.",
    source: "Jonathan Kozol",
  },
  {
    quote: "Don't compromise yourself. You are all you've got.",
    source: "Janis Joplin",
  },
  {
    quote: "A short saying oft contains much wisdom.",
    source: "Sophocles",
  },
  {
    quote: "Difficulties are things that show a person what they are.",
    source: "Epictetus",
  },
  {
    quote: "When you doubt your power, you give power to your doubt.",
    source: "Honore de Balzac",
  },
  {
    quote: "The cause is hidden. The effect is visible to all.",
    source: "Ovid",
  },
  {
    quote: "A prudent question is one half of wisdom.",
    source: "Francis Bacon",
  },
  {
    quote: "The path to success is to take massive, determined action.",
    source: "Tony Robbins",
  },
  {
    quote: "I allow my intuition to lead my path.",
    source: "Manuel Puig",
  },
  {
    quote: "Nature takes away any faculty that is not used.",
    source: "William R. Inge",
  },
  {
    quote: "If you wish to be a writer, write.",
    source: "Epictetus",
  },
  {
    quote: "There is no way to prosperity, prosperity is the way.",
    source: "Wayne Dyer",
  },
  {
    quote: "Either you run the day or the day runs you.",
    source: "Jim Rohn",
  },
  {
    quote: "Better be ignorant of a matter than half know it.",
    source: "Publilius Syrus",
  },
  {
    quote: "Follow your instincts. That is where true wisdom manifests itself.",
    source: "Oprah Winfrey",
  },
  {
    quote: "There never was a good knife made of bad steel.",
    source: "Benjamin Franklin",
  },
  {
    quote: "To accomplish great things, we must dream as well as act.",
    source: "Anatole France",
  },
  {
    quote: "Patience is the companion of wisdom.",
    source: "Saint Augustine",
  },
  {
    quote: "The mind is everything. What you think you become.",
    source: "Buddha",
  },
  {
    quote: "To enjoy life, we must touch much of it lightly.",
    source: "Voltaire",
  },
  {
    quote: "To fly, we have to have resistance.",
    source: "Maya Lin",
  },
  {
    quote: "What you see depends on what you're looking for.",
    source: null,
  },
  {
    quote: "The heart has its reasons which reason knows not of.",
    source: "Blaise Pascal",
  },
  {
    quote: "Be great in act, as you have been in thought.",
    source: "William Shakespeare",
  },
  {
    quote: "Imagination rules the world.",
    source: "Napoleon Bonaparte",
  },
  {
    quote: "Kind words do not cost much. Yet they accomplish much.",
    source: "Blaise Pascal",
  },
  {
    quote: "There is no greater harm than that of time wasted.",
    source: "Michelangelo",
  },
  {
    quote: "Intuition will tell the thinking mind where to look next.",
    source: "Jonas Salk",
  },
  {
    quote: "Worry gives a small thing a big shadow.",
    source: null,
  },
  {
    quote: "Fears are nothing more than a state of mind.",
    source: "Napoleon Hill",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    source: "Lao Tzu",
  },
  {
    quote:
      "Efficiency is doing things right; effectiveness is doing the right things.",
    source: "Peter Drucker",
  },
  {
    quote: "Blaze with the fire that is never extinguished.",
    source: "Luisa Sigea",
  },
  {
    quote: "Don't cry because it's over. Smile because it happened.",
    source: "Dr. Seuss",
  },
  {
    quote: "No is easier to do. Yes is easier to say.",
    source: "Jason Fried",
  },
  {
    quote: "To be wrong is nothing unless you continue to remember it.",
    source: "Confucius",
  },
  {
    quote: "Yesterdays home runs don't win today's games.",
    source: "Babe Ruth",
  },
  {
    quote: "Silence is deep as Eternity, Speech is shallow as Time.",
    source: "Carlyle",
  },
  {
    quote: "Don't smother each other. No one can grow in the shade.",
    source: "Leo F. Buscaglia",
  },
  {
    quote: "An ant on the move does more than a dozing ox",
    source: "Lao Tzu",
  },
  {
    quote: "You can't shake hands with a clenched fist.",
    source: "Indira Gandhi",
  },
  {
    quote: "A good decision is based on knowledge and not on numbers.",
    source: "Plato",
  },
  {
    quote: "The cautious seldom err.",
    source: "Confucius",
  },
  {
    quote: "If there is no struggle, there is no progress.",
    source: "Frederick Douglass",
  },
  {
    quote: "Where there is great love, there are always miracles.",
    source: "Willa Cather",
  },
  {
    quote: "Time you enjoy wasting, was not wasted.",
    source: "John Lennon",
  },
  {
    quote: "Every problem has a gift for you in its hands.",
    source: "Richard Bach",
  },
  {
    quote: "Sadness flies away on the wings of time.",
    source: "Jean de la Fontaine",
  },
  {
    quote: "I have often regretted my speech, never my silence.",
    source: "Publilius Syrus",
  },
  {
    quote: "Never put off till tomorrow what you can do today.",
    source: "Thomas Jefferson",
  },
  {
    quote: "Minds are like parachutes. They only function when open.",
    source: "Thomas Dewar",
  },
  {
    quote: "If a man does his best, what else is there?",
    source: "George Patton",
  },
  {
    quote: "The secret of success is constancy to purpose.",
    source: "Benjamin Disraeli",
  },
  {
    quote: "Life is a progress, and not a station.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "All seasons are beautiful for the person who carries happiness within.",
    source: "Horace Friess",
  },
  {
    quote: "To avoid criticism, do nothing, say nothing, be nothing.",
    source: "Elbert Hubbard",
  },
  {
    quote: "All things change; nothing perishes.",
    source: "Ovid",
  },
  {
    quote: "Absence makes the heart grow fonder.",
    source: "Haynes Bayly",
  },
  {
    quote: "Imagination is the highest kite one can fly.",
    source: "Lauren Bacall",
  },
  {
    quote:
      "The beginning of knowledge is the discovery of something we do not understand.",
    source: "Frank Herbert",
  },
  {
    quote:
      "Love doesn't make the world go round, love is what makes the ride worthwhile.",
    source: "Elizabeth Browning",
  },
  {
    quote:
      "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    source: "Arthur Conan Doyle",
  },
  {
    quote:
      "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
    source: "J. Willard Marriott",
  },
  {
    quote:
      "I believe that we are fundamentally the same and have the same basic potential.",
    source: "Dalai Lama",
  },
  {
    quote:
      "The winds and waves are always on the side of the ablest navigators.",
    source: "Edward Gibbon",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
  },
  {
    quote:
      "To get something you never had, you have to do something you never did.",
    source: null,
  },
  {
    quote:
      "Be thankful when you don't know something for it gives you the opportunity to learn.",
    source: null,
  },
  {
    quote:
      "Strength does not come from physical capacity. It comes from an indomitable will.",
    source: "Mahatma Gandhi",
  },
  {
    quote:
      "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
    source: "Og Mandino",
  },
  {
    quote:
      "To forgive is to set a prisoner free and realize that prisoner was you.",
    source: "Lewis B. Smedes",
  },
  {
    quote:
      "In separateness lies the world's great misery, in compassion lies the world's true strength.",
    source: "Buddha",
  },
  {
    quote:
      "By believing passionately in something that does not yet exist, we create it.",
    source: "Nikos Kazantzakis",
  },
  {
    quote:
      "Letting go is not the end of the world; it is the beginning of a new life.",
    source: null,
  },
  {
    quote:
      "All the great performers I have worked with are fuelled by a personal dream.",
    source: "John Eliot",
  },
  {
    quote:
      "One of the advantages of being disorderly is that one is constantly making exciting discoveries.",
    source: "A. A. Milne",
  },
  {
    quote:
      "I never see what has been done; I only see what remains to be done.",
    source: "Marie Curie",
  },
  {
    quote:
      "Begin at once to live and count each separate day as a separate life.",
    source: "Seneca",
  },
  {
    quote:
      "If you don't know where you are going, you will probably end up somewhere else.",
    source: "Lawrence Peter",
  },
  {
    quote:
      "It is not so important to know everything as to appreciate what we learn.",
    source: "Hannah More",
  },
  {
    quote:
      "The bird of paradise alights only upon the hand that does not grasp.",
    source: "John Berry",
  },
  {
    quote: "Think as a wise man but communicate in the language of the people.",
    source: "William Yeats",
  },
  {
    quote:
      "Practice yourself, for heavens sake in little things, and then proceed to greater.",
    source: "Epictetus",
  },
  {
    quote:
      "If one does not know to which port is sailing, no wind is favorable.",
    source: "Seneca",
  },
  {
    quote:
      "Our greatest glory is not in never failing but rising everytime we fall.",
    source: null,
  },
  {
    quote:
      "Being right is highly overrated. Even a stopped clock is right twice a day.",
    source: null,
  },
  {
    quote: "To be upset over what you don't have is to waste what you do have.",
    source: "Ken S. Keyes",
  },
  {
    quote:
      "If we did the things we are capable of, we would astound ourselves.",
    source: "Thomas Edison",
  },
  {
    quote: "Nothing in life is to be feared. It is only to be understood.",
    source: "Marie Curie",
  },
  {
    quote:
      "Successful people ask better questions, and as a result, they get better answers.",
    source: "Tony Robbins",
  },
  {
    quote:
      "Love is not blind; it simply enables one to see things others fail to see.",
    source: null,
  },
  {
    quote: "Life is a process. We are a process. The universe is a process.",
    source: "Anne Schaef",
  },
  {
    quote:
      "I think somehow we learn who we really are and then live with that decision.",
    source: "Eleanor Roosevelt",
  },
  {
    quote: "We learn what we have said from those who listen to our speaking.",
    source: "Kenneth Patton",
  },
  {
    quote:
      "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
    source: "Kahlil Gibran",
  },
  {
    quote:
      "If you get up one more time than you fall, you will make it through.",
    source: null,
  },
  {
    quote: "The doors we open and close each day decide the lives we live.",
    source: "Flora Whittemore",
  },
  {
    quote:
      "The worst bankrupt in the world is the person who has lost his enthusiasm.",
    source: "H. W. Arnold",
  },
  {
    quote:
      "Happiness comes when your work and words are of benefit to yourself and others.",
    source: "Buddha",
  },
  {
    quote:
      "Don't focus on making the right decision, focus on making the decision the right one.",
    source: null,
  },
  {
    quote:
      "Everything is perfect in the universe even your desire to improve it.",
    source: "Wayne Dyer",
  },
  {
    quote:
      "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
    source: "Eden Phillpotts",
  },
  {
    quote:
      "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
    source: "Buddha",
  },
  {
    quote:
      "A thing long expected takes the form of the unexpected when at last it comes.",
    source: "Mark Twain",
  },
  {
    quote:
      "Action may not always bring happiness; but there is no happiness without action.",
    source: "Benjamin Disraeli",
  },
  {
    quote:
      "I don't believe in failure. It is not failure if you enjoyed the process.",
    source: "Oprah Winfrey",
  },
  {
    quote: "What you do not want done to yourself, do not do to others.",
    source: "Confucius",
  },
  {
    quote: "Short words are best and the old words when short are best of all.",
    source: "Winston Churchill",
  },
  {
    quote: "If you light a lamp for somebody, it will also brighten your path.",
    source: "Buddha",
  },
  {
    quote:
      "I have done my best: that is about all the philosophy of living one needs.",
    source: "Lin-yutang",
  },
  {
    quote:
      "Through perseverance many people win success out of what seemed destined to be certain failure.",
    source: "Benjamin Disraeli",
  },
  {
    quote:
      "Give thanks for the rain of life that propels us to reach new horizons.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Love is just a word until someone comes along and gives it meaning.",
    source: null,
  },
  {
    quote:
      "We all have problems. The way we solve them is what makes us different.",
    source: null,
  },
  {
    quote: "The secret to a rich life is to have more beginnings than endings.",
    source: "Dave Weinbaum",
  },
  {
    quote:
      "It is only when the mind and character slumber that the dress can be seen.",
    source: "Ralph Waldo Emerson",
  },
  {
    quote:
      "If you don't like something, change it. If you can't change it, change your attitude.",
    source: "Maya Angelou",
  },
  {
    quote:
      "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
    source: "Confucius",
  },
  {
    quote: "The world is a book, and those who do not travel read only a page.",
    source: "Augustinus Sanctus",
  },
  {
    quote:
      "So long as a person is capable of self-renewal they are a living being.",
    source: "Henri-Frederic Amiel",
  },
  {
    quote: "I'm not afraid of storms, for I'm learning how to sail my ship.",
    source: "Louisa Alcott",
  },
  {
    quote:
      "Think for yourselves and let others enjoy the privilege to do so too.",
    source: "Voltaire",
  },
  {
    quote: "How we spend our days is, of course, how we spend our lives.",
    source: "Annie Dillard",
  },
  {
    quote:
      "It has never been my object to record my dreams, just to realize them.",
    source: "Man Ray",
  },
  {
    quote:
      "The most complicated achievements of thought are possible without the assistance of consciousness.",
    source: "Sigmund Freud",
  },
  {
    quote:
      "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
    source: "Wayne Dyer",
  },
  {
    quote:
      "Most great people have attained their greatest success just one step beyond their greatest failure.",
    source: "Napoleon Hill",
  },
  {
    quote:
      "If you think you can, you can. And if you think you can't, you're right.",
    source: "Henry Ford",
  },
  {
    quote: "Better to have loved and lost, than to have never loved at all.",
    source: "St. Augustine",
  },
  {
    quote:
      "Everyone thinks of changing the world, but no one thinks of changing himself.",
    source: "Leo Tolstoy",
  },
  {
    quote: "The best way to pay for a lovely moment is to enjoy it.",
    source: "Richard Bach",
  },
  {
    quote:
      "You have enemies? Good. That means you've stood up for something, sometime in your life.",
    source: "Winston Churchill",
  },
  {
    quote:
      "Slow down and everything you are chasing will come around and catch you.",
    source: "John De Paola",
  },
  {
    quote:
      "Your worst enemy cannot harm you as much as your own unguarded thoughts.",
    source: "Buddha",
  },
  {
    quote:
      "I always wanted to be somebody, but I should have been more specific.",
    source: "Lily Tomlin",
  },
  {
    quote: "Yeah we all shine on, like the moon, and the stars, and the sun.",
    source: "John Lennon",
  },
  {
    quote:
      "Knowledge is a process of piling up facts; wisdom lies in their simplification.",
    source: "Martin Fischer",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    source: "Albert Einstein",
  },
  {
    quote:
      "We should all be thankful for those people who rekindle the inner spirit.",
    source: "Albert Schweitzer",
  },
  {
    quote:
      "Opportunity is missed by most because it is dressed in overalls and looks like work.",
    source: "Thomas Edison",
  },
  {
    quote:
      "Feeling and longing are the motive forces behind all human endeavor and human creations.",
    source: "Albert Einstein",
  },
  {
    quote:
      "In the end we retain from our studies only that which we practically apply.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "If you correct your mind, the rest of your life will fall into place.",
    source: "Lao Tzu",
  },
  {
    quote: "The world makes way for the man who knows where he is going.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "When your desires are strong enough you will appear to possess superhuman powers to achieve.",
    source: "Napoleon Hill",
  },
  {
    quote:
      "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
    source: "John Adams",
  },
  {
    quote: "I cannot make my days longer so I strive to make them better.",
    source: "Henry David Thoreau",
  },
  {
    quote: "Tension is who you think you should be. Relaxation is who you are.",
    source: "Chinese proverb",
  },
  {
    quote:
      "Never bend your head. Always hold it high. Look the world right in the eye.",
    source: "Helen Keller",
  },
  {
    quote:
      "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.",
    source: "Albert Schweitzer",
  },
  {
    quote: "We cannot do everything at once, but we can do something at once.",
    source: "Calvin Coolidge",
  },
  {
    quote:
      "You have to do your own growing no matter how tall your grandfather was.",
    source: "Abraham Lincoln",
  },
  {
    quote:
      "Invent your world. Surround yourself with people, color, sounds, and work that nourish you.",
    source: null,
  },
  {
    quote: "It is fatal to enter any war without the will to win it.",
    source: "General Douglas MacArthur",
  },
  {
    quote:
      "Be what you are. This is the first step toward becoming better than you are.",
    source: "Julius Charles Hare",
  },
  {
    quote:
      "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
    source: "Buckminster Fuller",
  },
  {
    quote:
      "Love and compassion open our own inner life, reducing stress, distrust and loneliness.",
    source: "Dalai Lama",
  },
  {
    quote:
      "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
    source: "Walter Lippmann",
  },
  {
    quote:
      "The superior man is satisfied and composed; the mean man is always full of distress.",
    source: "Confucius",
  },
  {
    quote:
      "If you spend too much time thinking about a thing, you'll never get it done.",
    source: "Bruce Lee",
  },
  {
    quote: "The way is not in the sky. The way is in the heart.",
    source: "Buddha",
  },
  {
    quote: "Most people are about as happy as they make up their minds to be",
    source: "Abraham Lincoln",
  },
  {
    quote:
      "Three things cannot be long hidden: the sun, the moon, and the truth.",
    source: "Buddha",
  },
  {
    quote:
      "More often than not, anger is actually an indication of weakness rather than of strength.",
    source: "Dalai Lama",
  },
  {
    quote:
      "Before you put on a frown, make absolutely sure there are no smiles available.",
    source: "Jim Beggs",
  },
  {
    quote:
      "A man of ability and the desire to accomplish something can do anything.",
    source: "Donald Kircher",
  },
  {
    quote:
      "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    source: "Buddha",
  },
  {
    quote:
      "It is not uncommon for people to spend their whole life waiting to start living.",
    source: "Eckhart Tolle",
  },
  {
    quote: "Don't be afraid to go out on a limb. That's where the fruit is.",
    source: "H. Jackson Browne",
  },
  {
    quote:
      "Wicked people are always surprised to find ability in those that are good.",
    source: "Marquis Vauvenargues",
  },
  {
    quote:
      "Life is so constructed that an event does not, cannot, will not, match the expectation.",
    source: "Charlotte Bronte",
  },
  {
    quote:
      "If you change the way you look at things, the things you look at change.",
    source: "Wayne Dyer",
  },
  {
    quote: "No man can succeed in a line of endeavor which he does not like.",
    source: "Napoleon Hill",
  },
  {
    quote:
      "You will not be punished for your anger, you will be punished by your anger.",
    source: "Buddha",
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds you plant.",
    source: "Robert Stevenson",
  },
  {
    quote:
      "They say that time changes things, but you actually have to change them yourself.",
    source: "Andy Warhol",
  },
  {
    quote:
      "Never apologize for showing feelings. When you do so, you apologize for the truth.",
    source: "Benjamin Disraeli",
  },
  {
    quote:
      "The truth you believe and cling to makes you unavailable to hear anything new.",
    source: "Pema Chodron",
  },
  {
    quote:
      "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.",
    source: "Horace",
  },
  {
    quote:
      "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
    source: "Morris West",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    source: "Franklin Roosevelt",
  },
  {
    quote:
      "Every action of our lives touches on some chord that will vibrate in eternity.",
    source: "Edwin Chapin",
  },
  {
    quote: "Shoot for the moon. Even if you miss, you'll land among the stars.",
    source: "Les Brown",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "Confucius",
  },
  {
    quote:
      "Every day may not be good, but there's something good in every day.",
    source: null,
  },
  {
    quote: "Most folks are about as happy as they make up their minds to be.",
    source: "Abraham Lincoln",
  },
  {
    quote:
      "If you would take, you must first give, this is the beginning of intelligence.",
    source: "Lao Tzu",
  },
  {
    quote:
      "Some people think it's holding that makes one strong sometimes it's letting go.",
    source: null,
  },
  {
    quote:
      "It is on our failures that we base a new and different and better success.",
    source: "Havelock Ellis",
  },
  {
    quote:
      "Quality is never an accident; it is always the result of intelligent effort.",
    source: "John Ruskin",
  },
  {
    quote:
      "To study and not think is a waste. To think and not study is dangerous.",
    source: "Confucius",
  },
  {
    quote:
      "Life is a succession of lessons, which must be lived to be understood.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "Time changes everything except something within us which is always surprised by change.",
    source: "Thomas Hardy",
  },
  {
    quote:
      "You are important enough to ask and you are blessed enough to receive back.",
    source: "Wayne Dyer",
  },
  {
    quote: "If you cannot do great things, do small things in a great way.",
    source: "Napoleon Hill",
  },
  {
    quote:
      "If you want your life to be more rewarding, you have to change the way you think.",
    source: "Oprah Winfrey",
  },
  {
    quote:
      "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
    source: "Leonardo Ruiz",
  },
  {
    quote:
      "The free man is he who does not fear to go to the end of his thought.",
    source: "Leon Blum",
  },
  {
    quote:
      "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
    source: "Bernard Shaw",
  },
  {
    quote:
      "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.",
    source: "Lao Tzu",
  },
  {
    quote:
      "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
    source: "Charles Dickens",
  },
  {
    quote:
      "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
    source: "Dalai Lama",
  },
  {
    quote:
      "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
    source: "Sam Keen",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    source: "Walt Emerson",
  },
  {
    quote:
      "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
    source: "John Astin",
  },
  {
    quote:
      "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
    source: "Elbert Hubbard",
  },
  {
    quote:
      "There is no retirement for an artist, it's your way of living so there is no end to it.",
    source: "Henry Moore",
  },
  {
    quote:
      "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
    source: "Confucius",
  },
  {
    quote:
      "Why worry about things you cannot control when you can keep yourself busy controlling the things that depend on you?",
    source: null,
  },
  {
    quote:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    source: "Laozi",
  },
  {
    quote:
      "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.",
    source: "William Shakespeare",
  },
  {
    quote:
      "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
    source: "George Sheehan",
  },
  {
    quote:
      "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
    source: "Thomas Jefferson",
  },
  {
    quote:
      "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
    source: "Antoine de Saint-Exupery",
  },
  {
    quote:
      "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.",
    source: "Marcel Proust",
  },
  {
    quote:
      "Make the best use of what is in your power, and take the rest as it happens.",
    source: "Epictetus",
  },
  {
    quote:
      "The thoughts we choose to think are the tools we use to paint the canvas of our lives.",
    source: "Louise Hay",
  },
  {
    quote:
      "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.",
    source: "W. Clement Stone",
  },
  {
    quote:
      "The reason most goals are not achieved is that we spend our time doing second things first.",
    source: "Robert McKain",
  },
  {
    quote:
      "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    source: "John Quincy Adams",
  },
  {
    quote:
      "I'm a great believer in luck and I find the harder I work, the more I have of it.",
    source: "Thomas Jefferson",
  },
  {
    quote:
      "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "The person born with a talent they are meant to use will find their greatest happiness in using it.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
    source: "William Saroyan",
  },
  {
    quote:
      "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
    source: "Leonardo da Vinci",
  },
  {
    quote:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    source: "Isaac Asimov",
  },
  {
    quote:
      "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
    source: "Henry Van Dyke",
  },
  {
    quote:
      "You got to be careful if you don't know where you're going, because you might not get there.",
    source: "Yogi Berra",
  },
  {
    quote:
      "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
    source: "Naguib Mahfouz",
  },
  {
    quote:
      "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
    source: "Anthony Robbins",
  },
  {
    quote:
      "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
    source: "John Wooden",
  },
  {
    quote:
      "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.",
    source: "Og Mandino",
  },
  {
    quote:
      "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.",
    source: "Jane Addams",
  },
  {
    quote:
      "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.",
    source: "Thomas Carlyle",
  },
  {
    quote:
      "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
    source: "M. Scott Peck",
  },
  {
    quote:
      "The minute you settle for less than you deserve, you get even less than you settled for.",
    source: "Maureen Dowd",
  },
  {
    quote:
      "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
    source: "Charles Darwin",
  },
  {
    quote:
      "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
    source: null,
  },
  {
    quote:
      "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
    source: "Dalai Lama",
  },
  {
    quote:
      "There is only one success to be able to spend your life in your own way.",
    source: "Christopher Morley",
  },
  {
    quote:
      "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
    source: "Hannah Arendt",
  },
  {
    quote:
      "Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts.",
    source: "Alan Cohen",
  },
  {
    quote:
      "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    source: "Aldous Huxley",
  },
  {
    quote:
      "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
    source: "Marian Edelman",
  },
  {
    quote:
      "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.",
    source: "Sue Patton Thoele",
  },
  {
    quote:
      "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
    source: "Frank Crane",
  },
  {
    quote:
      "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
    source: "Lao Tzu",
  },
  {
    quote:
      "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
    source: "Kathleen Norris",
  },
  {
    quote:
      "Choose a job you love, and you will never have to work a day in your life.",
    source: "Confucius",
  },
  {
    quote:
      "You cannot find yourself by going into the past. You can find yourself by coming into the present.",
    source: "Eckhart Tolle",
  },
  {
    quote:
      "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
    source: "Anne Bronte",
  },
  {
    quote:
      "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.",
    source: "Richard Bach",
  },
  {
    quote:
      "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
    source: "Desiderius Erasmus",
  },
  {
    quote:
      "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
    source: "Arthur Rubinstein",
  },
  {
    quote:
      "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
    source: "Louis Pasteur",
  },
  {
    quote:
      "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
    source: "Rumi",
  },
  {
    quote:
      "We must never forget that it is through our actions, words, and thoughts that we have a choice.",
    source: "Sogyal Rinpoche",
  },
  {
    quote:
      "We see things not as they are, but as we are. Our perception is shaped by our previous experiences.",
    source: "Dennis Kimbro",
  },
  {
    quote:
      "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
    source: "William Penn",
  },
  {
    quote:
      "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
    source: "Immanuel Kant",
  },
  {
    quote:
      "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.",
    source: "Buddha",
  },
  {
    quote:
      "As the rest of the world is walking out the door, your best friends are the ones walking in.",
    source: null,
  },
  {
    quote:
      "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
    source: "Robert Lynd",
  },
  {
    quote:
      "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
    source: "Donald Trump",
  },
  {
    quote:
      "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
    source: "Eleanor Roosevelt",
  },
  {
    quote:
      "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
    source: "Robert Fulghum",
  },
  {
    quote:
      "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
    source: "Bruce Lee",
  },
  {
    quote:
      "Every man takes the limits of his own field of vision for the limits of the world.",
    source: "Arthur Schopenhauer",
  },
  {
    quote:
      "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
    source: "Andre Gide",
  },
  {
    quote:
      "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
    source: "Sai Baba",
  },
  {
    quote:
      "Genuine love should first be directed at oneself if we do not love ourselves, how can we love others?",
    source: "Dalai Lama",
  },
  {
    quote:
      "Life is like a sewer. What you get out of it depends on what you put into it.",
    source: "Tom Lehrer",
  },
  {
    quote:
      "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
    source: "Bruce Lee",
  },
  {
    quote:
      "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
    source: "Alfred Sheinwold",
  },
  {
    quote:
      "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
    source: "Sri Chinmoy",
  },
  {
    quote:
      "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
    source: "James Freeman Clarke",
  },
  {
    quote:
      "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
    source: "Anais Nin",
  },
  {
    quote:
      "Everything that happens happens as it should, and if you observe carefully, you will find this to be so.",
    source: "Marcus Aurelius",
  },
  {
    quote:
      "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
    source: "Wayne Dyer",
  },
  {
    quote:
      "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
    source: "Buddha",
  },
  {
    quote:
      "It is the greatest of all mistakes to do nothing because you can only do little do what you can.",
    source: "Sydney Smith",
  },
  {
    quote:
      "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
    source: "Confucius",
  },
  {
    quote:
      "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
    source: "Mary Kay Ash",
  },
  {
    quote:
      "Those who try to do something and fail are infinitely better than those who try nothing and succeed.",
    source: "Lloyd Jones",
  },
  {
    quote:
      "Snowflakes are one of natures most fragile things, but just look what they can do when they stick together.",
    source: "Vista Kelly",
  },
  {
    quote:
      "The first step to getting the things you want out of life is this: decide what you want.",
    source: "Ben Stein",
  },
  {
    quote:
      "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
    source: null,
  },
  {
    quote:
      "Experience is not what happens to a man. It is what a man does with what happens to him.",
    source: "Aldous Huxley",
  },
  {
    quote:
      "A good teacher is like a candle it consumes itself to light the way for others.",
    source: null,
  },
  {
    quote:
      "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
    source: "Oscar Wilde",
  },
  {
    quote:
      "Life is not measured by the breaths we take, but by the moments that take our breath.",
    source: null,
  },
  {
    quote:
      "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
    source: "Honore de Balzac",
  },
  {
    quote:
      "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
    source: "Jacob Braude",
  },
  {
    quote:
      "If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives.",
    source: "Vince Lombardi",
  },
  {
    quote:
      "What lies behind us and what lies before us are small matters compared to what lies within us.",
    source: "Oliver Holmes",
  },
  {
    quote:
      "With the realization of ones own potential and self-confidence in ones ability, one can build a better world.",
    source: "Dalai Lama",
  },
  {
    quote:
      "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.",
    source: "Nelson Mandela",
  },
  {
    quote:
      "Forget about all the reasons why something may not work. You only need to find one good reason why it will.",
    source: "Robert Anthony",
  },
  {
    quote:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    source: "Aristotle",
  },
  {
    quote:
      "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
    source: "Washington Irving",
  },
  {
    quote:
      "We all live with the objective of being happy; our lives are all different and yet the same.",
    source: "Anne Frank",
  },
  {
    quote:
      "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "To be beautiful means to be yourself. You do not need to be accepted by others. You need to accept yourself.",
    source: "Thich Nhat Hanh",
  },
  {
    quote:
      "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
    source: "Buddha",
  },
  {
    quote:
      "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.",
    source: "Jessamyn West",
  },
  {
    quote:
      "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
    source: "Plato",
  },
  {
    quote:
      "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    source: "Bruce Lee",
  },
  {
    quote:
      "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
    source: "Charlotte Gilman",
  },
  {
    quote:
      "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
    source: "Mother Teresa",
  },
  {
    quote:
      "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.",
    source: "Margaret Runbeck",
  },
  {
    quote:
      "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
    source: "Dalai Lama",
  },
  {
    quote:
      "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.",
    source: "Ovid",
  },
  {
    quote:
      "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.",
    source: "Og Mandino",
  },
  {
    quote:
      "We never understand how little we need in this world until we know the loss of it.",
    source: "James Barrie",
  },
  {
    quote:
      "The real measure of your wealth is how much youd be worth if you lost all your money.",
    source: null,
  },
  {
    quote:
      "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    source: "Buddha",
  },
  {
    quote:
      "Take no thought of who is right or wrong or who is better than. Be not for or against.",
    source: "Bruce Lee",
  },
  {
    quote:
      "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
    source: "Everett Dirksen",
  },
  {
    quote:
      "Today, give a stranger a smile without waiting for it may be the joy they need to have a great day.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
    source: "Henry Miller",
  },
  {
    quote:
      "At the center of your being you have the answer; you know who you are and you know what you want.",
    source: "Lao Tzu",
  },
  {
    quote:
      "How wonderful that we have met with a paradox. Now we have some hope of making progress.",
    source: "Niels Bohr",
  },
  {
    quote:
      "Everyone is a genius at least once a year. A real genius has his original ideas closer together.",
    source: "Georg Lichtenberg",
  },
  {
    quote:
      "Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living.",
    source: "Anais Nin",
  },
  {
    quote:
      "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
    source: "Gloria Steinem",
  },
  {
    quote:
      "Sadness may be part of life but there is no need to let it dominate your entire life.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far.",
    source: "Charles Schwab",
  },
  {
    quote:
      "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
    source: "Epictetus",
  },
  {
    quote:
      "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
    source: "Barbara Baron",
  },
  {
    quote:
      "You are always free to change your mind and choose a different future, or a different past.",
    source: "Richard Bach",
  },
  {
    quote:
      "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
    source: "Lou Holtz",
  },
  {
    quote:
      "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
    source: "Napoleon Hill",
  },
  {
    quote:
      "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.",
    source: "Napoleon Hill",
  },
  {
    quote:
      "To be what we are, and to become what we are capable of becoming, is the only end of life.",
    source: "Robert Stevenson",
  },
  {
    quote:
      "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
    source: "Charles DeLint",
  },
  {
    quote:
      "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
    source: "Bruce Lee",
  },
  {
    quote:
      "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.",
    source: "Albert Einstein",
  },
  {
    quote:
      "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    source: null,
  },
  {
    quote:
      "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
    source: "Paavo Nurmi",
  },
  {
    quote:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    source: "Anne Frank",
  },
  {
    quote:
      "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.",
    source: null,
  },
  {
    quote:
      "It is one of the blessings of old friends that you can afford to be stupid with them.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
    source: "Tryon Edwards",
  },
  {
    quote:
      "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
    source: "Abraham Lincoln",
  },
  {
    quote:
      "One must be fond of people and trust them if one is not to make a mess of life.",
    source: "E. M. Forster",
  },
  {
    quote:
      "We cannot change our memories, but we can change their meaning and the power they have over us.",
    source: "David Seamans",
  },
  {
    quote:
      "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
    source: "Confucius",
  },
  {
    quote:
      "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Id rather regret the things that I have done than the things that I have not done.",
    source: "Lucille Ball",
  },
  {
    quote:
      "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
    source: "Eckhart Tolle",
  },
  {
    quote:
      "If the stars should appear but one night every thousand years how man would marvel and adore.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
    source: "Laurence J. Peter",
  },
  {
    quote:
      "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
    source: "Elizabeth Arden",
  },
  {
    quote:
      "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
    source: "Dalai Lama",
  },
  {
    quote:
      "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    source: "Confucius",
  },
  {
    quote:
      "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
    source: "Nikola Tesla",
  },
  {
    quote:
      "Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.",
    source: "Leo Aikman",
  },
  {
    quote:
      "He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.",
    source: "Pablo Picasso",
  },
  {
    quote:
      "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.",
    source: "Vernon Cooper",
  },
  {
    quote:
      "One secret of success in life is for a man to be ready for his opportunity when it comes.",
    source: "Benjamin Disraeli",
  },
  {
    quote:
      "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.",
    source: "Dalai Lama",
  },
  {
    quote:
      "The shoe that fits one person pinches another; there is no recipe for living that suits all cases.",
    source: "Carl Jung",
  },
  {
    quote:
      "There are only two mistakes one can make along the road to truth; not going all the way, and not starting.",
    source: "Buddha",
  },
  {
    quote:
      "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    source: "Marcus Aurelius",
  },
  {
    quote:
      "Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go.",
    source: null,
  },
  {
    quote:
      "Treat people as if they were what they ought to be and you help them to become what they are capable of being.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.",
    source: "Thich Nhat Hanh",
  },
  {
    quote:
      "If you focus on results, you will never change. If you focus on change, you will get results.",
    source: "Jack Dixon",
  },
  {
    quote:
      "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
    source: "G. K. Chesterton",
  },
  {
    quote:
      "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
    source: "Denis Waitley",
  },
  {
    quote:
      "All difficult things have their origin in that which is easy, and great things in that which is small.",
    source: "Lao-Tzu",
  },
  {
    quote:
      "You can be what you want to be. You have the power within and we will help you always.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.",
    source: "Johannes Gaertner",
  },
  {
    quote:
      "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
    source: "Doug Larson",
  },
  {
    quote:
      "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.",
    source: "Charles Lamb",
  },
  {
    quote:
      "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
    source: "John Muir",
  },
  {
    quote:
      "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
    source: "Winston Churchill",
  },
  {
    quote:
      "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
    source: "Helen Keller",
  },
  {
    quote:
      "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
    source: "Buddha",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    source: "Thomas Edison",
  },
  {
    quote:
      "When we seek to discover the best in others, we somehow bring out the best in ourselves.",
    source: "William Ward",
  },
  {
    quote:
      "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
    source: "Michael Jordan",
  },
  {
    quote:
      "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.",
    source: "Oliver Holmes",
  },
  {
    quote:
      "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
    source: "Confucius",
  },
  {
    quote:
      "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    source: "Epictetus",
  },
  {
    quote:
      "I am always doing that which I cannot do, in order that I may learn how to do it.",
    source: "Pablo Picasso",
  },
  {
    quote:
      "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    source: "Barack Obama",
  },
  {
    quote:
      "The world is round and the place which may seem like the end may also be the beginning.",
    source: "Ivy Baker Priest",
  },
  {
    quote:
      "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
    source: null,
  },
  {
    quote:
      "Give it all you've got because you never know if there's going to be a next time.",
    source: "Danielle Ingrum",
  },
  {
    quote:
      "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
    source: "Old German proverb",
  },
  {
    quote:
      "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
    source: "Ralph Blum",
  },
  {
    quote:
      "I'm not in this world to live up to your expectations and you're not in this world to live up to mine.",
    source: "Bruce Lee",
  },
  {
    quote:
      "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
    source: "Thich Nhat Hanh",
  },
  {
    quote:
      "I can't imagine a person becoming a success who doesn't give this game of life everything hes got.",
    source: "Walter Cronkite",
  },
  {
    quote:
      "The greatest way to live with honor in this world is to be what we pretend to be.",
    source: "Socrates",
  },
  {
    quote:
      "The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.",
    source: "Seneca",
  },
  {
    quote:
      "The grand essentials of happiness are: something to do, something to love, and something to hope for.",
    source: "Chalmers",
  },
  {
    quote:
      "By living deeply in the present moment we can understand the past better and we can prepare for a better future.",
    source: "Thich Nhat Hanh",
  },
  {
    quote:
      "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
    source: "Robert Louis Stevenson",
  },
  {
    quote:
      "Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times.",
    source: "Napoleon Hill",
  },
  {
    quote:
      "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
    source: null,
  },
  {
    quote:
      "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.",
    source: "Henry Thoreau",
  },
  {
    quote:
      "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
    source: "Benjamin Disraeli",
  },
  {
    quote:
      "You can only grow if you're willing to feel awkward and uncomfortable when you try something new.",
    source: "Brian Tracy",
  },
  {
    quote:
      "To free us from the expectations of others, to give us back to ourselves there lies the great, singular power of self-respect.",
    source: "Joan Didion",
  },
  {
    quote:
      "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
    source: "Mabel Newcomber",
  },
  {
    quote:
      "When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.",
    source: null,
  },
  {
    quote:
      "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
    source: "Robert Graves",
  },
  {
    quote:
      "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
    source: "Frank Wright",
  },
  {
    quote:
      "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
    source: "Francois de La Rochefoucauld",
  },
  {
    quote:
      "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
    source: "Epictetus",
  },
  {
    quote:
      "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.",
    source: "Margaret Cousins",
  },
  {
    quote:
      "Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you will never get back.",
    source: null,
  },
  {
    quote:
      "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.",
    source: "Thomas Carlyle",
  },
  {
    quote:
      "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.",
    source: "Pearl Buck",
  },
  {
    quote:
      "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
    source: "Catherine Pulsifer",
  },
  {
    quote:
      "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.",
    source: "Alfred Tennyson",
  },
  {
    quote:
      "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
    source: "Margaret Mead",
  },
  {
    quote:
      "Let your hook always be cast; in the pool where you least expect it, there will be a fish.",
    source: "Ovid",
  },
  {
    quote:
      "You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind.",
    source: "Remez Sasson",
  },
  {
    quote:
      "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.",
    source: "Richard Bach",
  },
  {
    quote:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    source: "Lao Tzu",
  },
  {
    quote:
      "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless.",
    source: "Pema Chodron",
  },
  {
    quote:
      "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
    source: "Richard Bach",
  },
  {
    quote:
      "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
    source: "David Jordan",
  },
  {
    quote:
      "Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!",
    source: "Richard Bach",
  },
  {
    quote:
      "No valid plans for the future can be made by those who have no capacity for living now.",
    source: "Alan Watts",
  },
  {
    quote:
      "The aim of life is self-development. To realize ones nature perfectly that is what each of us is here for.",
    source: "Oscar Wilde",
  },
  {
    quote:
      "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
    source: "Anatole France",
  },
  {
    quote:
      "The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.",
    source: "Thomas Edison",
  },
  {
    quote:
      "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
    source: "John Steinbeck",
  },
  {
    quote:
      "If we are facing in the right direction, all we have to do is keep on walking.",
    source: null,
  },
  {
    quote:
      "Remember always that you not only have the right to be an individual, you have an obligation to be one.",
    source: "Eleanor Roosevelt",
  },
  {
    quote:
      "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
    source: "Denis Waitley",
  },
  {
    quote:
      "If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible.",
    source: "Epictetus",
  },
  {
    quote:
      "Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose.",
    source: "Eknath Easwaran",
  },
  {
    quote:
      "We could never learn to be brave and patient if there were only joy in the world.",
    source: "Helen Keller",
  },
  {
    quote: "If it is not right do not do it; if it is not true do not say it.",
    source: "Marcus Aurelius",
  },
  {
    quote:
      "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
    source: "Norman Schwarzkopf",
  },
  {
    quote:
      "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
    source: "Julie Morgenstern",
  },
  {
    quote:
      "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
    source: "Blaise Pascal",
  },
  {
    quote:
      "Arrogance and rudeness are training wheels on the bicycle of life for weak people who cannot keep their balance without them.",
    source: "Laura Teresa Marquez",
  },
  {
    quote:
      "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
    source: "Chinese proverb",
  },
  {
    quote:
      "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
    source: "Abraham Lincoln",
  },
  {
    quote:
      "Courage is not about taking risks unknowingly, but putting your own being in front of challenges that others may not be able to.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
    source: "Richard Bach",
  },
  {
    quote:
      "The poor man is not he who is without a cent, but he who is without a dream.",
    source: "Harry Kemp",
  },
  {
    quote:
      "The greatest good you can do for another is not just share your riches, but reveal to them their own.",
    source: "Benjamin Disraeli",
  },
  {
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    source: "Buddha",
  },
  {
    quote:
      "Peace of mind is not the absence of conflict from life, but the ability to cope with it.",
    source: null,
  },
  {
    quote:
      "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.",
    source: "Helen Keller",
  },
  {
    quote:
      "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
    source: "John Kennedy",
  },
  {
    quote:
      "You have power over your mind not outside events. Realize this, and you will find strength.",
    source: "Marcus Aurelius",
  },
  {
    quote:
      "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity.",
    source: "Louis Pasteur",
  },
  {
    quote:
      "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
    source: "Buddha",
  },
  {
    quote:
      "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
    source: "Henry Longfellow",
  },
  {
    quote:
      "I cannot always control what goes on outside. But I can always control what goes on inside.",
    source: "Wayne Dyer",
  },
  {
    quote:
      "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
    source: "Daisaku Ikeda",
  },
  {
    quote:
      "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
    source: "Epictetus",
  },
  {
    quote:
      "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
    source: "Rumi",
  },
  {
    quote:
      "Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
    source: "Napoleon Bonaparte",
  },
  {
    quote:
      "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
    source: "Dalai Lama",
  },
  {
    quote:
      "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
    source: "Franklin Roosevelt",
  },
  {
    quote:
      "You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.",
    source: "Pearl Buck",
  },
  {
    quote:
      "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.",
    source: "Mary Kay Ash",
  },
  {
    quote:
      "Try not to become a man of success, but rather try to become a man of value.",
    source: "Albert Einstein",
  },
  {
    quote:
      "All difficult things have their origin in that which is easy, and great things in that which is small.",
    source: "Lao Tzu",
  },
  {
    quote:
      "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.",
    source: "Sophocles",
  },
  {
    quote:
      "It is not enough to have a good mind; the main thing is to use it well.",
    source: "Rene Descartes",
  },
  {
    quote:
      "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Never do things others can do and will do, if there are things others cannot do or will not do.",
    source: "Amelia Earhart",
  },
  {
    quote:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    source: "Jimmy Dean",
  },
  {
    quote:
      "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
    source: "George Allen",
  },
  {
    quote:
      "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
    source: "Joseph Roux",
  },
  {
    quote:
      "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.",
    source: "Bernice Reagon",
  },
  {
    quote:
      "The greatest way to live with honour in this world is to be what we pretend to be.",
    source: "Socrates",
  },
  {
    quote:
      "To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.",
    source: "Henri Bergson",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value.",
    source: "Albert Einstein",
  },
  {
    quote:
      "You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Your work is to discover your world and then with all your heart give yourself to it.",
    source: "Buddha",
  },
  {
    quote:
      "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
    source: "Daisaku Ikeda",
  },
  {
    quote:
      "Don't turn away from possible futures before you're certain you don't have anything to learn from them.",
    source: "Richard Bach",
  },
  {
    quote:
      "A successful person is one who can lay a firm foundation with the bricks that others throw at him or her.",
    source: "David Brinkley",
  },
  {
    quote:
      "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
    source: "Buddha",
  },
  {
    quote:
      "Work while you have the light. You are responsible for the talent that has been entrusted to you.",
    source: "Henri-Frederic Amiel",
  },
  {
    quote:
      "How far that little candle throws its beams! So shines a good deed in a naughty world.",
    source: "William Shakespeare",
  },
  {
    quote:
      "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    source: "Napoleon Hill",
  },
  {
    quote: "It is in your moments of decision that your destiny is shaped.",
    source: "Tony Robbins",
  },
  {
    quote: "An obstacle may be either a stepping stone or a stumbling block.",
    source: null,
  },
  {
    quote: "The pain passes, but the beauty remains.",
    source: "Pierre Auguste Renoir",
  },
  {
    quote: "All I can say about life is, Oh God, enjoy it!",
    source: "Bob Newhart",
  },
  {
    quote:
      "Creativity comes from trust. Trust your instincts. And never hope more than you work.",
    source: "Rita Mae Brown",
  },
  {
    quote:
      "Your outlook on life is a direct reflection on how much you like yourself.",
    source: "Lululemon",
  },
  {
    quote:
      "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
    source: "Lao Tzu",
  },
  {
    quote: "You won't skid if you stay in a rut.",
    source: "Kin Hubbard",
  },
  {
    quote:
      "You block your dream when you allow your fear to grow bigger than your faith.",
    source: "Mary Morrissey",
  },
  {
    quote: "Happiness depends upon ourselves.",
    source: "Aristotle",
  },
  {
    quote: "Wherever a man turns he can find someone who needs him.",
    source: "Albert Schweitzer",
  },
  {
    quote:
      "If one is lucky, a solitary fantasy can totally transform one million realities.",
    source: "Maya Angelou",
  },
  {
    quote:
      "Never idealize others. They will never live up to your expectations.",
    source: "Leo Buscaglia",
  },
  {
    quote:
      "When you realize there is nothing lacking, the whole world belongs to you.",
    source: "Lao Tzu",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    source: "Dalai Lama",
  },
  {
    quote: "Meaning is not what you start with but what you end up with.",
    source: "Peter Elbow",
  },
  {
    quote: "No one has ever become poor by giving.",
    source: "Anne Frank",
  },
  {
    quote:
      "Be faithful in small things because it is in them that your strength lies.",
    source: "Mother Teresa",
  },
  {
    quote: "All is flux; nothing stays still.",
    source: "Heraclitus",
  },
  {
    quote: "He who is fixed to a star does not change his mind.",
    source: "Leonardo da Vinci",
  },
  {
    quote:
      "He who lives in harmony with himself lives in harmony with the universe.",
    source: "Marcus Aurelius",
  },
  {
    quote:
      "Ignorant men don't know what good they hold in their hands until they've flung it away.",
    source: "Sophocles",
  },
  {
    quote: "When the solution is simple, God is answering.",
    source: "Albert Einstein",
  },
  {
    quote:
      "All achievements, all earned riches, have their beginning in an idea.",
    source: "Napoleon Hill",
  },
  {
    quote: "Do not turn back when you are just at the goal.",
    source: "Publilius Syrus",
  },
  {
    quote: "You can't trust without risk but neither can you live in a cocoon.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.",
    source: "Rudolf Arnheim",
  },
  {
    quote: "Error is discipline through which we advance.",
    source: "Channing",
  },
  {
    quote:
      "The truth is always exciting. Speak it, then. Life is dull without it.",
    source: "Pearl Buck",
  },
  {
    quote:
      "The superior man is modest in his speech, but exceeds in his actions.",
    source: "Confucius",
  },
  {
    quote:
      "The longer we dwell on our misfortunes, the greater is their power to harm us.",
    source: "Voltaire",
  },
  {
    quote: "Those who will play with cats must expect to be scratched.",
    source: "Cervantes",
  },
  {
    quote: "I've never seen a smiling face that was not beautiful.",
    source: null,
  },
  {
    quote: "In all things of nature there is something of the marvellous.",
    source: "Aristotle",
  },
  {
    quote:
      "The universe is transformation; our life is what our thoughts make it.",
    source: "Marcus Aurelius",
  },
  {
    quote: "Memory is the mother of all wisdom.",
    source: "Samuel Johnson",
  },
  {
    quote: "Silence is the true friend that never betrays.",
    source: "Confucius",
  },
  {
    quote:
      "You might well remember that nothing can bring you success but yourself.",
    source: "Napoleon Hill",
  },
  {
    quote: "Watch the little things; a small leak will sink a great ship.",
    source: "Benjamin Franklin",
  },
  {
    quote: "God has given you one face, and you make yourself another.",
    source: "William Shakespeare",
  },
  {
    quote: "To be wronged is nothing unless you continue to remember it.",
    source: "Confucius",
  },
  {
    quote: "Kindness is the greatest wisdom.",
    source: null,
  },
  {
    quote: "Action will remove the doubts that theory cannot solve.",
    source: "Tehyi Hsieh",
  },
  {
    quote:
      "Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
    source: null,
  },
  {
    quote: "Your big opportunity may be right where you are now.",
    source: "Napoleon Hill",
  },
  {
    quote:
      "People who say it cannot be done should not interrupt those who are doing it.",
    source: "Chinese proverb",
  },
  {
    quote: "The day you decide to do it is your lucky day.",
    source: "Japanese proverb",
  },
  {
    quote: "We must not say every mistake is a foolish one.",
    source: "Cicero",
  },
  {
    quote:
      "Accept challenges, so that you may feel the exhilaration of victory.",
    source: "George Patton",
  },
  {
    quote: "It is better to understand a little than to misunderstand a lot.",
    source: "Anatole France",
  },
  {
    quote: "You don't drown by falling in water. You drown by staying there.",
    source: null,
  },
  {
    quote:
      "Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.",
    source: null,
  },
  {
    quote: "Correction does much, but encouragement does more.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote: "Know, first, who you are, and then adorn yourself accordingly.",
    source: "Epictetus",
  },
  {
    quote:
      "The biggest adventure you can ever take is to live the life of your dreams.",
    source: "Oprah Winfrey",
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    source: "Charles Swindoll",
  },
  {
    quote: "To want to be what one can be is purpose in life.",
    source: "Cynthia Ozick",
  },
  {
    quote:
      "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
    source: "Dalai Lama",
  },
  {
    quote: "History will be kind to me for I intend to write it.",
    source: "Winston Churchill",
  },
  {
    quote: "Our lives are a sum total of the choices we have made.",
    source: "Wayne Dyer",
  },
  {
    quote: "Time stays long enough for anyone who will use it.",
    source: "Leonardo da Vinci",
  },
  {
    quote: "You must welcome change as the rule but not as your ruler.",
    source: "Denis Waitley",
  },
  {
    quote:
      "Give whatever you are doing and whoever you are with the gift of your attention.",
    source: "Jim Rohn",
  },
  {
    quote: "Always be smarter than the people who hire you.",
    source: "Lena Horne",
  },
  {
    quote: "Formula for success: under promise and over deliver.",
    source: "Tom Peters",
  },
  {
    quote: "The eye sees only what the mind is prepared to comprehend.",
    source: "Henri Bergson",
  },
  {
    quote: "People seldom notice old clothes if you wear a big smile.",
    source: "Lee Mildon",
  },
  {
    quote:
      "The more light you allow within you, the brighter the world you live in will be.",
    source: "Shakti Gawain",
  },
  {
    quote: "Nothing diminishes anxiety faster than action.",
    source: "Walter Anderson",
  },
  {
    quote:
      "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
    source: "Andre Gide",
  },
  {
    quote:
      "Everything that irritates us about others can lead us to an understanding about ourselves.",
    source: "Carl Jung",
  },
  {
    quote: "Can you imagine what I would do if I could do all I can?",
    source: "Sun Tzu",
  },
  {
    quote: "Ignorance never settle a question.",
    source: "Benjamin Disraeli",
  },
  {
    quote: "The awareness of our own strength makes us modest.",
    source: "Paul Cezanne",
  },
  {
    quote:
      "They must often change, who would be constant in happiness or wisdom.",
    source: "Confucius",
  },
  {
    quote:
      "There are no failures. Just experiences and your reactions to them.",
    source: "Tom Krause",
  },
  {
    quote: "Your future depends on many things, but mostly on you.",
    source: "Frank Tyger",
  },
  {
    quote:
      "Fear grows in darkness; if you think theres a bogeyman around, turn on the light.",
    source: "Dorothy Thompson",
  },
  {
    quote:
      "The most important point is to accept yourself and stand on your two feet.",
    source: "Shunryu Suzuki",
  },
  {
    quote:
      "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
    source: "Tomas Eliot",
  },
  {
    quote: "As long as your going to be thinking anyway, think big.",
    source: "Donald Trump",
  },
  {
    quote: "Without some goals and some efforts to reach it, no man can live.",
    source: "John Dewey",
  },
  {
    quote: "He who obtains has little. He who scatters has much.",
    source: "Richard Braunstein",
  },
  {
    quote: "Myths which are believed in tend to become true.",
    source: "George Orwell",
  },
  {
    quote: "The foot feels the foot when it feels the ground.",
    source: "Buddha",
  },
  {
    quote: "Not what we have but what we enjoy constitutes our abundance.",
    source: "John Petit-Senn",
  },
  {
    quote: "It is never too late to be what you might have been.",
    source: "George Eliot",
  },
  {
    quote: "The beginning is always today.",
    source: "Mary Wollstonecraft",
  },
  {
    quote:
      "In the long run we get no more than we have been willing to risk giving.",
    source: "Sheldon Kopp",
  },
  {
    quote: "Self-trust is the first secret of success.",
    source: "Ralph Emerson",
  },
  {
    quote: "Don't look back. Something might be gaining on you.",
    source: "Satchel Paige",
  },
  {
    quote:
      "Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too.",
    source: "Marcus Aurelius",
  },
  {
    quote:
      "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.",
    source: "George Bernard Shaw",
  },
  {
    quote:
      "Men are disturbed not by things, but by the view which they take of them.",
    source: "Epictetus",
  },
  {
    quote:
      "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
    source: "Blaise Pascal",
  },
  {
    quote:
      "Happiness is a Swedish sunset it is there for all, but most of us look the other way and lose it.",
    source: "Mark Twain",
  },
  {
    quote:
      "A smile is a light in the window of your face to show your heart is at home.",
    source: null,
  },
  {
    quote:
      "Look forward to spring as a time when you can start to see what nature has to offer once again.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Trust your own instinct. Your mistakes might as well be your own, instead of someone elses.",
    source: "Billy Wilder",
  },
  {
    quote:
      "The least movement is of importance to all nature. The entire ocean is affected by a pebble.",
    source: "Blaise Pascal",
  },
  {
    quote:
      "I am always doing that which I can not do, in order that I may learn how to do it.",
    source: "Pablo Picasso",
  },
  {
    quote:
      "Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.",
    source: "Niccolo Machiavelli",
  },
  {
    quote:
      "You may only be someone in the world, but to someone else, you may be the world.",
    source: null,
  },
  {
    quote:
      "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
    source: "Henry Ward Beecher",
  },
  {
    quote:
      "If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase.",
    source: "James Faust",
  },
  {
    quote:
      "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
    source: "Denis Waitley",
  },
  {
    quote:
      "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
    source: "Hasidic saying",
  },
  {
    quote:
      "When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness.",
    source: "Joseph Campbell",
  },
  {
    quote:
      "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.",
    source: "Peter Drucker",
  },
  {
    quote:
      "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
    source: "Bernice Reagon",
  },
  {
    quote:
      "There is one thing you have got to learn about our movement. Three people are better than no people.",
    source: "Fannie Hamer",
  },
  {
    quote:
      "Happiness is a perfume you cannot pour on others without getting a few drops on yourself.",
    source: "Ralph Waldo Emerson",
  },
  {
    quote:
      "It is not the mistake that has the most power, instead, it is learning from the mistake to advance your own attributes.",
    source: "Byron Roberts",
  },
  {
    quote:
      "The amount of happiness that you have depends on the amount of freedom you have in your heart.",
    source: "Thich Nhat Hanh",
  },
  {
    quote:
      "Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens.",
    source: "Carl Jung",
  },
  {
    quote:
      "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present.",
    source: "Babatunde Olatunji",
  },
  {
    quote:
      "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
    source: "Tony Robbins",
  },
  {
    quote:
      "Sometimes it is better to lose and do the right thing than to win and do the wrong thing.",
    source: "Tony Blair",
  },
  {
    quote:
      "Let us always meet each other with smile, for the smile is the beginning of love.",
    source: "Mother Teresa",
  },
  {
    quote:
      "A bend in the road is not the end of the road...unless you fail to make the turn.",
    source: null,
  },
  {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    source: "Aristotle",
  },
  {
    quote:
      "Living at risk is jumping off the cliff and building your wings on the way down.",
    source: "Ray Bradbury",
  },
  {
    quote:
      "In the depth of winter, I finally learned that there was within me an invincible summer.",
    source: "Albert Camus",
  },
  {
    quote:
      "Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike.",
    source: "Madame de Stael",
  },
  {
    quote:
      "A failure is a man who has blundered but is not capable of cashing in on the experience.",
    source: "Elbert Hubbard",
  },
  {
    quote:
      "I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.",
    source: "Herbert Swope",
  },
  {
    quote:
      "One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.",
    source: null,
  },
  {
    quote:
      "The power of intuitive understanding will protect you from harm until the end of your days.",
    source: "Laozi",
  },
  {
    quote:
      "The best thing about the future is that it only comes one day at a time.",
    source: "Abraham Lincoln",
  },
  {
    quote:
      "We have two ears and one mouth so that we can listen twice as much as we speak.",
    source: "Epictetus",
  },
  {
    quote:
      "Fear of failure is one attitude that will keep you at the same point in your life.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Friends are those rare people who ask how we are and then wait to hear the answer.",
    source: "Ed Cunningham",
  },
  {
    quote:
      "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
    source: "Pema Chodron",
  },
  {
    quote:
      "People grow through experience if they meet life honestly and courageously. This is how character is built.",
    source: "Eleanor Roosevelt",
  },
  {
    quote:
      "A hero is no braver than an ordinary man, but he is braver five minutes longer.",
    source: "Ralph Waldo Emerson",
  },
  {
    quote:
      "While we try to teach our children all about life, our children teach us what life is all about.",
    source: "Angela Schwindt",
  },
  {
    quote:
      "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
    source: "Wayne Dyer",
  },
  {
    quote:
      "The Creator has not given you a longing to do that which you have no ability to do.",
    source: "Orison Marden",
  },
  {
    quote:
      "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
    source: "Sam Levenson",
  },
  {
    quote:
      "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
    source: "Dalai Lama",
  },
  {
    quote:
      "Until you make peace with who you are, you will never be content with what you have.",
    source: "Doris Mortman",
  },
  {
    quote:
      "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    source: "Buddha",
  },
  {
    quote:
      "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
    source: "Henry Miller",
  },
  {
    quote:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    source: "Mohandas Gandhi",
  },
  {
    quote:
      "The greatest antidote to insecurity and the sense of fear is compassion it brings one back to the basis of one's inner strength",
    source: "Dalai Lama",
  },
  {
    quote:
      "Courage is the discovery that you may not win, and trying when you know you can lose.",
    source: null,
  },
  {
    quote:
      "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
    source: "Mortimer Adler",
  },
  {
    quote:
      "When you realize how perfect everything is you will tilt your head back and laugh at the sky.",
    source: "Buddha",
  },
  {
    quote:
      "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
    source: "Mary Kay Ash",
  },
  {
    quote:
      "It is surprising what a man can do when he has to, and how little most men will do when they don't have to.",
    source: "Walter Linn",
  },
  {
    quote:
      "To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else.",
    source: "Tenzin Gyatso",
  },
  {
    quote:
      "Nobody made a greater mistake than he who did nothing because he could do only a little.",
    source: "Edmund Burke",
  },
  {
    quote:
      "Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate.",
    source: "Albert Schweitzer",
  },
  {
    quote:
      "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
    source: "Rene Descartes",
  },
  {
    quote:
      "A man should look for what is, and not for what he thinks should be.",
    source: "Albert Einstein",
  },
  {
    quote:
      "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.",
    source: "William Channing",
  },
  {
    quote:
      "If you have no respect for your own values how can you be worthy of respect from others.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Some people are always grumbling because roses have thorns; I am thankful that thorns have roses.",
    source: "Alphonse Karr",
  },
  {
    quote:
      "To choose what is difficult all ones days, as if it were easy, that is faith.",
    source: "W. H. Auden",
  },
  {
    quote:
      "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.",
    source: "Lou Holtz",
  },
  {
    quote:
      "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
    source: "Thomas Carlyle",
  },
  {
    quote:
      "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    source: "Buddha",
  },
  {
    quote:
      "I care not so much what I am to others as what I am to myself. I will be rich by myself, and not by borrowing.",
    source: "Michel de Montaigne",
  },
  {
    quote:
      "Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world.",
    source: "Margaret Laurence",
  },
  {
    quote:
      "To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god.",
    source: "Napoleon Bonaparte",
  },
  {
    quote:
      "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.",
    source: "Ajahn Chah",
  },
  {
    quote:
      "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
    source: "Dalai Lama",
  },
  {
    quote:
      "The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur.",
    source: "Vincent Lombardi",
  },
  {
    quote:
      "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.",
    source: "Jean-Paul Sartre",
  },
  {
    quote:
      "Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly.",
    source: "Richard Bach",
  },
  {
    quote:
      "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.",
    source: "Elisabeth Kubler-Ross",
  },
  {
    quote:
      "Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do.",
    source: "Kahlil Gibran",
  },
  {
    quote:
      "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.",
    source: "Bernard Shaw",
  },
  {
    quote:
      "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.",
    source: "Albert Einstein",
  },
  {
    quote:
      "When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points.",
    source: "Confucius",
  },
  {
    quote:
      "If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others.",
    source: "Anne Lindbergh",
  },
  {
    quote:
      "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    source: "Dale Carnegie",
  },
  {
    quote:
      "You may say I'm a dreamer, but I'm not the only one, I hope someday you will join us, and the world will live as one.",
    source: "John Lennon",
  },
  {
    quote:
      "Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you.",
    source: "Nathaniel Hawthorne",
  },
  {
    quote:
      "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
    source: "Buddha",
  },
  {
    quote:
      "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
    source: "Buddha",
  },
  {
    quote:
      "You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you'll get to tomorrow. Intention without action is useless.",
    source: "Caroline Myss",
  },
  {
    quote:
      "Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe.",
    source: "Winston Churchill",
  },
  {
    quote:
      "The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be.",
    source: "William James",
  },
  {
    quote:
      "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
    source: "Henry David Thoreau",
  },
  {
    quote:
      "The secret of joy in work is contained in one word excellence. To know how to do something well is to enjoy it.",
    source: "Pearl Buck",
  },
  {
    quote:
      "When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.",
    source: "Confucius",
  },
  {
    quote:
      "We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre.",
    source: "Uta Hagen",
  },
  {
    quote:
      "Most of our obstacles would melt away if, instead of cowering before them, we should make up our minds to walk boldly through them.",
    source: "Orison Marden",
  },
  {
    quote:
      "Everything can be taken from a man but ... the last of the human freedoms to choose ones attitude in any given set of circumstances, to choose ones own way.",
    source: "Victor Frankl",
  },
  {
    quote:
      "It is better to have enough ideas for some of them to be wrong, than to be always right by having no ideas at all.",
    source: "Edward de Bono",
  },
  {
    quote:
      "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.",
    source: "Abraham Lincoln",
  },
  {
    quote:
      "By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.",
    source: "Lao Tzu",
  },
  {
    quote:
      "I am like a falling star who has finally found her place next to another in a lovely constellation, where we will sparkle in the heavens forever.",
    source: "Amy Tan",
  },
  {
    quote:
      "Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.",
    source: "Epictetus",
  },
  {
    quote:
      "We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.",
    source: "Stephen Covey",
  },
  {
    quote:
      "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
    source: "Paul Graham",
  },
  {
    quote:
      "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    source: "Buddha",
  },
  {
    quote:
      "A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do.",
    source: "Chuck Norris",
  },
  {
    quote:
      "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.",
    source: "Amiel",
  },
  {
    quote:
      "Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle.",
    source: "Amy Bloom",
  },
  {
    quote:
      "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
    source: "Keshavan Nair",
  },
  {
    quote:
      "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.",
    source: "Margaret Smith",
  },
  {
    quote:
      "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.",
    source: "Frederick Douglass",
  },
  {
    quote:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
    source: "Helen Keller",
  },
  {
    quote:
      "When you arise in the morning, think of what a precious privilege it is to be alive to breathe, to think, to enjoy, to love.",
    source: "Marcus Aurelius",
  },
  {
    quote:
      "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.",
    source: "Helen Keller",
  },
  {
    quote:
      "Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always.",
    source: "Oprah Winfrey",
  },
  {
    quote:
      "You must train your intuition you must trust the small voice inside you which tells you exactly what to say, what to decide.",
    source: "Ingrid Bergman",
  },
  {
    quote:
      "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
    source: "Marcus Aurelius",
  },
  {
    quote:
      "Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions.",
    source: "John Kennedy",
  },
  {
    quote:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    source: "Marie Curie",
  },
  {
    quote:
      "Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands.",
    source: "Anne Frank",
  },
  {
    quote:
      "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.",
    source: "Robert Fulghum",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    source: "Albert Schweitzer",
  },
  {
    quote:
      "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
    source: "Albert Einstein",
  },
  {
    quote:
      "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate that's my philosophy.",
    source: "Thornton Wilder",
  },
  {
    quote:
      "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
    source: "John Dewey",
  },
  {
    quote:
      "He who conquers others is strong; He who conquers himself is mighty.",
    source: "Lao Tzu",
  },
  {
    quote:
      "Anything you really want, you can attain, if you really go after it.",
    source: "Wayne Dyer",
  },
  {
    quote: "Arriving at one point is the starting point to another.",
    source: "John Dewey",
  },
  {
    quote:
      "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
    source: "James Oppenheim",
  },
  {
    quote:
      "The greatest part of our happiness depends on our dispositions, not our circumstances.",
    source: "Martha Washington",
  },
  {
    quote:
      "It is only possible to live happily ever after on a day to day basis.",
    source: "Margaret Bonnano",
  },
  {
    quote: "A man sees in the world what he carries in his heart.",
    source: "Goethe",
  },
  {
    quote:
      "Action may not always bring happiness, but there is no happiness without action.",
    source: "Benjamin Disraeli",
  },
  {
    quote:
      "Believe deep down in your heart that you're destined to do great things.",
    source: "Joe Paterno",
  },
  {
    quote: "Sooner or later, those who win are those who think they can.",
    source: "Richard Bach",
  },
  {
    quote: "The only limit to your impact is your imagination and commitment.",
    source: "Tony Robbins",
  },
  {
    quote: "You are special, you are unique, you are the best!",
    source: "Cathy Pulsifer",
  },
  {
    quote:
      "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.",
    source: "William Arthur Ward",
  },
  {
    quote: "To know oneself is to study oneself in action with another person.",
    source: "Bruce Lee",
  },
  {
    quote: "We must not allow ourselves to become like the system we oppose.",
    source: "Bishop Desmond Tutu",
  },
  {
    quote: "Smile, breathe and go slowly.",
    source: "Thich Nhat Hanh",
  },
  {
    quote: "Reality is merely an illusion, albeit a very persistent one.",
    source: "Albert Einstein",
  },
  {
    quote: "When you come to the end of your rope, tie a knot and hang on.",
    source: "Franklin Roosevelt",
  },
  {
    quote: "Always be mindful of the kindness and not the faults of others.",
    source: "Buddha",
  },
  {
    quote:
      "Everything that irritates us about others can lead us to an understanding of ourselves.",
    source: "Carl Jung",
  },
  {
    quote: "When fate hands us a lemon, lets try to make lemonade.",
    source: "Dale Carnegie",
  },
  {
    quote:
      "The weak can never forgive. Forgiveness is the attribute of the strong.",
    source: "Mohandas Gandhi",
  },
  {
    quote: "A man is great by deeds, not by birth.",
    source: "Chanakya",
  },
  {
    quote:
      "Success is getting what you want. Happiness is wanting what you get.",
    source: "Dale Carnegie",
  },
  {
    quote:
      "Truth isn't all about what actually happens but more about how what has happened is interpreted.",
    source: "Byron Pulsifer",
  },
  {
    quote: "A good rest is half the work.",
    source: null,
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    source: "Robert Stevenson",
  },
  {
    quote: "Small opportunities are often the beginning of great enterprises.",
    source: "Demosthenes",
  },
  {
    quote:
      "To be tested is good. The challenged life may be the best therapist.",
    source: "Gail Sheehy",
  },
  {
    quote: "Take heed: you do not find what you do not seek.",
    source: "English proverb",
  },
  {
    quote:
      "Happiness is the reward we get for living to the highest right we know.",
    source: "Richard Bach",
  },
  {
    quote: "Be slow of tongue and quick of eye.",
    source: "Cervantes",
  },
  {
    quote: "Freedom is not worth having if it does not connote freedom to err.",
    source: "Mohandas Gandhi",
  },
  {
    quote:
      "I have always thought the actions of men the best interpreters of their thoughts.",
    source: "John Locke",
  },
  {
    quote: "He who obtains has little. He who scatters has much.",
    source: "Lao Tzu",
  },
  {
    quote:
      "To dare is to lose ones footing momentarily. To not dare is to lose oneself.",
    source: "Soren Kierkegaard",
  },
  {
    quote: "No day in which you learn something is a complete loss.",
    source: "David Eddings",
  },
  {
    quote:
      "Peace cannot be kept by force. It can only be achieved by understanding.",
    source: "Albert Einstein",
  },
  {
    quote: "Real success is finding your lifework in the work that you love.",
    source: "David McCullough",
  },
  {
    quote:
      "Better than a thousand hollow words, is one word that brings peace.",
    source: "Buddha",
  },
  {
    quote: "All the flowers of all the tomorrows are in the seeds of today.",
    source: null,
  },
  {
    quote: "Your sacred space is where you can find yourself again and again.",
    source: "Joseph Campbell",
  },
  {
    quote: "As you think, so shall you become.",
    source: "Bruce Lee",
  },
  {
    quote: "In seed time learn, in harvest teach, in winter enjoy.",
    source: "William Blake",
  },
  {
    quote:
      "Happiness does not come from having much, but from being attached to little.",
    source: "Cheng Yen",
  },
  {
    quote: "Every gift from a friend is a wish for your happiness.",
    source: "Richard Bach",
  },
  {
    quote: "Go put your creed into the deed. Nor speak with double tongue.",
    source: "Ralph Emerson",
  },
  {
    quote: "The wisest men follow their own direction.",
    source: "Euripides",
  },
  {
    quote:
      "Hope arouses, as nothing else can arouse, a passion for the possible.",
    source: "William Sloane Coffin",
  },
  {
    quote: "Everything has beauty, but not everyone sees it.",
    source: "Confucius",
  },
  {
    quote:
      "Nothing ever goes away until it has taught us what we need to know.",
    source: "Pema Chodron",
  },
  {
    quote: "When you learn, teach. When you get, give.",
    source: "Maya Angelou",
  },
  {
    quote: "Only when we are no longer afraid do we begin to live.",
    source: "Dorothy Thompson",
  },
  {
    quote: "If you smile when no one else is around, you really mean it.",
    source: "Andy Rooney",
  },
  {
    quote:
      "Love is the only force capable of transforming an enemy into friend.",
    source: "Martin Luther King, Jr.",
  },
  {
    quote: "In all chaos there is a cosmos, in all disorder a secret order.",
    source: "Carl Jung",
  },
  {
    quote: "A man is not where he lives but where he loves.",
    source: null,
  },
  {
    quote: "The price of greatness is responsibility.",
    source: "Winston Churchill",
  },
  {
    quote: "Decision is a risk rooted in the courage of being free.",
    source: "Paul Tillich",
  },
  {
    quote:
      "Your mind will answer most questions if you learn to relax and wait for the answer.",
    source: "William Burroughs",
  },
  {
    quote: "The world does not happen to you it happens from you.",
    source: null,
  },
  {
    quote:
      "We cannot solve our problems with the same thinking we used when we created them.",
    source: "Albert Einstein",
  },
  {
    quote: "More powerful than the will to win is the courage to begin.",
    source: null,
  },
  {
    quote: "Learning is finding out what you already know.",
    source: "Richard Bach",
  },
  {
    quote:
      "Saying thank you is more than good manners. It is good spirituality.",
    source: "Alfred Painter",
  },
  {
    quote: "Silence is a source of great strength.",
    source: "Lao Tzu",
  },
  {
    quote: "Joy is the best makeup.",
    source: "Anne Lamott",
  },
  {
    quote: "There is no great genius without some touch of madness.",
    source: "Seneca",
  },
  {
    quote: "A jug fills drop by drop.",
    source: "Buddha",
  },
  {
    quote:
      "Until you make peace with who you are, you'll never be content with what you have.",
    source: "Doris Mortman",
  },
  {
    quote: "We aim above the mark to hit the mark.",
    source: "Ralph Emerson",
  },
  {
    quote: "Being angry never solves anything.",
    source: "Catherine Pulsifer",
  },
  {
    quote: "All men who have achieved great things have been great dreamers.",
    source: "Orison Marden",
  },
  {
    quote:
      "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
    source: "Arthur Conan Doyle",
  },
  {
    quote: "Where all think alike, no one thinks very much.",
    source: "Walter Lippmann",
  },
  {
    quote:
      "Everything that exists is in a manner the seed of that which will be.",
    source: "Marcus Aurelius",
  },
  {
    quote: "Be less curious about people and more curious about ideas.",
    source: "Marie Curie",
  },
  {
    quote: "The heart has eyes which the brain knows nothing of.",
    source: "Charles Perkhurst",
  },
  {
    quote: "Only those who dare to fail greatly can ever achieve greatly.",
    source: "Robert Kennedy",
  },
  {
    quote:
      "Lose an hour in the morning, and you will spend all day looking for it.",
    source: "Richard Whately",
  },
  {
    quote:
      "Mistakes are always forgivable, if one has the courage to admit them.",
    source: "Bruce Lee",
  },
  {
    quote:
      "Go to your bosom: Knock there, and ask your heart what it doth know.",
    source: "William Shakespeare",
  },
  {
    quote:
      "Happiness mainly comes from our own attitude, rather than from external factors.",
    source: "Dalai Lama",
  },
  {
    quote:
      "If you do not change direction, you may end up where you are heading.",
    source: "Lao Tzu",
  },
  {
    quote: "What we see is mainly what we look for.",
    source: null,
  },
  {
    quote: "Stay away from what might have been and look at what will be.",
    source: "Marsha Petrie Sue",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    source: "William James",
  },
  {
    quote:
      "Passion creates the desire for more and action fuelled by passion creates a future.",
    source: "Byron Pulsifer",
  },
  {
    quote: "Do good by stealth, and blush to find it fame.",
    source: "Alexander Pope",
  },
  {
    quote:
      "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
    source: "Napoleon Hill",
  },
  {
    quote: "Don't talk about what you have done or what you are going to do.",
    source: "Thomas Jefferson",
  },
  {
    quote: "Most powerful is he who has himself in his own power.",
    source: "Seneca",
  },
  {
    quote:
      "We don't stop playing because we grow old; we grow old because we stop playing.",
    source: "Bernard Shaw",
  },
  {
    quote:
      "Experience can only be gained by doing not by thinking or dreaming.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Always tell the truth. That way, you don't have to remember what you said.",
    source: "Mark Twain",
  },
  {
    quote: "From wonder into wonder existence opens.",
    source: "Lao Tzu",
  },
  {
    quote: "He who fears being conquered is sure of defeat.",
    source: "Napoleon Bonaparte",
  },
  {
    quote: "Life is what happens while you are making other plans.",
    source: "John Lennon",
  },
  {
    quote:
      "Doing what you love is the cornerstone of having abundance in your life.",
    source: "Wayne Dyer",
  },
  {
    quote: "Kindness is the golden chain by which society is bound together.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote: "You need chaos in your soul to give birth to a dancing star.",
    source: "Nietzsche",
  },
  {
    quote: "It can't be spring if your heart is filled with past failures.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "No yesterdays are ever wasted for those who give themselves to today.",
    source: "Brendan Francis",
  },
  {
    quote: "There are no failures just experiences and your reactions to them.",
    source: "Tom Krause",
  },
  {
    quote: "Action is the foundational key to all success.",
    source: "Pablo Picasso",
  },
  {
    quote:
      "What is necessary to change a person is to change his awareness of himself.",
    source: "Abraham Maslow",
  },
  {
    quote:
      "Positive thinking will let you do everything better than negative thinking will.",
    source: "Zig Ziglar",
  },
  {
    quote: "We shall never know all the good that a simple smile can do.",
    source: "Mother Teresa",
  },
  {
    quote:
      "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
    source: "Frances de Sales",
  },
  {
    quote:
      "Imagination is not a talent of some men but is the health of every man.",
    source: "Ralph Waldo Emerson",
  },
  {
    quote: "We must embrace pain and burn it as fuel for our journey.",
    source: "Kenji Miyazawa",
  },
  {
    quote: "Don't wait for people to be friendly. Show them how.",
    source: null,
  },
  {
    quote:
      "A gem cannot be polished without friction, nor a man perfected without trials.",
    source: "Chinese proverb",
  },
  {
    quote: "Each day can be one of triumph if you keep up your interests.",
    source: "George Matthew Adams",
  },
  {
    quote:
      "The place to improve the world is first in one's own heart and head and hands.",
    source: "Robert M. Pirsig",
  },
  {
    quote:
      "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
    source: "Winston Churchill",
  },
  {
    quote:
      "Winners have simply formed the habit of doing things losers don't like to do.",
    source: "Albert Gray",
  },
  {
    quote: "Nature is a mutable cloud which is always and never the same.",
    source: "Ralph Emerson",
  },
  {
    quote: "Life is what you make of it. Always has been, always will be.",
    source: "Grandma Moses",
  },
  {
    quote: "Worry often gives a small thing a big shadow.",
    source: "Swedish proverb",
  },
  {
    quote:
      "I want you to be everything that's you, deep at the center of your being.",
    source: "Confucius",
  },
  {
    quote: "We know what we are, but know not what we may be.",
    source: "William Shakespeare",
  },
  {
    quote: "Freedom is what you do with what's been done to you.",
    source: "Jean-Paul Sartre",
  },
  {
    quote:
      "The truth which has made us free will in the end make us glad also.",
    source: "Felix Adler",
  },
  {
    quote: "He who has imagination without learning has wings but no feet.",
    source: "Joseph Joubert",
  },
  {
    quote: "Whoso loves, believes the impossible.",
    source: "Elizabeth Browning",
  },
  {
    quote: "It isn't where you come from, it's where you're going that counts.",
    source: "Ella Fitzgerald",
  },
  {
    quote: "The greatest obstacle to connecting with our joy is resentment.",
    source: "Pema Chodron",
  },
  {
    quote: "When anger use your energy to do something productive.",
    source: "C. Pulsifer",
  },
  {
    quote: "We are all something, but none of us are everything.",
    source: "Blaise Pascal",
  },
  {
    quote:
      "If you can't explain it simply, you don't understand it well enough.",
    source: "Albert Einstein",
  },
  {
    quote:
      "He who lives in harmony with himself lives in harmony with the world.",
    source: "Marcus Aurelius",
  },
  {
    quote: "He who knows himself is enlightened.",
    source: "Lao Tzu",
  },
  {
    quote:
      "Build a better mousetrap and the world will beat a path to your door.",
    source: "Ralph Emerson",
  },
  {
    quote: "As our case is new, we must think and act anew.",
    source: "Abraham Lincoln",
  },
  {
    quote: "If you can't feed a hundred people, then feed just one.",
    source: "Mother Teresa",
  },
  {
    quote:
      "In three words I can sum up everything Ive learned about life: it goes on.",
    source: "Robert Frost",
  },
  {
    quote:
      "Don't let today's disappointments cast a shadow on tomorrow's dreams.",
    source: null,
  },
  {
    quote: "You always succeed in producing a result.",
    source: "Tony Robbins",
  },
  {
    quote:
      "Everything you are against weakens you. Everything you are for empowers you.",
    source: "Wayne Dyer",
  },
  {
    quote: "As we risk ourselves, we grow. Each new experience is a risk.",
    source: "Fran Watson",
  },
  {
    quote: "Who we are never changes. Who we think we are does.",
    source: "Mary Almanac",
  },
  {
    quote:
      "The final proof of greatness lies in being able to endure criticism without resentment.",
    source: "Elbert Hubbard",
  },
  {
    quote:
      "An invasion of armies can be resisted, but not an idea whose time has come.",
    source: "Victor Hugo",
  },
  {
    quote: "Never let lack of money interfere with having fun.",
    source: null,
  },
  {
    quote: "Excellence is not a skill. It is an attitude.",
    source: "Ralph Marston",
  },
  {
    quote: "People may doubt what you say, but they will believe what you do.",
    source: "Lewis Cass",
  },
  {
    quote: "The most formidable weapon against errors of every kind is reason.",
    source: "Thomas Paine",
  },
  {
    quote:
      "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
    source: "Danilo Dolci",
  },
  {
    quote:
      "Beware of missing chances; otherwise it may be altogether too late some day.",
    source: "Franz Liszt",
  },
  {
    quote: "You only lose what you cling to.",
    source: "Buddha",
  },
  {
    quote: "Life is a succession of moments. To live each one is to succeed.",
    source: "Corita Kent",
  },
  {
    quote:
      "Most of the shadows of life are caused by standing in our own sunshine.",
    source: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Good actions give strength to ourselves and inspire good actions in others.",
    source: "Plato",
  },
  {
    quote: "I know but one freedom and that is the freedom of the mind.",
    source: "Antoine de Saint-Exupery",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    source: "Albert Einstein",
  },
  {
    quote: "Every human being is the source of his own health or disease.",
    source: "Buddha",
  },
  {
    quote: "When in doubt, tell the truth.",
    source: "Mark Twain",
  },
  {
    quote:
      "Every great advance in science has issued from a new audacity of the imagination.",
    source: "John Dewey",
  },
  {
    quote: "The path to success is to take massive, determined action.",
    source: "Anthony Robbins",
  },
  {
    quote: "The ladder of success is never crowded at the top.",
    source: "Napoleon Hill",
  },
  {
    quote: "He who has health has hope, and he who has hope has everything.",
    source: null,
  },
  {
    quote: "All great achievements require time.",
    source: "Maya Angelou",
  },
  {
    quote:
      "No person is your friend who demands your silence, or denies your right to grow.",
    source: "Alice Walker",
  },
  {
    quote: "Impossibilities are merely things which we have not yet learned.",
    source: "Charles Chesnutt",
  },
  {
    quote:
      "Vision without action is a daydream. Action without vision is a nightmare.",
    source: "Japanese proverb",
  },
  {
    quote:
      "The Superior Man is aware of Righteousness, the inferior man is aware of advantage.",
    source: "Confucius",
  },
  {
    quote: "He who angers you conquers you.",
    source: "Elizabeth Kenny",
  },
  {
    quote: "I never worry about action, but only inaction.",
    source: "Winston Churchill",
  },
  {
    quote: "No man is free who is not master of himself.",
    source: "Epictetus",
  },
  {
    quote: "Those that know, do. Those that understand, teach.",
    source: "Aristotle",
  },
  {
    quote:
      "If we are not fully ourselves, truly in the present moment, we miss everything.",
    source: "Thich Nhat Hanh",
  },
  {
    quote: "No act of kindness, no matter how small, is ever wasted.",
    source: "Aesop",
  },
  {
    quote: "Every man is a volume if you know how to read him.",
    source: "Channing",
  },
  {
    quote:
      "The difficulties of life are intended to make us better, not bitter.",
    source: null,
  },
  {
    quote: "Quality means doing it right when no one is looking.",
    source: "Henry Ford",
  },
  {
    quote: "Change your words. Change your world.",
    source: null,
  },
  {
    quote: "Great acts are made up of small deeds.",
    source: "Lao Tzu",
  },
  {
    quote:
      "The odds of hitting your target go up dramatically when you aim at it.",
    source: "Mal Pancoast",
  },
  {
    quote: "Open minds lead to open doors.",
    source: null,
  },
  {
    quote: "They can do all because they think they can.",
    source: "Virgil",
  },
  {
    quote: "You have to think anyway, so why not think big?",
    source: "Donald Trump",
  },
  {
    quote:
      "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
    source: "Edward Young",
  },
  {
    quote:
      "Your body is precious. It is our vehicle for awakening. Treat it with care.",
    source: "Buddha",
  },
  {
    quote: "The one who always loses, is the only person who gets the reward.",
    source: "Claire Charmont",
  },
  {
    quote:
      "The future is completely open, and we are writing it moment to moment.",
    source: "Pema Chodron",
  },
  {
    quote:
      "Each time we face a fear, we gain strength, courage, and confidence in the doing.",
    source: null,
  },
  {
    quote:
      "Ask yourself the secret of your success. Listen to your answer, and practice it.",
    source: "Richard Bach",
  },
  {
    quote:
      "Don't frown because you never know who is falling in love with your smile.",
    source: "Sinvyest Tan",
  },
  {
    quote:
      "Trust your hunches. They're usually based on facts filed away just below the conscious level.",
    source: "Joyce Brothers",
  },
  {
    quote: "Nothing is at last sacred but the integrity of your own mind.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "Listen to your intuition. It will tell you everything you need to know.",
    source: "Anthony D'Angelo",
  },
  {
    quote:
      "The personal life deeply lived always expands into truths beyond itself.",
    source: "Anais Nin",
  },
  {
    quote:
      "Whenever something negative happens to you, there is a deep lesson concealed within it.",
    source: "Eckhart Tolle",
  },
  {
    quote: "What is not started today is never finished tomorrow.",
    source: "Goethe",
  },
  {
    quote:
      "Our kindness may be the most persuasive argument for that which we believe.",
    source: "Gordon Hinckley",
  },
  {
    quote:
      "Chaos is inherent in all compounded things. Strive on with diligence.",
    source: "Buddha",
  },
  {
    quote: "Be sure you put your feet in the right place, then stand firm.",
    source: "Abraham Lincoln",
  },
  {
    quote: "Nothing great was ever achieved without enthusiasm.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "The meaning I picked, the one that changed my life: Overcome fear, behold wonder.",
    source: "Richard Bach",
  },
  {
    quote:
      "Know how to listen, and you will profit even from those who talk badly.",
    source: "Plutarch",
  },
  {
    quote: "A man is not old as long as he is seeking something.",
    source: "Edmond Rostand",
  },
  {
    quote: "The time you think you're missing, misses you too.",
    source: "Ymber Delecto",
  },
  {
    quote:
      "Life is not measured by the breaths you take, but by its breathtaking moments.",
    source: "Michael Vance",
  },
  {
    quote: "Much wisdom often goes with fewer words.",
    source: "Sophocles",
  },
  {
    quote:
      "If you love life, don't waste time, for time is what life is made up of.",
    source: "Bruce Lee",
  },
  {
    quote:
      "Imagination is the living power and prime agent of all human perception.",
    source: "Samuel Taylor Coleridge",
  },
  {
    quote:
      "It is impossible to feel grateful and depressed in the same moment.",
    source: "Naomi Williams",
  },
  {
    quote:
      "Progress always involves risks. You can't steal second base and keep your foot on first.",
    source: "Frederick Wilcox",
  },
  {
    quote:
      "Liberty, taking the word in its concrete sense, consists in the ability to choose.",
    source: "Simone Weil",
  },
  {
    quote: "A thing well said will be wit in all languages.",
    source: "John Dryden",
  },
  {
    quote: "Always do your best. What you plant now, you will harvest later.",
    source: "Og Mandino",
  },
  {
    quote:
      "My mama always said: life's like a box of chocolate you never know what you gonna get.",
    source: "Forrest Gump",
  },
  {
    quote:
      "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
    source: "Jean Lacordaire",
  },
  {
    quote: "If you come to a fork in the road, take it.",
    source: null,
  },
  {
    quote:
      "It is not only for what we do that we are held responsible, but also for what we do not do.",
    source: "Moliere",
  },
  {
    quote: "Nobody can do everything, but everybody can do something.",
    source: null,
  },
  {
    quote:
      "The world has the habit of making room for the man whose actions show that he knows where he is going.",
    source: "Napoleon Hill",
  },
  {
    quote:
      "You cannot step twice into the same river, for other waters are continually flowing in.",
    source: "Heraclitus",
  },
  {
    quote: "Excellence is to do a common thing in an uncommon way.",
    source: "Booker Washington",
  },
  {
    quote: "No matter how hard the past, you can always begin again.",
    source: "Buddha",
  },
  {
    quote: "I begin with an idea and then it becomes something else.",
    source: "Pablo Picasso",
  },
  {
    quote: "Whoever is happy will make others happy, too.",
    source: "Mark Twain",
  },
  {
    quote:
      "Your work is to discover your work and then with all your heart to give yourself to it.",
    source: "Buddha",
  },
  {
    quote:
      "It's not what happens to you, but how you react to it that matters.",
    source: "Epictetus",
  },
  {
    quote: "Take it easy, but take it.",
    source: "Woody Guthrie",
  },
  {
    quote:
      "Never apologize for showing feeling. When you do so, you apologize for truth.",
    source: "Benjamin Disraeli",
  },
  {
    quote: "Take rest; a field that has rested gives a bountiful crop.",
    source: "Ovid",
  },
  {
    quote:
      "Age does not protect you from love. But love, to some extent, protects you from age.",
    source: "Anais Nin",
  },
  {
    quote: "Do what you can. Want what you have. Be who you are.",
    source: "Forrest Church",
  },
  {
    quote: "There are people who have money and people who are rich.",
    source: "Coco Chanel",
  },
  {
    quote: "Why worry about tomorrow, when today is all we have?",
    source: null,
  },
  {
    quote:
      "Speak when you are angry and you will make the best speech you will ever regret.",
    source: "Ambrose Bierce",
  },
  {
    quote: "Things do not change, we change.",
    source: "Henry Thoreau",
  },
  {
    quote:
      "The exercise of an extraordinary gift is the supremest pleasure in life.",
    source: "Mark Twain",
  },
  {
    quote:
      "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
    source: "Etty Hillesum",
  },
  {
    quote:
      "Forgiveness is choosing to love. It is the first skill of self-giving love.",
    source: "Mohandas Gandhi",
  },
  {
    quote:
      "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.",
    source: "William Londen",
  },
  {
    quote: "Most smiles are started by another smile.",
    source: null,
  },
  {
    quote:
      "Nothing is softer or more flexible than water, yet nothing can resist it.",
    source: "Lao Tzu",
  },
  {
    quote:
      "It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others.",
    source: "Dalai Lama",
  },
  {
    quote: "Experience keeps a dear school, but fools will learn in no other.",
    source: "Benjamin Franklin",
  },
  {
    quote:
      "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
    source: "Thornton Wilder",
  },
  {
    quote:
      "Fine words and an insinuating appearance are seldom associated with true virtue",
    source: "Confucius",
  },
  {
    quote:
      "We do not quit playing because we grow old, we grow old because we quit playing.",
    source: "Oliver Holmes",
  },
  {
    quote: "You can't choose up sides on a round world.",
    source: "Wayne Dyer",
  },
  {
    quote:
      "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate, that's my philosophy.",
    source: "Thornton Wilder",
  },
  {
    quote:
      "Kindness is the language which the deaf can hear and the blind can see.",
    source: "Mark Twain",
  },
  {
    quote: "I may not know everything, but everything is not known yet anyway.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "If we could see the miracle of a single flower clearly, our whole life would change.",
    source: "Buddha",
  },
  {
    quote:
      "Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.",
    source: "Carl Jung",
  },
  {
    quote: "You cannot travel the path until you have become the path itself.",
    source: "Buddha",
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    source: "Theodore Roosevelt",
  },
  {
    quote:
      "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
    source: "William White",
  },
  {
    quote:
      "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
    source: "Jamie Paolinetti",
  },
  {
    quote: "When you lose, don't lose the lesson.",
    source: null,
  },
  {
    quote: "If you want a thing done well, do it yourself.",
    source: "Napoleon Bonaparte",
  },
  {
    quote: "The greatest barrier to success is the fear of failure.",
    source: "Eriksson",
  },
  {
    quote:
      "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.",
    source: "John Ruskin",
  },
  {
    quote: "If you aren't going all the way, why go at all?",
    source: "Joe Namath",
  },
  {
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    source: "Confucius",
  },
  {
    quote:
      "The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth.",
    source: "Pierre Abelard",
  },
  {
    quote:
      "If I could reach up and hold a star for every time you've made me smile, the entire evening sky would be in the palm of my hand.",
    source: null,
  },
  {
    quote:
      "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
    source: "Buddha",
  },
  {
    quote:
      "Stay committed to your decisions, but stay flexible in your approach.",
    source: "Tony Robbins",
  },
  {
    quote:
      "An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.",
    source: "Albert Schweitzer",
  },
  {
    quote:
      "What separates the winners from the losers is how a person reacts to each new twist of fate.",
    source: "Donald Trump",
  },
  {
    quote:
      "Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "To change ones life, start immediately, do it flamboyantly, no exceptions.",
    source: "William James",
  },
  {
    quote:
      "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
    source: "John F. Kennedy",
  },
  {
    quote:
      "The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts.",
    source: "Booker Washington",
  },
  {
    quote:
      "The steeper the mountain the harder the climb the better the view from the finishing line",
    source: null,
  },
  {
    quote:
      "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.",
    source: "Dr. David M. Burns",
  },
  {
    quote: "When I let go of what I am, I become what I might be.",
    source: "Lao Tzu",
  },
  {
    quote:
      "Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Time is not a measure the length of a day or month or year but more a measure of what you have accomplished.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
    source: "Buddha",
  },
  {
    quote:
      "When there is no enemy within, the enemies outside cannot hurt you.",
    source: "African proverb",
  },
  {
    quote:
      "He who controls others may be powerful, but he who has mastered himself is mightier still.",
    source: "Lao Tzu",
  },
  {
    quote:
      "There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen.",
    source: "Wayne Dyer",
  },
  {
    quote:
      "Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.",
    source: "Wolfgang Amadeus Mozart",
  },
  {
    quote:
      "The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.",
    source: "H. Bertram Lewis",
  },
  {
    quote:
      "As an organizer I start from where the world is, as it is, not as I would like it to be.",
    source: "Saul Alinsky",
  },
  {
    quote: "You are the only person on Earth who can use your ability.",
    source: "Zig Ziglar",
  },
  {
    quote: "Don't let what you can't do stop you from doing what you can do.",
    source: null,
  },
  {
    quote: "Complaining doesn't change a thing only taking action does.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
    source: "Charles A. Lindbergh",
  },
  {
    quote:
      "Enjoy the little things, for one day you may look back and realize they were the big things.",
    source: "Robert Brault",
  },
  {
    quote:
      "With every experience, you alone are painting your own canvas, thought by thought, choice by choice.",
    source: "Oprah Winfrey",
  },
  {
    quote: "Let the beauty of what you love be what you do.",
    source: "Rumi",
  },
  {
    quote:
      "The world turns aside to let any man pass who knows where he is going.",
    source: "Epictetus",
  },
  {
    quote: "Beauty is not in the face; beauty is a light in the heart.",
    source: "Kahlil Gibran",
  },
  {
    quote: "A day of worry is more exhausting than a day of work.",
    source: "John Lubbock",
  },
  {
    quote:
      "Truth, and goodness, and beauty are but different faces of the same all.",
    source: "Ralph Emerson",
  },
  {
    quote: "To be great is to be misunderstood.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
    source: "Alfred Adler",
  },
  {
    quote: "Never, never, never give up.",
    source: "Winston Churchill",
  },
  {
    quote:
      "The most decisive actions of our life... are most often unconsidered actions.",
    source: "Andre Gide",
  },
  {
    quote:
      "As we grow as unique persons, we learn to respect the uniqueness of others.",
    source: "Robert Schuller",
  },
  {
    quote:
      "Failure doesn't mean you are a failure it just means you haven't succeeded yet.",
    source: "Robert Schuller",
  },
  {
    quote:
      "It is the quality of our work which will please God, not the quantity.",
    source: "Mahatma Gandhi",
  },
  {
    quote: "Try and fail, but don't fail to try.",
    source: "Stephen Kaggwa",
  },
  {
    quote:
      "First say to yourself what you would be; and then do what you have to do.",
    source: "Epictetus",
  },
  {
    quote:
      "Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune.",
    source: "Carl Jung",
  },
  {
    quote:
      "Keep silence for the most part, and speak only when you must, and then briefly.",
    source: "Epictetus",
  },
  {
    quote: "Fear not for the future, weep not for the past.",
    source: "Percy Shelley",
  },
  {
    quote:
      "We are Divine enough to ask and we are important enough to receive.",
    source: "Wayne Dyer",
  },
  {
    quote: "If you kick a stone in anger, you'll hurt your own foot.",
    source: "Korean proverb",
  },
  {
    quote: "To see things in the seed, that is genius.",
    source: "Lao Tzu",
  },
  {
    quote:
      "The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live.",
    source: "Bertrand Russell",
  },
  {
    quote:
      "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
    source: "Douglas Adams",
  },
  {
    quote: "Make the most of yourself, for that is all there is of you.",
    source: "Ralph Emerson",
  },
  {
    quote: "The universe is made of stories, not atoms.",
    source: "Muriel Rukeyser",
  },
  {
    quote: "Respect should be earned by actions, and not acquired by years.",
    source: "Frank Wright",
  },
  {
    quote: "I hear and I forget. I see and I remember. I do and I understand.",
    source: "Confucius",
  },
  {
    quote:
      "The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds.",
    source: "Will Durant",
  },
  {
    quote:
      "A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.",
    source: "Chuck Norris",
  },
  {
    quote: "Sometimes the biggest act of courage is a small one.",
    source: "Lauren Raffo",
  },
  {
    quote:
      "People are not lazy. They simply have impotent goals that is, goals that do not inspire them.",
    source: "Tony Robbins",
  },
  {
    quote:
      "You do not become good by trying to be good, but by finding the goodness that is already within you.",
    source: "Eckhart Tolle",
  },
  {
    quote:
      "Waste no more time arguing about what a good man should be. Be one.",
    source: "Marcus Aurelius",
  },
  {
    quote:
      "Happiness often sneaks in through a door you didn't know you left open.",
    source: "John Barrymore",
  },
  {
    quote:
      "There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.",
    source: "Mark Twain",
  },
  {
    quote:
      "The things that one most wants to do are the things that are probably most worth doing.",
    source: "Winifred Holtby",
  },
  {
    quote:
      "Always bear in mind that your own resolution to succeed is more important than any one thing.",
    source: "Abraham Lincoln",
  },
  {
    quote:
      "Setting an example is not the main means of influencing another, it is the only means.",
    source: "Albert Einstein",
  },
  {
    quote: "Chaos and Order are not enemies, only opposites.",
    source: "Richard Garriott",
  },
  {
    quote:
      "Perseverance is a great element of success. If you only knock long enough and loud enough at the gate, you are sure to wake up somebody.",
    source: "Henry Longfellow",
  },
  {
    quote:
      "Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.",
    source: "Harriet Lerner",
  },
  {
    quote:
      "He who deliberates fully before taking a step will spend his entire life on one leg.",
    source: "Chinese proverb",
  },
  {
    quote: "Peace begins with a smile.",
    source: "Mother Teresa",
  },
  {
    quote: "Be your own hero, it's cheaper than a movie ticket.",
    source: "Doug Horton",
  },
  {
    quote:
      "Turn your face toward the sun and the shadows will fall behind you.",
    source: "Maori proverb",
  },
  {
    quote:
      "Things turn out best for those who make the best of the way things turn out.",
    source: "Jack Buck",
  },
  {
    quote:
      "Were here for a reason. I believe a bit of the reason is to throw little torches out to lead people through the dark.",
    source: "Whoopi Goldberg",
  },
  {
    quote:
      "To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others.",
    source: "Anthony Robbins",
  },
  {
    quote: "Ability will never catch up with the demand for it.",
    source: "Confucius",
  },
  {
    quote:
      "Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.",
    source: "Albert Schweitzer",
  },
  {
    quote:
      "Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.",
    source: "Henry Reed",
  },
  {
    quote:
      "Setting goals is the first step in turning the invisible into the visible.",
    source: "Tony Robbins",
  },
  {
    quote:
      "Courage is not the absence of fear, but simply moving on with dignity despite that fear.",
    source: "Pat Riley",
  },
  {
    quote:
      "All truths are easy to understand once they are discovered; the point is to discover them.",
    source: "Galileo Galilei",
  },
  {
    quote:
      "The smallest act of kindness is worth more than the grandest intention.",
    source: "Oscar Wilde",
  },
  {
    quote:
      "We know from science that nothing in the universe exists as an isolated or independent entity.",
    source: "Margaret Wheatley",
  },
  {
    quote:
      "Everything in the universe goes by indirection. There are no straight lines.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "What do we live for, if it is not to make life less difficult for each other?",
    source: "George Eliot",
  },
  {
    quote:
      "When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace.",
    source: "Tenzin Gyatso",
  },
  {
    quote: "We may encounter many defeats but we must not be defeated.",
    source: "Maya Angelou",
  },
  {
    quote:
      "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
    source: "Richard Bach",
  },
  {
    quote:
      "Logic will get you from A to B. Imagination will take you everywhere.",
    source: "Albert Einstein",
  },
  {
    quote:
      "Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.",
    source: "Sarah Breathnach",
  },
  {
    quote: "The world is but a canvas to the imagination.",
    source: "Henry Thoreau",
  },
  {
    quote:
      "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.",
    source: "Lisa Alther",
  },
  {
    quote:
      "To be happy is to be able to become aware of oneself without fright.",
    source: "Walter Benjamin",
  },
  {
    quote:
      "Strength to carry on despite the odds means you have faith in your own abilities and know how.",
    source: "Byron Pulsifer",
  },
  {
    quote: "Make the most of yourself for that is all there is of you.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "Be gentle first with yourself if you wish to be gentle with others.",
    source: "Lama Yeshe",
  },
  {
    quote:
      "A man who doesn't trust himself can never really trust anyone else.",
    source: "Cardinal Retz",
  },
  {
    quote: "We make our own fortunes and we call them fate.",
    source: "Benjamin Disraeli",
  },
  {
    quote:
      "Leaders aren't born they are made. And they are made just like anything else, through hard work. And that's the price well have to pay to achieve that goal, or any goal.",
    source: "Vince Lombardi",
  },
  {
    quote: "It takes courage to grow up and become who you really are.",
    source: "E. E. Cummings",
  },
  {
    quote: "Always seek out the seed of triumph in every adversity.",
    source: "Og Mandino",
  },
  {
    quote:
      "Rather than wishing for change, you first must be prepared to change.",
    source: "Catherine Pulsifer",
  },
  {
    quote:
      "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act.",
    source: "Buddha",
  },
  {
    quote: "Fame usually comes to those who are thinking about something else.",
    source: "Holmes",
  },
  {
    quote:
      "First comes thought; then organization of that thought, into ideas and plans; then transformation of those plans into reality. The beginning, as you will observe, is in your imagination.",
    source: "Napoleon Hill",
  },
  {
    quote:
      "The superior man acts before he speaks, and afterwards speaks according to his action.",
    source: "Confucius",
  },
  {
    quote:
      "A single conversation across the table with a wise person is worth a months study of books.",
    source: "Chinese proverb",
  },
  {
    quote:
      "The difference between what we do and what we are capable of doing would suffice to solve most of the worlds problems.",
    source: "Mohandas Gandhi",
  },
  {
    quote:
      "You can never cross the ocean unless you have the courage to lose sight of the shore.",
    source: null,
  },
  {
    quote:
      "Work for something because it is good, not just because it stands a chance to succeed.",
    source: "Vaclav Havel",
  },
  {
    quote: "Knowledge rests not upon truth alone, but upon error also.",
    source: "Carl Jung",
  },
  {
    quote:
      "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only for wallowing in.",
    source: "Katherine Mansfield",
  },
  {
    quote:
      "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
    source: "Victoria Holt",
  },
  {
    quote:
      "When deeds and words are in accord, the whole world is transformed.",
    source: "Chuang Tzu",
  },
  {
    quote:
      "Kind words can be short and easy to speak but their echoes are truly endless.",
    source: "Mother Teresa",
  },
  {
    quote: "For everything that lives is holy, life delights in life.",
    source: "William Blake",
  },
  {
    quote:
      "The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world.",
    source: "Dalai Lama",
  },
  {
    quote: "Our passion is our strength.",
    source: "Billie Armstrong",
  },
  {
    quote:
      "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.",
    source: "Leonardo da Vinci",
  },
  {
    quote: "Spring is a time for rebirth and the fulfilment of new life.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "There is nothing happens to any person but what was in his power to go through with.",
    source: "Marcus Aurelius",
  },
  {
    quote:
      "There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.",
    source: "Alfred Korzybski",
  },
  {
    quote:
      "The art of progress is to preserve order amid change, and to preserve change amid order.",
    source: "Alfred Whitehead",
  },
  {
    quote:
      "We make a living by what we get, but we make a life by what we give.",
    source: "Winston Churchill",
  },
  {
    quote:
      "If you want to study yourself look into the hearts of other people. If you want to study other people look into your own heart.",
    source: "Friedrich von Schiller",
  },
  {
    quote:
      "Maxim for life: You get treated in life the way you teach people to treat you.",
    source: "Wayne Dyer",
  },
  {
    quote:
      "The first duty of a human being is to assume the right functional relationship to society more briefly, to find your real job, and do it.",
    source: "Charlotte Perkins Gilman",
  },
  {
    quote:
      "The key to growth is the introduction of higher dimensions of consciousness into our awareness.",
    source: "Lao Tzu",
  },
  {
    quote:
      "Thought is the blossom; language the bud; action the fruit behind it.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
    source: "Daisaku Ikeda",
  },
  {
    quote:
      "There is nothing so useless as doing efficiently that which should not be done at all.",
    source: "Peter Drucker",
  },
  {
    quote:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    source: "Leonardo da Vinci",
  },
  {
    quote:
      "All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts.",
    source: "William Shakespeare",
  },
  {
    quote:
      "As we are liberated from our own fear, our presence automatically liberates others.",
    source: "Nelson Mandela",
  },
  {
    quote: "The most successful people are those who are good at plan B.",
    source: "James Yorke",
  },
  {
    quote:
      "Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.",
    source: "Aristotle",
  },
  {
    quote:
      "To fly as fast as thought, you must begin by knowing that you have already arrived.",
    source: "Richard Bach",
  },
  {
    quote:
      "Obstacles are those things you see when you take your eyes off the goal.",
    source: "Hannah More",
  },
  {
    quote:
      "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
    source: "Michelangelo",
  },
  {
    quote: "Great ideas often receive violent opposition from mediocre minds.",
    source: "Albert Einstein",
  },
  {
    quote:
      "We can change our lives. We can do, have, and be exactly what we wish.",
    source: "Tony Robbins",
  },
  {
    quote: "You are the only person on earth who can use your ability.",
    source: "Zig Ziglar",
  },
  {
    quote:
      "Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that.",
    source: "Jean Lacordaire",
  },
  {
    quote:
      "The least of things with a meaning is worth more in life than the greatest of things without it.",
    source: "Carl Jung",
  },
  {
    quote:
      "The noblest worship is to make yourself as good and as just as you can.",
    source: "Isocrates",
  },
  {
    quote:
      "Though no one can go back and make a brand new start, anyone can start from not and make a brand new ending.",
    source: "Carl Bard",
  },
  {
    quote:
      "A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown.",
    source: "Denis Waitley",
  },
  {
    quote:
      "Don't think of it as failure. Think of it as time-released success.",
    source: "Robert Orben",
  },
  {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    source: "Aristotle",
  },
  {
    quote: "I walk slowly, but I never walk backward.",
    source: "Abraham Lincoln",
  },
  {
    quote:
      "Divide each difficulty into as many parts as is feasible and necessary to resolve it.",
    source: "Rene Descartes",
  },
  {
    quote:
      "The best place to find a helping hand is at the end of your own arm.",
    source: null,
  },
  {
    quote: "We know the truth, not only by the reason, but by the heart.",
    source: "Blaise Pascal",
  },
  {
    quote: "We choose our joys and sorrows long before we experience them.",
    source: "Kahlil Gibran",
  },
  {
    quote: "Anybody can make history. Only a great man can write it.",
    source: "Oscar Wilde",
  },
  {
    quote: "If I know what love is, it is because of you.",
    source: "Hermann Hesse",
  },
  {
    quote:
      "Allow the world to live as it chooses, and allow yourself to live as you choose.",
    source: "Richard Bach",
  },
  {
    quote:
      "Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled.",
    source: "Barack Obama",
  },
  {
    quote:
      "Compassion and happiness are not a sign of weakness but a sign of strength.",
    source: "Dalai Lama",
  },
  {
    quote:
      "It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.",
    source: "Franklin D. Roosevelt",
  },
  {
    quote: "Be here now. Be someplace else later. Is that so complicated?",
    source: "David Bader",
  },
  {
    quote:
      "To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.",
    source: "Mahummad Ali",
  },
  {
    quote:
      "Learning without reflection is a waste, reflection without learning is dangerous.",
    source: "Confucius",
  },
  {
    quote:
      "Don't fear failure so much that you refuse to try new things. The saddest summary of life contains three descriptions: could have, might have, and should have.",
    source: null,
  },
  {
    quote:
      "All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns.",
    source: "Bruce Lee",
  },
  {
    quote:
      "I don't believe in failure. It's not failure if you enjoyed the process.",
    source: "Oprah Winfrey",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
    source: "Helen Keller",
  },
  {
    quote:
      "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.",
    source: "David Rockefeller",
  },
  {
    quote:
      "The man who trusts men will make fewer mistakes than he who distrusts them.",
    source: "Cavour",
  },
  {
    quote: "The less effort, the faster and more powerful you will be.",
    source: "Bruce Lee",
  },
  {
    quote:
      "We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle.",
    source: "Anais Nin",
  },
  {
    quote: "The cure for boredom is curiosity. There is no cure for curiosity.",
    source: "Ellen Parr",
  },
  {
    quote: "We can do no great things, only small things with great love.",
    source: "Mother Teresa",
  },
  {
    quote: "Be like the flower, turn your face to the sun.",
    source: "Kahlil Gibran",
  },
  {
    quote: "Remembering a wrong is like carrying a burden on the mind.",
    source: "Buddha",
  },
  {
    quote:
      "The foolish man seeks happiness in the distance; the wise grows it under his feet.",
    source: "James Openheim",
  },
  {
    quote: "Gratitude is the fairest blossom which springs from the soul.",
    source: "Henry Beecher",
  },
  {
    quote:
      "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?",
    source: "Confucius",
  },
  {
    quote: "You cannot have what you do not want.",
    source: "John Acosta",
  },
  {
    quote:
      "Do not follow where the path may lead. Go, instead, where there is no path and leave a trail.",
    source: "Ralph Waldo Emerson",
  },
  {
    quote:
      "It is not fair to ask of others what you are unwilling to do yourself.",
    source: "Eleanor Roosevelt",
  },
  {
    quote:
      "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
    source: "Carl Jung",
  },
  {
    quote: "The best thing in every noble dream is the dreamer...",
    source: "Moncure Conway",
  },
  {
    quote:
      "Weve got to have a dream if we are going to make a dream come true.",
    source: "Walt Disney",
  },
  {
    quote:
      "If you want things to be different, perhaps the answer is to become different yourself.",
    source: "Norman Peale",
  },
  {
    quote: "There is nothing impossible to him who will try.",
    source: "Alexander the Great",
  },
  {
    quote:
      "Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom.",
    source: "Theodore Rubin",
  },
  {
    quote:
      "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    source: "Harriet Tubman",
  },
  {
    quote:
      "The only real failure in life is not to be true to the best one knows.",
    source: "Buddha",
  },
  {
    quote:
      "Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either.",
    source: "Albert Einstein",
  },
  {
    quote:
      "Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek.",
    source: "Barack Obama",
  },
  {
    quote: "Those who cannot learn from history are doomed to repeat it.",
    source: "George Santayan",
  },
  {
    quote:
      "The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves happy. The amount of work is the same.",
    source: "Carlos Castaneda",
  },
  {
    quote:
      "Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not.",
    source: "Dhammapada",
  },
  {
    quote: "Things that were hard to bear are sweet to remember.",
    source: "Seneca",
  },
  {
    quote:
      "Three things in human life are important. The first is to be kind. The second is to be kind. The third is to be kind.",
    source: "Henry James",
  },
  {
    quote:
      "However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?",
    source: "Buddha",
  },
  {
    quote: "They can conquer who believe they can.",
    source: "Virgil",
  },
  {
    quote:
      "Learn to listen. Opportunity could be knocking at your door very softly.",
    source: "Frank Tyger",
  },
  {
    quote: "All action results from thought, so it is thoughts that matter.",
    source: "Sai Baba",
  },
  {
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    source: "Albert Einstein",
  },
  {
    quote:
      "I love my past. I love my present. I'm not ashamed of what Ive had, and I'm not sad because I have it no longer.",
    source: "Colette",
  },
  {
    quote:
      "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
    source: "Maya Angelou",
  },
  {
    quote: "Just as much as we see in others we have in ourselves.",
    source: "William Hazlitt",
  },
  {
    quote:
      "Prosperity depends more on wanting what you have than having what you want.",
    source: "Geoffrey F. Abert",
  },
  {
    quote:
      "How many cares one loses when one decides not to be something but to be someone.",
    source: "Coco Chanel",
  },
  {
    quote: "He who knows, does not speak. He who speaks, does not know.",
    source: "Lao Tzu",
  },
  {
    quote: "We cannot direct the wind but we can adjust the sails.",
    source: null,
  },
  {
    quote:
      "One may say the eternal mystery of the world is its comprehensibility.",
    source: "Albert Einstein",
  },
  {
    quote:
      "The self is not something ready-made, but something in continuous formation through choice of action.",
    source: "John Dewey",
  },
  {
    quote:
      "Our greatness lies not so much in being able to remake the world as being able to remake ourselves.",
    source: "Mahatma Gandhi",
  },
  {
    quote: "Moments of complete apathy are the best for new creations.",
    source: "Philip Breedveld",
  },
  {
    quote: "The only real mistake is the one from which we learn nothing.",
    source: "John Powell",
  },
  {
    quote:
      "To dream of the person you would like to be is to waste the person you are.",
    source: "Tim Menchen",
  },
  {
    quote:
      "The important thing is this: to be able at any moment to sacrifice what we are for what we could become.",
    source: "Charles Dubois",
  },
  {
    quote:
      "Gratitude is not only the greatest of virtues, but the paren't of all the others.",
    source: "Cicero",
  },
  {
    quote:
      "It is never too late. Even if you are going to die tomorrow, keep yourself straight and clear and be a happy human being today.",
    source: "Lama Yeshe",
  },
  {
    quote:
      "Respect is not something that you can ask for, buy or borrow. Respect is what you earn from each person no matter their background or status.",
    source: "Byron Pulsifer",
  },
  {
    quote: "Things do not change; we change.",
    source: "Henry Thoreau",
  },
  {
    quote:
      "We must learn our limits. We are all something, but none of us are everything.",
    source: "Blaise Pascal",
  },
  {
    quote:
      "Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant.",
    source: "Stephen Sigmund",
  },
  {
    quote:
      "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
    source: "Charles R. Swindoll",
  },
  {
    quote:
      "All men have a sweetness in their life. That is what helps them go on. It is towards that they turn when they feel too worn out.",
    source: "Albert Camus",
  },
  {
    quote: "Be a good listener. Your ears will never get you in trouble.",
    source: "Frank Tyger",
  },
  {
    quote:
      "Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what hold you back, and choose the path that leads to wisdom.",
    source: "Buddha",
  },
  {
    quote:
      "You learn to speak by speaking, to study by studying, to run by running, to work by working; in just the same way, you learn to love by loving.",
    source: "Anatole France",
  },
  {
    quote:
      "To listen well is as powerful a means of communication and influence as to talk well.",
    source: "John Marshall",
  },
  {
    quote: "There is only one happiness in life, to love and be loved.",
    source: "George Sand",
  },
  {
    quote:
      "Live through feeling and you will live through love. For feeling is the language of the soul, and feeling is truth.",
    source: "Matt Zotti",
  },
  {
    quote:
      "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
    source: "Lao Tzu",
  },
  {
    quote:
      "Reason and free inquiry are the only effectual agents against error.",
    source: "Thomas Jefferson",
  },
  {
    quote: "The best cure for the body is a quiet mind.",
    source: "Napoleon Bonaparte",
  },
  {
    quote: "See the positive side, the potential, and make an effort.",
    source: "Dalai Lama",
  },
  {
    quote:
      "By accepting yourself and being fully what you are, your presence can make others happy.",
    source: "Jane Roberts",
  },
  {
    quote:
      "Never deny a diagnosis, but do deny the negative verdict that may go with it.",
    source: "Norman Cousins",
  },
  {
    quote:
      "The really unhappy person is the one who leaves undone what they can do, and starts doing what they don't understand; no wonder they come to grief.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote: "You cannot be lonely if you like the person you're alone with.",
    source: "Wayne Dyer",
  },
  {
    quote:
      "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act.",
    source: "G. K. Chesterton",
  },
  {
    quote:
      "If you propose to speak, always ask yourself, is it true, is it necessary, is it kind.",
    source: "Buddha",
  },
  {
    quote:
      "Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical.Expect more than others think is possible.",
    source: "Cadet Maxim",
  },
  {
    quote:
      "Failure will never overtake me if my determination to succeed is strong enough.",
    source: "Og Mandino",
  },
  {
    quote:
      "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
    source: "Ralph Marston",
  },
  {
    quote: "Wrinkles should merely indicate where smiles have been.",
    source: "Mark Twain",
  },
  {
    quote: "Your attitude, not your aptitude, will determine your altitude.",
    source: "Zig Ziglar",
  },
  {
    quote:
      "Let yourself be silently drawn by the stronger pull of what you really love.",
    source: "Rumi",
  },
  {
    quote:
      "I gave my life to become the person I am right now. Was it worth it?",
    source: "Richard Bach",
  },
  {
    quote: "Give thanks for a little and you will find a lot.",
    source: "Hausa",
  },
  {
    quote:
      "Your ability to learn faster than your competition is your only sustainable competitive advantage.",
    source: "Arie de Gues",
  },
  {
    quote:
      "Forgiveness does not change the past, but it does enlarge the future.",
    source: "Paul Boese",
  },
  {
    quote:
      "Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.",
    source: "Nikola Tesla",
  },
  {
    quote:
      "Moral excellence comes about as a result of habit. We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts.",
    source: "Aristotle",
  },
  {
    quote: "The deepest craving of human nature is the need to be appreciated.",
    source: "William James",
  },
  {
    quote:
      "Love does not consist of gazing at each other, but in looking together in the same direction.",
    source: "Antoine de Saint-Exupery",
  },
  {
    quote:
      "We have committed the Golden Rule to memory; let us now commit it to life.",
    source: "Edwin Markham",
  },
  {
    quote:
      "It is with words as with sunbeams. The more they are condensed, the deeper they burn.",
    source: "Robert Southey",
  },
  {
    quote: "When people are like each other they tend to like each other.",
    source: "Tony Robbins",
  },
  {
    quote:
      "Sincerity is the way of Heaven. The attainment of sincerity is the way of men.",
    source: "Confucius",
  },
  {
    quote: "Be the change that you want to see in the world.",
    source: "Mohandas Gandhi",
  },
  {
    quote: "The more you care, the stronger you can be.",
    source: "Jim Rohn",
  },
  {
    quote:
      "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
    source: "Oprah Winfrey",
  },
  {
    quote: "Just trust yourself, then you will know how to live.",
    source: "Goethe",
  },
  {
    quote:
      "To be fully alive, fully human, and completely awake is to be continually thrown out of the nest.",
    source: "Pema Chodron",
  },
  {
    quote:
      "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
    source: "Jim Rohn",
  },
  {
    quote:
      "It all depends on how we look at things, and not how they are in themselves.",
    source: "Carl Jung",
  },
  {
    quote:
      "Giving up doesn't always mean you are weak; sometimes it means that you are strong enough to let go.",
    source: null,
  },
  {
    quote: "To climb steep hills requires a slow pace at first.",
    source: "William Shakespeare",
  },
  {
    quote:
      "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
    source: "Buddha",
  },
  {
    quote:
      "It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him.",
    source: "Max Planck",
  },
  {
    quote: "Truth is generally the best vindication against slander.",
    source: "Abraham Lincoln",
  },
  {
    quote: "To follow, without halt, one aim: There is the secret of success.",
    source: "Anna Pavlova",
  },
  {
    quote:
      "And as we let our own light shine, we unconsciously give other people permission to do the same.",
    source: "Nelson Mandela",
  },
  {
    quote:
      "What is a weed? A plant whose virtues have not yet been discovered.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "Belief consists in accepting the affirmations of the soul; Unbelief, in denying them.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "Many people have gone further than they thought they could because someone else thought they could.",
    source: null,
  },
  {
    quote: "We read the world wrong and say that it deceives us.",
    source: "Rabindranath Tagore",
  },
  {
    quote: "If only wed stop trying to be happy wed have a pretty good time.",
    source: "Edith Wharton",
  },
  {
    quote: "You must do the things you think you cannot do.",
    source: "Eleanor Roosevelt",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
  },
  {
    quote:
      "The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the Master calls the butterfly.",
    source: "Richard Bach",
  },
  {
    quote:
      "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.",
    source: "Edna Millay",
  },
  {
    quote: "Most folks are as happy as they make up their minds to be.",
    source: "Abraham Lincoln",
  },
  {
    quote: "Love is the master key that opens the gates of happiness.",
    source: "Oliver Holmes",
  },
  {
    quote:
      "The person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication.",
    source: "Cecil B. DeMille",
  },
  {
    quote: "My reputation grows with every failure.",
    source: "George Shaw",
  },
  {
    quote:
      "Good thoughts are no better than good dreams, unless they be executed.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes.",
    source: "Dalai Lama",
  },
  {
    quote:
      "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
    source: "Buddha",
  },
  {
    quote: "For success, attitude is equally as important as ability.",
    source: "Harry Banks",
  },
  {
    quote:
      "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.",
    source: "Colin Powell",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    source: "Albert Einstein",
  },
  {
    quote: "Better than a thousand hollow words is one word that brings peace.",
    source: "Buddha",
  },
  {
    quote:
      "The possibilities are numerous once we decide to act and not react.",
    source: "George Bernard Shaw",
  },
  {
    quote: "Almost everything comes from nothing.",
    source: "Henri Amiel",
  },
  {
    quote: "Sometimes by losing a battle you find a new way to win the war.",
    source: "Donald Trump",
  },
  {
    quote: "Listen to what you know instead of what you fear.",
    source: "Richard Bach",
  },
  {
    quote:
      "It is easier to live through someone else than to become complete yourself.",
    source: "Betty Friedan",
  },
  {
    quote:
      "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.",
    source: "John Simone",
  },
  {
    quote: "Remember that failure is an event, not a person.",
    source: "Zig Ziglar",
  },
  {
    quote: "Don't settle for a relationship that won't let you be yourself.",
    source: "Oprah Winfrey",
  },
  {
    quote:
      "What the caterpillar calls the end of the world, the master calls a butterfly.",
    source: "Richard Bach",
  },
  {
    quote:
      "Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance.",
    source: "Thomas Carlyle",
  },
  {
    quote:
      "If you do what you've always done, you'll get what youve always gotten.",
    source: "Tony Robbins",
  },
  {
    quote: "Do not wait for leaders; do it alone, person to person.",
    source: "Mother Teresa",
  },
  {
    quote:
      "Knowledge has three degrees opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.",
    source: "Plotinus",
  },
  {
    quote:
      "Love vanquishes time. To lovers, a moment can be eternity, eternity can be the tick of a clock.",
    source: "Mary Parrish",
  },
  {
    quote: "We never live; we are always in the expectation of living.",
    source: "Voltaire",
  },
  {
    quote: "Think like a man of action; act like a man of thought.",
    source: "Henri L. Bergson",
  },
  {
    quote:
      "You can complain because roses have thorns, or you can rejoice because thorns have roses.",
    source: "Ziggy",
  },
  {
    quote:
      "There is not one big cosmic meaning for all, there is only the meaning we each give to our life.",
    source: "Anais Nin",
  },
  {
    quote:
      "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
    source: "Lao Tzu",
  },
  {
    quote: "Time you enjoyed wasting was not wasted.",
    source: "John Lennon",
  },
  {
    quote:
      "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
    source: "Albert Camus",
  },
  {
    quote:
      "Genuine sincerity opens people's hearts, while manipulation causes them to close.",
    source: "Daisaku Ikeda",
  },
  {
    quote:
      "To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom.",
    source: "Confucius",
  },
  {
    quote: "A man's dreams are an index to his greatness.",
    source: "Zadok Rabinowitz",
  },
  {
    quote:
      "This is the final test of a gentleman: his respect for those who can be of no possible value to him.",
    source: "William Lyon Phelps",
  },
  {
    quote: "You teach best what you most need to learn.",
    source: "Richard Bach",
  },
  {
    quote:
      "Continuous effort, not strength or intelligence is the key to unlocking our potential.",
    source: "Winston Churchill",
  },
  {
    quote:
      "Obstacles are those frightful things you see when you take your eyes off your goal.",
    source: "Henry Ford",
  },
  {
    quote: "Go for it now. The future is promised to no one.",
    source: "Wayne Dyer",
  },
  {
    quote:
      "Never tell a young person that anything cannot be done. God may have been waiting centuries for someone ignorant enough of the impossible to do that very thing.",
    source: "John Holmes",
  },
  {
    quote:
      "Bold is not the act of foolishness but the attribute and inner strength to act when others will not so as to move forward not backward.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "If we look at the world with a love of life, the world will reveal its beauty to us.",
    source: "Daisaku Ikeda",
  },
  {
    quote: "In skating over thin ice our safety is in our speed.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it.",
    source: "W. Clement Stone",
  },
  {
    quote: "Never promise more than you can perform.",
    source: "Publilius Syrus",
  },
  {
    quote:
      "If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place.",
    source: "Nora Roberts",
  },
  {
    quote: "I can't believe that God put us on this earth to be ordinary.",
    source: "Lou Holtz",
  },
  {
    quote: "There are no limitations to the mind except those we acknowledge.",
    source: "Napoleon Hill",
  },
  {
    quote:
      "It is through science that we prove, but through intuition that we discover.",
    source: "Jules Poincare",
  },
  {
    quote:
      "Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.",
    source: "Richard Bach",
  },
  {
    quote:
      "If someone in your life talked to you the way you talk to yourself, you would have left them long ago.",
    source: "Carla Gordon",
  },
  {
    quote:
      "The cosmos is neither moral or immoral; only people are. He who would move the world must first move himself.",
    source: "Edward Ericson",
  },
  {
    quote:
      "If you lose today, win tomorrow. In this never-ending spirit of challenge is the heart of a victor.",
    source: "Daisaku Ikeda",
  },
  {
    quote:
      "There is a way that nature speaks, that land speaks. Most of the time we are simply not patient enough, quiet enough, to pay attention to the story.",
    source: "Linda Hogan",
  },
  {
    quote:
      "Never tell me the sky is the limit when there are footprints on the moon.",
    source: null,
  },
  {
    quote:
      "I cannot say whether things will get better if we change; what I can say is they must change if they are to get better.",
    source: "Georg Lichtenberg",
  },
  {
    quote:
      "The greater part of human pain is unnecessary. It is self-created as long as the unobserved mind runs your life.",
    source: "Eckhart Tolle",
  },
  {
    quote: "Take it easy but take it.",
    source: "Woody Guthrie",
  },
  {
    quote:
      "Blessed is the man who expects nothing, for he shall never be disappointed.",
    source: "Alexander Pope",
  },
  {
    quote: "He who knows others is wise. He who knows himself is enlightened.",
    source: "Lao Tzu",
  },
  {
    quote: "The best way to predict your future is to create it.",
    source: "Peter Drucker",
  },
  {
    quote:
      "A garden is always a series of losses set against a few triumphs, like life itself.",
    source: "May Sarton",
  },
  {
    quote:
      "If facts are the seeds that later produce knowledge and wisdom, then the emotions and the impressions of the senses are the fertile soil in which the seeds must grow.",
    source: "Rachel Carson",
  },
  {
    quote: "Never mistake motion for action.",
    source: "Ernest Hemingway",
  },
  {
    quote:
      "One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world.",
    source: "Hannah Senesh",
  },
  {
    quote:
      "One who is too insistent on his own views, finds few to agree with him.",
    source: "Lao Tzu",
  },
  {
    quote:
      "Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift.",
    source: "Harry Burchell Mathews",
  },
  {
    quote:
      "Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity.",
    source: "Voltaire",
  },
  {
    quote:
      "The reasonable man adapts himself to the world; the unreasonable man persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man.",
    source: "George Shaw",
  },
  {
    quote:
      "Good instincts usually tell you what to do long before your head has figured it out.",
    source: "Michael Burke",
  },
  {
    quote:
      "It isn't what happens to us that causes us to suffer; it's what we say to ourselves about what happens.",
    source: "Pema Chodron",
  },
  {
    quote:
      "Those who dream by day are cognizant of many things which escape those who dream only by night.",
    source: "Edgar Allan Poe",
  },
  {
    quote:
      "We cannot hold a torch to light another's path without brightening our own.",
    source: "Ben Sweetland",
  },
  {
    quote:
      "You are never given a wish without also being given the power to make it come true. You may have to work for it, however.",
    source: "Richard Bach",
  },
  {
    quote:
      "Kind words can be short and easy to speak, but their echoes are truly endless.",
    source: "Mother Teresa",
  },
  {
    quote:
      "Count your joys instead of your woes. Count your friends instead of your foes.",
    source: null,
  },
  {
    quote:
      "Dreams come true. Without that possibility, nature would not incite us to have them.",
    source: "John Updike",
  },
  {
    quote:
      "Staying in one place is the best path to be taken over and surpassed by many.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "Imagination will often carry us to worlds that never were. But without it we go nowhere.",
    source: "Carl Sagan",
  },
  {
    quote:
      "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    source: "Helen Keller",
  },
  {
    quote:
      "A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action.",
    source: "Jawaharlal Nehru",
  },
  {
    quote: "I have no special talent. I am only passionately curious.",
    source: "Albert Einstein",
  },
  {
    quote:
      "I endeavour to be wise when I cannot be merry, easy when I cannot be glad, content with what cannot be mended and patient when there is no redress.",
    source: "Elizabeth Montagu",
  },
  {
    quote:
      "The height of your accomplishments will equal the depth of your convictions.",
    source: "William Scolavino",
  },
  {
    quote:
      "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
    source: "Rabbi Hillel",
  },
  {
    quote:
      "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    source: "Audre Lorde",
  },
  {
    quote:
      "All great men are gifted with intuition. They know without reasoning or analysis, what they need to know.",
    source: "Alexis Carrel",
  },
  {
    quote:
      "To get the full value of joy you must have someone to divide it with.",
    source: "Mark Twain",
  },
  {
    quote:
      "Sometimes our fate resembles a fruit tree in winter. Who would think that those branches would turn green again and blossom, but we hope it, we know it.",
    source: "Johann Wolfgang von Goethe",
  },
  {
    quote: "We lost because we told ourselves we lost.",
    source: "Leo Tolstoy",
  },
  {
    quote:
      "Success is determined by those whom prove the impossible, possible.",
    source: "James Pence",
  },
  {
    quote:
      "Good advice is always certain to be ignored, but that's no reason not to give it.",
    source: "Agatha Christie",
  },
  {
    quote:
      "The winner ain't the one with the fastest car it's the one who refuses to lose.",
    source: "Dale Earnhardt",
  },
  {
    quote:
      "Spirituality can be severed from both vicious sectarianism and thoughtless banalities. Spirituality, I have come to see, is nothing less than the thoughtful love of life.",
    source: "Robert C. Solomon",
  },
  {
    quote:
      "No one has a finer command of language than the person who keeps his mouth shut.",
    source: "Sam Rayburn",
  },
  {
    quote:
      "The only person who never makes mistakes is the person who never does anything.",
    source: "Denis Waitley",
  },
  {
    quote: "Life is what happens to you while you're busy making other plans.",
    source: "John Lennon",
  },
  {
    quote:
      "Discovery consists of seeing what everybody has seen and thinking what nobody else has thought.",
    source: "Jonathan Swift",
  },
  {
    quote: "If you have knowledge, let others light their candles in it.",
    source: "Margaret Fuller",
  },
  {
    quote:
      "It is impossible for a man to learn what he thinks he already knows.",
    source: "Epictetus",
  },
  {
    quote:
      "If you find yourself in a hole, the first thing to do is stop digging.",
    source: "Will Rogers",
  },
  {
    quote:
      "To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.",
    source: "Plutarch",
  },
  {
    quote:
      "I think you can have moderate success by copying something else, but if you really want to knock it out of the park, you have to do something different and take chances.",
    source: "Lee Womack",
  },
  {
    quote:
      "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    source: "Marcus Aurelius",
  },
  {
    quote:
      "Six essential qualities that are the key to success: Sincerity, personal integrity, humility, courtesy, wisdom, charity.",
    source: "William Menninger",
  },
  {
    quote:
      "I have an everyday religion that works for me. Love yourself first, and everything else falls into line.",
    source: "Lucille Ball",
  },
  {
    quote:
      "Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate.",
    source: "Chuang Tzu",
  },
  {
    quote:
      "Nothing could be worse than the fear that one had given up too soon, and left one unexpended effort that might have saved the world.",
    source: "Jane Addams",
  },
  {
    quote: "The energy of the mind is the essence of life.",
    source: "Aristotle",
  },
  {
    quote: "Begin, be bold, and venture to be wise.",
    source: "Horace",
  },
  {
    quote:
      "Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime.",
    source: "Lao Tzu",
  },
  {
    quote: "A wise man will make more opportunities than he finds.",
    source: "Francis Bacon",
  },
  {
    quote:
      "Slow down and enjoy life. It's not only the scenery you miss by going too fast you also miss the sense of where you are going and why.",
    source: "Eddie Cantor",
  },
  {
    quote: "Miracles come in moments. Be ready and willing.",
    source: "Wayne Dyer",
  },
  {
    quote:
      "Numberless are the worlds wonders, but none more wonderful than man.",
    source: "Sophocles",
  },
  {
    quote:
      "So is cheerfulness, or a good temper, the more it is spent, the more remains.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "The true way to render ourselves happy is to love our work and find in it our pleasure.",
    source: "Francoise de Motteville",
  },
  {
    quote:
      "When you judge another, you do not define them, you define yourself.",
    source: "Wayne Dyer",
  },
  {
    quote: "Argue for your limitations, and sure enough they're yours.",
    source: "Richard Bach",
  },
  {
    quote:
      "He who wishes to secure the good of others, has already secured his own.",
    source: "Confucius",
  },
  {
    quote:
      "Wise men talk because they have something to say; fools, because they have to say something.",
    source: "Plato",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    source: "Confucius",
  },
  {
    quote:
      "The future is an opaque mirror. Anyone who tries to look into it sees nothing but the dim outlines of an old and worried face.",
    source: "Jim Bishop",
  },
  {
    quote:
      "Everything that irritates us about others can lead us to a better understanding of ourselves.",
    source: "Carl Jung",
  },
  {
    quote:
      "Beware of the half truth. You may have gotten hold of the wrong half.",
    source: null,
  },
  {
    quote:
      "The greatest mistake you can make in life is to be continually fearing you will make one.",
    source: "Elbert Hubbard",
  },
  {
    quote: "I have never been hurt by anything I didn't say.",
    source: "Calvin Coolidge",
  },
  {
    quote:
      "Be not angry that you cannot make others as you wish them to be, since you cannot make yourself as you wish to be.",
    source: "Thomas Kempis",
  },
  {
    quote: "Adversity causes some men to break, others to break records.",
    source: "William Ward",
  },
  {
    quote:
      "An invincible determination can accomplish almost anything and in this lies the great distinction between great men and little men.",
    source: "Thomas Fuller",
  },
  {
    quote:
      "The industrial landscape is already littered with remains of once successful companies that could not adapt their strategic vision to altered conditions of competition.",
    source: "Abernathy",
  },
  {
    quote: "Example has more followers than reason.",
    source: "Christian Bovee",
  },
  {
    quote:
      "One that desires to excel should endeavour in those things that are in themselves most excellent.",
    source: "Epictetus",
  },
  {
    quote:
      "If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose.",
    source: "Mary Pickford",
  },
  {
    quote:
      "The only Zen you find on the tops of mountains is the Zen you bring up there.",
    source: "Robert Pirsig",
  },
  {
    quote: "Gratitude is riches. Complaint is poverty.",
    source: "Doris Day",
  },
  {
    quote:
      "Strong people make as many mistakes as weak people. Difference is that strong people admit their mistakes, laugh at them, learn from them. That is how they become strong.",
    source: "Richard Needham",
  },
  {
    quote:
      "To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "You can stand tall without standing on someone. You can be a victor without having victims.",
    source: "Harriet Woods",
  },
  {
    quote:
      "Bad times have a scientific value. These are occasions a good learner would not miss.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "It's not who you are that holds you back, it's who you think you're not.",
    source: null,
  },
  {
    quote:
      "All children are artists. The problem is how to remain an artist once he grows up.",
    source: "Pablo Picasso",
  },
  {
    quote: "Either I will find a way, or I will make one.",
    source: "Philip Sidney",
  },
  {
    quote: "He who knows that enough is enough will always have enough.",
    source: "Lao Tzu",
  },
  {
    quote: "The only way to have a friend is to be one.",
    source: "Ralph Emerson",
  },
  {
    quote:
      "If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome.",
    source: "Anne Bradstreet",
  },
  {
    quote:
      "Joy is what happens to us when we allow ourselves to recognize how good things really are.",
    source: "Marianne Williamson",
  },
  {
    quote:
      "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
    source: "Carl Jung",
  },
  {
    quote:
      "There is never enough time to do everything, but there is always enough time to do the most important thing.",
    source: "Brian Tracy",
  },
  {
    quote: "You really can change the world if you care enough.",
    source: "Marian Edelman",
  },
  {
    quote:
      "What you are is what you have been. What you will be is what you do now.",
    source: "Buddha",
  },
  {
    quote:
      "Our lives are the only meaningful expression of what we believe and in Whom we believe. And the only real wealth, for any of us, lies in our faith.",
    source: "Gordon Hinckley",
  },
  {
    quote:
      "There surely is in human nature an inherent propensity to extract all the good out of all the evil.",
    source: "Benjamin Haydon",
  },
  {
    quote: "Music in the soul can be heard by the universe.",
    source: "Lao Tzu",
  },
  {
    quote: "What we see depends mainly on what we look for.",
    source: "John Lubbock",
  },
  {
    quote: "To hell with circumstances; I create opportunities.",
    source: "Bruce Lee",
  },
  {
    quote:
      "The truest greatness lies in being kind, the truest wisdom in a happy mind.",
    source: "Ella Wilcox",
  },
  {
    quote: "An ounce of emotion is equal to a ton of facts.",
    source: "John Junor",
  },
  {
    quote:
      "We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity.",
    source: "Barbara De Angelis",
  },
  {
    quote: "Great is the art of beginning, but greater is the art of ending.",
    source: "Lazurus Long",
  },
  {
    quote:
      "Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.",
    source: "Wayne Dyer",
  },
  {
    quote: "Nothing will work unless you do.",
    source: "Maya Angelou",
  },
  {
    quote:
      "Our ability to achieve happiness and success depends on the strength of our wings.",
    source: "Catherine Pulsifer",
  },
  {
    quote:
      "To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform.",
    source: "Theodore H. White",
  },
  {
    quote:
      "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
    source: "Melody Beattie",
  },
  {
    quote:
      "Into each life rain must fall but rain can be the giver of life and it is all in your attitude that makes rain produce sunshine.",
    source: "Byron Pulsifer",
  },
  {
    quote:
      "We are all inclined to judge ourselves by our ideals; others, by their acts.",
    source: "Harold Nicolson",
  },
  {
    quote: "Nothing is a waste of time if you use the experience wisely.",
    source: "Rodin",
  },
  {
    quote:
      "If one way be better than another, that you may be sure is natures way.",
    source: "Aristotle",
  },
  {
    quote:
      "Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it.",
    source: "Napoleon Hill",
  },
  {
    quote: "It is not in the stars to hold our destiny but in ourselves.",
    source: "William Shakespeare",
  },
  {
    quote:
      "Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant.",
    source: "Tony Robbins",
  },
  {
    quote: "I will prepare and some day my chance will come.",
    source: "Abraham Lincoln",
  },
  {
    quote:
      "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.",
    source: "Tom Jackson",
  },
];

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}”` + "  " + `— ${random.source}`;
}
window.onload = randomQuote();
