var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function () {

    var db = mongoose.connect('mongodb://localhost:27017/docusign-auth-example');

    var UserSchema = new Schema({
        email: {
            type: String, required: true,
            trim: true, unique: true,
            match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },
        docusignProvider: {
            type: {
                id: String,
                token: String
            },
            select: false
        }
    });

    UserSchema.set('toJSON', {getters: true, virtuals: true});

    mongoose.model('User', UserSchema);

    return db;
};