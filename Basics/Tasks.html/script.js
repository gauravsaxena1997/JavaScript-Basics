(function(){
    var status = document.getElementById('status');
    if(navigator.onLine){
        status.innerHTML = 'The browser is online.';
} else {
        status.innerHTML = 'The browser is offline.';
    }
})()
counter = 1;
function createp(){
    var p = document.createElement('p');
    var txt = document.createTextNode('This is paragraph ' + counter);
    p.appendChild(txt);
    var attr = document.createAttribute('id');
    attr.value = 'p'+counter;
    p.setAttributeNode(attr);
    var div1 = document.getElementById('div1');
    div1.appendChild(p);
    counter++;
}

function remove1(){
    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.removeChild(child);
}

function replace(){
    var p1 = document.createElement('p');
    var txt = document.createTextNode('This is a new paragraph.');
    p1.appendChild(txt);
    p2 = document.getElementById('p2');
    div1 = document.getElementById('div1');
    div1.replaceChild(p1,p2)
}

function insert(){
    var p1 = document.createElement('p');
    var txt = document.createTextNode('This is a new paragraph inserted before paragraph 2.');
    p1.appendChild(txt);
    p2 = document.getElementById('p2');
    div1 = document.getElementById('div1');
    div1.insertBefore(p1,p2);  
}

function save(){
    txt =  document.getElementById('inp').value;
    document.getElementById('change').style.color = txt;
}
function save1(){
    txt =  document.getElementById('inp1').value;
    document.getElementById('change1').style.color = txt;
}
function save2(){
    txt =  document.getElementById('inp2').value;
    document.getElementById('change2').style.color = txt;
}
var emailValid = false;
var passwordValid = false;
function validateEmail(){
    email = document.forms["validate"]["email"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
        document.getElementById('emailError').innerHTML="";
        emailValid = true;
    } else {
        document.getElementById('emailError').innerHTML="Enter a valid email Id.";
    }
}
function validatePassword(){
    pass = document.forms["validate"]["pwd"].value;
    var passformat = /(?=.*?[0-9])(?=.*?[A-Za-z])(?=.*[^0-9A-Za-z]).+/;
    if(pass.match(passformat) && pass.length<=8 ){
        document.getElementById('passwordError').innerHTML="";
        passwordValid = true;
    } else {
        document.getElementById('passwordError').innerHTML="Enter a valid password.";
    }
}

function show(){
    email = document.forms["validate"]["email"].value;
    pass = document.forms["validate"]["pwd"].value;
    if ( emailValid && passwordValid ){
        alert(
            'Email: '+ email + '\n' + 'Password: ' + pass
        );
    } else {
        alert('Please enter valid credentials.');
    }
}

