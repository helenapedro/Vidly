const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/playground')
 .then(() => console.log('Connected to MongoDB'))
 .catch(err => console.error('Could not connect to MongoDB...', err));

 const genreSchema = new mongoose.Schema ({
     name: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 50
     },
 });

 const Genre = mongoose.model('Genre', genreSchema);

 async function createGenre() {
     const genre = new Genre({
          name: "Anime"
     });
     
     const result = await genre.save();
     console.log(result);
}

async function getGenres() {
     const genres = await Genre
       .find({ name: /Movies$/i })
       .sort({ name: 1 })
       .count();
     console.log(genres);
}

async function updateGenre(id) {
     const genre = await Genre.findById(id);
     if (!genre) return;
     genre.name = 'Drama';
     const result = await genre.save();
     console.log(result);
}

//createGenre();
//getGenres();
updateGenre('65e72e7d5352bf1da3c8d46f');


