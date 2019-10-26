const passport = require('passport');
const DocusignStrategy = require('passport-docusign');
const config = require('./config');
const User = require('./mongoose');

module.exports = function () {
    passport.use(new DocusignStrategy({
        consumerKey: config.DocuSign.clientID,
        consumerSecret: config.DocuSign.clientSecret,
        callbackURL: config.DocuSign.callbackURL
    },
    function (token, tokenSecret, profile, done) {
        User.findOrCreate({ email: profile.email }, function (err, user) {
            return cb(err, user);
          });
    }));
}