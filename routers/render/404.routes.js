const { Router, request, response } = require( "express");

const router = Router();
router.get('*', (req, res)=>{
    res.render('404');
});

module.exports = router;