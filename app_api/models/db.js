var mongoose = require( 'mongoose' );
const URI = 'mongodb+srv://gfbaris:gfbaris123@cluster0.end118b.mongodb.net/mekanbul?retryWrites=true&w=majority';
mongoose.connect(URI);

mongoose.connection.on('connected', function () {
    console.log("Mongoose" + URI + " adresindeki veritabanına bağlandı.");
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