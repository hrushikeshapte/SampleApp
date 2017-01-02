/**
 * Created by Hrushi on 8/1/15.
 */

//NodeJS config files required for the app
var express = require('express'),
    dbHelper = require('../dbHelper.js'),
    session = require('express-session'),
    router = express.Router();

//Session parameters
router.use(session({secret: 'ssshhhhh'}));

var sess;

//Database connection parameters
var connection = dbHelper.initializeConnection({
    host: "xxxx-xxxx-xxx",
    user: "xxxx-xxxx-xxx",
    password: "xxxx-xxxx-xxx",
    database : "xxxx-xxxx-xxx"
});

//query function to execute queries on db
var query = function(data,successCallback){
    connection.query(data, function(err, rows, fields) {
        successCallback(rows);
    });
};

// ----- Below are all requests made to server and subsequent queries -----------

router.post('/api/product',function(req,res){
    sess = req.session;
    var queryString = 'INSERT INTO products(user_id,name,description,width,length,height,weight,value) VALUES("1","'+req.body[0]+'","'+req.body[1]+'","'+req.body[2]+'","'+req.body[3]+'","'+req.body[4]+'","'+req.body[5]+'","'+req.body[6]+'")';
    query(queryString,function(data){
        res.send("Insert Successful");
    });

});

router.get('/api/productInfo',function(req,res){
    sess = req.session;
    var queryString = 'Select * from products where user_id = "1"';
    query(queryString,function(data){
        if(data.length == 0){
            console.log("error")
        }
        else{
            res.send(data);
        }
    })
});

router.get('/api/productInfo/:id',function(req,res){
    sess = req.session;
    var queryString = 'Select * from products where id = "'+req.params.id+'" and user_id= "1"';
    query(queryString,function(data){
        if(data.length == 0){
            console.log("error")
        }
        else{
            res.send(data);
        }
    })
});

router.post('/api/editProduct',function(req,res){
    var queryString = 'UPDATE products SET name = "'+req.body[0]+'", description = "'+req.body[1]+'", width = "'+req.body[2]+'", length = "'+req.body[3]+'", height = "'+req.body[4]+'", weight = "'+req.body[5]+'", value = "'+req.body[6]+'" WHERE id = "'+req.body[7]+'"';
    query(queryString,function(data){
        res.send("Update Successful");
    });

});

router.post('/api/orderProduct',function(req,res){
    var queryString = 'INSERT INTO orders(product_id,name,address,city,state,zip,phone,quantity) VALUES("'+req.body[0]+'","'+req.body[1]+'","'+req.body[2]+'","'+req.body[3]+'","'+req.body[4]+'","'+req.body[5]+'","'+req.body[6]+'","'+req.body[7]+'")';
    query(queryString,function(data){
        res.send("Insert Successful");
    });
});

router.get('/api/orderInfo/:id',function(req,res){
    var queryString = 'Select * from orders where product_id = "'+req.params.id+'"';
    query(queryString,function(data){
        if(data.length == 0){
            console.log("error")
        }
        else{
            res.send(data);
        }
    })
});

router.get('/api/orderDetails/:id',function(req,res){
    var queryString = 'Select * from orders where order_id = "'+req.params.id+'"';
    query(queryString,function(data){
        if(data.length == 0){
            console.log("error")
        }
        else{
            res.send(data);
        }
    })
});

router.put('/api/deleteProduct/:id',function(req,res){
    var queryString = 'Delete from products where id = "'+req.params.id+'"';
    query(queryString,function(data){
        console.log(data);
        res.send("Deleted");
    })
});

router.put('/api/deleteOrder/:id',function(req,res){
    var queryString = 'Delete from orders where order_id = "'+req.params.id+'"';
    query(queryString,function(data){
        res.send("Deleted");
    })
});

router.get('/api/searchProduct/:text',function(req,res){
    sess = req.session;
    var queryString = 'Select * from products where user_id= "1" and name LIKE "'+req.params.text+'%"';
    query(queryString,function(data){
        if(data.length == 0){
            console.log("error")
        }
        else{
            res.send(data);
        }
    })
});

router.post('/api/login',function(req,res){
    sess = req.session;
    var queryString = 'Select id,username from users WHERE username = "'+req.body[0]+'"AND password = "'+req.body[1]+'"' ;
    query(queryString,function(data){

        if(data.length == 0){
            console.log("error")
        }
        else{
            var id = data[0].id;
            sess.userId = 1;
            // sess.userId = id;
            sess.username = req.body[0] ;
            res.send("logged in");
        }
    });
});

router.get('/api/logout',function(req,res){
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
        else
        {
            res.send("OK");
        }
    });
});

router.get('*',function(req,res){
    sess = req.session;
    //      if(sess.username){
    res.render('index.html');
    //       }

    //   else{
    //   res.render('login.html');
    //   }
});

module.exports = router;