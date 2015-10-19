var utils = require('../lib/utils');
var extend = utils.extend;

var Clients = function(config) {
  this.config = config;
};


/**
 * Create client - http://docs.whmcs.com/API:Add_Client
 * @param client Object
 * @param client.firstname] String
 * @param client.lastname] String
 * @param client.email] String
 * @param client.address1] String
 * @param client.city] String
 * @param client.state] String
 * @param client.postcode] String
 * @param client.country] String Two letter ISO country code
 * @param client.phonenumber] String
 * @param client.password2] String
 * @param [client.companyname] String
 * @param [client.address2] String
 * @param [client.currency] String
 * @param [client.clientip] String
 * @param [client.language] String
 * @param [client.groupid] String
 * @param [client.securityqid] String
 * @param [client.securityqans] String
 * @param [client.notes] String
 * @param [client.cctype] String
 * @param [client.cardnum] String
 * @param [client.expdate] String
 * @param [client.startdate] String
 * @param [client.issuenumber] String
 * @param [client.customfields] String Base64 encoded string custom field values
 * @param [client.noemail] Boolean
 * @param [client.skipvalidation] Boolean
 * @param callback
 */
Clients.prototype.addClient = function(client, callback) {
  var options = {
    action: 'addclient'
  };

  options = extend(options, client);

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};



/**
 * Update client - http://docs.whmcs.com/API:Update_Client
 * @param clientid String
 * @param client Object
 * @param[client.firstname] String
 * @param[client.lastname] String
 * @param[client.companyname] String
 * @param[client.email] String
 * @param[client.address1] String
 * @param[client.address2] String
 * @param[client.city] String
 * @param[client.state] String
 * @param[client.postcode] String
 * @param[client.country] String Two letter ISO country code
 * @param[client.phonenumber] String
 * @param[client.password2] String
 * @param[client.credit] String Credit balance
 * @param[client.taxexempt] Boolean
 * @param[client.notes] String
 * @param[client.cardtype] String
 * @param[client.cardnum] String CC number
 * @param[client.expdate] String CC expiry date
 * @param[client.startdate] String CC start date
 * @param[client.issuenumber] String CC issue number
 * @param[client.clearcreditcard] Boolean
 * @param[client.language] String
 * @param[client.customfields] String Base64 encoded string of custom field values
 * @param[client.status] Boolean
 * @param[client.taxexempt] Boolean
 * @param[client.latefeeoveride] Boolean
 * @param[client.overideduenotices] Boolean
 * @param[client.separateinvoices] Boolean
 * @param[client.disableautocc] Boolean
 * @param callback
 */
