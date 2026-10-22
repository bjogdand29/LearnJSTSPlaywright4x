let statusCode = 404;
let category = statusCode < 300 ? "Success" :
      statusCode < 400 ? "Redircet" :
        statusCode < 500 ? "Client Error" : "Server Error";
 console.log(`Status ${statusCode} : ${category}`);       