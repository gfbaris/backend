var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost/mekanbul'; // Replace with your MongoDB URI
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log("Mongoose" + dbURI + " adresindeki veritabanına bağlandı.");
});

mongoose.connection.on('error', function (err) {
    console.log("Mongoose bağlantı hatası: " + err);
});

mongoose.connection.on('disconnected', function () {
    console.log("Mongoose bağlantısı kesildi.");
});

// Uygulama sonlandırıldığında Mongoose bağlantısını kapatma
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log("Mongoose uygulama sonlandırma işlemi nedeniyle bağlantıyı kapattı.");
        process.exit(0);
    });
});

require("./venue");