const mysql= require("mysql");

function getConnection()
{
    const connection = mysql.createConnection({
        host     : 'mysql-cmpe280.c4lhvu8c7j2x.us-east-1.rds.amazonaws.com', //host where mysql server is running
        user     : 'admin', //user for the mysql application
        password : 'adminmysql', //password for the mysql application
        database : 'cmpe280ikeamysql', //database name
        port  : 3306 //port, it is 3306 by default for mysql  });
    });
    return connection;
}


function fetchData(callback,sqlQuery)
{
    console.log("\nSQL Query::"+sqlQuery);
    const connection = getConnection();
    connection.query(sqlQuery, function(err, rows, fields){
            if(err)
            {
                console.log("ERROR: " + err.message);
            }
            else
            { // return err or result
                console.log("DB Results:"+JSON.stringify(rows));
                callback(err, rows);

            }

        }
    );
    console.log("\nConnection closed..");
    connection.end();

}
exports.fetchData= fetchData;