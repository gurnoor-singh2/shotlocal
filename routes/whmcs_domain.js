(function () {

var WHMCS = require('./whmcs/index');

var config = {
  username: 'tmarshall',
  password: '399cb1f870a5df9e27624e8c31d841ba',
  serverUrl: 'http://client.access-now.net/includes/api.php'
};

var whmcsdomain = new WHMCS(config);

    "use strict";

    var domainHelper = {};

    //Register Domain
    domainHelper.registerDomain = function (req, res) {
        
        var domainid = req.body.domainid;
        if(!domainid || domainid.length ===0)
            domainid = req.body.domain;

        whmcsdomain.domains.registerDomain(domainid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Register Domain"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Renew Domain
    domainHelper.renewDomain = function (req, res) {
        
        var domainid = req.body.domainid;
        if(!domainid || domainid.length ===0)
            domainid = req.body.domain;

        whmcsdomain.domains.renewDomain(domainid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Renew Domain"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Transfer Domain
    domainHelper.transferDomain = function (req, res) {
        
        var domainid = req.body.domainid;
        if(!domainid || domainid.length ===0)
            domainid = req.body.domain;

        var opts = {};
        opts.eppcode = req.body.eppcode;

        whmcsdomain.domains.transferDomain(domainid, opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Transfer Domain"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Release Domain
    domainHelper.releaseDomain = function (req, res) {
        
        var domainid = req.body.domainid;
        if(!domainid || domainid.length ===0)
            domainid = req.body.domain;

        var newtag = req.body.newtag;

        whmcsdomain.domains.transferDomain(domainid, newtag, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Release Domain"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Domain Get Locking Status
    domainHelper.domainGetLockingStatus = function (req, res) {
        
        var domainid = req.body.domainid;

        whmcsdomain.domains.domainGetLockingStatus(domainid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Domain Get Locking Status"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Domain Get Nameservers
    domainHelper.domainGetNameservers = function (req, res) {
        
        var domainid = req.body.domainid;

        whmcsdomain.domains.domainGetNameservers(domainid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Domain Get Nameservers"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Domain Get WHOIS Info
    domainHelper.domainGetWHOISInfo = function (req, res) {
        
        var domainid = req.body.domainid;

        whmcsdomain.domains.domainGetWHOISInfo(domainid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Domain Get WHOIS Info"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Domain Request EPP
    domainHelper.domainRequestEPP = function (req, res) {
        
        var domainid = req.body.domainid;

        whmcsdomain.domains.domainRequestEPP(domainid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Domain Request EPP"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };


    //Domain Toggle ID Protect
    domainHelper.domainToggleIDProtect = function (req, res) {
        
        var domainid = req.body.domainid;
        var idprotect = req.body.idprotect;

        whmcsdomain.domains.domainToggleIDProtect(domainid, idprotect, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Domain Toggle ID Protect"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Domain Update Locking Status
    domainHelper.domainUpdateLockingStatus = function (req, res) {
        
        var domainid = req.body.domainid;
        var status = req.body.lockstatus;

        whmcsdomain.domains.domainUpdateLockingStatus(domainid, status, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Doman Update Locking Status"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };
    
    //Domain Update Nameservers
    domainHelper.domainUpdateNameservers = function (req, res) {
        
        var domainid = req.body.domainid;
        var ns1 = req.body.ns1;
        var ns2 = req.body.ns2;
        var ns3 = req.body.ns3;
        var ns4 = req.body.ns4;
        var ns5 = req.body.ns5;

        var nsarray = [ns1, ns2, ns3, ns4, ns5];

        whmcsdomain.domains.domainUpdateNameservers(domainid, nsarray, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "error" : "Unable to update domain nameserver"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Domain Update WHOIS Info
    domainHelper.domainUpdateWHOISInfo = function (req, res) {
        
        var domainid = req.body.domainid;
        var xml = req.body.xml;

        whmcsdomain.domains.domainUpdateWHOISInfo(domainid, xml, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "error" : "Unable to update domain WHOIS Info"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Domain WHOIS 
    domainHelper.domainWHOIS = function (req, res) {
        
        var domain = req.body.domain;

        whmcsdomain.domains.domainWHOIS(domain, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "error" : "Unable to get Domain WHOIS"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    module.exports = domainHelper;

})();
