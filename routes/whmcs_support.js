(function () {
var WHMCS = require('./whmcs/index');

var config = {
  username: 'tmarshall',
  password: '399cb1f870a5df9e27624e8c31d841ba',
  serverUrl: 'http://client.access-now.net/includes/api.php'
};

var whmcssupport = new WHMCS(config);

    "use strict";

    var supportHelper = {};

    //Open Ticket
    supportHelper.openTicket = function (req, res) {
        
        var clientid = req.body.clientid;
        var deptid = req.body.deptid;
        var subject = req.body.subject;
        var message = req.body.message;

        var opts = {};

        whmcssupport.supports.openTicket(clientid, deptid, subject, message, opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Open Ticket"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Reply Ticket
    supportHelper.replyTicket = function (req, res) {
        
        var ticketid = req.body.ticketid;
        var message = req.body.message;

        var opts = {};

        whmcssupport.supports.replyTicket(ticketid, message, opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Reply Ticket"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Tickets
    supportHelper.getTickets = function (req, res) {
        
        var opts = {};

        whmcssupport.supports.getTickets(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Tickets"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Ticket
    supportHelper.getTicket = function (req, res) {
        
        var ticketid = req.body.ticketid;
        var ticketnum = req.body.ticketnum;

        whmcssupport.supports.getTicket(ticketid, ticketnum, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Ticket"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Update Ticket
    supportHelper.updateTicket = function (req, res) {
        
        var ticketid = req.body.ticketid;
        var opts = {};
        opts.status = req.body.status;

        whmcssupport.supports.updateTicket(ticketid, opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Update Ticket"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Delete Ticket
    supportHelper.deleteTicket = function (req, res) {
        
        var ticketid = req.body.ticketid;

        whmcssupport.supports.deleteTicket(ticketid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Delete Ticket"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Add Ticket Note
    supportHelper.addTicketNote = function (req, res) {
        
        var ticketid = req.body.ticketid;
        var message = req.body.message;

        whmcssupport.supports.addTicketNote(ticketid, message, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Add Ticket Note"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Ticket Note
    supportHelper.getTicketNote = function (req, res) {
        
        var ticketid = req.body.ticketid;

        whmcssupport.supports.getTicketNote(ticketid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Ticket Note"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };
    
    //Delete Ticket Note
    supportHelper.deleteTicketNote = function (req, res) {
        
        var noteid = req.body.noteid;

        whmcssupport.supports.deleteTicketNote(noteid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Delete Ticket Note"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Module Create
    supportHelper.getSupportDepartments = function (req, res) {
        
        var ignore_dept_assignments = req.body.ignore_dept_assignments;

        whmcssupport.supports.getSupportDepartments(ignore_dept_assignments, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Support Departments"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };


    //Get Support Status
    supportHelper.getSupportStatuses = function (req, res) {
        
        whmcssupport.supports.getSupportStatuses(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Support Statuses"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };
    module.exports = supportHelper;

    //Get Ticket Predefined Cats
    supportHelper.getTicketPredefinedCats = function (req, res) {
        
        whmcssupport.supports.getTicketPredefinedCats(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Ticket Predefined Cats"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Ticket Predefined Replies
    supportHelper.getTicketPredefinedReplies = function (req, res) {
        
        var opts = {};

        whmcssupport.supports.getTicketPredefinedReplies(opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Ticket Predefined Replies"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Add Announcement
    supportHelper.addAnnouncement = function (req, res) {
        
        var date = req.body.date;
        var title = req.body.title;
        var announcement = req.body.announcement;
        var published = req.body.published;

        whmcssupport.supports.addAnnouncement(date, title, announcement, published, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Add Announcement"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Delete Announcement
    supportHelper.deleteAnnouncement = function (req, res) {
        
        var announcementid = req.body.announcementid;

        whmcssupport.supports.deleteAnnouncement(announcementid, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Delete Announcement"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Update Announcement
    supportHelper.updateAnnouncement = function (req, res) {
        
        var announcementid = req.body.announcementid;
        var opts = {};
        opts.date = req.body.date;
        opts.title = req.body.title;
        opts.announcement = req.body.announcement;
        opts.published = req.body.published;

        whmcssupport.supports.updateAnnouncement(announcementid, opts, function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Update Announcement"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    //Get Announcements
    supportHelper.getAnnouncements = function (req, res) {

        whmcssupport.supports.getAnnouncements(function(err, data)
        {
            if(err){
                console.error('ERROR : ', err);
                var response = { "status" : false, "ERROR" : "Get Announcements"};
                res.send(JSON.stringify(response));
            }
            else {
                console.log(data);
                return res.json(data);
            }
        });
    };

    module.exports = supportHelper;

})();
