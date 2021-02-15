var connection = $.hdb.getConnection();
var calculateSalesPerCustomer = connection.loadProcedure("calculateSalesPerCustomer");
var inpVal = $.request.parameters.get('inpValue');
var result = calculateSalesPerCustomer(inpVal);

$.response.contentType = "text/json";
$.response.setBody(result.ET_CUST_SALES);
