//1. create a new instance of xml http request
var request=new XMLHttpRequest();
//2. create a connection / open a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3. Send the request
request.send();
//4. Load the response (this function is triggered only when the data is retrieved)
request.onload=function(){
    var data=JSON.parse(this.response);
    for(var ele in data){
        console.log(data[ele].name);
    }
}