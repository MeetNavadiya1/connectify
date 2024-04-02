var express = require("express");
var mysql = require("./myconnection");
var cors = require('cors');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    // Update with your React.js app's origin
    optionsSuccessStatus: 200,
}));
app.use(express.urlencoded({ extended: true }));

//define route for login
//purpose = used to login
//url = http://localhost:5000/
//method = post 
//input : none
app.post("/", function (request, response) {
    let email = request.body.email;
    let password = request.body.password;
    // console.log(email, password);
    if (email === undefined || password === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        console.log(request.body.email, request.body.password);
        let sql = `select id from admin where email='${email}' and password='${password}'`;
        mysql.con.query(sql, function (error, results) {
            if (error != null) {
                response.json({ 'error': 'error occurred' });
                // console.log(error);
            } else {
                // console.log(results); // This will print the result array containing RowDataPacket objects
                let size = results.length;
                if (size === 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid username/password' }]);
                } else {
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'login successful' }, { 'id': results[0]['id'] }]);
                }
            }
        });

    }

});

//define route for home
//purpose = used to get all users,business,card,category
//url = http://localhost:5000/home
//method = get 
//input : none
app.get("/home", function (request, response) {
    let sql = "select count(*) as users from users";
    mysql.con.query(sql, function (error, result) {
        if (error) {
            response.json([{ 'error': 'error occured' }]);
        }
        else {
            var size = result.length;
            result.unshift({ 'total': size });
            result.unshift({ 'error': 'no' });
            // console.log(result);
            var output = JSON.parse(JSON.stringify(result));
            response.send(output);
        }
    });
});

//define route for users
//purpose = used to get all users
//url = http://localhost:5000/users
//method = get 
//input : none
app.get("/users", function (request, response) {
    let sql = "select user_id,username,mobile_no from users";
    mysql.con.query(sql, function (error, result) {
        if (error) {
            response.json([{ 'error': 'error occured' }]);
        } else {
            var size = result.length;
            result.unshift({ 'total': size });
            result.unshift({ 'error': 'no' });
            // console.log(result);
            var output = JSON.parse(JSON.stringify(result));
            response.send(output);
        }
    });
});


//define route for users detail
//purpose = used to get one users deatil
//url = http://localhost:5000/users-detail/1
//method = get 
//input : none
app.get("/users-detail/:userid", function (request, response) {
    let userid = request.params.userid;
    let sql = `select * from users where user_id=${userid}`;
    mysql.con.query(sql, function (error, result) {
        if (error) {
            response.json([{ 'error': 'error occured' }]);
        } else {
            var size = result.length;
            result.unshift({ 'total': size });
            result.unshift({ 'error': 'no' });
            // console.log(result);
            var output = JSON.parse(JSON.stringify(result));
            response.send(output);
        }
    });
});

//define route for businesses
//purpose = used to get all businesses
//url = http://localhost:5000/businesses
//method = get 
//input : none
app.get("/businesses", function (request, response) {
    let sql = "select business_id,business_name,mobile_no from business";
    mysql.con.query(sql, function (error, result) {
        if (error) {
            response.json([{ 'error': 'error occured' }]);
        } else {
            var size = result.length;
            result.unshift({ 'total': size });
            result.unshift({ 'error': 'no' });
            var output = JSON.parse(JSON.stringify(result));
            response.send(output);
        }
    });
});


//define route for business detail
//purpose = used to get one business deatil
//url = http://localhost:5000/business-detail/1
//method = get 
//input : none
app.get("/business-detail/:businessid", function (request, response) {
    let business_id = request.params.businessid;
    let sql = `select * from business where business_id=${business_id}`;
    mysql.con.query(sql, function (error, result) {
        if (error) {
            response.json([{ 'error': 'error occured' }]);
        } else {
            var size = result.length;
            result.unshift({ 'total': size });
            result.unshift({ 'error': 'no' });
            // console.log(result);
            var output = JSON.parse(JSON.stringify(result));
            response.send(output);
        }
    });
});


app.listen(5000);
console.log("ready to accept request");