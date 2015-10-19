(function () {
var WHMCS = require('./whmcs/index');

var config = {
  username: 'tmarshall',
  password: '399cb1f870a5df9e27624e8c31d841ba',
  serverUrl: 'http://client.access-now.net/includes/api.php'
};

var whmcsmodule = new WHMCS(config);

    "use strict";

    var moduleHelper = {};

    //Module Create
    moduleHelper.moduleCreate = function (req, res) {
        
        var accountid = req.body.accountid;

        whmcsmodule.modules.moduleCreate(accountid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Module Create"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Module Suspend
    moduleHelper.moduleSuspend = function (req, res) {
        
        var accountid = req.body.accountid;
        var suspendreason = req.body.suspendreason;

        whmcsmodule.modules.moduleSuspend(accountid, suspendreason, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Module Suspend"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Module Unsuspend
    moduleHelper.moduleUnsuspend = function (req, res) {
        
        var accountid = req.body.accountid;

        whmcsmodule.modules.moduleUnsuspend(accountid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Module Unsuspend"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Module Terminate
    moduleHelper.moduleTerminate = function (req, res) {
        
        var accountid = req.body.accountid;

        whmcsmodule.modules.moduleTerminate(accountid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Module Terminate"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Module Change Package
    moduleHelper.moduleChangePackage = function (req, res) {
        
        var serviceid = req.body.serviceid;

        whmcsmodule.modules.moduleChangePackage(serviceid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Module Change Package"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Module Change Password
    moduleHelper.moduleChangePassword = function (req, res) {
        
        var serviceid = req.body.serviceid;

        var servicepassword = req.body.servicepassword;

        whmcsmodule.modules.moduleChangePassword(serviceid, servicepassword, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Module Change Password"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    

    module.exports = moduleHelper;

})();
