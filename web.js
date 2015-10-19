var express = require('express');

var app = express();

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var whmcs_client = require('./routes/whmcs_client');
var whmcs_domain = require('./routes/whmcs_domain');
var whmcs_module = require('./routes/whmcs_module');
var whmcs_support = require('./routes/whmcs_support');
var whmcs_order = require('./routes/whmcs_order');
var whmcs_payment = require('./routes/whmcs_payment');
var whmcs_quote = require('./routes/whmcs_quote');
var whmcs_misc = require('./routes/whmcs_misc');
// routes
var apiPath = "/api";

//---------Clients----------
app.post(apiPath + '/whmcs/addClient', whmcs_client.addClient);
app.post(apiPath + '/whmcs/updateClient', whmcs_client.updateClient);
app.post(apiPath + '/whmcs/deleteClient', whmcs_client.deleteClient);

app.post(apiPath + '/whmcs/closeClient', whmcs_client.closeClient);
app.post(apiPath + '/whmcs/addClientNote', whmcs_client.addClientNote);
app.post(apiPath + '/whmcs/getClients', whmcs_client.getClients);

app.post(apiPath + '/whmcs/getClientsDetails', whmcs_client.getClientsDetails);
app.post(apiPath + '/whmcs/getCredits', whmcs_client.getCredits);
app.post(apiPath + '/whmcs/getEmails', whmcs_client.getEmails);

app.post(apiPath + '/whmcs/getQuotes', whmcs_client.getQuotes);
app.post(apiPath + '/whmcs/getClientsPassword', whmcs_client.getClientsPassword);
app.post(apiPath + '/whmcs/getTransactions', whmcs_client.getTransactions);

app.post(apiPath + '/whmcs/addContact', whmcs_client.addContact);
app.post(apiPath + '/whmcs/getContacts', whmcs_client.getContacts);
app.post(apiPath + '/whmcs/updateContact', whmcs_client.updateContact);

app.post(apiPath + '/whmcs/deleteContact', whmcs_client.deleteContact);
app.post(apiPath + '/whmcs/getClientsProducts', whmcs_client.getClientsProducts);
app.post(apiPath + '/whmcs/updateClientProduct', whmcs_client.updateClientProduct);

app.post(apiPath + '/whmcs/getClientsAddons', whmcs_client.getClientsAddons);
app.post(apiPath + '/whmcs/updateClientAddon', whmcs_client.updateClientAddon);
app.post(apiPath + '/whmcs/getClientsDomains', whmcs_client.getClientsDomains);

app.post(apiPath + '/whmcs/updateClientDomain', whmcs_client.updateClientDomain);
app.post(apiPath + '/whmcs/addCancelRequest', whmcs_client.addCancelRequest);
app.post(apiPath + '/whmcs/upgradeProduct', whmcs_client.upgradeProduct);

app.post(apiPath + '/whmcs/validateLogin', whmcs_client.validateLogin);
app.post(apiPath + '/whmcs/sendEmail', whmcs_client.sendEmail);

//--------DOMAIN---------
app.post(apiPath + '/whmcs/registerDomain', whmcs_domain.registerDomain);
app.post(apiPath + '/whmcs/renewDomain', whmcs_domain.renewDomain);
app.post(apiPath + '/whmcs/transferDomain', whmcs_domain.transferDomain);

app.post(apiPath + '/whmcs/releaseDomain', whmcs_domain.releaseDomain);
app.post(apiPath + '/whmcs/domainGetLockingStatus', whmcs_domain.domainGetLockingStatus);
app.post(apiPath + '/whmcs/domainGetNameservers', whmcs_domain.domainGetNameservers);

app.post(apiPath + '/whmcs/domainGetWHOISInfo', whmcs_domain.domainGetWHOISInfo);
app.post(apiPath + '/whmcs/domainRequestEPP', whmcs_domain.domainRequestEPP);
app.post(apiPath + '/whmcs/domainToggleIDProtect', whmcs_domain.domainToggleIDProtect);

