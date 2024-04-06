let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');


window.onscroll=()=>{
    sections.foreach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');
        
        if(top >= offset && top< offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' +id+ ']').classList.add('active')
            })
        } 
    })
}
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



function Sendmail(){
    var params = {
        user_name: document.getElementById("user_name").value,
        user_mailid: document.getElementById("user_mailid").value,
        user_pno: document.getElementById("user_pno").value,
        user_sub: document.getElementById("user_sub").value,
        user_message: document.getElementById("user_message").value,
    };
    const serviceId="service_h35dlhr";
    const templateid= "template_2o3eo1c";

    emailjs
        .send(serviceId, templateid, params)
        .then((res) => {
            document.getElementById("user_name").value= "";
            document.getElementById("user_mailid").value= "";
            document.getElementById("user_message").value= "";
            document.getElementById("user_pno").value= "";
            document.getElementById("user_sub").value= "";
            alert("Your Message has been sent successfully");
        })
        .catch((err) => console.log(err));
}

