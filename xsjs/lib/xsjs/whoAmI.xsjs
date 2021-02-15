var connection = $.hdb.getConnection();
var query = 'select current_user from "DUMMY"';
var rs = connection.executeQuery(query);

var currentDBUser = rs[0].CURRENT_USER;

var appUser = $.session.getUsername();

var demoHTML = '<h1>' + currentDBUser + '</h1>';

demoHTML = demoHTML + ' <br>App user is  :<h1>' + appUser + '</h1>';

$.response.contentType = "text/html";
$.response.setBody(demoHTML);


 