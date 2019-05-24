var express = require('express');
var path=require('path');
const bodyParser = require('body-parser');
var app = express();
var cors=require('cors');
var mysql= require('mysql');
var pool = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'deepak@12',
  database: 'node',
  charset: 'utf8' // table demo name,roll
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false}));
app.options('*', cors());
app.use(express.static('/website1'));
app.use(express.static(path.join(__dirname,'website1')));
var table = ''; //to store html table
var p='';
function solve_placement(req,res){ console.log('in solve plavement');
pool.query(p, (err,rst)=>{ console.log('in sql');
    let fl=0;
        if(err)
        {  
            console.log(err);
        }
        else
        {    if(!rst.length)
            {    console.log(rst.insertId);
                //G:/project/ymca_header2.jpg alt /ymca_h
                table+='<html><center><img src="G:/project/ymca_header2.jpg "' 
                               +'alt="ymca_header2.jpg" width="1200" height="130">'
                               +'<br><br><h2>sorry ! no record found</h2>';
                        console.log('zero lenth');fl=1;

            }
           else{  
            

                for (var i = 0; i < rst.length; i++) 
                     {    
                            table += '<tr><td>' + (i + 1) + '</td><td>' + rst[i].name+'</td><td>' + rst[i].roll_number+'</td>'
                            +'<td>' + rst[i].trade+'</td><td>' + rst[i].placed+'</td><td>' + rst[i].internship+'</td>'
                            +'<td>' + rst[i].comp+'</td><td>' + rst[i].contact+'</td></tr>';
                     }
                   if(fl==0)
                   table = '<html><center><img src="G:/project/ymca_header2.jpg "' 
                    +'alt="ymca_header2.jpg" width="1200" height="130">'
                    +'<br><br><table border="1"><tr><th>Sr.No</th><th>Name</th><th>Roll_number</th>'
                    +'<th>Trade</th><th>placed</th><th>internship</th><th>company</th><th>Contact</th></tr>' + table + '</table>';
               }
        res.send(table);
        }

    });
}


function solve_reg(req,res){ console.log('in registraytipom');
pool.query(p, (err,rst)=>{ console.log('in sql');
    let fl=0;
        if(err)
        {  
            console.log(err);
            res.send('-1');
        }
        else
        {    if(!rst.length)
            {    console.log(rst.insertId);
                //G:/project/ymca_header2.jpg alt /ymca_h
                table+='<html><center><img src="G:/project/ymca_header2.jpg "' 
                               +'alt="ymca_header2.jpg" width="1200" height="130">'
                               +'<br><br><h2>sorry ! no record found</h2>';
                        console.log('zero lenth');fl=1;

            }
           else{  
            

                for (var i = 0; i < rst.length; i++) 
                     {    
                            table += '<tr><td>' + (i + 1) + '</td><td>' + rst[i].name+'</td><td>' + rst[i].roll_number+'</td>'
                            +'<td>' + rst[i].trade+'</td><td>' + rst[i].placed+'</td><td>' + rst[i].internship+'</td>'
                            +'<td>' + rst[i].comp+'</td><td>' + rst[i].contact+'</td></tr>';
                     }
                   if(fl==0)
                   table = '<html><center><img src="G:/project/ymca_header2.jpg "' 
                    +'alt="ymca_header2.jpg" width="1200" height="130">'
                    +'<br><br><table border="1"><tr><th>Sr.No</th><th>Name</th><th>Roll_number</th>'
                    +'<th>Trade</th><th>placed</th><th>internship</th><th>company</th><th>Contact</th></tr>' + table + '</table>';
               }
        res.send(table);
        }
    });
}

function solve_company(req,res){ console.log(p);
pool.query(p, (err,rst)=>{ console.log('in sql solving');
    let fl=0;
        if(err)
        {  
            console.log('error no filed found');
        }
        else
        {    if(!rst.length)
            {
                console.log('no lenhth');
                table+='<html><center><img src="G:/project/ymca_header2.jpg "' 
                               +'alt="/ymca_header2.jpg" width="1200" height="130">'
                               +'<br><br><h2>sorry ! no record found</h2>';
                         console.log('zero lenth');fl=1;

            }
           else{   for (var i = 0; i < rst.length; i++) 
                     {          table += '<tr><td>' + (i + 1) + '</td><td>' + rst[i].name+'</td><td>' + rst[i].roll_number+'</td>'
                         +'<td>' + rst[i].trade+'</td><td>' + rst[i].placed+'</td><td>' + rst[i].internship+'</td>'
                          +'<td>' + rst[i].comp+'</td><td>' + rst[i].contact+'</td></tr>';

                     }
                   if(fl==0)
                   table = '<html><center><img src="G:/project/ymca_header2.jpg "' 
                    +'alt="ymca_header2.jpg" width="1200" height="130">'
                    +'<br><br><table border="1"><tr><th>Sr.No</th><th>Name</th><th>Roll_number</th>'
                    +'<th>Trade</th><th>placed</th><th>internship</th><th>company</th><th>Contact</th></tr>' + table + '</table>';
               }
        res.send(table);
        table='';
        }
    });
}



