
/*
* Database Helper Functions.
*
*/

var mysql = require('mysql');

module.exports = {
      //This is for taking care of reconnecting after a connection has broken.
      //Reference: http://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit
      initializeConnection: function initializeConnection(config) {
          function addDisconnectHandler(connection) {
              connection.on("error", function (error) {
                  if (error instanceof Error) {
                      if (error.code === "PROTOCOL_CONNECTION_LOST") {
                          console.error(error.stack);
                          console.log("Lost connection. Reconnecting...");

                          initializeConnection(connection.config);
                      } else if (error.fatal) {
                        console.error(error.stack);

                          throw error;
                      }
                      else
                      {
                        console.log("error");
                      }
                  }
              });
          }

          var connection = mysql.createConnection(config);

          // Add handlers.
          addDisconnectHandler(connection);

          connection.connect();
          return connection;
      }
};
