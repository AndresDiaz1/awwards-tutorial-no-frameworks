require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

const logger = require('morgan')
const Prismic = require('@prismicio/client')
const PrismicDOM = require('prismic-dom')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const errorHandler = require('errorhandler')

const initApi = req => {
  return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req
  })
}

const handleLinkResolver = (doc) => {
  if(doc.type === 'product'){
    return `/detail/${doc.slug}`
  }

  if(doc.type === 'about'){
    return `/about`
  }

  if(doc.type === 'collections'){
    return `/collections`
  }


  return '/'
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride())
app.use(errorHandler());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=>{
  res.locals.ctx = {
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: handleLinkResolver
  }

  res.locals.Link = handleLinkResolver

  res.locals.PrismicDOM = PrismicDOM
  res.locals.Numbers = index => {
    return index===0 ? 'One' : index===1 ? 'Two' : index===2 ? 'Three' : index===3 ? 'Four' : ''
  }
  next()
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const handleRequest =async api =>{
  const metadata = await api.getSingle('metadata')
  const preloader = await api.getSingle('preloader')
  const navigation = await api.getSingle('navigation')
  return {
    metadata,
    navigation,
    preloader
  }
}

app.get('/', async (req, res)=> {
  const api = await initApi(req)
  const home = await api.getSingle('about')
  const defaults = await handleRequest(api)

  const {results: collections} = await api.query(Prismic.Predicates.at('document.type', 'collection'), {
    fetchLinks: 'product.image'
  })

  res.render('pages/home', {
    ...defaults,
    collections,
    home,
  })
})

app.get('/about', async(req, res)=> {
  const api = await initApi(req)
  const about = await api.getSingle('about')
  const defaults = await handleRequest(api)


  res.render('pages/about', {
    about,
    ...defaults,
  })
})

app.get('/detail/:uid', async(req, res)=> {
  const api = await initApi(req)
  const product = await api.getByUID('product', req.params.uid, {
    fetchLinks: 'collection.title'
  })
  const defaults = handleRequest(api)



  res.render('pages/detail', {
    product,
    ...defaults
  })
})

app.get('/collections', async (req, res)=> {
  const api = await initApi(req)
  const {results: collections} = await api.query(Prismic.Predicates.at('document.type', 'collection'), {
    fetchLinks: 'product.image'
  })
  const home = await api.getSingle('home')
  const defaults = await handleRequest(api)


  console.log(collections.data)

  res.render('pages/collections', {
    collections,
    home,
    ...defaults
  })
})

app.listen(port, ()=> {
  console.log(`listening at http://localhost:${port}`)
})
