//regex = /^[a-zA-Z][a-zA-Z0-9\-\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

let emailId = document.getElementById('email-id')
let errorMSG = document.getElementById('error_msg')
let icon = document.getElementById('icon')
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker(){
    icon.style.display = 'inline-block'

if(emailId.value.match(mailRegex)){
    icon.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    icon.style.color = '#2ecc71'
    errorMSG.style.display = 'none'
    emailId.style.border = '2px solid #2ecc71'

}
else if(emailId.value == ''){
    icon.style.display = 'none'
    errorMSG.style.display = 'none'
    emailId.style.border = '2px solid #d1d2d3'
}
else{
    icon.innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>'
    icon.style.color = '#ff2851'
    errorMSG.style.display = 'block'
    emailId.style.border = '2px solid #ff2851'
}
}
