(function () {
var WHMCS = require('./whmcs/index');

var config = {
  username: 'tmarshall',
  password: '399cb1f870a5df9e27624e8c31d841ba',
  serverUrl: 'http://client.access-now.net/includes/api.php'
};

var whmcsquote = new WHMCS(config);

    "use strict";

    var quoteHelper = {};

    //Create Quote
    quoteHelper.createQuote = function (req, res) {

        var opts = {};

        opts.userid = req.body.userid;
        opts.subject = req.body.subject;
        opts.stage = req.body.stage;
        opts.validuntil = req.body.validuntil; 

        whmcsquote.quotes.createQuote(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Create Quote"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Update Quote
    quoteHelper.updateQuote = function (req, res) {

        var opts = {};

        opts.quoteid = req.body.quoteid;
        opts.subject = req.body.subject;

        whmcsquote.quotes.updateQuote(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Update Quote"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Delete Quote
    quoteHelper.deleteQuote = function (req, res) {

        var quoteid = req.body.quoteid;

        whmcsquote.quotes.deleteQuote(quoteid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Delete Quote"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Send Quote
    quoteHelper.sendQuote = function (req, res) {

        var quoteid = req.body.quoteid;

        whmcsquote.quotes.sendQuote(quoteid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Send Quote"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Accept Quote
    quoteHelper.acceptQuote = function (req, res) {

        var quoteid = req.body.quoteid;

        whmcsquote.quotes.acceptQuote(quoteid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Accept Quote"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };
    module.exports = quoteHelper;

})();
