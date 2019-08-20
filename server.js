const express = require('express');
const next = require('next');

// set default port
const port = 4000;
// use the NODE_ENV environment var to figure it out the dev mode
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const server = express();

// maskered route
server.get('/post/:id', (req, res) => {
  const actualPage = '/second';
  const queryParams = { id: req.params.id };
  // render the maskered page
  app.render(req, res, actualPage, queryParams);
});

// all the other routes, pass thorugh nextJS
server.get('*', (req, res) => {
  return handle(req, res);
});

// launch the server app with next
app.prepare()
  .then(() => {
    server.listen(port, (err) => {
      if (err) throw err
      console.log('NextJS is ready on http://localhost:' + port);
    });
  })
  .catch(e => {
    console.error(e.stack);
    process.exit(1);
  });
