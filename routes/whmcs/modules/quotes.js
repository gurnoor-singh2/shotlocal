var utils = require('../lib/utils');
var extend = utils.extend;

var Quotes = function(config) {
  this.config = config;
};

/**
 * Create Quote - http://docs.whmcs.com/API:Create_Quote
 * @param subject - Subject of the quote
 * @param stage - Draft,Delivered,On Hold,Accepted,Lost,Dead
 * @param validuntil - In format set in Localisation
 * @param lineitems - a base64 encoded serialized array containing:
 * @param [opts] Object
 * @param callback
 */

Quotes.prototype.createQuote = function (opts, callback) {
  var options = {
    action: 'createquote'
  };

  if(typeof opts === 'function'){
    callback = opts;
  } else {
    options = extend(options,opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};


/**
 * Update Quote - http://docs.whmcs.com/API:Update_Quote
 * @param quoteid 
 * @param [opts] Object
 * @param callback
 */

Quotes.prototype.updateQuote = function (opts, callback) {
  var options = {
    action: 'updatequote'
  };

  if(typeof opts === 'function'){
    callback = opts;
  } else {
    options = extend(options,opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Delete Quote - http://docs.whmcs.com/API:Delete_Quote
 * @param quoteid 
 * @param callback
 */

Quotes.prototype.deleteQuote = function (quoteid, callback) {
  var options = {
    action: 'deletequote',
    quoteid: quoteid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};



/**
 * Send Quote - http://docs.whmcs.com/API:Send_Quote
 * @param quoteid 
 * @param callback
 */

Quotes.prototype.sendQuote = function (quoteid, callback) {
  var options = {
    action: 'sendquote',
    quoteid: quoteid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Accept Quote - http://docs.whmcs.com/API:Accept_Quote
 * @param quoteid 
 * @param callback
 */

Quotes.prototype.acceptQuote = function (quoteid, callback) {
  var options = {
    action: 'acceptquote',
    quoteid: quoteid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};


module.exports = Quotes;
