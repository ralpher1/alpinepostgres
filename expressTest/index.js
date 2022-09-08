var exp=require("express");
const path=require("path");
const app=exp();
const port=3000;

app.use("/get",(req,res,next)=>{console.log("req"),next()});

app.use("/",(req,res,next)=>{console.log("req1"),next()});

app.use(exp.static(path.join(__dirname,'../build')));


//app.use("/",(req,res,next)=>{console.log("Shouldnt run");next()});
//app.get("/",(req,res,next)=>{console.log("Shouldnt run2");next()});
app.get("/get",(req,res,next)=>{

	console.log("get");
	//res.local('wtf1',"1");
	res.send("blah");
	var x=1;
	next();

});


app.use("/get",(req,res,next)=>{console.log("RESPONSE");
	//res.location('/foo/bar');
	next()});

app.listen(port,()=>{console.log(`Listening on Port ${port} !`)});

console.log("wtf")
