function doValidation() {
    var name = document.forms["studentForm"]["name"];
    var rno = document.forms["studentForm"]["rno"];
    var contact = document.forms["studentForm"]["contact"];
    var email = document.forms["studentForm"]["email"];
    var password = document.forms["studentForm"]["password"];
    var addr = document.forms["studentForm"]["addr"];
    
    // declarations
    areErrors = false;
    var nameError=[];
    var rnoError=[];
    var contactError=[];
    var emailError=[];
    var passError=[];

    // name
    if (name.value==''){
        areErrors = true;
        nameError.push('Name is required.');
    }
    if (name.value.length>=15){
        areErrors = true;
        nameError.push('Can\'t use more the 15 words.' + '<br>');
    } if (name.value.length<3 && name.value.length>0) {
        areErrors = true;
        nameError.push('Min 3 words required.' + '<br>');
    } if( name.value.length>0 && !name.value.match(/^[A-Za-z]+$/) ){
        areErrors = true;
        nameError.push('Please enter a valid name.' + '<br>');
    }
    document.getElementById('nameError').innerHTML=nameError;

    // roll no
    if (rno.value.length>10){
        areErrors = true;
        rnoError.push('Roll number can\'t be more than 10 words.'); 
    } if (rno.value==""){
        areErrors = true;
        rnoError.push('Roll number field is required.');
    }
    document.getElementById('rnoError').innerHTML=rnoError;

    // contact
    if (contact.value==""){
        areErrors = true;
        contactError.push('Contact number is required.');
    }
    if (contact.value.length>0 && !contact.value.match(/^\d{10}$/)){
        areErrors = true;
        contactError.push('Please enter a valid contact number.');
    }
    document.getElementById('contactError').innerHTML=contactError;

    // email
    if (email.value==""){
        areErrors = true;
        emailError.push('Email is required.');
    } else if (email.value.length>0 && email.value.indexOf('@',0)<0){
        areErrors = true;
        emailError = 'Please enter a valid email id.';
    } else if (email.value.length>0 && email.value.indexOf('.',0)<0){
        areErrors = true;
        emailError = 'Please enter a valid email id.';
    }
    document.getElementById('emailError').innerHTML=emailError;

    // password
    if (password.value==""){
        areErrors = true;
        passError.push('Password is required.');
    }
    document.getElementById('passwordError').innerHTML=passError;

    if(areErrors==true){
        return false;
    } else {
        console.log('Name: '+name.value);
        console.log('Roll number: '+contact.value);
        console.log('Contact: '+contact.value);
        console.log('Email: '+email.value);
        console.log('Password: '+password.value);
        console.log('Address: '+addr.value);
        return false;
    }
    
}