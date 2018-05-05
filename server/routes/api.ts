import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

const port = process.env.PORT || 3000;

class Api {
  public app;

  constructor () {
    this.app = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router();
    router.get('/api', (req, res) => {
      res.json({
        message: 'Hello World!'
      });
    });
    module.exports = router;
  }
}

export default new Api().app;
