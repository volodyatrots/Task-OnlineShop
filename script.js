$(function(){
$(".buyButton").click(function(){
var	button=this;
var	spanPrice=$(this).prev()[0];
var	price=spanPrice.innerHTML;
var devices=$(spanPrice).parent().parent();
var name=devices[0].getElementsByClassName("name")[0].innerHTML;

	if(this.count===undefined || this.count==0){
		this.count=1;
	}else{
	this.count++;
	addCount(this.count,name)
	return;
}	

var elem=$("<tr> <td>"+name+"<td>"+price+"<td>"+this.count+"<td>");
$(elem).append("<td><button class='rem'>X</button><td>");
$(".cartTable").append(elem);

$(".rem").on("click",function(){
    button.count=0;
	$(this).parent().parent().remove();
});	
});

$(".confirmButton").on("click",function(){
    alert("Coming soon...");
});

$(".clearButton").click(function(){
	$(".rem").click();	
});	
});

 function addCount(countDevice,name){
	 var namesDevices=$("td:first-child");
	 for(var i=0;i<namesDevices.length;i++){
		 var nameDevice=namesDevices[i].innerHTML;
		  if(name==nameDevice){
			$(namesDevices[i]).siblings()[1].innerHTML=countDevice;
		 }
	 }
 }