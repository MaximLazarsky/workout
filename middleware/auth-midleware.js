const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require ('config')
const User = require('../models/User')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.get('secretKey')
}

module.exports = passport => {
passport.use(new JwtStrategy(options, async (jwtPayload, done) => {
        try{

            const user = await User.findOne(jwtPayload.userId).select('email id')

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }

        } catch (e) {
            console.log(e)
        }
    })
) }
