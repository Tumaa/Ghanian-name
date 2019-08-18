function GetValue(){
        var male= document.getElementById('male').value);
        var female= document.getElementById('female').value);


    var myarray= new Array("Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}
  