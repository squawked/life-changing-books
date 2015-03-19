/*
if (Books.find().count() === 0) {
Books.insert({book_title: "Dying to be Me", author: "Anita Moorjani", URL: "http://www.amazon.com/Dying-Be-Me-Journey-Healing/dp/1401937535", votes: 100000});
Books.insert({book_title: "How to Win Friends and Influence People", author: "Dale Carnegie", URL: "http://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034", votes: 2000000});
Books.insert({book_title: "The Art of Loving", author: "Eric Fromm", URL: "http://www.amazon.com/Art-Loving-Erich-Fromm/dp/0061129739", votes: 45600});
Books.insert({book_title: "Think and Grow Rich", author: "Napoleon Hill", URL: "http://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331/", votes: 3000000});
Books.insert({book_title: "Man’s Search for Meaning", author: "Viktor E. Frankl", URL: "http://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/080701429X", votes: 5500});
Books.insert({book_title: "Meditations", author: "Marcus Aurelius", URL: "http://www.amazon.com/Meditations-Thrift-Editions-Marcus-Aurelius/dp/048629823X", votes: 4500000});
Books.insert({book_title: "As a Man Thinketh", author: "James Allen", URL: "http://www.amazon.com/As-Man-Thinketh-James-Allen/dp/1503055361", votes: 75000});
Books.insert({book_title: "The Gifts of Imperfection", author: "Brené Brown", URL: "http://www.amazon.com/Gifts-Imperfection-Think-Supposed-Embrace/dp/159285849X", votes: 1});
Books.insert({book_title: "The Alchemist", author: "Paulo Coelho", URL: "http://www.amazon.com/Alchemist-Paulo-Coelho/dp/0061122416", votes: 1});
Books.insert({book_title: "Les Miserables", author: "Victor Hugo", URL: "http://www.amazon.com/Miserables-Signet-Classics-Victor-Hugo/dp/045141943X", votes: 1});
Books.insert({book_title: "The Last Lecture", author: "Randy Pausch", URL: "http://www.amazon.com/Last-Lecture-Randy-Pausch/dp/0316335614", votes: 1});
Books.insert({book_title: "To Kill a Mockingbird", author: "Harper Lee", URL: "http://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0446310786", votes: 7000000});
Books.insert({book_title: "The Road Less Traveled", author: "M. Scott Peck", URL: "http://www.amazon.com/Road-Less-Traveled-Timeless-Traditional/dp/0743243153", votes: 840000});
Books.insert({book_title: "Don't Sweat the Small Stuff", author: "Richard Carlson", URL: "http://www.amazon.com/Dont-Sweat-Small-Stuff-Its/dp/0786881852", votes: 1});
Books.insert({book_title: "The Seven Paths", author: "Anasazi Foundation", URL: "http://www.amazon.com/Seven-Paths-Changing-Walking-World/dp/1609949196", votes: 1});
Books.insert({book_title: "The Secret", author: "Rhonda Byrne", URL: "http://www.amazon.com/Secret-Rhonda-Byrne/dp/1582701709", votes: 1});
Books.insert({book_title: "7 Habits of Highly Effective People", author: "Steven Covey", URL: "http://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1451639619", votes: 1});
Books.insert({book_title: "The Chronicles of Narnia", author: "C. S. Lewis", URL: "http://www.amazon.com/Chronicles-Narnia-C-S-Lewis/dp/0060598247", votes: 1});
Books.insert({book_title: "The Greatest Salesman in the World", author: "Og Mandino", URL: "http://www.amazon.com/Greatest-Salesman-World-Og-Mandino/dp/055327757X", votes: 1});
Books.insert({book_title: "The Great Divorce", author: "C. S. Lewis", URL: "http://www.amazon.com/Great-Divorce-C-S-Lewis/dp/0060652950", votes: 1});
Books.insert({book_title: "The Book Thief", author: "Markus Zusak", URL: "http://www.amazon.com/Book-Thief-Markus-Zusak/dp/0375842209", votes: 1});
Books.insert({book_title: "The Shack", author: "William P. Young", URL: "http://www.amazon.com/Shack-Wm-Paul-Young/dp/160941411X", votes: 1});
Books.insert({book_title: "The Book of Virtues", author: "William J. Bennett", URL: "http://www.amazon.com/Book-Virtues-William-J-Bennett/dp/0684835770", votes: 1});
Books.insert({book_title: "The Power of Now", author: "Eckhart Tolle", URL: "http://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808", votes: 1});
Books.insert({book_title: "A New Earth", author: "Eckhart Tolle", URL: "http://www.amazon.com/New-Earth-Awakening-Purpose-Selection/dp/0452289963", votes: 1});
Books.insert({book_title: "The Book of Awakening", author: "Mark Nepo", URL: "http://www.amazon.com/Book-Awakening-Having-Being-Present/dp/1573241172", votes: 1});
Books.insert({book_title: "The Seeker's Guide", author: "Elizabeth Lesser", URL: "http://www.amazon.com/Seekers-previously-published-American-Spirituality/dp/0679783598", votes: 1});
Books.insert({book_title: "A Return to Love", author: "Marianne Williamson", URL: "http://www.amazon.com/Return-Love-Reflections-Principles-Miracles/dp/0060927488", votes: 1});
Books.insert({book_title: "The Seat of the Soul", author: "Gary Zukav", URL: "http://www.amazon.com/Seat-Soul-Anniversary-Study-Guide/dp/147675540X", votes: 1});
Books.insert({book_title: "The Untethered Soul", author: "Michael A. Singer", URL: "http://www.amazon.com/Untethered-Soul-Journey-Beyond-Yourself/dp/1572245379", votes: 1});
Books.insert({book_title: "I AM THAT", author: "Nisargadatta Maharaj", URL: "http://www.amazon.com/I-Am-That-Nisargadatta-Maharaj/dp/0893860468", votes: 3500000});
Books.insert({book_title: "Catch 22", author: "Joseph Heller", URL: "http://www.amazon.com/Catch-22-50th-Anniversary-Joseph-Heller/dp/1451626657", votes: 1});
Books.insert({book_title: "The Four Agreements", author: "Don Miguel Ruiz", URL: "http://www.amazon.com/Four-Agreements-Practical-Personal-Freedom/dp/1878424319", votes: 1});
Books.insert({book_title: "The Missing Piece", author: "Shel Silverstein", URL: "http://www.amazon.com/Missing-Piece-Shel-Silverstein/dp/0060256710", votes: 1});
Books.insert({book_title: "The Prince", author: "Niccolò Machiavelli", URL: "http://www.amazon.com/Prince-Dover-Thrift-Editions/dp/0486272745", votes: 1});
Books.insert({book_title: "The Story of My Life", author: "Helen Keller", URL: "http://www.amazon.com/Helen-Keller-Story-Thrift-Editions/dp/0486292495", votes: 1});
Books.insert({book_title: "Gandhi An Autobiography: The Story of My Experiments With Truth", author: "Mahatma Gandhi", URL: "http://www.amazon.com/Gandhi-Autobiography-Story-Experiments-Truth/dp/0807059099", votes: 8000000});
Books.insert({book_title: "Gandhi the Man: How One Man Changed Himself to Change the World", author: "Eknath Easwaran", URL: "http://www.amazon.com/Gandhi-Man-Changed-Himself-Change/dp/1586380559", votes: 1});
Books.insert({book_title: "Long Walk to Freedom: The Autobiography of Nelson Mandela", author: "Nelson Mandela", URL: "http://www.amazon.com/Long-Walk-Freedom-Autobiography-Mandela/dp/0316548189", votes: 1});
}

if (CuratedComments.find().count() === 0) {
  var book1 = Books.findOne({book_title: "Dying to be Me"});
  CuratedComments.insert({
    book_id: book1._id,
    comment: "I have been deeply and profoundly touched by the contents of this book, and even more so by my personal relationship with Anita Moorjani, who came into my life through a series of Divinely orchestrated coincidences.",
    commenter: "Dr. Wayne W. Dyer"
  });

  CuratedComments.insert({
    book_id: book1._id,
    comment: "I had the pleasure of reading Anita's book after hearing her speak in Sydney, Australia at the end of January. Her NDE experience is profound. The wisdom she shares is life changing.",
    commenter: "Cheryl Richardson"
  });
}
*/

