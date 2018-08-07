/*APPLICATION NO. 001*/
const express = require('express')
const app = express()


app.get('/', (req, res) => {

	res.status(201).send(`Hey! Server file is on git repo : https://github.com/garsharm/Orien.git  - Garvit`)
})


app.listen(3000, () => {
	console.log(' Server is running on port 3000: APPLICATION NO. 001')
})