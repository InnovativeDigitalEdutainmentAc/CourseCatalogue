const user = require('../models/user')

module.exports = {
    createUser: function(name, email, mobile) {
        userObj = {
            name:name,
            email:email,
            mobile:mobile
        }
        const newUser = new user(userObj)
        return new Promise((resolve) => {
            newUser.save(function(err,userData){
              if (err) throw err
              resolve(userData)
            })
        })
    }
}