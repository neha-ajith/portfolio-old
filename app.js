$(document).ready(function(){
    let hamburger = document.querySelector('.hamburger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });
});

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "gatco.automated.mail@gmail.com",
	Password : "gatco.automated.mail@password",
	To : 'nehaajith27@gmail.com',
	From : "gatco.automated.mail@gmail.com",
	Subject : "Mail via your site",
	Body :  `
    You have a message from ${document.getElementById("mail-sender-name").value} 
    <br> Mail id : ${document.getElementById("mail-sender-mail").value} 
    <br> Message : ${document.getElementById("mail-sender-message").value}
    <center><button style="background-color:blue">Button</button></center>
    `,
	}).then(
		message => alert("mail sent successfully")
	);
}