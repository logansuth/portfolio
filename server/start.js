const app = require('./index');
const db = require('./database/database');

const port = process.env.PORT || 3000;

db.sync({ force: true }).then(
  app.listen(port, function () {
    console.log(`Listening on port ${port}.`);
  })
);
