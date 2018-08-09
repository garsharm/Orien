/*APPLICATION NO. 001*/
const express = require('express')
const app = express()

const path = require('path')

// fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Drake',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Blog post number 4'
  }
]

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use('/static',express.static(path.join(__dirname,'public')))

// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts })
})

app.post('/oriendata',(req, res)=>{
	console.log(`XX:{req.params.corX}YY:{req.params.corY}`)
	res.status(204).send('Bro chal rha hai') 
})

// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the `post.ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})


app.listen(3000, () => {
	console.log(' Server is running on port 3000: APPLICATION NO. 001')
})