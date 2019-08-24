var maleList = {

    Sunday : "Kwasi",
    Monday : "Kwadwo",
    Tuesday : "Kwabena",
    Wednesday : "Kwaku",
    Thursday : "Yaw",
    Friday :"Kofi",
    Saturday : "Kwame"

};

var femyList = {
    Sunday : "Akosua",
    Monday : "Adwoa",
    Tuesday : "Abenaa",
    Wednesday : "Akua",
    Thursday : "Yaa",
    Friday : "Afua",
    Saturday : "Ama"

}

function validateForm() {
    var DD = document.getElementById("day").value;
    var MM = document.getElementById("month").value;
    var YY = document.getElementById("year").value;
    var gender= document.getElementsByName("gender");

   
    if( DD <= 0 || DD >31 || DD === ""){

        alert("Invalid date");

        return false;
    
    }
    else if( MM <= 0 || MM > 12 || MM ===  ""){
        alert("Invalid month");
        return false;
    
    }
    else if( YY <1900 || YY == "" || YY > 2019){
        alert("Invalid year");
       return false;
    }

    if(gender[0].checked === false && gender[1].checked === false){
        alert("Select your gender");
     }
     else{
        for(j=0; j< gender.length; j++){
            if(gender[j].checked){
           alert(gender[j].value);
        var userGender = gender[j].value;
            }
             
        }
        
        
    }
    var userDetails={
        day: DD,
        month: MM,
        year: YY,
        gender:userGender
    } 

    return userDetails;
}
   
function result(){
    var validate = validateForm();
    var dd = parseInt(validate.day);
    var mm = parseInt(validate.month);
    var yy = parseInt(validate.year);
    var gender = validate.userGender;

    var a = Math.floor((14 - mm) / 12);
    var y = yy - a;
     var m = mm + 12 * a - 2;
     var d = (dd + y + Math.floor(y / 4) - Math.floor(y / 100) +
     Math.floor(yy / 400) + Math.floor((31 * m) / 12)) % 7;
     
var weekDays = new Array ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    var dayName = weekDays[d];
    if (gender === "male"){
        for( var x in maleList){
            if(maleList.hasOwnProperty(x)){
                if(x === dayName){
                    alert("Congratulation, your Akan Name is " + maleList[x]);
                }
            }
        }
    }
    else if (gender === "female"){
        for( var x in femyList){
            if(femyList.hasOwnProperty(x)){
                if(x === dayName){
                    alert("Congratulation, your Akan Name is " + femyList[x]);
                }
            }
        }
    }
}
