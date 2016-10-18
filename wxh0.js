// var getlib=require("./slib.js");
// getlib.showName();
// console.log(getlib.age);
var getlib=require("slib");
// getlib.showName();
var file=require('fs');
file.writeFile("bulid.js","");
file.readFile("./a.css",function(err,data){
  if(err){
    //代表出错
  }else{
    file.appendFile("bulid.js","document.write('<style>"+data+"</style>')");
  }
});

function get(key,value){
  return 'var '+key+'='+value+';\n';
}
for(var i in getlib){
  file.appendFile("bulid.js",get(i,getlib[i]));
    // console.log(getlib[i]);
}
file.appendFile("bulid.js","showName();\n");
