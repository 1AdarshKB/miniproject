fet();

function fet(){
    console.log("ping")
    fetch("http://dummytest.pythonanywhere.com/status")
    .then((res)=>(res.json()))
    .then((json)=>{
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
var avg_temp=0
var avg_heart=0;


        for(var i=0;i<=box.length-1;i++){
            document.getElementById(box[i]).innerHTML="<td>"+data[i][0]+"</td>";
		avg_heart=avg_heart+Number(data[i][2]);
		avg_temp=avg_temp+Number(data[i][0]);
		
            for(var j=1;j<=data_len-1;j++){
                document.getElementById(box[i]).innerHTML+="<td>"+data[i][j]+"</td>"
            }
        }
	heart=avg_heart/5;
	temp=avg_temp/5;
console.log(heart);
console.log(temp);

	if(heart <= 60){
	document.getElementById("intense").innerHTML="Low";
	document.getElementById("intense").style.color="green";
	}
	if(heart >= 100){
	document.getElementById("intense").innerHTML="High";
	document.getElementById("intense").style.color="red";
	}
	if(heart >= 60 && heart <= 100){
	document.getElementById("intense").innerHTML="Normal";
	document.getElementById("intense").style.color="yellow";
	}
	if(temp <= 30){
	document.getElementById("tempintense").innerHTML="Low";
	document.getElementById("tempintense").style.color="green";
	}
	if(temp >= 40){
	document.getElementById("tempintense").innerHTML="High";
	document.getElementById("tempintense").style.color="red";
	}
	if(temp >= 30 && temp <= 40){
	document.getElementById("tempintense").innerHTML="Normal";
	document.getElementById("tempintense").style.color="yellow";

	}

    })
}
setInterval(()=>fet(),1000)