function solve_package(req,res){ console.log('in solve package');
pool.query(p, (err,rst)=>{ console.log('in sql');
    let fl=0;
        if(err)
        {  
            console.log('error no filed found');
            table+='<html><center><img src="G:/project/ymca_header2.jpg "' 
            +'alt="/ymca_header2.jpg" width="1200" height="130">'
            +'<br><br><h2>sorry ! no record found</h2>';
            res.send(table);
            table='';
        }
        else
        {    if(!rst.length)
            {
                console.log('no lenhth');
                table+='<html><center><img src="G:/project/ymca_header2.jpg "' 
                               +'alt="/ymca_header2.jpg" width="1200" height="130">'
                               +'<br><br><h2>sorry ! no record found</h2>';
                         console.log('zero lenth');fl=1;

            }
           else{   for (var i = 0; i < rst.length; i++) 
                     {       table += '<tr><td>' + (i + 1) + '</td><td>' + rst[i].internship+ 
                            +'</td><td>' + rst[i].email + '</td><td>'+rst[i].company+'</td></tr>';
                     }
                   if(fl==0)
                    table = '<html><center><img src="G:/project/ymca_header2.jpg "' 
                    +'alt="/ymca_header2.jpg" width="1200" height="130">'
                    +'<br><br><table border="1"><tr><th>Sr.</th><th>'
                    +'Name</th><th>Address</th></tr>' + table + '</table>';
               }
        res.send(table);
        table='';
        }
    });
}
app.get('/', function (req, res) { console.log('start');
    res.sendFile(`${__dirname}/loginc.html`);
});
app.get('/INDEX.HTML', function (req, res) { console.log('index');
    res.sendFile(`${__dirname}/INDEX.html`);

});
app.post('/login', function (req, res) {
    console.log(req.body.username);
    console.log(req.body.password);
    p='select * from demo where roll_number='+req.body.username;
    pool.query(p, (err,rst)=>{ 
    let fl=0;
        if(err)
        {  
            console.log('error');
            res.send('-1');
        }
        else
        {    if(!rst.length)
                res.send('0');

           else{   console.log('else part');  
                 if(rst[0].roll_number==req.body.username && rst[0].password==req.body.password)
                        res.send('1'); 
                       

                    else 
                        res.send('2');    
               }
        //res.send(table);
        }
        table+='';
    });
});
app.post('/regi', function (req, res) { 
    let a=req.body.firstName;
    let b=req.body.roll;
    let c=req.body.trade;/*
    console.log(req.body.email);
    console.log(req.body.password1);
    console.log(req.body.password2);
    console.log(req.body.phoneNumber);*/
    var field=[req.body.firstName,req.body.roll,req.body.trade,req.body.email,req.body.password1,req.body.phoneNumber];
    var i,l=field.length;
    var name;
    var q="values(";
    var hh=1;
    for(i=0; i< l; i++)
    {   
        name=field[i];
        q+="'";
        q+=name;
        if(hh!=6)
           q+="',";
         hh=hh+1;
    }
    var x,y,z;
    if(!req.body.placed.length)
        x='0';
       else
         x=req.body.placed;  
    if(!req.body.internship.length)
        y='0';
        else
         y=req.body.internship;
    if(!req.body.company.length)
         z="'0')";
         else
         {
             z="'"+req.body.company+"')";
         }
      var g;
      if(req.body.ma=="Female")
         hh="F'";
         else
         hh="M'";
    q+="','"+hh+','+x+','+y+','+z;
    //p="insert into demo (name,roll_number,trade,email,password,contact,gender,placed,internship,comp)";
    p="insert into demo ";
    p+=q;
    console.log(p);
    solve_placement(req,res);

});
app.post('/placement', function (req, res) {
    let k=req.body.placement;
    if(k==1)
       p="select * from demo where placed=1";
    else if(k==2)
       p="select * from demo where placed=0";
    else if(k==3)
       p="select * from demo where internship=1";
    else if(k==4)
       p="select * from demo where internship=0";
    else if(k==5) 
       p="select * from demo where blacklist=1";    
     solve_placement(req,res);
    table='';
});
app.post('/company', function (req, res) {
    let k=req.body.company;
    console.log('companay id'+ k);
    if(k==1)
       p="select * from demo where comp='SAMSUNG'";
    else if(k==2)
       p="select * from demo where comp='AMAZON'";
    else if(k==3)
       p="select * from demo where comp='HCL'";
    else if(k==4)
       p="select * from demo where comp='WIPRO'";
    else if(k==5) 
       p="select * from demo where comp='TCS'"; 
    solve_company(req,res);
      table='';
});
app.post('/type', function (req, res) {
    let k=req.body.type;
    table='';
    if(k==1)
       p="select * from demo where type=off";
    else if(k==2)
       p="select * from demo where type=on";
    pool.query(p, (err,rst)=>{  console.log('in solve tyope');
    let fl=0;
        if(err)
        {  
              console.log('error');
               table+='<html><center><img src="G:/project/ymca_header2.jpg "' 
                           +'alt="/ymca_header2.jpg" width="1200" height="130">'
                           +'<br><br><h2>sorry ! no record found</h2>';
                      fl=1;
        }
        else 
        {    if(!rst.length)
            table+='<html><center><img src="G:/project/ymca_header2.jpg "' 
            +'alt="/ymca_header2.jpg" width="1200" height="130">'
            +'<br><br><h2>sorry ! no record found</h2>';

           else{    for (var i = 0; i < rst.length; i++) 
                      {       table += '<tr><td>' + (i + 1) + '</td><td>' + rst[i].internship 
                                  +'</td><td>' + rst[i].email + '</td></tr>';
                      }
              if(fl==0)
                    table = '<html><center><img src="G:/project/ymca_header2.jpg "' 
                     +'alt="/ymca_header2.jpg" width="1200" height="130">'
                     +'<br><br><table border="1"><tr><th>Sr.</th><th>'
                      +'Name</th><th>Address</th></tr>' + table + '</table>'; 
             }
        
        }
        res.send(table);
        table='';
    });
   
});
app.post('/package', function (req, res) {
    let k=req.body.package;
    if(k==1)
       p="select * from demo where package >=4";
    else if(k==2)
       p="select * from demo where package >=8";
    else if(k==3)
       p="select * from demo where package >=10";
     solve_package(req,res);
     table='';
});
app.listen(8089, function () {
    console.log('Example app listening on port 8089.');
});