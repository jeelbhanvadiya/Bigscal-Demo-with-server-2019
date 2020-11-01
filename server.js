const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const router = express.Router();
mongoose.connect('mongodb://localhost:27017/medicine',{useNewUrlParser: true,useUnifiedTopology:true },()=>{
    console.log("dB Connect")
});
const Bear  = require('./src/model');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.route('/bears')
    .post(function(req, res) {
        Bear.create(req.body,function(err) {
            if (err)
                res.send(err);
            res.json({ message:'Bear created!'});
        });
    })

    .get(function(req, res) {
        Bear.find(function(err, bears) {
            if (err)
                res.send(err);
            res.json(bears);
        });
    });
router.route('/bears/:bear_id')
    .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bears) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' });
        });
    });
router.route('/bears/find')
    .post(function(req, res) {
        Bear.find({
            _id: req.body.id
        }, function(err, bears) {
            if (err)
                res.send(err);
            res.json(bears);
        });
    });

router.route('/updatedetails/:bear_id')
    .put(function(req, res) {
        Bear.findByIdAndUpdate(req.params.bear_id,{$set:req.body}, function(err, result){
            if(err){
                console.log(err);
            }

            res.send('Done')
        });
    });
app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
