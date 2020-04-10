// requires need modules
let express = require('express')

//declare a new express app
let app = express()

//declare some routes
app.get('/', (req, res) => {
    res.send('Home page stub')
})

app.listen(3000, () => {
    console.log('Ready to rock and roll 🤯')
})