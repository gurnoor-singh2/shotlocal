var utils = require('../lib/utils');
var extend = utils.extend;

var Order = function(config) {
  this.config = config;
};

  /** 
  * Add Order - http://docs.whmcs.com/API:Add_Order
  * @param clientid - client id for order
  * @param pid - product id
  * @param domain - domain name
  * @param billingcycle - onetime, monthly, quarterly, semiannually, etc..
  * @param domaintype - set for domain registration - register or transfer
  * @param regperiod = 1,2,3,etc...
  * @param eppcode - if domain transfer
  * @param nameserver1 - first nameserver (req for domain reg only)
  * @param paymentmethod - paypal, authorize, etc...
  * ***Reference API documentation for single product, multiple product no emails, domain only with promo, addon only
  * @param callback
  */
  Order.prototype.addOrder = function (opts, callback) {
    var options = {
      action: 'addorder'
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
  * Get Orders - http://docs.whmcs.com/API:Get_Orders
  * @param [opts] Object
  * @param [opts.id] - to get a specific order ID only
  * @param [opts.userid] - to get all orders for a specific client ID
  * @param [opts.status] - to get all orders in a specific status: Pending, Active, Fraud, Cancelled
  * @param [opts.limitstart] - The record number to start at (default = 0)
  * @param [opts.limitnum] - The number of order records to return (default = 25)
  * @param callback
  */
  Order.prototype.getOrders = function (opts, callback) {
    var options = {
      action: 'getorders'
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
  * Get Products - http://docs.whmcs.com/API:Get_Products
  * @param [opts] Object
  * @param [opts.pid] - can be used to just retrieve the details of a specific product ID
  * @param [opts.gid] - can be passed to just retrieve products in a specific group
  * @param [opts.module] - can be passed to just retrieve products assigned to a specific module
  * @param callback
  */
  Order.prototype.getProducts = function (opts, callback) {
    var options = {
      action: 'getproducts'
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
  * Get Promotions - http://docs.whmcs.com/API:Get_Promotions
  * @param [opts] Object
  * @param [opts.code] - the specific promotion code to return information for
  * @param callback
  */
  Order.prototype.getPromotions = function (opts, callback) {
    var options = {
      action: 'getpromotions'
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
  * Get Order Statuses - http://docs.whmcs.com/API:Get_Order_Statuses
  * @param callback
  */
  Order.prototype.getOrderStatuses = function (callback) {
    var options = {
      action: 'getorderstatuses'
    };

    var createOptions = {
      client: this,
      body: options
    };

    utils.modem(createOptions, callback);
  };

  /** 
  * Accept Order - http://docs.whmcs.com/API:Accept_Order
  * @param orderid - the Order ID to be accepted
  * @param [opts] Object
  * @param [opts.serverid] - the Server ID to provision any hosting products in the order to, overrides default
  * @param [opts.serviceusername] - the Username to assign for provisioning, overrides default
  * @param [opts.servicepassword] - the Password to assign for products being provisioned, overrides auto generation
  * @param [opts.registrar] - the domain registrar module to assign any domains to
  * @param [opts.autosetup] - true/false - determines whether product provisioning is performed
  * @param [opts.sendregistrar] - true/false determines whether domain automation is performed
  * @param [opts.sendemail] - true/false - sets if welcome emails for products and registration confirmation emails for domains should be sent
  * @param callback
  */
  Order.prototype.acceptOrder = function (orderid, opts, callback) {
    var options = {
      action: 'acceptorder',
      orderid: orderid
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
  * Pending Order - http://docs.whmcs.com/API:Pending_Order
  * @param orderid - the Order ID to be pending
  * @param callback
  */
  Order.prototype.pendingOrder = function (orderid, callback) {
    var options = {
      action: 'pendingorder',
      orderid: orderid
    };

    var createOptions = {
      client: this,
      body: options
    };

    utils.modem(createOptions, callback);
  };

  /** 
  * Cancel Order - http://docs.whmcs.com/API:Cancel_Order
  * @param orderid - the Order ID to be cancelled
  * @param callback
  */
  Order.prototype.cancelOrder = function (orderid, callback) {
    var options = {
      action: 'cancelorder',
      orderid: orderid
    };

    var createOptions = {
      client: this,
      body: options
    };

    utils.modem(createOptions, callback);
  };

  /** 
  * Fraud Order - http://docs.whmcs.com/API:Fraud_Order
  * @param orderid - the Order ID to be fraud
  * @param callback
  */
  Order.prototype.fraudOrder = function (orderid, callback) {
    var options = {
      action: 'fraudorder',
      orderid: orderid
    };

    var createOptions = {
      client: this,
      body: options
    };

    utils.modem(createOptions, callback);
  };

  /** 
  * Delete Order - http://docs.whmcs.com/API:Delete_Order
  * @param orderid - the Order ID to be deleted
  * @param callback
  */
  Order.prototype.deleteOrder = function (orderid, callback) {
    var options = {
      action: 'deleteorder',
      orderid: orderid
    };

    var createOptions = {
      client: this,
      body: options
    };

    utils.modem(createOptions, callback);
  };


module.exports = Order;