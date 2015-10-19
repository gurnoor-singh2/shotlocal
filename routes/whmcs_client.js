(function () {

var WHMCS = require('./whmcs/index');

var config = {
  username: 'tmarshall',
  password: '399cb1f870a5df9e27624e8c31d841ba',
  serverUrl: 'http://client.access-now.net/includes/api.php'
};

var whmcsclient = new WHMCS(config);

    "use strict";

    var clientHelper = {};

    //Add new Client
    clientHelper.addClient = function (req, res) {
        
        var opts = {};

        opts.firstname = req.body.firstname;
        opts.lastname = req.body.lastname;
        opts.email = req.body.email;
        opts.address1 = req.body.address1;
        opts.city = req.body.city;
        opts.state = req.body.state;
        opts.postcode = req.body.postcode;
        opts.country = req.body.country;
        opts.phonenumber = req.body.phonenumber;
        opts.password2 = req.body.password2;


        whmcsclient.clients.addClient(opts, function(err, data) {
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Add Client' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
         });
    };

    //Update Client
    clientHelper.updateClient = function (req, res) {
        
        var opts = {};
        var clientid = req.body.clientid;
        opts.firstname = req.body.firstname;
        opts.lastname = req.body.lastname;
        opts.email = req.body.email;
        opts.address1 = req.body.address1;
        opts.city = req.body.city;
        opts.state = req.body.state;
        opts.postcode = req.body.postcode;
        opts.country = req.body.country;
        opts.phonenumber = req.body.phonenumber;
        opts.password2 = req.body.password2;

        whmcsclient.clients.updateClient(clientid, opts, function(err, data) {
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Update Client' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
         });
    };

    //Delete Client by Client ID
    clientHelper.deleteClient = function (req, res) {

        var clientid = req.body.clientid;

        whmcsclient.clients.deleteClient(clientid, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Delete Client' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Close Client by Client ID
    clientHelper.closeClient = function (req, res) {

        var clientid = req.body.clientid;

        whmcsclient.clients.closeClient(clientid, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Close Client' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Add Client Note by userid
    clientHelper.addClientNote = function (req, res) {

        var userid = req.body.userid;
        var notes = req.body.notes;

        whmcsclient.clients.addClientNote(userid, notes, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Add Client Note' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Clients 
    clientHelper.getClients = function (req, res) {

        whmcsclient.clients.getClients(function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Get Clients' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };


    //Get Client by Client ID or Email
    clientHelper.getClientsDetails = function (req, res) {

        var clientid = req.body.clientid;
        var email = req.body.email;
        var opts = {};

        if(!clientid || clientid.length === 0)
            clientid = email;

        whmcsclient.clients.getClientsDetails(clientid, opts, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Get Client by Client ID or Email' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Credits by Client ID
    clientHelper.getCredits = function (req, res) {

        var clientid = req.body.clientid;

        whmcsclient.clients.getCredits(clientid, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Get Credits' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Emails by Client ID
    clientHelper.getEmails = function (req, res) {

        var clientid = req.body.clientid;
        var opts = {};
        opts.date = req.body.date;
        opts.subject = req.body.subject;
        opts.limitstart = req.body.limitstart;
        opts.limitnum = req.body.limitnum;

        whmcsclient.clients.getEmails(clientid, opts, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Get Emails' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Quotes by user ID
    clientHelper.getQuotes = function (req, res) {

        var userid = req.body.userid;
        var opts = {};

        whmcsclient.clients.getQuotes(userid, opts, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Get Quotes' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Client Password by user id or email
    clientHelper.getClientsPassword = function (req, res) {

        var userid = req.body.userid;
        var email = req.body.email;

        if(!userid || userid.length === 0)
            userid = email;

        whmcsclient.clients.getClientsPassword(userid, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Get Client Password' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Transactions by client id
    clientHelper.getTransactions = function (req, res) {

        var clientid = req.body.clientid;
        var opts = {};

        whmcsclient.clients.getTransactions(clientid, opts,  function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Get Transactions by Client ID' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Add contact 
    clientHelper.addContact = function (req, res) {
        
        var opts = {};

        opts.clientid = req.body.clientid;
        opts.firstname = req.body.firstname;
        opts.lastname = req.body.lastname;
        opts.company = req.body.company;
        opts.email = req.body.email;
        opts.address1 = req.body.address1;
        opts.address2 = req.body.address2;
        opts.city = req.body.city;
        opts.state = req.body.state;
        opts.postcode = req.body.postcode;
        opts.country = req.body.country;
        opts.phonenumber = req.body.phonenumber;
        opts.password2 = req.body.password2;
        opts.permissions = req.body.permissions;
        if(req.body.generalemails) opts.generalemails = true;
        if(req.body.productemails) opts.productemails = true;
        if(req.body.domainemails) opts.domainemails = true;
        if(req.body.invoiceemails) opts.invoiceemails = true;
        if(req.body.supportemails) opts.supportemails = true;


        whmcsclient.clients.addContact(opts, function(err, data) {
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Add Contact' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
         });
    };

    //Get Contacts
    clientHelper.getContacts = function (req, res) {

        var userid = req.body.userid;
        var opts = {};

        whmcsclient.clients.getContacts(userid, opts, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Get Contacts' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Update Contact
    clientHelper.updateContact = function (req, res) {

        var contactid = req.body.contactid;
        var opts = {};

        opts.firstname = req.body.firstname;
        opts.lastname = req.body.lastname;
        opts.company = req.body.company;
        opts.email = req.body.email;
        opts.address1 = req.body.address1;
        opts.address2 = req.body.address2;
        opts.city = req.body.city;
        opts.state = req.body.state;
        opts.postcode = req.body.postcode;
        opts.country = req.body.country;
        opts.phonenumber = req.body.phonenumber;
        opts.subaccount = req.body.subaccount;
        opts.password2 = req.body.password2;
        opts.permissions = req.body.permissions;
        if(req.body.generalemails) opts.generalemails = true;
        if(req.body.productemails) opts.productemails = true;
        if(req.body.domainemails) opts.domainemails = true;
        if(req.body.invoiceemails) opts.invoiceemails = true;
        if(req.body.supportemails) opts.supportemails = true;

        whmcsclient.clients.updateContact(contactid, opts, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Update Contact' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Delete Contact
    clientHelper.deleteContact = function (req, res) {

        var contactid = req.body.contactid;

        whmcsclient.clients.deleteContact(contactid, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Delete Contact' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };
    

    //Get Clients Products
    clientHelper.getClientsProducts = function (req, res) {

        var clientid = req.body.clientid;
        var opts = {};

        whmcsclient.clients.getClientsProducts(clientid, opts, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Get Clients Products' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Update Client Product
    clientHelper.updateClientProduct = function (req, res) {

        var serviceid = req.body.serviceid;
        var opts = {};
        opts.domain = req.body.domain;

        whmcsclient.clients.updateClientProduct(serviceid, opts, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Update Client Product' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Clients Addons
    clientHelper.getClientsAddons = function (req, res) {

        var clientid = req.body.clientid;
        var opts = {};

        whmcsclient.clients.getClientsAddons(clientid, opts, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Get Clients Addons' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Update Client Addon
    clientHelper.updateClientAddon = function (req, res) {

        var id = req.body.id;
        var addon = {};
        if(req.body.addonid.length != 0) addon.addonid = req.body.addonid;
        if(req.body.name.length != 0) addon.name = req.body.name;
        if(req.body.setupfee.length != 0) addon.setupfee = req.body.setupfee;
        if(req.body.recurring.length != 0) addon.recurring = req.body.recurring;
        if(req.body.billingcycle.length != 0) addon.billingcycle = req.body.billingcycle;
        if(req.body.nextduedate.length != 0) addon.nextduedate = req.body.nextduedate;
        if(req.body.nextinvoicedate.length != 0) addon.nextinvoicedate = req.body.nextinvoicedate;
        if(req.body.notes.length != 0) addon.notes = req.body.notes;
        if(req.body.status.length != 0) addon.status = req.body.status;

        whmcsclient.clients.updateClientAddon(id, addon, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Update Client Addon' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Client Domains
    clientHelper.getClientsDomains = function (req, res) {

        var clientid = req.body.clientid;

        whmcsclient.clients.getClientsDomains(clientid, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Get CLients Domains' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Update Client Domain
    clientHelper.updateClientDomain = function (req, res) {

        var domainid = req.body.domainid;
        var opts = {};
        opts.domain = req.body.domain;

        whmcsclient.clients.updateClientDomain(domainid, opts, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Update Client Domaains' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //add cance request
    clientHelper.addCancelRequest = function (req, res) {

        var serviceid = req.body.serviceid;
        var type = req.body.type;
        var opts = {};
        var reason = req.body.reason;
    
        whmcsclient.clients.addCancelRequest(serviceid, type, reason, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Add Cancel Request' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };
   
    //Upgrade Product
    clientHelper.upgradeProduct = function (req, res) {

        var data = {};
        data.clientid = req.body.clientid
        data.serviceid = serviceid;
        data.type = "Product";
        data.newproductid = req.body.neproductid;
        data.newproductbillingcycle = req.body.newproductbillingcycle;
        data.configoptions = req.body.configoptions;
        data.paymentmethod = req.body.paymentmethod;

        whmcsclient.clients.upgradeProduct(data, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Update Product' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Validate Login
    clientHelper.validateLogin = function (req, res) {

        var email = req.body.email;
        var password = req.bod.password;

        whmcsclient.clients.validateLogin(clientid, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Validate Login' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    ///login into isting account
    clientHelper.sendEmail = function (req, res) {

        var id = req.body.id;
        var opts;

        whmcsclient.clients.sendEmail(id, opts, function(err, data){
            if (err) {
                console.error('ERROR : ', err);
                var response = { "status": false, "ERROR": 'Send Email' };
                res.send(JSON.stringify(response));
            } else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    module.exports = clientHelper;

})();
