const jsonServer = require('json-server');
const app = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middleware = jsonServer.defaults();

app.use(jsonServer.bodyParser)
app.use(middleware);
app.use(router);

// app.get('/categories', (req, res) => {
// })

// app.post('/categories', (req, res) => {
  
// })

// app.put('/categories/:id',  (req, res) => {
  
// })

// app.delete('/categories/:id', (req, res) => {
  
// })

// app.get('/products', (req, res) => {
  
// })

// app.post('/products', (req, res) => {
  
// })

// app.put('/products/:id', (req, res) => {
  
// })

// app.delete('/products/:id', (req, res) => {
  
// })


app.listen(3000, () => { console.log('server up on 3000')});