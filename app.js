const express = require('express')
const app = express()
const port = 3000;

app.use(express.static('public'))

app.set('view-engine','ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(process.env.PORT || port, () => console.log(`Listening at localhost:${port}`));