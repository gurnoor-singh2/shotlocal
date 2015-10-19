(function () {
var WHMCS = require('./whmcs/index');

var config = {
  username: 'tmarshall',
  password: '399cb1f870a5df9e27624e8c31d841ba',
  serverUrl: 'http://client.access-now.net/includes/api.php'
};

var miscsupport = new WHMCS(config);

    "use strict";

    var miscHelper = {};

    //Get Activity Log
    miscHelper.getActivityLog = function (req, res) {
        
        var opts = {};

        miscsupport.miscs.getActivityLog(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Activity Log"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Admin Details
    miscHelper.getAdminDetails = function (req, res) {
        
        var opts = {};

        miscsupport.miscs.getAdminDetails(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Admin Details"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Update Admin Notes
    miscHelper.updateAdminNotes = function (req, res) {
        
        var notes = req.body.notes;

        miscsupport.miscs.updateAdminNotes(notes, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Update Admin Notes"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Currencies
    miscHelper.getCurrencies = function (req, res) {

        miscsupport.miscs.getCurrencies(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Currencies"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Promotions
    miscHelper.getPromotions = function (req, res) {

        miscsupport.miscs.getPromotions(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Promotions"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Client Groups
    miscHelper.getClientGroups = function (req, res) {

        miscsupport.miscs.getClientGroups(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Client Groups"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Email Templates
    miscHelper.getEmailTemplates = function (req, res) {

        miscsupport.miscs.getEmailTemplates(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Email Templates"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get To Do Items
    miscHelper.getTodoItems = function (req, res) {

        miscsupport.miscs.getTodoItems(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get To Do Items"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };
    module.exports = miscHelper;

    //Get To Do Items Statuses
    miscHelper.getTodoItemsStatuses = function (req, res) {

        miscsupport.miscs.getTodoItemsStatuses(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get To Do Items Statuses"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Update To do Item
    miscHelper.updateTodoItem = function (req, res) {

        var itemid = req.body.itemid;
        var adminid = req.body.adminid;

        var opts = {};
        opts.status = req.body.status;

        miscsupport.miscs.updateTodoItem(itemid, adminid, opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Update To Do Items"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Staff Online
    miscHelper.getStaffOnline = function (req, res) {

        miscsupport.miscs.getStaffOnline(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Staff Online"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Stats
    miscHelper.getStats = function (req, res) {

        miscsupport.miscs.getStats(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Stats"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Encrypt Password
    miscHelper.encryptPassword = function (req, res) {

        var password2 = req.body.password2

        miscsupport.miscs.encryptPassword(password2, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Encrypt Password"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Decrypt Password
    miscHelper.decryptPassword = function (req, res) {

        var password2 = req.body.password2

        miscsupport.miscs.decryptPassword(password2, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Decrypt Password"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Add Banned IP
    miscHelper.addBannedIP = function (req, res) {

        var ip = req.body.ip;

        miscsupport.miscs.addBannedIP(ip, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Add Banned IP"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Add Product
    miscHelper.addProduct = function (req, res) {

        var opts = {};
        opts.type = req.body.type;
        opts.gid = req.body.gid;
        opts.name = req.body.name;
        opts.paytype = req.body.paytype;

        miscsupport.miscs.addBannedIP(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Add Product"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Log Activity
    miscHelper.logActivity = function (req, res) {

        var description = req.body.description;
        var opts = {};

        miscsupport.miscs.logActivity(description, opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Log Activity"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Send Admin Email
    miscHelper.sendAdminEmail = function (req, res) {

        var messagename = req.body.messagename;
        var mergefields = {};
            mergefields.client_name = req.body.client_name;
            mergefields.client_id = req.body.client_id;
            mergefields.ticket_id = req.body.ticket_id;
            mergefields.ticket_department = req.body.ticket_department;
            mergefields.ticket_subject = req.body.ticket_subject;
            mergefields.ticket_priority = req.body.ticket_priority;
            mergefields.ticket_message = req.body.ticket_message;
        var type = req.body.type;

        var opts = {};


        miscsupport.miscs.sendAdminEmail(messagename, mergefields, type, opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Send Admin Email"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    module.exports = miscHelper;

})();