app.post(apiPath + '/whmcs/domainUpdateLockingStatus', whmcs_domain.domainUpdateLockingStatus);
app.post(apiPath + '/whmcs/domainUpdateNameservers', whmcs_domain.domainUpdateNameservers);
app.post(apiPath + '/whmcs/domainUpdateWHOISInfo', whmcs_domain.domainUpdateWHOISInfo);

app.post(apiPath + '/whmcs/domainWHOIS', whmcs_domain.domainWHOIS);

//----------MODULE----------
app.post(apiPath + '/whmcs/moduleCreate', whmcs_module.moduleCreate);
app.post(apiPath + '/whmcs/moduleSuspend', whmcs_module.moduleSuspend);
app.post(apiPath + '/whmcs/moduleUnsuspend', whmcs_module.moduleUnsuspend);

app.post(apiPath + '/whmcs/moduleTerminate', whmcs_module.moduleTerminate);
app.post(apiPath + '/whmcs/moduleChangePackage', whmcs_module.moduleChangePackage);
app.post(apiPath + '/whmcs/moduleChangePassword', whmcs_module.moduleChangePassword);

//----------SUPPORT----------
app.post(apiPath + '/whmcs/openTicket', whmcs_support.openTicket);
app.post(apiPath + '/whmcs/replyTicket', whmcs_support.replyTicket);
app.post(apiPath + '/whmcs/getTickets', whmcs_support.getTickets);

app.post(apiPath + '/whmcs/getTicket', whmcs_support.getTicket);
app.post(apiPath + '/whmcs/updateTicket', whmcs_support.updateTicket);
app.post(apiPath + '/whmcs/deleteTicket', whmcs_support.deleteTicket);

app.post(apiPath + '/whmcs/addTicketNote', whmcs_support.addTicketNote);
app.post(apiPath + '/whmcs/getTicketNote', whmcs_support.getTicketNote);
app.post(apiPath + '/whmcs/deleteTicketNote', whmcs_support.deleteTicketNote);

app.post(apiPath + '/whmcs/getSupportDepartments', whmcs_support.getSupportDepartments);
app.post(apiPath + '/whmcs/getSupportStatuses', whmcs_support.getSupportStatuses);
app.post(apiPath + '/whmcs/getTicketPredefinedCats', whmcs_support.getTicketPredefinedCats);

app.post(apiPath + '/whmcs/getTicketPredefinedReplies', whmcs_support.getTicketPredefinedReplies);
app.post(apiPath + '/whmcs/addAnnouncement', whmcs_support.addAnnouncement);
app.post(apiPath + '/whmcs/deleteAnnouncement', whmcs_support.deleteAnnouncement);

app.post(apiPath + '/whmcs/updateAnnouncement', whmcs_support.updateAnnouncement);
app.post(apiPath + '/whmcs/getAnnouncements', whmcs_support.getAnnouncements);

//--------------Order------------
app.post(apiPath + '/whmcs/addOrderSingleProduct', whmcs_order.addOrderSingleProduct);
app.post(apiPath + '/whmcs/addOrderMultipleProduct', whmcs_order.addOrderMultipleProduct);
app.post(apiPath + '/whmcs/getOrders', whmcs_order.getOrders);
app.post(apiPath + '/whmcs/getProducts', whmcs_order.getProducts);

app.post(apiPath + '/whmcs/getPromotions', whmcs_order.getPromotions);
app.post(apiPath + '/whmcs/getOrderStatuses', whmcs_order.getOrderStatuses);
app.post(apiPath + '/whmcs/acceptOrder', whmcs_order.acceptOrder);

app.post(apiPath + '/whmcs/pendingOrder', whmcs_order.pendingOrder);
app.post(apiPath + '/whmcs/cancelOrder', whmcs_order.cancelOrder);
app.post(apiPath + '/whmcs/fraudOrder', whmcs_order.fraudOrder);

