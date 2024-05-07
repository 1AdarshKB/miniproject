fet();

function fet(){
    console.log("ping")
    fetch("http://dummytest.pythonanywhere.com/status")
    .then((res)=>(res.json()))
    .then((json)=>{
        console.log(json.access_status)
        if(json.access_status){
            document.getElementById("status").innerHTML="Online";
            document.getElementById("status").style.color="green";
        }
        else{
            document.getElementById("status").innerHTML="Offline";
            document.getElementById("status").style.color="red";
        }
    })
    fetch("http://dummytest.pythonanywhere.com/get_data")
    .then((res)=> (res.json()))
    .then((json)=>{
        var data=json.data;
        var data_len=data.length;
        var box=["temp","humi","heart","spo","date"];


        for(var i=0;i<=box.length-1;i++){
            document.getElementById(box[i]).innerHTML="<td>"+data[i][0]+"</td>"
            for(var j=1;j<=data_len-1;j++){
                document.getElementById(box[i]).innerHTML+="<td>"+data[i][j]+"</td>"
            }
        }

    })
}
setInterval(()=>fet(),1000)