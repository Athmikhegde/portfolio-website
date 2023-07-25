//toggle navbar toggle
let menuIcon= document.getElementById('menu-icon');
let nav= document.querySelector('.navbar');
menuIcon.onclick= () => {
    console.log('toggle navbar toggle')
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}





//sticky header
window.onscroll=() => {
   
    let header= document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY >100);
    menuIcon.classList.remove('bx-x');
nav.classList.remove('active');

}

//contact form
function sendEmail(){
    Email.send({
Host : "smtp.elasticemail.com",
Username : "athmikdummy@gmail.com",
Password : "49725316A75EB2EFC62B6D3F2013BA53B3A9",
From : "athmikdummy@gmail.com",
To : 'athmik515@gmail.com',
Subject : "New Enquiry From portfolio website",
Body : "Name: "+document.getElementById("name").value
+"<br> Email: "+document.getElementById("email").value
+"<br> Phone No: "+document.getElementById("phone").value
+"<br> Phone No: "+document.getElementById("subject").value
+"<br> Message:  "+document.getElementById("message").value
}).then(
message => alert("Message sent, We will contact you back as soon as possible")
);
console.log("done");
  }

