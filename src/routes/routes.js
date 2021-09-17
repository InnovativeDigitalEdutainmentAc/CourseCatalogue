const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const userController = require('../controllers/userController')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
    res.sendFile('public/html/courses.html',{root:'.'})
})

router.post('/submitUserDetails', urlencodedParser ,(req,res) => {
    const name = req.body.uname;
    const email = req.body.email;
    const mobile = req.body.mobile;
    (async () => {
      var status = await userController.createUser(name,email,mobile);
      res.send(status);
    })();
})

module.exports = router;