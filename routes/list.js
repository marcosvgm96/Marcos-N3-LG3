var express = require("express");
var router = express.Router();
var Person = require("../models/Person");

/* GET página de listagem de pessoas 
  http://localhost:4000/list
*/

router.get("/list", function (req, res, next) {
  Person.find().then(function (pa) {
    res.render("list", { title: "Listagem de Pessoas", pa: pa });
    console.log(pa);
  });
});

module.exports = router;
