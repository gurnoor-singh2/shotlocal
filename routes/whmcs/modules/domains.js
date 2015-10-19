var utils = require('../lib/utils');
var extend = utils.extend;

var Domains = function(config) {
  this.config = config;
};


/**
 * Register domain - http://docs.whmcs.com/API:Register_Domain
 * @param domainid - Domain ID from WHMCS
 * @param domain - The domain name(send domain id * or * domain)
 * @param callback
 */
Domains.prototype.registerDomain = function(domainid, callback)
{
  var options = {
    action: 'domainregister'
  };

  if(typeof domainid === 'number' || domainid.indexOf('@') === -1)
    options.domainid = domainid;
  else
    options.domain = domainid;

  var createOptions = {
    client : this,
    body : options
  };

  utils.modem(createOptions, callback);
}

/**
 * Renew domain - http://docs.whmcs.com/API:Renew_Domain
 * @param domainid - Domain ID from WHMCS
 * @param domain - The domain name(send domain id * or * domain)
 * @param callback
 */
Domains.prototype.renewDomain = function(domainid, callback)
{
  var options = {
    action: 'domainrenew'
  };

  if(typeof domainid === 'number' || domainid.indexOf('@') === -1)
    options.domainid = domainid;
  else
    options.domain = domainid;

  var createOptions = {
    client : this,
    body : options
  };

  utils.modem(createOptions, callback);
}

/**
 * Transfer domain - http://docs.whmcs.com/API:Transfer_Domain
 * @param domainid - Domain ID from WHMCS
 * @param domain - The domain name(send domain id * or * domain)
 * @param [options] Object
 * @param [options.eppcode] String - The EPP code for the transfer
 * @param callback
 */
Domains.prototype.transferDomain = function(domainid, opts, callback)
{
  var options = {
    action: 'domaintransfer'
  };

  if(typeof domainid === 'number' || domainid.indexOf('@') === -1)
    options.domainid = domainid;
  else
    options.domain = domainid;

  if ( typeof opts === 'function') {
    callback = opts;
  } else {
    options = extend(options, opts);
  }

  var createOptions = {
    client : this,
    body : options
  };

  utils.modem(createOptions, callback);
}

/**
 * Release domain - http://docs.whmcs.com/API:Release_Domain
 * @param domainid - Domain ID from WHMCS
 * @param domain - The domain name(send domain id * or * domain)
 * @param newtag - The new tag for the domain
 * @param callback
 */
Domains.prototype.releaseDomain = function(domainid, newtag, callback)
{
  var options = {
    action: 'domainrelease',
    newtag: newtag
  };

  if(typeof domainid === 'number' || domainid.indexOf('@') === -1)
    options.domainid = domainid;
  else
    options.domain = domainid;

  var createOptions = {
    client : this,
    body : options
  };

  utils.modem(createOptions, callback);
}

/**
 * Get domain lock status - http://docs.whmcs.com/API:Domain_Locking_Status
 * @param domainid String|Number
 * @param callback
 */
Domains.prototype.domainGetLockingStatus = function (domainid, callback) {
  var options = {
    action: 'domaingetlockingstatus',
    domainid: domainid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get domain nameservers - http://docs.whmcs.com/API:Domain_Nameservers
 * @param domainid String|Number
 * @param callback
 */
Domains.prototype.domainGetNameservers = function (domainid, callback) {
  var options = {
    action: 'domaingetnameservers',
    domainid: domainid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get domain WHOIS Info - http://docs.whmcs.com/API:Get_Domain_WHOIS
 * @param domainid String|Number
 * @param callback
 */
Domains.prototype.domainGetWHOISInfo = function (domainid, callback) {
  var options = {
    action: 'domaingetwhoisinfo',
    domainid: domainid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};


/**
 * Get domain request EPP - http://docs.whmcs.com/API:Domain_EPP
 * @param domainid String|Number
 * @param callback
 */
Domains.prototype.domainRequestEPP = function (domainid, callback) {
  var options = {
    action: 'domainrequestepp',
    domainid: domainid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get domain toggle ID Protect - http://docs.whmcs.com/API:Toggle_ID_Protect
 * @param domainid String|Number
 * @param callback
 */
Domains.prototype.domainToggleIDProtect = function (domainid, idprotect, callback) {
  var options = {
    action: 'domaintoggleidprotect',
    domainid: domainid,
    idprotect: idprotect
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};


/**
 * Domain Update Lock - http://docs.whmcs.com/API:Domain_Update_Lock
 * @param domainid String|Number
 * @param [options] Object
 * @param [options.lockstatus] - set 1 to lock the domain
 * @param callback
 */
Domains.prototype.domainUpdateLockingStatus = function (domainid, status, callback) {
  
  if(typeof status === 'function'){
    callback = status;
    status = 0;
  }

  var options = {
    action: 'domainupdatelockingstatus',
    domainid: domainid,
    lockstatus: status
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};



/**
 * Update Domain Nameservers - http://docs.whmcs.com/API:Domain_Update_Nameservers
 * @param domainid String|Number
 * @param nameservers Object|Array Pass in an object with ns* properties, or an array of nameservers
 * @param nameservers.ns1 String
 * @param nameservers.ns2 String
 * @param [nameservers.ns3] String
 * @param [nameservers.ns4] String
 * @param [nameservers.ns5] String
 * @param callback
 */
Domains.prototype.domainUpdateNameservers = function (domainid, nameservers, callback) {
  
  var options = {
    action: 'domainupdatenameservers'
  };

  if(typeof domainid === 'number' || domainid.indexOf('@') === -1)
    options.domainid = domainid;
  else
    options.domain = domainid;

  if(Array.isArray(nameservers)){
    var len = nameservers.length;
    for(var i = 0; i < len; i++){
      options['ns' + (i + 1)] = nameservers[i];
    }
  } else if(typeof nameservers === 'object') {
    options = extend(options,nameservers);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};


/**
 * Domain Update WHOIS - http://docs.whmcs.com/API:Domain_Update_WHOIS
 * @param domainid String|Number
 * @param xml - xml of the details to update Get WHOIS
 * @param callback
 */
Domains.prototype.domainUpdateWHOISInfo = function (domainid, xml, callback) {
  
  var options = {
    action: 'domainupdatewhoisinfo',
    domainid: domainid,
    xml: xml
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Domain WHOIS - http://docs.whmcs.com/API:Domain_WHOIS
 * @param domain String
 * @param callback
 */
Domains.prototype.domainWHOIS = function (domain, callback) {
  
  var options = {
    action: 'domainwhois',
    domain: domain
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};


module.exports = Domains;
