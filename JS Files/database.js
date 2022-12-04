const { mongoose } = require('mongoose');

// make a connection 
mongoose.connect("mongodb+srv://TestUser:test@kosstudio.s0dh2.mongodb.net/?retryWrites=true&w=majority");
 
// get reference to database
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connection Successful!");
     
    // define Schema
    var LoginSchema = mongoose.Schema({
        name: String,
        password: String,
      });
   
      // compile schema to model
      var user = mongoose.model('user', LoginSchema, 'account');
      const inputName = "Halp";
      const inputPassword = "Weird PAssword";
      // a document instance
      var testuser = new user({ name: inputName, password: inputPassword});
   
      // save model to database
      testuser.save(function (err, user) {
        if (err) return console.error(err);
        console.log(user.name + " saved to users.");
      });
});