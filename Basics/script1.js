console.log('efefe');
// function dis(){
//     document.getElementById("submitBtn").disabled = false;
// }

(function() {
    var frmLength = document.getElementById('studentForm').length;
    document.getElementById('frmLength').innerHTML = 'The number of element in the form is : '+frmLength;

    var mthd = document.getElementById('studentForm').method;
    document.getElementById('mthd').innerHTML = 'The method of the form  : '+mthd; 

    var name = document.getElementById('studentForm').name;
    document.getElementById('name').innerHTML = 'The accepted charset is : '+name; 

    var charset = document.getElementById('studentForm').acceptCharset;
    document.getElementById('charset').innerHTML = 'The accepted charset is : '+charset;    

    var action = document.getElementById('studentForm').action;
    document.getElementById('action').innerHTML = 'The value of action attribute is : '+action; 

    var enctype = document.getElementById('studentForm').enctype;
    document.getElementById('enctype').innerHTML = 'The value of action enctype is : '+enctype; 
})();

function getval(){
    form = document.getElementById('studentForm');
    let txt = '';
    for(let i=0;i<form.length;i++){
        txt += form.elements[i].value + '</br>';
    }
    document.getElementById('values').innerHTML= txt;
}

// name
function valname(){
    var name = document.forms["studentForm"]["name"];
    var nameError='';
    if (name.value==''){
        nameError = 'Name is required.';
        document.getElementById('nameError').innerHTML=nameError;
    } else if( name.value.length>0 && !name.value.match(/^[A-Za-z]+$/) ){
        nameError = 'Please enter a valid name.';
        document.getElementById('nameError').innerHTML=nameError;
    } else if (name.value.length>15){
        nameError='Can\'t use more the 15 words.';
        document.getElementById('nameError').innerHTML=nameError;
    } else if (name.value.length<=2) {
        nameError = 'Min 3 words required.';
        document.getElementById('nameError').innerHTML=nameError;
    } else {
        nameError = '';
        document.getElementById('nameError').innerHTML=nameError;
    }
}


// roll no
function valrno(){
    var rno = document.forms["studentForm"]["rno"];
    var rnoError='';
    if (rno.value==""){
        rnoError = 'Roll number field is required.';
        document.getElementById('rnoError').innerHTML=rnoError;
    } else if (rno.value.length>10){
        rnoError = 'Roll number can\'t be more than 10 words.';
        document.getElementById('rnoError').innerHTML=rnoError;
    } else{
        rnoError = '';
        document.getElementById('rnoError').innerHTML=rnoError;
    }
}


// contact
function valcontact(){
    var contact = document.forms["studentForm"]["contact"];
    var contactError='';
    if (contact.value==""){
        contactError = 'Contact number is required.';
        document.getElementById('contactError').innerHTML=contactError;
    } else if (contact.value.length>0 && !contact.value.match(/^\d{10}$/)){
        contactError = 'Please enter a valid contact number.';
        document.getElementById('contactError').innerHTML=contactError;
    } else {
        contactError = '';
        document.getElementById('contactError').innerHTML=contactError;
    }
}


// email
function valemail(){
    var email = document.forms["studentForm"]["email"];
    var emailError = '';
    if (email.value==""){
        emailError = 'Email is required.';
        document.getElementById('emailError').innerHTML=emailError;
    } else if (email.value.length>0 && email.value.indexOf('@',0)<0){
        emailError = 'Please enter a valid email id.';
        document.getElementById('emailError').innerHTML=emailError;
    } else if (email.value.length>0 && email.value.indexOf('.',0)<0){
        emailError = 'Please enter a valid email id.';
        document.getElementById('emailError').innerHTML=emailError;
    } else {
        emailError = '';
        document.getElementById('emailError').innerHTML=emailError;
    }
}


// password
function valpass() {
    var password = document.forms["studentForm"]["password"];
    passError = '';
    if (password.value==""){
        passError = 'Password is required.';
        document.getElementById('passwordError').innerHTML=passError;
    } else if (!password.value.match(/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i)){
        passError = 'Atleast one letter and one number.';
        document.getElementById('passwordError').innerHTML=passError;
    } else {
        passError = '';
        document.getElementById('passwordError').innerHTML=passError;
    }
}
