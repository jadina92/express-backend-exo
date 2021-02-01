var express = require('express');
var router =express.Router();

router.get('/', function(req, res){
    res.send('recherch  adress');
});
router.get('/add', function(req, res){
    res.send('ajout adress');
});
router.put('/edit', function(req, res){
    res.send('mise en jour  adresse');
});
router.delete('/delete', function(req, res){
    res.send('suppression adress');
});
module.exports = router;