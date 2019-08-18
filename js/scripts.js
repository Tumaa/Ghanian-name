function GetValue(female,male)
{
    var myarray= new Array("item1","item2","item3");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}