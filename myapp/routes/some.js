var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/', function(req, res, next) {

  //app.set('views', __dirname + '/templates');
  res.send({bla: "some", d: "s"});
});

module.exports = router;