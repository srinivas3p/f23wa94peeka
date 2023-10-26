var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if(req.method == 'GET'){
        value = search_params.get("x")
        if(val == null)
        {
            val=Math.random(Math.random()*12);
        }
        res.writeHead(200,{ 'Content-Type': 'text/html'});
        res.write('Math.hypot() applied to '+ val + 'is' +Math.hypot(2,val));
        res.write('Math.hypot() applied to '+ val + 'is' +Math.ceil(val));
        res.write('Math.hypot() applied to '+ val + 'is' +Math.clz32(val));
        res.end()
    }

});

module.exports = router;