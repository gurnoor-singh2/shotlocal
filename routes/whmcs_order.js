(function () {
var WHMCS = require('./whmcs/index');

var config = {
  username: 'tmarshall',
  password: '399cb1f870a5df9e27624e8c31d841ba',
  serverUrl: 'http://client.access-now.net/includes/api.php'
};

var whmcsorder = new WHMCS(config);

    "use strict";

    var orderHelper = {};

    //Add Order
    orderHelper.addOrderSingleProduct = function (req, res) {
        
        var opts = {};
        opts.clientid = req.body.clientid;
        opts.pid = req.body.pid;
        opts.domain = req.body.domain;
        opts.billingcycle = req.body.billingcycle;
        opts.addons = req.body.addons;
        opts.customfields = req.body.customfields;
        opts.domaintype = req.body.domaintype;
        opts.regperiod = req.body.regperiod;
        opts.paymentmethod = req.body.paymentmethod;

        whmcsorder.orders.addOrder(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Add Order"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };
    orderHelper.addOrderMultipleProduct = function (req, res) {
        
        var opts = {};
        opts.clientid = req.body.clientid;
        opts.pid = [req.body.pid0, req.body.pid1, req.body.pid2];
        opts.billingcycle = [req.body.billingcycle0, req.body.billingcycle1, req.body.billingcycle2];
        opts.domain = [req.body.domain0, req.body.domain1, req.body.domain2];
        opts.noemail = req.body.noemail;
        opts.paymentmethod = req.body.paymentmethod;

        whmcsorder.orders.addOrder(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Add Order Multiple Product"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Orders
    orderHelper.getOrders = function (req, res) {
        
        var opts = {};

        whmcsorder.orders.getOrders(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Orders"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Products
    orderHelper.getProducts = function (req, res) {
        
        var opts = {};

        whmcsorder.orders.getProducts(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Products"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Promotions
    orderHelper.getPromotions = function (req, res) {
        
        var opts = {};

        whmcsorder.orders.getPromotions(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Fwr Promotions"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Order Statuses
    orderHelper.getOrderStatuses = function (req, res) {
        
        whmcsorder.orders.getOrderStatuses(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Order Statuses"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Accept Order
    orderHelper.acceptOrder = function (req, res) {

        var orderid = req.body.orderid;
        var opts = {};
        
        whmcsorder.orders.acceptOrder(orderid, opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Accept Order"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Pending Order
    orderHelper.pendingOrder = function (req, res) {

        var orderid = req.body.orderid;
        
        whmcsorder.orders.pendingOrder(orderid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Pending Order"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };
    
    //Cancel Order
    orderHelper.cancelOrder = function (req, res) {

        var orderid = req.body.orderid;
        
        whmcsorder.orders.cancelOrder(orderid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Cancel Order"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Fraud Order
    orderHelper.fraudOrder = function (req, res) {

        var orderid = req.body.orderid;
        
        whmcsorder.orders.fraudOrder(orderid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Fraud Order"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Delete Order
    orderHelper.deleteOrder = function (req, res) {

        var orderid = req.body.orderid;
        
        whmcsorder.orders.deleteOrder(orderid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Delete Order"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    module.exports = orderHelper;

})();
