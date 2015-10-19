var utils = require('../lib/utils');
var extend = utils.extend;

var Misc = function(config) {
  this.config = config;
};


/**
 * Get Activity Log - http://docs.whmcs.com/API:Get_Activity_Log
 * @param [opts] Object
 * @param [opts.limitstart] - Which User ID to start at (defaults to 0)
 * @param [opts.limitnum] - Limit by number (defaults to 25)
 * @param callback
 */
Misc.prototype.getActivityLog = function ( opts, callback) {
  var options = {
    action: 'getactivitylog'
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
 * Get Admin Details - http://docs.whmcs.com/API:Get_Admin_Details
 * @param callback
 */
Misc.prototype.getAdminDetails = function ( opts, callback) {
  var options = {
    action: 'getadmindetails'
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
 * Update Admin Notes - http://docs.whmcs.com/API:Update_Admin_Notes
 * @param callback
 */
Misc.prototype.updateAdminNotes = function ( notes, callback) {
  var options = {
    action: 'updateadminnotes',
    notes: notes
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get Currencies - http://docs.whmcs.com/API:Get_Currencies
 * @param callback
 */
Misc.prototype.getCurrencies = function (callback) {
  var options = {
    action: 'getcurrencies'
  };

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
Misc.prototype.getPromotions = function (callback) {
  var options = {
    action: 'getpromotions'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};


/**
 * Get Client Groups - http://docs.whmcs.com/API:Get_Client_Groups
 * @param callback
 */
Misc.prototype.getClientGroups = function (callback) {
  var options = {
    action: 'getclientgroups'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get Email Templates - http://docs.whmcs.com/API:Get_Email_Templates
 * @param [opts] Objects
 * @param [opts.type] - from product,domain,support,general,invoice,affiliate,admin
 * @param [opts.language] - only required for additional languages
 * @param callback
 */
Misc.prototype.getEmailTemplates = function (callback) {
  var options = {
    action: 'getemailtemplates'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get Todo Items - http://docs.whmcs.com/API:Get_To-Do_Items
 * @param [opts] Object
 * @param [opts.status] - from New,Pending,In Progress,Completed,Postponed
 * @param [opts.limitstart] - where to start the output. Used for pagination. (default = 0)
 * @param [opts.limitnum] - limit the number of records returned (default = 25)]
 * @param callback
 */
Misc.prototype.getTodoItems = function (callback) {
  var options = {
    action: 'gettodoitems'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get Todo Items Statuses - http://docs.whmcs.com/API:Get_To-Do_Items_Statuses
 * @param callback
 */
Misc.prototype.getTodoItemsStatuses = function (callback) {
  var options = {
    action: 'gettodoitemstatuses'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Update Todo Item - http://docs.whmcs.com/API:Update_To-Do_Item
 * @param itemid - ID of the ToDo in WHMCS to update
 * @param adminid - Admin ID to update the To Do item to
 * @param [opts] Object
 * @param [opts.date] - open date of the To Do YYYYMMDD
 * @param [opts.title] - Title of the to do
 * @param [opts.description] - Text of the To Do
 * @param [opts.status] - Status - New, Pending, In Progress, Completed, Postponed
 * @param [opts.duedate] - due date of the To Do YYYYMMDD
 * @param callback
 */
Misc.prototype.updateTodoItem = function (itemid, adminid, opts, callback) {
  var options = {
    action: 'updatetodoitem',
    itemid: itemid,
    adminid: adminid
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
 * Get Staff Online - http://docs.whmcs.com/API:Get_Staff_Online
 * @param callback
 */
Misc.prototype.getStaffOnline = function (callback) {
  var options = {
    action: 'getstaffonline'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get Stats - http://docs.whmcs.com/API:Get_Stats
 * @param callback
 */
Misc.prototype.getStats = function (callback) {
  var options = {
    action: 'getstats'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Encrypt Password - http://docs.whmcs.com/API:Encrypt_Password
 * @param password2 - should contain the string you want encrypting
 * @param callback
 */
Misc.prototype.encryptPassword = function (password2, callback) {
  var options = {
    action: 'encryptpassword',
    password2: password2
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Decrypt Password - http://docs.whmcs.com/API:Decrypt_Password
 * @param password2 - should contain the string you want encrypting
 * @param callback
 */
Misc.prototype.decryptPassword = function (password2, callback) {
  var options = {
    action: 'decryptpassword',
    password2: password2
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Add Banned IP - http://docs.whmcs.com/API:Add_Banned_IP
 * @param ip - IP address to ban
 * @param [opts] Object
 * @param [opts.reason] - reason for ban
 * @param [opts.days] - number of days to ban for. If not submitted defaults to 7 (not required)
 * @param [opts.expires] - in YYYY-MM-DD HH:II:SS format eg: 2011-06-06 01:12:34 (optional in place of "days")
 * @param callback
 */
Misc.prototype.addBannedIP = function (ip, opts, callback) {
  var options = {
    action: 'addbannedip',
    ip: ip
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
 * Add Banned IP - http://docs.whmcs.com/API:Add_Banned_IP
 * @param type - one of hostingaccount, reselleraccount, server or other
 * @param gid - the product group ID to add it to
 * @param name - the product name
 * @param paytype - free, onetime or recurring
 * @param [opts] Object
 * @param [opts.description] - the product description
 * @param [opts.hidden] - set true to hide
 * @param [opts.showdomainoptions] - set true to show
 * @param [opts.welcomeemail] - the email template ID for a welcome email
 * @param [opts.qty] - set quantity to enable stock control
 * @param [opts.proratadate]
 * @param [opts.proratachargenextmonth]
 * @param [opts.autosetup] - on, payment, order or blank for none
 * @param [opts.module] - module name
 * @param [opts.servergroupid] - server group ID
 * @param [opts.subdomain] - subdomain to offer with product
 * @param [opts.tax] - set true to apply tax
 * @param [opts.order] - display sort order to override default
 * @param [opts.configoption1]
 * @param [opts.configoption2]
 * @param [opts.etc...]
 * @param [opts.pricing] - an array of pricing in the format pricing[currencyid][cycle] (example below)
 * @param callback
 */
Misc.prototype.addProduct = function (opts, callback) {
  var options = {
    action: 'addproduct'
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
 * Log Activity - http://docs.whmcs.com/API:Log_Activity
 * @param description - Text to add to the log
 * @param [opts] Object
 * @param [opts.userid] - UserID to assign the log to in order to appear in Client Log
 * @param callback
 */
Misc.prototype.logActivity = function (description, opts, callback) {
  var options = {
    action: 'logactivity',
    description: description
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
 * Send Admin Email - http://docs.whmcs.com/API:Send_Admin_Email
 * @param messagename - Name of the Admin email template to send
 * @param mergefields - array of merge fields to populate the template being sent
 * @param type - Who to send the email to. One of system, account or support. Default: system
 * @param [opts] Object
 * @param [opts.customsubject] - Subject for a custommessage being sent
 * @param [opts.custommessage] - Send a custom email to admin users, this will override 'messagename'
 * @param [opts.deptid - If type] = support, the users of a department to send email to
 * @param callback
 */
Misc.prototype.sendAdminEmail = function (messagename, mergefields, type, opts, callback) {
  var options = {
      action: 'sendadminemail',
      messagename: messagename,
      mergefields: mergefields,
      type: type
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



module.exports = Misc;
