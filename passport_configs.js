// const LocalStrategy = require('passport-local-mongoose')
// const passport = require('passport')
// function initialize(passport) {
//     const authenticateUser = (username, password, done) => {
//         const user = getUserByUsername(username)
//         if (user == null)
//             return done(null, false, {message: 'No user with that username'})
//     }

//     try {
//         if (await User.register(items, req.body.password) {
//             return done(null, user)
//         } else {
//             return done (null, false, {message: 'Password incorrect'})
//         }
//     } catch (error) {
//         return done (error)
//     }
// }

// passport.use(new LocalStrategy({usernameField: 'username'}),
// authenticateUser)
// passport.serializeUser((user, done) => { })
// passport.deserializeUser((id, done) => { })