var utils = require('../lib/utils');
var extend = utils.extend;

var Modules = function(config) {
  this.config = config;
};


/**
 * module create - http://docs.whmcs.com/API:Module_Create
 * @param accountid - the unique id number of the account in the tblhosting table
 * @param callback
 */
Modules.prototype.moduleCreate = function(accountid, callback)
{
  var options = {
    action: 'modulecreate',
    accountid: accountid
  };

  var createOptions = {
    client : this,
    body : options
  };

  utils.modem(createOptions, callback);
}

/**
 * module suspend - http://docs.whmcs.com/API:Module_Suspend
 * @param accountid - the unique id number of the account in the tblhosting table
 * @param suspendreason - string
 * @param callback
 */
Modules.prototype.moduleSuspend = function(accountid, suspendreason, callback)
{
  var options = {
    action: 'modulesuspend',
    accountid: accountid,
    suspendreason: suspendreason
  };

  var createOptions = {
    client : this,
    body : options
  };

  utils.modem(createOptions, callback);
}

/**
 * module unsuspend - http://docs.whmcs.com/API:Module_Unsuspend
 * @param accountid - the unique id number of the account in the tblhosting table
 * @param callback
 */
Modules.prototype.moduleUnsuspend = function(accountid, callback)
{
  var options = {
    action: 'moduleunsuspend',
    accountid: accountid
  };

  var createOptions = {
    client : this,
    body : options
  };

  utils.modem(createOptions, callback);
}

/**
 * module terminate - http://docs.whmcs.com/API:Module_Terminate
 * @param accountid - the unique id number of the account in the tblhosting table
 * @param callback
 */
Modules.prototype.moduleTerminate = function(accountid, callback)
{
  var options = {
    action: 'moduleterminate',
    accountid: accountid
  };

  var createOptions = {
    client : this,
    body : options
  };

  utils.modem(createOptions, callback);
}

/**
 * module change package - http://docs.whmcs.com/API:Module_Change_Package
 * @param serviceid - ID of the service in WHMCS
 * @param callback
 */
Modules.prototype.moduleChangePackage = function(serviceid, callback)
{
  var options = {
    action: 'modulechangepackage',
    serviceid: serviceid
  };

  var createOptions = {
    client : this,
    body : options
  };

  utils.modem(createOptions, callback);
}

/**
 * module change password - http://docs.whmcs.com/API:Module_Change_Password
 * @param accountid - the unique id number of the account in the tblhosting table
 * @param accountpassword - Specify to update the password on 
 * @param callback
 */
Modules.prototype.moduleChangePassword = function(serviceid, servicepassword, callback)
{
  var options = {
    action: 'modulechangepw',
    serviceid: serviceid,
    servicepassword: servicepassword
  };

  var createOptions = {
    client : this,
    body : options
  };

  utils.modem(createOptions, callback);
}

module.exports = Modules;
