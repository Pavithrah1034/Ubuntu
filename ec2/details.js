function formValidation(){
 var Lname = document.forms.Lname;
 var Fname = document.forms.Fname;
 var Email = document.forms.Email;
 var phone = document.forms.phone;
 
 var add1 = document.forms.add1;
 var add2 = document.forms.add2;
 var city = document.forms.city;
 var state = document.forms.state;
 var postal = document.forms.postal;
 var country = document.forms.country;

 if(Fname == ""){
    alert("Please provide a valid First Name");
 }
 else{
    console.log("valid Fname");
 }
 if(Lname == ""){
    alert("Please provide a valid Last Name");
 }
 if(Email == ""){
    alert("Please provide a valid Email id xxxx@gmail.com");
 }
 if(phone == ""){
    alert("Please provide a valid 10 digit phone number");
 }
 if(add1 == ""){
    alert("Please provide a valid Address line 1 like zz, yyy street");
 }
 if(add2 == ""){
    alert("Please provide a valid Address line 2 like xxx nagar");
 }
 if(city == ""){
    alert("Please provide a valid city");
 }
 if(state == ""){
    alert("Please provide a valid state");
 }
 if(postal == ""){
    alert("Please provide a valid postal code");
 }
 if(country == ""){
    alert("Please provide a valid country");
 }

}
function display(){
    if(Fname != "" && Lname != ""){
        console.log("Valid user");
    }
    else{
        console.log("Invalid user");
    }
}