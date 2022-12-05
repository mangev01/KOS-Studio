const mongoose = require('mongoose');
const { listenerCount } = require('npm');
const fs = require('fs');

mongoose.connect('mongodb+srv://TestUser:test@kosstudio.s0dh2.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const librarySchema = mongoose.Schema({
    idNum: Number,
    name: String,
    musicLink: String
});

const Song = mongoose.model('Song', librarySchema);

const query1 = Song.findOne({ idNum: 1 }, 'musicLink', function (err, song) {
    if (err) return handleError(err);
    console.log(song.musicLink)
});

function getSong1() {
    
    document.getElementById('song1').setAttribute('src', 'https://www.dropbox.com/s/futh5em2b8x11oy/Dee%20Yan-Key%20-%20Leise%20rieselt%20der%20Schnee.mp3?raw=1');
    document.getElementById('audio').load();
    alert('music populated');

}