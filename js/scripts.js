function GetValue()
{
    var myarray= new Array("Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame","Akosua","Adwoa","Abenaa","Akua","Yaa", "Afua","Ama");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}