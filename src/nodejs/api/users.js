var express = require("express");
var mysql = require("./myconnection");
var cors = require('cors');
const multer = require('multer');
const path = require('path');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));
app.use(express.urlencoded({ extended: true }));
app.use('/imagesserver/card/', express.static(path.join(__dirname, 'imagesserver/card/')));

// Define storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'imagesserver/card');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

// Initialize Multer with the storage configuration
const upload = multer({ storage });

// Endpoint to handle image upload
app.post("/business-card-form", upload.single("image"), function (request, response) {
    let business_id = request.body.business_id;
    let name = request.body.name;
    let description = request.body.description;
    let phone = request.body.phone;
    let email = request.body.email;
    let address = request.body.address;
    let city = request.body.city;
    let pincode = request.body.pincode;
    if (request.file) {
        let sql = `insert into card (business_id,title,photo,description,email,phone,address,city,pincode) values ('${business_id}','${name}','${request.file.filename}','${description}','${email}','${phone}','${address}','${city}','${pincode}')`;
        mysql.con.query(sql, function (error, result) {
            if (error)
                response.json([{ 'error': 'error in database query' }]);
            else
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'Card Created Successfully' }]);
        });
    } else {
        response.json([{ 'error': 'could not insert card' }]);
    }
});


//define route for Your card of business
//purpose = used to get all cards of that business
//url = http://localhost:5000/business-your-card
//method = post 
//input : id
app.post('/business-your-card', (req, res) => {
    let id = req.body.id;
    let sql = `select * from card where business_id='${id}'`;
    mysql.con.query(sql, (err, result) => {
        if (err) {
            res.json([{ 'error': 'error occured in database' }]);
        }
        else {
            var size = result.length;
            result.unshift({ 'total': size });
            result.unshift({ 'error': 'no' });
            var output = JSON.parse(JSON.stringify(result));
            res.send(output);
        }
    });
});

//define route for delete card
//purpose = used to delete card
//url = http://localhost:5000/business-your-card/:id
//method = delete 
//input : id
app.delete('/business-your-card/:id', (req, res) => {
    const cardId = req.params.id;
    console.log(cardId);
    const sql = `delete from card where card_id = ${cardId}`;

    mysql.con.query(sql, (error, results) => {
        if (error) {
            res.json({ error: 'Error deleting card' });
        }
        else {
            res.json({ message: 'Card deleted successfully' });
        }
    });
});

//define route for get specific card detail for edit card
//purpose = used to get detail for edit card
//url = http://localhost:5000//business-edit-card/:id
//method = get
//input : none
app.get('/business-edit-card/:id', function (req, res) {
    const id = req.params.id; // Use req.params.id to access the route parameter
    console.log(id);
    const sql = `SELECT * FROM card WHERE card_id = ${id}`;

    mysql.con.query(sql, (error, result) => {
        if (error) {
            res.json({ error: 'Error in database query' });
        }
        else {
            var size = result.length;
            result.unshift({ 'total': size });
            result.unshift({ 'error': 'no' });
            var output = JSON.parse(JSON.stringify(result));
            res.send(output); // Corrected from response to res
        }
    });
});


//define route for edit card
//purpose = used to edit card
//url = http://localhost:5000/business-edit-card/:card_id
//method = post 
//input : business_id,card_id,name,description,phone,email,address,city,pincode
app.post("/business-edit-card/:card_id", upload.single("image"), function (request, response) {
    let business_id = request.body.business_id;
    let card_id = request.params.card_id;
    let name = request.body.name;
    let description = request.body.description;
    let phone = request.body.phone;
    let email = request.body.email;
    let address = request.body.address;
    let city = request.body.city;
    let pincode = request.body.pincode;

    let sql;
    let params;

    if (request.file) {
        sql = `UPDATE card SET business_id = ?, title = ?, photo = ?, description = ?, email = ?, phone = ?, address = ?, city = ?, pincode = ? WHERE card_id = ?`;
        params = [business_id, name, request.file.filename, description, email, phone, address, city, pincode, card_id];
    } else {
        sql = `UPDATE card SET business_id = ?, title = ?, description = ?, email = ?, phone = ?, address = ?, city = ?, pincode = ? WHERE card_id = ?`;
        params = [business_id, name, description, email, phone, address, city, pincode, card_id];
    }

    mysql.con.query(sql, params, function (error, result) {
        if (error) {
            response.json([{ 'error': 'error in database query' }]);
        } else {
            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'Card updated Successfully' }]);
        }
    });
});


//define route for get specific card for user view
//purpose = used to get detail for user view
//url = http://localhost:5000/user-view-card/:id
//method = get
//input : none
app.get('/user-view-card/:id', function (req, res) {
    const id = req.params.id; // Use req.params.id to access the route parameter
    const sql = `SELECT * FROM card WHERE card_id = ${id}`;
    mysql.con.query(sql, (error, result) => {
        if (error) {
            res.json({ error: 'Error in database query' });
        }
        else {
            var size = result.length;
            result.unshift({ 'total': size });
            result.unshift({ 'error': 'no' });
            var output = JSON.parse(JSON.stringify(result));
            res.send(output); // Corrected from response to res
        }
    });
});

