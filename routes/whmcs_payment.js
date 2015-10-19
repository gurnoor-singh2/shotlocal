(function () {
var WHMCS = require('./whmcs/index');

var config = {
  username: 'tmarshall',
  password: '399cb1f870a5df9e27624e8c31d841ba',
  serverUrl: 'http://client.access-now.net/includes/api.php'
};

var whmcspayment = new WHMCS(config);

    "use strict";

    var paymentHelper = {};

    //Get Invoices
    paymentHelper.getInvoices = function (req, res) {
        
        var opts = {};
        opts.clientid = req.body.clientid;

        whmcspayment.payments.getInvoices(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Invoices"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Invoices
    paymentHelper.getInvoice = function (req, res) {
        
        var invoiceid = req.body.invoiceid;

        whmcspayment.payments.getInvoice(invoiceid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Invoice"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Create Invoice
    paymentHelper.createInvoice = function (req, res) {
        
        var opts = {};
        opts.userid = req.body.userid;
        opts.date = req.body.date;
        opts.userdate = req.body.userdate;
        opts.paymentMethod = req.body.paymentMethod;
        opts.itemdescription1 = req.body.itemdescription1;
        opts.itemarround1 = req.body.itemarround1;
        opts.itemtaxed1 = req.body.itemtaxed1;

        whmcspayment.payments.createInvoice(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Create Invoice"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //update Invoice
    paymentHelper.updateInvoice = function (req, res) {
        
        var invoiceid = req.body.invoiceid;
        var invoicenumb = req.body.invoicenumb;

        whmcspayment.payments.updateInvoice(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Update Invoice"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Add Invoice Payment
    paymentHelper.addInvoicePayment = function (req, res) {
        
        var invoiceid = req.body.invoiceid;
        var transid = req.body.transid;
        var gateway = req.body.gateway;
        var opts = {};
        opts.amount = req.body.amount;

        whmcspayment.payments.addInvoicePayment(invoiceid, transid, gateway, opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Add Invoice Payment"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Capture Payment
    paymentHelper.capturePayment = function (req, res) {
        
        var invoiceid = req.body.invoiceid;
        var cvv = req.body.cvv;

        whmcspayment.payments.capturePayment(invoiceid, cvv, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Capture Payment"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Apply Credit
    paymentHelper.applyCredit = function (req, res) {
        
        var invoiceid = req.body.invoiceid;
        var amount = req.body.amount;

        whmcspayment.payments.applyCredit(invoiceid, amount, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Apply Credit"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

	//Add Billable Item
    paymentHelper.addBillableItem = function (req, res) {

		var opts = {};        
		opts.clientid = req.body.clientid;
		opts.description = req.body.description;
		opts.hours = req.body.hours;
		opts.amount = req.body.amount;
		opts.invoiceaction = req.body.invoiceaction;
        
        // opts.duedate = req.body.duedate;
        // opts.recur = req.body.recur;
        // opts.recurcycle= req.body.recurcycle;
        // opts.recurfor = req.body.recurfor;

        whmcspayment.payments.addBillableItem(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Add Billable Item"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Add Credit
    paymentHelper.addCredit = function (req, res) {

        var opts = {};        
        opts.clientid = req.body.clientid;
        opts.description = req.body.description;
        opts.amount = req.body.amount;
        
        whmcspayment.payments.addCredit(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Add Credit"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Add Transaction
    paymentHelper.addTransaction = function (req, res) {

        var opts = {};        
        opts.userid = req.body.userid;
        opts.invoiceid = req.body.invoiceid;
        opts.description = req.body.description;
        opts.amountin = req.body.amountin;
        opts.paymentmethod = req.body.paymentmethod;
        opts.date = req.body.date;

        whmcspayment.payments.addTransaction(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Add Transaction"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Update Transaction
    paymentHelper.updateTransaction = function (req, res) {

        var opts = {};        
        opts.transactionid = req.body.transactionid;
        opts.transid = req.body.transid;
        opts.date = req.body.date;
        opts.amountin = req.body.amountin;

        whmcspayment.payments.updateTransaction(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Update Transaction"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Gen Invoices
    paymentHelper.genInvoices = function (req, res) {

        var opts = {};        
        opts.clientid = req.body.clientid;
        opts.serviceids = [req.body.serviceid1, req.body.serviceid2, req.body.serviceid3];
        
        whmcspayment.payments.genInvoices(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Gen Invoices"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Payment Methods
    paymentHelper.getPaymentMethods = function (req, res) {

        whmcspayment.payments.getPaymentMethods(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Payment Methods"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    module.exports = paymentHelper;

})();