app.post(apiPath + '/whmcs/deleteOrder', whmcs_order.deleteOrder);

//----------Payment-----------
app.post(apiPath + '/whmcs/getInvoices', whmcs_payment.getInvoices);
app.post(apiPath + '/whmcs/getInvoice', whmcs_payment.getInvoice);
app.post(apiPath + '/whmcs/createInvoice', whmcs_payment.createInvoice);

app.post(apiPath + '/whmcs/updateInvoice', whmcs_payment.updateInvoice);
app.post(apiPath + '/whmcs/addInvoicePayment', whmcs_payment.addInvoicePayment);
app.post(apiPath + '/whmcs/capturePayment', whmcs_payment.capturePayment);

app.post(apiPath + '/whmcs/applyCredit', whmcs_payment.applyCredit);
app.post(apiPath + '/whmcs/addBillableItem', whmcs_payment.addBillableItem);
app.post(apiPath + '/whmcs/addCredit', whmcs_payment.addCredit);

app.post(apiPath + '/whmcs/addTransaction', whmcs_payment.addTransaction);
//Get Transactions done in client part
app.post(apiPath + '/whmcs/updateTransaction', whmcs_payment.updateTransaction);

app.post(apiPath + '/whmcs/genInvoices', whmcs_payment.genInvoices);
app.post(apiPath + '/whmcs/getPaymentMethods', whmcs_payment.getPaymentMethods);

//-----------Quotes------------
app.post(apiPath + '/whmcs/createQuote', whmcs_quote.createQuote);
app.post(apiPath + '/whmcs/updateQuote', whmcs_quote.updateQuote);
app.post(apiPath + '/whmcs/deleteQuote', whmcs_quote.deleteQuote);

app.post(apiPath + '/whmcs/sendQuote', whmcs_quote.sendQuote);
app.post(apiPath + '/whmcs/acceptQuote', whmcs_quote.acceptQuote);
//Get Quotes done in the client part

//-----------Miscellaneous-------------
app.post(apiPath + '/whmcs/getActivityLog', whmcs_misc.getActivityLog);
app.post(apiPath + '/whmcs/getAdminDetails', whmcs_misc.getAdminDetails);
app.post(apiPath + '/whmcs/updateAdminNotes', whmcs_misc.updateAdminNotes);

app.post(apiPath + '/whmcs/getCurrencies', whmcs_misc.getCurrencies);
app.post(apiPath + '/whmcs/getPromotions', whmcs_misc.getPromotions);
app.post(apiPath + '/whmcs/getClientGroups', whmcs_misc.getClientGroups);

app.post(apiPath + '/whmcs/getEmailTemplates', whmcs_misc.getEmailTemplates);
app.post(apiPath + '/whmcs/getTodoItems', whmcs_misc.getTodoItems);
app.post(apiPath + '/whmcs/getTodoItemsStatuses', whmcs_misc.getTodoItemsStatuses);

app.post(apiPath + '/whmcs/updateTodoItem', whmcs_misc.updateTodoItem);
app.post(apiPath + '/whmcs/getStaffOnline', whmcs_misc.getStaffOnline);
app.post(apiPath + '/whmcs/getStats', whmcs_misc.getStats);

app.post(apiPath + '/whmcs/encryptPassword', whmcs_misc.encryptPassword);
app.post(apiPath + '/whmcs/decryptPassword', whmcs_misc.decryptPassword);
app.post(apiPath + '/whmcs/addBannedIP', whmcs_misc.addBannedIP);

app.post(apiPath + '/whmcs/addProduct', whmcs_misc.addProduct);
app.post(apiPath + '/whmcs/logActivity', whmcs_misc.logActivity);
app.post(apiPath + '/whmcs/sendAdminEmail', whmcs_misc.sendAdminEmail);

app.listen(process.env.PORT || 3000)
if (process.env.PORT === undefined) {
    console.log("Server Started at port : " + 3000);
}
else {
    console.log("Server Started at port : " + process.env.PORT);
}