//define route for login for Business
//purpose = used to login
//url = http://localhost:5000/business-login
//method = post 
//input : none
app.post("/business-login", function (request, response) {
    let email = request.body.email;
    let password = request.body.password;
    // console.log(email, password);
    if (email === undefined || password === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        console.log(request.body.email, request.body.password);
        let sql = `select business_id from business where email='${email}' and password='${password}'`;
        mysql.con.query(sql, function (error, results) {
            if (error != null) {
                response.json({ 'error': 'error occurred' });
                console.log(error);
            } else {
                // console.log(results); // This will print the result array containing RowDataPacket objects
                let size = results.length;
                if (size === 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid username/password' }]);
                } else {
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'login successful' }, { 'id': results[0]['business_id'] }]);
                }
            }
        });

    }

});


//define route for change password for business
//purpose = used to change the password
//url = http://localhost:5000/business-change-password
//method = post
//input : old password, new password
app.post("/business-change-password", function (request, response) {
    let old_pass = request.body.old_pass;
    let new_pass = request.body.new_pass;
    if (old_pass === undefined || new_pass === undefined) {
        response.json([{ 'error': 'imput is missing' }]);
    }
    else {
        let sql = `select business_id from business where password='${old_pass}'`;
        mysql.con.query(sql, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured in query' }]);
            }
            else {
                let size = result.length;
                if (size === 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid old password' }]);
                }
                else {
                    sql = `update business set password='${new_pass}' where password='${old_pass}'`;
                    mysql.con.query(sql, function (error, result) {
                        if (error != null) {
                            response.json([{ 'error': 'error occured in query' }]);
                        }
                        else {
                            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'password updated successfully' }]);
                        }
                    });
                }
            }
        });
    }
});


//define route for forgot password for business
//purpose = used to send mail for password
//url = http://localhost:5000/business-forgot-password
//method = post
//input : email
app.post("/business-forgot-password", function (request, response) {
    let email = request.body.email;
    let sql;
    if (email === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        sql = `select business_id from business where email='${email}'`;
        mysql.con.query(sql, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error in query' }]);
            }
            else {
                let size = result.length;
                if (size === 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'email not found' }]);
                }
                else {
                    // let newpassword = pwd.generatePassword(10);
                    let newpassword = 123123;
                    sql = `update business set password='${newpassword}' where email='${email}'`;
                    mysql.con.query(sql, function (error, result) {
                        if (error != null) {
                            response.json([{ 'error': 'error occured' }]);
                        }
                        else {
                            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'check your email account, we have sent you email' }]);
                        }
                    });
                }
            }
        });
    }

});


//define route for register business
//purpose = used to register business
//url = http://localhost:5000/business-register
//method = post
//input : name,email,password
app.post("/business-register", function (request, response) {
    let name = request.body.name;
    let email = request.body.email;
    let password = request.body.password;
    console.log(name,email,password);
    let sql = `INSERT INTO business (business_name, password, email) VALUES (?, ?, ?)`;
    mysql.con.query(sql, [name, password, email], function (error, result) {
        if (error)
            response.json([{ 'error': 'error in database query' }]);
        else
            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'You Register Successfully' }]);
    });
});


//define route for user register
//purpose = used to register user
//url = http://localhost:5000/user-register
//method = post
//input : name,mobile,email,password
app.post("/user-register", function (request, response) {
    let name = request.body.name;
    let mobile = request.body.mobile;
    let email = request.body.email;
    let password = request.body.password;
    console.log(name,email,password);
    let sql = `INSERT INTO users (username, password, email, mobile) VALUES (?, ?, ?, ?)`;
    mysql.con.query(sql, [name, password, email, mobile], function (error, result) {
        if (error)
            response.json([{ 'error': 'error in database query' }]);
        else
            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'You Register Successfully' }]);
    });
});

