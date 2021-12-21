require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

const Prismic = require('@prismicio/client')
const PrismicDOM = require('prismic-dom')

const initApi = req => {
  return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req
  })
}

const handleLinkResolver = (doc) => {
  // if(doc.type === 'page') {
  //   return '/page/' + doc.uid
  // } else if (doc.type === 'blog_post'){
  //   return '/blog/' + doc.uid;
  // }

  return '/'
}

app.use((req, res, next)=>{
  res.locals.ctx = {
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: handleLinkResolver
  }

  res.locals.PrismicDOM = PrismicDOM
  next()
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res)=> {
  res.render('pages/home', {
    meta: {
      data: {
        title: 'Tutorial',
        description: 'Tutorial no frameworks'
      }
    }
  })
})

app.get('/about', (req, res)=> {
  initApi(req).then(api=>{
    api.query(Prismic.Predicates.any('document.type', ['about', 'metadata'])).then(response=> {
      const { results } = response
      const [about, metadata] = results

      res.render('pages/about', {
        about,
        metadata
      })
    })
  })
})

app.get('/detail/:uid', (req, res)=> {
  res.render('pages/detail')
})

app.get('/collections/:uid', (req, res)=> {
  res.render('pages/collection')
})

app.listen(port, ()=> {
  console.log(`listening at http://localhost:${port}`)
})
