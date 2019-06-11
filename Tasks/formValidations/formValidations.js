var pwd = document.getElementById('password');
var msg = document.getElementById('message');
msg.style.display='none';
pwd.addEventListener('blur',function(){
    msg.style.display='none';
});
pwd.addEventListener('focus',function(){
    msg.style.display='block';
});

var num = document.getElementById('num');
var alpha = document.getElementById('alpha');
var specialChar = document.getElementById('specialChar');
var len = document.getElementById('len');
var tick1 = document.getElementById('tick1');
var tick2 = document.getElementById('tick2');
var tick3 = document.getElementById('tick3');
pwd.addEventListener('keyup',function(){
    // validate number
    var numPattern = /[0-9]/g;
    if(pwd.value.match(numPattern)){
        num.classList.remove("invalid");
        num.classList.add("valid");
        tick1.style.display="inline";
        
    } else {
        num.classList.remove("valid");
        num.classList.add('invalid');
        tick1.style.display="none";

    }
    // validate alphabets
    var letterPattern = /[a-zA-Z]/g;
    if(pwd.value.match(letterPattern)){
        alpha.classList.remove('invalid');
        alpha.classList.add('valid');
        tick2.style.display="inline";

    } else {
        alpha.classList.remove('valid');
        alpha.classList.add('invalid');
        tick2.style.display="none";
    }
    // validate special characters
    var specialPattern = /[^0-9a-zA-Z]/g;
    if(pwd.value.match(specialPattern)){
        specialChar.classList.remove('invalid');
        specialChar.classList.add('valid');
        tick3.style.display="inline";
    } else {
        specialChar.classList.remove('valid');
        specialChar.classList.add('invalid');
        tick3.style.display="none";
    }
    // validate length
    if(pwd.value.length>=8){
        len.classList.remove('invalid');
        len.classList.add('valid');
    } else {
        len.classList.remove('valid');
        len.classList.add('invalid');
    }
    
})
var changeColor = document.getElementById('changeColor');
changeColor.addEventListener('keyup',function(){
    document.getElementsByClassName('jumbotron')[0].style.backgroundColor = changeColor.value;
    document.getElementById('reset').style.backgroundColor = changeColor.value;
    changeColor.style.color = changeColor.value;
})



function info () {
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
}

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
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailError;

    if (emailError=='') {
        emailError = '';
        document.getElementById('emailError').innerHTML=emailError;
    } else if (!email.value.match(mailformat)){
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
    btn = document.getElementById('showButton');
    if (!password.value==''){
        btn.style.display='block';
    } else {
        btn.style.display='none';
    }
}

// show and hide password
function showPassword(){
    document.getElementById('password').type = 'text';
}  function hidePassword(){
    document.getElementById('password').type = 'password';
}


