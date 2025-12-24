// ===== SAMPLE BOOK DATA FOR READIFY =====
// This will go in book-explorer.js

const booksData = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "fiction",
    rating: 4.5,
    cover: "images/books/midnight-library.jpg", // Find this book cover
    synopsis: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    series: null,
    reviews: [
      { reviewer: "Sarah M.", rating: 5, review: "Beautiful and thought-provoking!" },
      { reviewer: "John D.", rating: 4, review: "A unique take on life and choices" },
      { reviewer: "Emma L.", rating: 5, review: "Could not put it down!" }
    ]
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    rating: 4.8,
    cover: "images/books/hobbit.jpg",
    synopsis: "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that meant comfort.",
    series: {
      prequels: [],
      sequels: [
        "The Fellowship of the Ring",
        "The Two Towers",
        "The Return of the King"
      ]
    },
    reviews: [
      { reviewer: "Tom H.", rating: 5, review: "A timeless classic!" },
      { reviewer: "Lisa K.", rating: 5, review: "Perfect introduction to Middle-earth" },
      { reviewer: "Mike R.", rating: 4, review: "Great adventure story" }
    ]
  },
  {
    id: 3,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "mystery",
    rating: 4.6,
    cover: "images/books/crawdads.jpg",
    synopsis: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl.",
    series: null,
    reviews: [
      { reviewer: "Rachel P.", rating: 5, review: "Beautifully written mystery" },
      { reviewer: "David S.", rating: 4, review: "Captivating from start to finish" },
      { reviewer: "Amy T.", rating: 5, review: "One of my all-time favorites!" }
    ]
  },
  {
    id: 4,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    genre: "romance",
    rating: 4.7,
    cover: "images/books/evelyn-hugo.jpg",
    synopsis: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself.",
    series: null,
    reviews: [
      { reviewer: "Jennifer B.", rating: 5, review: "Absolutely stunning!" },
      { reviewer: "Mark W.", rating: 5, review: "Couldn't stop reading" },
      { reviewer: "Susan L.", rating: 4, review: "Emotional and gripping" }
    ]
  },
  {
    id: 5,
    title: "Project Hail Mary",
    author: "Andy Weir",
    genre: "sci-fi",
    rating: 4.8,
    cover: "images/books/hail-mary.jpg",
    synopsis: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.",
    series: null,
    reviews: [
      { reviewer: "Chris N.", rating: 5, review: "Best sci-fi I've read in years!" },
      { reviewer: "Laura H.", rating: 5, review: "Funny, thrilling, and smart" },
      { reviewer: "Kevin M.", rating: 4, review: "Another masterpiece from Weir" }
    ]
  },
  {
    id: 6,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "thriller",
    rating: 4.5,
    cover: "images/books/silent-patient.jpg",
    synopsis: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
    series: null,
    reviews: [
      { reviewer: "Patricia G.", rating: 5, review: "Mind-blowing twist!" },
      { reviewer: "Robert F.", rating: 4, review: "Kept me guessing until the end" },
      { reviewer: "Nicole J.", rating: 5, review: "Brilliant psychological thriller" }
    ]
  },
  {
    id: 7,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "fantasy",
    rating: 4.9,
    cover: "images/books/harry-potter-1.jpg",
    synopsis: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
    series: {
      prequels: [],
      sequels: [
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Prisoner of Azkaban",
        "Harry Potter and the Goblet of Fire",
        "Harry Potter and the Order of the Phoenix",
        "Harry Potter and the Half-Blood Prince",
        "Harry Potter and the Deathly Hallows"
      ]
    },
    reviews: [
      { reviewer: "Emily R.", rating: 5, review: "Magical in every way!" },
      { reviewer: "James C.", rating: 5, review: "A timeless classic for all ages" },
      { reviewer: "Sophie W.", rating: 5, review: "Started my love for reading" }
    ]
  },
  {
    id: 8,
    title: "All the Light We Cannot See",
    author: "Anthony Doerr",
    genre: "historical",
    rating: 4.7,
    cover: "images/books/all-the-light.jpg",
    synopsis: "Marie-Laure lives in Paris near the Museum of Natural History, where her father works. When she is twelve, the Nazis occupy Paris and father and daughter flee to the walled citadel of Saint-Malo, where Marie-Laure's reclusive great uncle lives in a tall house by the sea.",
    series: null,
    reviews: [
      { reviewer: "Catherine D.", rating: 5, review: "Beautifully crafted story" },
      { reviewer: "William P.", rating: 5, review: "Haunting and unforgettable" },
      { reviewer: "Victoria S.", rating: 4, review: "Powerful wartime narrative" }
    ]
  },
  {
    id: 9,
    title: "Educated",
    author: "Tara Westover",
    genre: "non-fiction",
    rating: 4.6,
    cover: "images/books/educated.jpg",
    synopsis: "Tara Westover was seventeen the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her 'head-for-the-hills bag'.",
    series: null,
    reviews: [
      { reviewer: "Michelle A.", rating: 5, review: "Inspiring and powerful" },
      { reviewer: "Daniel K.", rating: 5, review: "Couldn't believe this was real" },
      { reviewer: "Olivia M.", rating: 4, review: "Remarkable memoir" }
    ]
  },
  {
    id: 10,
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    genre: "fantasy",
    rating: 4.4,
    cover: "images/books/addie-larue.jpg",
    synopsis: "France, 1714: in a moment of desperation, a young woman makes a Faustian bargain to live forever—and is cursed to be forgotten by everyone she meets. Thus begins the extraordinary life of Addie LaRue, and a dazzling adventure that will play out across centuries and continents.",
    series: null,
    reviews: [
      { reviewer: "Hannah B.", rating: 5, review: "Hauntingly beautiful" },
      { reviewer: "Alex T.", rating: 4, review: "Unique and memorable" },
      { reviewer: "Grace F.", rating: 5, review: "A work of art" }
    ]
  },
  {
    id: 11,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    genre: "romance",
    rating: 4.5,
    cover: "images/books/it-ends-with-us.jpg",
    synopsis: "Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town where she grew up—she graduated from college, moved to Boston, and started her own business.",
    series: {
      prequels: [],
      sequels: ["It Starts with Us"]
    },
    reviews: [
      { reviewer: "Jessica L.", rating: 5, review: "Heartbreaking and real" },
      { reviewer: "Ryan M.", rating: 4, review: "Important story to tell" },
      { reviewer: "Megan P.", rating: 5, review: "Powerful and emotional" }
    ]
  },
  {
    id: 12,
    title: "The Martian",
    author: "Andy Weir",
    genre: "sci-fi",
    rating: 4.7,
    cover: "images/books/martian.jpg",
    synopsis: "Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, he's sure he'll be the first person to die there. After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone.",
    series: null,
    reviews: [
      { reviewer: "Brian S.", rating: 5, review: "Scientifically accurate and thrilling!" },
      { reviewer: "Amanda R.", rating: 5, review: "Couldn't stop reading" },
      { reviewer: "Eric T.", rating: 4, review: "Witty and suspenseful" }
    ]
  }
];

