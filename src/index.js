import 'babel-polyfill';
import renderer from './helpers/renderer';
import express from 'express';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';



const app = express();

app.use('/api', proxy('https://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(express.static('public'));

app.get('*', (req, res) => {

  const store = createStore(req);

  const promises = matchRoutes(Routes, req.url).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {

    res.send(renderer(req, store));
  });

});

app.listen(3000, () => {
  console.log('listening on port 3000;')
});