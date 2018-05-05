import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
// import api from './routes/api';

const api = require('./routes/api');
const app = express();
app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api);

app.use(express.static(path.join(__dirname, '../')));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(app.get('port'), () => {
console.log('Listening on port ' + app.get('port'));
});
