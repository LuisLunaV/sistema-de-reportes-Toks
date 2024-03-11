const { Router, request, response } = require( "express");

const router = Router();

router.get('/', (req = request, res = response )=>{
    res.render('register');
});

module.exports = router;