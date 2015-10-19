var utils = require('../lib/utils');
var extend = utils.extend;

var Support = function(config) {
  this.config = config;
};

/** 
* Get Support Departments - http://docs.whmcs.com/API:Get_Support_Departments
* @param ignore_dept_assignments bool    ignore the departments that the API user is assigned to
* @param callback
*/
Support.prototype.getSupportDepartments = function (ignore_dept_assignments, callback) {
  var options = {
    action: 'getsupportdepartments',
    ignore_dept_assignments: ignore_dept_assignments
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Open ticket - http://docs.whmcs.com/API:Open_Ticket
 * @param clientid String|Number
 * @param department Number
 * @param subject String
 * @param message String
 * @param [opts] Object
 * @param [opts.priority] String Low, Medium, High, etc. (Default = Low)
 * @param [opts.contactid] String|Number ID of the contact to associate the ticket with
 * @param [opts.name] String Required if not a registered client (clientid must be set to 0)
 * @param [opts.email] String Rquired if not a registered client
 * @param [opts.admin] String
 * @param [opts.serviceid] String
 * @param [opts.domainid] String
 * @param [opts.customfields] String Base 64 serialized array of field IDs => values
 * @param [opts.noemail] Boolean
 * @param callback
 */
Support.prototype.openTicket = function (clientid, department, subject, message, opts, callback) {
  var options = {
    action: 'openticket',
    clientid: clientid,
    deptid: department,
    subject: subject,
    message: message
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
 * Reply to ticket - http://docs.whmcs.com/API:Reply_Ticket
 * @param ticketid String|Number
 * @param message String
 * @param [opts] Object
 * @param [opts.clientid] String|Number Required if adding reply as a client
 * @param [opts.contactid] String|Number ID of contact for client if replying as a client
 * @param [opts.name] String Required to be set to 0 if not a registered client
 * @param [opts.email] String Required if not a registered client
 * @param [opts.adminusername] String Name to show on message
 * @param [opts.status] String
 * @param [opts.customfields] String Base64 encoded serialized array of custom fields
 * @param callback
 */
Support.prototype.replyTicket = function (ticketid, message, opts, callback) {
  var options = {
    action: 'addticketreply',
    ticketid: ticketid,
    message: message
  };

  if(typeof opts === 'function'){
    callback = opts;
  } else {
    options = extend(options, opts);
  }

  if(!options.adminusername){
    options.adminusername = 'Auto-response';
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Get tickets - http://docs.whmcs.com/API:Get_Tickets
 * param [opts] Object
 * param [opts.limitstart] - start at which result (default = 0)
 * param [opts.limitnum] - limit at how many results (default = 25)
 * param [opts.clientid] - filter for a specific Client ID
 * param [opts.email - filter for tickets only from a specific email address
 * param [opts.deptid - filter for a particular department
 * param [opts.status - filter for a particular status - in addition to any individual status options, this can also take the values "Awaiting Reply", "All Active Tickets" or "My Flagged Tickets" to return those preset status groups
 * param [opts.subject - filter for a word in the subject
 * param [opts.ignore_dept_assignments - Pass this to ignore the departments the admin user belongs to. Otherwise just the tickets for the departments the API user belongs to are returned
 * @param callback
 */
Support.prototype.getTickets = function (opts, callback) {
  var options = {
    action: 'gettickets'
  };

  if(typeof opts === 'function'){
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
 * Get ticket - http://docs.whmcs.com/API:Get_Ticket
 * @param ticketid String
 * @param ticketnum String
 * @param callback
 */
Support.prototype.getTicket = function (ticketid, ticketnum, callback) {
  var options = {
    action: 'getticket',
    ticketid: ticketid,
    ticketnum: ticketnum
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
* Update ticket - http://docs.whmcs.com/API:Update_Ticket
* @param opts Object
* @param opts.ticketid String ID of the ticket to update
* @param [opts.deptid] String Update the assigned department
* @param [opts.subject] String Update the subject of the ticket
* @param [opts.priority] String Low, Medium, High
* @param [opts.status] String Open, Answered, Closed, etc.
* @param [opts.userid] String Change the user that the ticket is assigned to
* @param [opts.email] String Change the email address that opened the ticket (only when userid is not used)
* @param [opts.cc] String Add CC emails to the ticket
* @param [opts.flag] String Flag to an adminid
* @param callback
*/
Support.prototype.updateTicket = function (ticketid, opts, callback) {
  var options = {
    action: 'updateticket',
    ticketid: ticketid
  };

  if(typeof opts === 'function'){
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
* Delete ticket - http://docs.whmcs.com/API:Delete_Ticket
* @param ticketid String
* @param callback
*/
Support.prototype.deleteTicket = function (ticketid, callback) {
  var options = {
    action: 'deleteticket',
    ticketid: ticketid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
* Add ticket note - http://docs.whmcs.com/API:Add_Ticket_Note
* @param ticketid String
* @param ticketnum String
* @param message String
* @param callback
*/
Support.prototype.addTicketNote = function (ticketid, message, callback) {
  var options = {
    action: 'addticketnote',
    ticketid: ticketid,
    message: message
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
* Get ticket note - http://docs.whmcs.com/API:Get_Ticket_Note
* @param ticketid String
* @param callback
*/
Support.prototype.getTicketNote = function (ticketid, callback) {
  var options = {
    action: 'getticketnotes',
    ticketid: ticketid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
* Delete ticket note - http://docs.whmcs.com/API:Delete_Ticket_Note
* @param ticketid String
* @param callback
*/
Support.prototype.deleteTicketNote = function (noteid, callback) {
  var options = {
    action: 'deleteticketnote',
    noteid: noteid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
* Get Support Statuses - http://docs.whmcs.com/API:Get_Support_Statuses
* @param callback
*/
Support.prototype.getSupportStatuses = function (callback) {
  var options = {
    action: 'getsupportstatuses'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
* Get Ticket Predefined Cats - http://docs.whmcs.com/API:Get_Ticket_Predefined_Cats
* @param callback
*/
Support.prototype.getTicketPredefinedCats = function (callback) {
  var options = {
    action: 'getticketpredefinedcats'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
* Get Ticket Predefined Replies - http://docs.whmcs.com/API:Get_Ticket_Predefined_Replies
* @param [opts] Object
* @param [opts.catid] Select category to browse
* @param callback
*/
Support.prototype.getTicketPredefinedReplies = function (opts, callback) {

  var options = {
    action: 'getticketpredefinedreplies'
  };

  if(typeof opts === 'function'){
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
* Add Announcement - http://docs.whmcs.com/API:Add_Announcement
* @param date - Date of the announcement in format yyyymmdd
* @param title - Title of the announcement
* @param announcement - Announcement text
* @param published - on/off
* @param callback
*/
Support.prototype.addAnnouncement = function (date, title, announcement, published, callback) {

  var options = {
    action: 'addannouncement',
    date: date,
    title: title,
    announcement: announcement,
    published: published
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
* Delete Announcement - http://docs.whmcs.com/API:Delete_Announcement
* @param announcementid - value
* @param callback
*/
Support.prototype.deleteAnnouncement = function (announcementid, callback) {

  var options = {
    action: 'deleteannouncement',
    announcementid: announcementid
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};


/**
* Update Announcement - http://docs.whmcs.com/API:Update_Announcement
* @param announcementid
* @param opts Object
* @param [opts.date] - Date of the announcement in format yyyymmdd
* @param [opts.title] - Title of the announcement
* @param [opts.announcement] - Announcement text
* @param [opts.published] - on/off
* @param callback
*/
Support.prototype.updateAnnouncement = function (announcementid, opts, callback) {

  var options = {
    action: 'updateannouncement',
    announcementid: announcementid
  };

  if(typeof opts === 'function'){
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
* Get Announcements - http://docs.whmcs.com/API:Get_Announcements
* @param callback
*/
Support.prototype.getAnnouncements = function (callback) {

  var options = {
    action: 'getannouncements'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};


module.exports = Support;
