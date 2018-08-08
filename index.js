/*APPLICATION NO. 001*/
const express = require('express')
const app = express()
const path = require('path')

/*app.set('views','./views')
app.set('view engine', 'pug')*/

app.use((req,res,next)=> {
	
})

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,views,index.html))
	res.status(201).send(`Hey! Server file is on git repo : https://github.com/garsharm/Orien.git  - Garvit`)
})


app.listen(3000, () => {
	console.log(' Server is running on port 3000: APPLICATION NO. 001')
})