// --------------------------------Admin Apis-----------------------------------
//define route for login for admin
//purpose = used to login
//url = http://localhost:5000/admin-login
//method = post 
//input : email,password
app.post("/admin-login", function (request, response) {
    let email = request.body.email;
    let password = request.body.password;
    // console.log(email, password);
    if (email === undefined || password === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        // console.log(request.body.email, request.body.password);
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

//define route for admin home
//purpose = used to get all users,business,card,category
//url = http://localhost:5000/admin-home
//method = get 
//input : none
app.get("/admin-home", function (request, response) {
    
    let sql = "SELECT COUNT(*) AS businesses FROM business";
    let sql1 = "SELECT COUNT(*) AS users FROM users";
    let sql2 = "SELECT COUNT(*) AS cards FROM card";
    let sql3 = "SELECT COUNT(*) AS category FROM category";

    // Execute all queries asynchronously
    mysql.con.query(sql, function (error, businessResult) {
        if (error) {
            response.json([{ 'error': 'error occurred while fetching business count' }]);
        } else {
            mysql.con.query(sql1, function (error, userResult) {
                if (error) {
                    response.json([{ 'error': 'error occurred while fetching user count' }]);
                } else {
                    mysql.con.query(sql2, function (error, cardResult) {
                        if (error) {
                            response.json([{ 'error': 'error occurred while fetching card count' }]);
                        } else {
                            mysql.con.query(sql3, function(error, categoryResult){
                                if(error){
                                    response.json([{ 'error': 'error occurred while fetching category count' }])
                                }else{
                                    var output = {

                                        businesses: businessResult[0].businesses,
                                        users: userResult[0].users,
                                        cards: cardResult[0].cards,
                                        category: categoryResult[0].category,
                                    };
                                    response.send(output);
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});


//define route for admin users
//purpose = used to get all users
//url = http://localhost:5000/admin-users
//method = get 
//input : none
app.get("/admin-users", function (request, response) {
    let sql = "select id,username,mobile from users";
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


//define route for admin users detail
//purpose = used to get one users deatil
//url = http://localhost:5000/admin-users-detail/1
//method = get 
//input : none
app.get("/admin-users-detail/:userid", function (request, response) {
    let userid = request.params.userid;
    let sql = `select * from users where id=${userid}`;
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


//define route for admin businesses
//purpose = used to get all businesses
//url = http://localhost:5000/admin-businesses
//method = get 
//input : none
app.get("/admin-businesses", function (request, response) {
    let sql = "select business_id,business_name from business";
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

//define route for admin business detail
//purpose = used to get one business deatil
//url = http://localhost:5000/admin-business-detail/1
//method = get 
//input : none
app.get("/admin-business-detail/:businessid", function (request, response) {
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

// admin digital card
app.get('/admin-digital-card', (req, res) => {
    let sql = `select card_id,title,business_id,photo from card`;
    mysql.con.query(sql, (err, result) => {
        if (err) {
            res.json([{ 'error': 'error occured in database' }]);
        }
        else {
            var size = result.length;
            result.unshift({ 'total': size });
            result.unshift({ 'error': 'no' });
            var output = JSON.parse(JSON.stringify(result));
            res.send(output);
        }
    });
});

// admin digital card details

app.get('/admin-digital-card-detail/:card_id', (req, res) => {
    let id = req.params.card_id;
    let sql = `select * from card where card_id = ${id}`;
    mysql.con.query(sql, (err, result) => {
        if (err) {
            res.json([{ 'error': 'error occured in database' }]);
        }
        else {
            var size = result.length;
            result.unshift({ 'total': size });
            result.unshift({ 'error': 'no' });
            var output = JSON.parse(JSON.stringify(result));
            res.send(output);
        }
    });
});


//define route for forgot password for admin
//purpose = used to send mail for password
//url = http://localhost:5000/admin-forgot-password
//method = post
//input : email
app.post("/admin-forgot-password", function (request, response) {
    let email = request.body.email;
    let sql;
    if (email === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        sql = `select id from admin where email='${email}'`;
        mysql.con.query(sql, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error in query' }]);
            }
            else {
                let size = result.length;
                if (size === 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'email not found' }]);
                }
                else {
                    // let newpassword = pwd.generatePassword(10);
                    let newpassword = 123123;
                    sql = `update admin set password='${newpassword}' where email='${email}'`;
                    mysql.con.query(sql, function (error, result) {
                        if (error != null) {
                            response.json([{ 'error': 'error occured' }]);
                        }
                        else {
                            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'check your email account, we have sent you email' }]);
                        }
                    });
                }
            }
        });
    }

});

//define route for change password for admin
//purpose = used to chage the password
//url = http://localhost:5000/admin-change-password
//method = post
//input : old password, new password

app.post("/admin-change-password", function(request,response){
    let old_pass = request.body.old_pass;
    let new_pass = request.body.new_pass;
    if(old_pass === undefined || new_pass === undefined){
        response.json([{'error' : 'imput is missing'}]);
    }
    else{
        let sql = `select id from admin where password='${old_pass}'`;
        mysql.con.query(sql, function(error,result){
            if(error){
                response.json([{'error' : 'error occured in query'}]);
            }
            else{
                let size = result.length;
                if (size === 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid old password' }]);
                }
                else{
                    sql = `update admin set password='${new_pass}' where password='${old_pass}'`;
                    mysql.con.query(sql, function (error, result) {
                        if (error != null) {
                            response.json([{ 'error': 'error occured in query' }]);
                        }
                        else {
                            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'password updated successfully' }]);
                        }
                    });
                }
            }
        });
    }
});



app.listen(5000);
console.log("ready to accept request");