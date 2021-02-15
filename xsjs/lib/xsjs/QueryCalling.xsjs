var connection = $.hdb.getConnection();
var query = 'select * from "Transaction.PurchaseOrderItems"';
var rs = connection.executeQuery(query);

$.response.contentType = "text/json";
$.response.setBody(JSON.stringify(rs));
