
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://TestUser:test@kosstudio.s0dh2.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const librarySchema = mongoose.Schema({
idNum: Number,
name: String,
musicLink: String
});

const Song = mongoose.model('Song', librarySchema);

const query1 = Song.findOne({idNum: 1}, 'musicLink', function (err, song){
if (err) return handleError(err);
console.log(song.musicLink)
});