Clients.prototype.updateClient = function(clientid, client, callback) {
  var options = {
    action: 'updateclient',
    clientid: clientid
  };

  options = extend(options, client);

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Delete client - http://docs.whmcs.com/API:Delete_Client
 * @param clientid String
 * @param callback
 */
Clients.prototype.deleteClient = function(clientid, callback) {
  var options = {
    action: 'deleteclient',
    clientid: clientid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Delete client - http://docs.whmcs.com/API:Close_Client
 * @param clientid String
 * @param callback
 */
Clients.prototype.closeClient = function(clientid, callback) {
  var options = {
    action: 'closeclient',
    clientid: clientid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Add client note - http://docs.whmcs.com/API:Add_Client_Note
 * @param userid String
 * @param notes String
 * @param callback
 */
Clients.prototype.addClientNote = function(userid, notes, callback) {
  var options = {
    action: 'addclientnote',
    userid: userid,
    notes: notes
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get clients - http://docs.whmcs.com/API:Get_Clients
 * @param callback
 */
Clients.prototype.getClients = function(callback) {
  var options = {
    action: 'getclients'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};


/**
 * Get clients details - http://docs.whmcs.com/API:Get_Clients_Details
 * @param clientid String Client ID or email
 * @param [opts] Object
 * @param callback
 */
Clients.prototype.getClientsDetails = function(clientid, opts, callback) {
  var options = {
    action: 'getclientsdetails',
    stats: true
  };

  if (typeof clientid === 'number' || clientid.indexOf('@') === -1) {
    options.clientid = clientid;
  } else {
    options.email = clientid;
  }

  if (typeof opts === 'function') {
    callback = opts;
  } else {
    options = extend(options, opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get credits - http://docs.whmcs.com/API:Get_Credits
 * @param clientid String
 * @param callback
 */
Clients.prototype.getCredits = function(clientid, callback) {
  var options = {
    action: 'getcredits',
    clientid: clientid
  };

  var creditOptions = {
    client: this,
    body: options
  };

  utils.modem(creditOptions, callback);
};

/**
 * Get emails - http://docs.whmcs.com/API:Get_Emails
 * @param clientid String
 * @param [opts] Object
 * @param [opts.date] String Can be YYYYMMDD, YYYYMM, MMDD, DD or MM
 * @param [opts.subject] String
 * @param [opts.limitstart] String where to start the records. Used for pagination
 * @param [opts.limitnum] String the number of records to retrieve. Default = 25
 * @param callback
 */
Clients.prototype.getEmails = function(clientid, opts, callback) {
  var options = {
    action: 'getemails',
    clientid: clientid
  };

  if (typeof opts === 'function') {
    callback = opts;
  } else {
    options = extend(options, opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};


/**
 * Get quotes - http://docs.whmcs.com/API:Get_Quotes
 * @param clientid String
 * @param [opts] Object
 * @param [opts.quoteid] String
 * @param [opts.userid] String
 * @param [opts.datecreated] String Can be YYYYMMDD, YYYYMM, MMDD, DD or MM
 * @param [opts.astmodified] String Can be YYYYMMDD, YYYYMM, MMDD, DD or MM
 * @param [opts.validuntil] String Can be YYYYMMDD, YYYYMM, MMDD, DD or MM
 * @param [opts.stage] String - Specific stage to retrieve quotes for
 * @param [opts.subject] String - to obtain quotes with a specific subject 
 * @param [opts.limitstart] String where to start the records. Used for pagination
 * @param [opts.limitnum] String the number of records to retrieve. Default = 25
 * @param callback
 */
Clients.prototype.getQuotes = function(userid, opts, callback) {
  var options = {
    action: 'getquotes',
    userid: userid
  };

  if (typeof opts === 'function') {
    callback = opts;
  } else {
    options = extend(options, opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get client password - http://docs.whmcs.com/API:Get_Clients_Password
 * @param userid String
 * @param email String
 * @param callback
 */
Clients.prototype.getClientsPassword = function(userid, callback) {
  var options = {
    action: 'getclientpassword'
  };

  if (typeof userid === 'number' || userid.indexOf('@') === -1) {
    options.userid = userid;
  } else {
    options.email = userid;
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get transactions - http://docs.whmcs.com/API:Get_Transactions
 * @param clientid String
 * @param [opts] Object
 * @param [opts.invoiceid] String - Obtain transactions for a spcific invoice
 * @param [opts.transid] String - Obtain details for a specific transaction ID
 * @param callback
 */
Clients.prototype.getTransactions = function(clientid, opts, callback) {
  var options = {
    action: 'gettransactions',
    clientid: clientid
  };

  if (typeof opts === 'function') {
    callback = opts;
  } else {
    options = extend(options, opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Add contact - http://docs.whmcs.com/API:Add_Contact
 * @param contact Object
 * @param contact.clientid String
 * @param [contact.firstname] String
 * @param [contact.lastname] String
 * @param [contact.companyname] String
 * @param [contact.email] String Must be unique if creating a sub-account
 * @param [contact.address1] String
 * @param [contact.address2] String
 * @param [contact.city] String
 * @param [contact.state] String
 * @param [contact.postcode] String
 * @param [contact.country] String Two letter ISO country code
 * @param [contact.phonenumber] String
 * @param [contact.password2] String
 * @param [contact.permissions] String manageproducts, managedomains, etc.
 * @param [contact.generalemails] Boolean
 * @param [contact.productemails] Boolean
 * @param [contact.domainemails] Boolean
 * @param [contact.invoiceemails] Boolean
 * @param [contact.supportemails] Boolean
 * @param callback
 */
Clients.prototype.addContact = function(contact, callback) {
  var options = {
    action: 'addcontact'
  };

  options = extend(options, contact);

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};


/**
 * Get contacts - http://docs.whmcs.com/API:Get_Contacts
 * @param userid String
 * @param [opts] Object
 * @param [opts.limitstart] String
 * @param [opts.limitnum] String Default is 25
 * @param [opts.userid] String
 * @param [opts.firstname] String
 * @param [opts.lastname] String
 * @param [opts.companyname] String
 * @param [opts.email] String
 * @param [opts.address1] String
 * @param [opts.address2] String
 * @param [opts.city] String
 * @param [opts.state] String
 * @param [opts.postcode] String
 * @param [opts.country] String
 * @param [opts.phonenumber] String
 * @param [opts.subaccount] Boolean
 * @param callback
 */
Clients.prototype.getContacts = function(userid, opts, callback) {
  var options = {
    action: 'getcontacts',
    userid: userid
  };

  if (typeof opts === 'function') {
    callback = opts;
  } else {
    options = extend(options, opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Update contact - http://docs.whmcs.com/API:Update_Contact
 * @param contactid String
 * @param contact Object
 * @param contact.clientid String
 * @param [contact.firstname] String
 * @param [contact.lastname] String
 * @param [contact.companyname] String
 * @param [contact.email] String Must be unique if creating a sub-account
 * @param [contact.address1] String
 * @param [contact.address2] String
 * @param [contact.city] String
 * @param [contact.state] String
 * @param [contact.postcode] String
 * @param [contact.country] String Two letter ISO country code
 * @param [contact.phonenumber] String
 * @param [contact.password2] String
 * @param [contact.permissions] String manageproducts, managedomains, etc.
 * @param [contact.generalemails] Boolean
 * @param [contact.productemails] Boolean
 * @param [contact.domainemails] Boolean
 * @param [contact.invoiceemails] Boolean
 * @param [contact.supportemails] Boolean
 * @param callback
 */
Clients.prototype.updateContact = function(contactid, contact, callback) {
  var options = {
    action: 'updatecontact',
    contactid: contactid
  };

  options = extend(options, contact);

  var updateOptions = {
    client: this,
    body: options
  };

  utils.modem(updateOptions, callback);
};

/**
 * Delete contact - http://docs.whmcs.com/API:Delete_Contact
 * @param contactid String
 * @param callback
 */
Clients.prototype.deleteContact = function(contactid, callback) {
  var options = {
    action: 'deletecontact',
    contactid: contactid
  };

  var deleteOptions = {
    client: this,
    body: options
  };

  utils.modem(deleteOptions, callback);
};


/**
 * Get clients products - http://docs.whmcs.com/API:Get_Clients_Products
 * @param clientid String
 * @param [opts] Object
 * @param [opts.clientid] String
 * @param [opts.serviceid] String
 * @param [opts.domain] String
 * @param [opts.pid] String
 * @param [opts.username2] String
 * @param [opts.limitstart] String Used for pagination
 * @param [opts.limitnum] String Number of records to retrieve, Default = 999999
 * @param callback
 */
Clients.prototype.getClientsProducts = function(clientid, opts, callback) {
  var options = {
    action: 'getclientsproducts',
    clientid: clientid
  };

  if (typeof opts === 'function') {
    callback = opts;
  } else {
    options = extend(options, opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Update client product - http://docs.whmcs.com/API:Update_Client_Product
 * @param serviceid String
 * @param [service] Object
 * @param [service.pid] String
 * @param [service.serverid] String
 * @param [service.regdate] String Format: YYYY-MM-DD
 * @param [service.nextduedate] String Format: YYYY-MM-DD
 * @param [service.domain] String
 * @param [service.firstpaymentamount] String
 * @param [service.recurringamount] String
 * @param [service.billingcycle] String
 * @param [service.paymentmethod] String
 * @param [service.status] String
 * @param [service.serviceusername] String
 * @param [service.servicepassword] String] String
 * @param [service.subscriptionid] String
 * @param [service.promoid] String
 * @param [service.overideautosuspend] Boolean
 * @param [service.overidesuspenduntil] String Format: YYYY-MM-DD
 * @param [service.ns1] String
 * @param [service.ns2] String
 * @param [service.dedicatedip] String
 * @param [service.assignedips] String
 * @param [service.notes] String
 * @param [service.autorecalc] Boolean
 * @param [service.customfields] String Base64 encoded string of custom field values
 * @param [service.configoptions] String Base64 encoded string of configurable options values
 * @param callback
 */
Clients.prototype.updateClientProduct = function(serviceid, service, callback) {
  var options = {
    action: 'updateclientproduct',
    serviceid: serviceid
  };

  if (typeof service === 'function') {
    callback = service;
  } else {
    options = extend(options, service);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get clients addons - http://docs.whmcs.com/API:Get_Clients_Addons
 * @param clientid String
 * @param [opts] Object
 * @param [opts.addonid] String
 * @param [opts.serviceid] String
 * @param callback
 */
Clients.prototype.getClientsAddons = function(clientid, opts, callback) {
  var options = {
    action: 'getclientsaddons',
    clientid: clientid
  };

  if (typeof opts === 'function') {
    callback = opts;
  } else {
    options = extend(options, opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Update client addon - http://docs.whmcs.com/API:Update_Client_Addon
 * @param addonid String 
 * @param [addon] Object
 * @param [addon.name] String Custom name to define for the addon
 * @param [addon.setupfee] Float Setup fee cost. No symbol, just xx.xx
 * @param [addon.recurring] Float Setup fee cost. No symbol, just xx.xx
 * @param [addon.billingcycle] String One of Free Account, One Time, Monthly, Quarterly, Semi-Annually, Annually, Biennially or Triennially
 * @param [addon.nextduedate] String Update the next due date yyyymmdd
 * @param [addon.nextinvoicedate] String Update the next invoice date yyyymmdd
 * @param [addon.notes] String add custom notes to the addon
 * @param [addon.status] String Pending, Active, Suspended, Cancelled, Terminated, Fraud
 * @param callback
 */
Clients.prototype.updateClientAddon = function(addonid, addon, callback) {
  var options = {
    action: 'updateclientaddon',
    addonid: addonid
  };

  if (typeof addon === 'function') {
    callback = addon;
  } else {
    options = extend(options, addon);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get clients domains - http://docs.whmcs.com/API:Get_Clients_Domains
 * @param [opts] Object
 * @param [opts.clientid] String
 * @param [opts.domainid] String
 * @param [opts.domain] String
 * @param [opts.limitstart] String Used for pagination
 * @param [opts.limitnum] String Number of records to retrieve. Default = 25
 * @param [opts.getnameservers] Boolean
 * @param callback
 */
Clients.prototype.getClientsDomains = function(clientid, opts, callback) {
  var options = {
    action: 'getclientsdomains',
    clientid: clientid
  };

  if (typeof opts === 'function') {
    callback = opts;
  } else {
    options = extend(options, opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Update client domain - http://docs.whmcs.com/API:Update_Client_Domain
 * @param domainid String|Number Pass in domain id or name
 * @param [opts] Object
 * @param [opts.type] String Register or Transfer
 * @param [opts.autorecalc] Boolean
 * @param [opts.regdate] String Update the registration date yyyymmdd
 * @param [opts.domain] String Update the domain name
 * @param [opts.firstpaymentamount] String Set the first payment amount. No symbol, just xx.xx
 * @param [opts.recurringamount] String Setup fee cost. No symbol, just xx.xx
 * @param [opts.registrar] String Update the registrar assigned to the domain
 * @param [opts.billingcycle] String One of Free Account, One Time, Monthly, Quarterly, Semi-Annually, Annually, Biennially or Triennially
 * @param [opts.status] String One of Active, Pending, Pending Transfer, Expired, Cancelled, Fraud
 * @param [opts.nextduedate] String Update the next due date yyyymmdd
 * @param [opts.nextinvoicedate] String Update the next invoice date yyyymmdd
 * @param [opts.expirydate] String Update the expiry date yyyymmdd
 * @param [opts.regperiod] String Update the reg period for the domain. 1-10
 * @param [opts.paymentmethod] String set the payment method
 * @param [opts.subscriptionid] String allocate a subscription ID
 * @param [opts.dnsmanagement] Boolean
 * @param [opts.emailforwarding] Boolean
 * @param [opts.idprotection] Boolean
 * @param [opts.donotrenew] Boolean
 * @param [opts.updatens] Boolean Set to true to update Nameservers
 * @param [opts.ns1] String
 * @param [opts.ns2] String
 * @param [opts.ns3] String
 * @param [opts.ns4] String
 * @param [opts.ns5] String
 * @param [opts.notes] String
 * @param callback
 */
Clients.prototype.updateClientDomain = function(domainid, opts, callback) {
  var options = {
    action: 'updateclientdomain'
  };

  if (isNaN(parseInt(domainid, 10))) {
    options.domain = domainid;
  } else {
    options.domainid = domainid;
  }

  if (typeof opts === 'function') {
    callback = opts;
  } else {
    options = extend(options, opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Add cancel request - http://docs.whmcs.com/API:Add_Cancel_Request
 * @param serviceid String
 * @param type String
 * @param reason String
 * @param callback
 */
Clients.prototype.addCancelRequest = function(serviceid, type, reason, callback) {
  var options = {
    action: 'addcancelrequest',
    serviceid: serviceid,
    type: type,
    reason: reason
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Upgrade product - http://docs.whmcs.com/API:Upgrade_Product
 * @param serviceid String
 * @param data Object
 * @param data.clientid String
 * @param data.serviceid String
 * @param data.type String product or configoptions
 * @param data.newproductid String
 * @param data.newproductbillingcycle
 * @param data.configoptions String|Array Array of config options if upgrade type is configoptions
 * @param data.paymentmethod String
 * @param [data.promocode] String
 * @param [data.calconly] Boolean Set true to just validate upgrade and get price, false to create order
 * @param [data.ordernotes] String
 * @param callback
 */
Clients.prototype.upgradeProduct = function( data, callback) {
  var options = {
    action: 'upgradeproduct'
  };

  options = extend(options, data);

  var updateOptions = {
    client: this,
    body: options
  };

  utils.modem(updateOptions, callback);
};

/**
 * Validate login - http://docs.whmcs.com/API:Validate_Login
 * @param email String
 * @param password String
 * @param callback
 */
Clients.prototype.validateLogin = function(email, password2, callback) {
  var options = {
    action: 'validatelogin',
    email: email,
    password2: password2
  };

  var createOptions = {
    client: this,
    body: options
  };
  utils.modem(createOptions, callback);
};

/**
 * Send email - http://docs.whmcs.com/API:Send_Email
 * @param id String
 * @param opts Object
 * @param [opts.messagename] String Unique name of the email template to send from WHMCS
 * @param [opts.customtype] String Type of email: general, product, domain, invoice, support or affiliate
 * @param [opts.customsubject] String
 * @param [opts.custommessage] String
 * @param [opts.customvars] String Base64 encoded serialized string of custom message variables
 * @param callback
 */
Clients.prototype.sendEmail = function(id, opts, callback) {
  var options = {
    action: 'sendemail',
    id: id
  };

  if (typeof opts === 'function') {
    callback = opts;
  } else {
    options = extend(options, opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

module.exports = Clients;
