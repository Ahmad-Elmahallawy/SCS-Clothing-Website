const user = require("../models/user");

module.exports = (app) => app.post('/api/login', (req,res) => {
    const {email,password} = req.body;

    const isUserExist = user.find({email: email})
    if(!isUserExist)
    {
        
    }
})