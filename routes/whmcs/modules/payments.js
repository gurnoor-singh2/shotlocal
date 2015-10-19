var utils = require('../lib/utils');
var extend = utils.extend;

var Payment = function(config) {
  this.config = config;
};

  /** 
  * Get Invoices - http://docs.whmcs.com/API:Get_Invoices
  * @param [opts] Object
  * @param [opts.userid] - the client ID to retrieve invoices for
  * @param [opts.status] - the status to filter for, Paid, Unpaid, Cancelled, etc...
                This field can also be set to Overdue to provide overdue invoices.
  * @param [opts.limitstart] - the offset number to start at when returning matches (default = 0)
  * @param [opts.limitnum] - the number of records to return (default = 25)
  * @param callback
  */
  Payment.prototype.getInvoices = function (opts, callback) {
    var options = {
      action: 'getinvoices'
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
  * Get Invoice - http://docs.whmcs.com/API:Get_Invoice
  * @param invoiceid;
  * @param callback
  */
  Payment.prototype.getInvoice = function (invoiceid, callback) {
    var options = {
      action: 'getinvoice',
      invoiceid: invoiceid
    };

    var createOptions = {
      client: this,
      body: options
    };

    utils.modem(createOptions, callback);
  };

  /** 
  * Create Invoice - http://docs.whmcs.com/API:Create_Invoice
  * @param   userid - should contain the user id of the client you wish to create the invoice for
  * @param date - the date the invoice is created in the format YYYYMMDD
  * @param duedate - the date the invoice is due in the format YYYYMMDD
  * @param paymentmethod - the payment method for the invoice eg. banktransfer
  * @param itemdescription1 - item 1 description
  * @param itemamount1 - item 1 amount
  * @param itemtaxed1 - set to true if item 1 should be taxed
  * @param [opts] Object
  * @param callback
  */
  Payment.prototype.createInvoice = function (opts, callback) {
    var options = {
      action: 'createInvoice'
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
  * Update Invoice - http://docs.whmcs.com/API:Update_Invoice
  * @param invoice
  * @param invoiceid;
  * @param callback
  */
  Payment.prototype.updateInvoice = function (invoiceid, invoicenumb, callback) {
    var options = {
      action: 'updateInvoice',
      invoiceid: invoiceid,
      invothumb : invoicenumb
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
  * Capture Payment - http://docs.whmcs.com/API:Capture_Payment
  * @param invoiceid
  * @param cvv
  * @param callback
  */
  Payment.prototype.capturePayment = function (invoiceid, cvv, callback) {
    var options = {
      action: 'capturepayment',
      invoiceid: invoiceid,
      cvv: cvv
    };

    var createOptions = {
      client: this,
      body: options
    };

    utils.modem(createOptions, callback);
  };
  
  /** 
  * Apply Credit - http://docs.whmcs.com/API:Apply_Credit
  * @param invoiceid
  * @param amount
  * @param callback
  */
  Payment.prototype.applyCredit = function (invoiceid, amount, callback) {
    var options = {
      action: 'applycredit',
      invoiceid: invoiceid,
      amount: amount
    };

    var createOptions = {
      client: this,
      body: options
    };

    utils.modem(createOptions, callback);
  };

  /** 
  * Add Billable Item - http://docs.whmcs.com/API:Add_Billable_Item
  * @param clientid - the User ID to assign the charge to
  * @param description - the description to be shown to a customer when invoiced
  * @param hours - number of hours/quantity (not required for single quantities)
  * @param amount - the total amount to invoice for
  * @param invoiceaction - noinvoice, nextcron, nextinvoice, duedate, recur
  * @param callback
  */
  Payment.prototype.addBillableItem = function (opts, callback) {
    var options = {
      action: 'addbillableitem'
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
  * Add Credit - http://docs.whmcs.com/API:Add_Credit
  * @param clientid - the User ID to assign the charge to
  * @param description - the description to be shown to a customer when invoiced
  * @param amount - the total amount to invoice for
  * @param callback
  */
  Payment.prototype.addCredit = function (opts, callback) {
    var options = {
      action: 'addcredit'
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
  * Add Transaction - http://docs.whmcs.com/API:Add_Transaction
  * @param amountin - amount to add to the account
  * @param amountout - if an outgoing enter this
  * @param paymentmethod - gateway used in WHMCS
  * @param date - date of transaction (same format as your WHMCS eg DD/MM/YYYY)
  * @param [opts] Object
  * @param [opts.userid] - Add Transaction to a user
  * @param [opts.invoiceid] - Add transaction to a particular invoice
  * @param [opts.description] - Description of the transaction
  * @param [opts.fees] - transaction fee you were charged
  * @param [opts.transid] - Transaction ID you wish to assign
  * @param [opts.credit] - set to true to add the transaction as credit to the client
  * @param callback
  */
  Payment.prototype.addTransaction = function (opts, callback) {
    var options = {
      action: 'addtransaction'
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
  * Update Transaction - http://docs.whmcs.com/API:Update_Transaction
  * @param transactionid 
  * @param [opts] Object
  * @param [opts.userid] - Add Transaction to a user
  * @param [opts.currency] - Currency ID for a transaction
  * @param [opts.gateway] - Gateway to assign transaction to
  * @param [opts.date] - date of transaction YYYYMMDD
  * @param [opts.description] - Description of the transaction
  * @param [opts.amountin] - amount to add to the account
  * @param [opts.fees] - transaction fee you were charged
  * @param [opts.amountout] - if an outgoing enter this
  * @param [opts.rate] - exchange rate based on master currency. Set to 1 if on default currency
  * @param [opts.transid] - Transac  * @param [opts.tion ID you wish to assign
  * @param [opts.invoiceid] - Add transaction to a particular invoice
  * @param [opts.refundid] - Add a refund ID if this is a refund transaction
  * @param callback
  */
  Payment.prototype.updateTransaction = function (opts, callback) {
    var options = {
      action: 'updatetransaction'
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
  * Gen Invoices - http://docs.whmcs.com/API:Gen_Invoices
  * @param clientid - The desired Client/User ID
  * @param serviceids - Results of the generated invoices can be made specific to service IDs by entering an optional service IDs parameter.
  * @param addonids - Results of the generated invoices can be made specific to addon IDs by entering an optional addon IDs parameter.
  * @param domainids - Results of the generated invoices can be made specific to domain IDs by entering an optional domain IDs parameter.
  * @param noemails - An operational parameter for specifying the email(s) for the invoice(s) should be generated. Any value can be passed eg. "true" or "yes" or "1".
  * @param callback
  */
  Payment.prototype.genInvoices = function (opts, callback) {
    var options = {
      action: 'geninvoices'
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
  * Get Payment Methods - http://docs.whmcs.com/API:Get_Payment_Methods
  * @param callback
  */
  Payment.prototype.getPaymentMethods = function(callback){
    var options = {
      action: 'getpaymentmethods'
    }

    var createOptions = {
      client: this,
      body: options
    }

    utils.modem(createOptions, callback);
  }


module.exports = Payment;