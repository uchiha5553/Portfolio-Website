const ad=document.querySelector("#ad");
const soyad=document.querySelector("#soyad");
const e_mail=document.querySelector("#e-mail");
const message=document.querySelector("#message");
const form=document.querySelector("#form");

let iletisim=[];

document.addEventListener('DOMContentLoaded',function() {
    checkStorage()

    form.addEventListener('submit',function (e) {
        e.preventDefault()
        contact()
    });
});


function contact() {
    addTodoStorage(ad,soyad,e_mail,message)
}

function checkStorage() {
    if (localStorage.getItem(iletisim)===null) {
        iletisim=[]
    }else{
        iletisim=JSON.parse(localStorage.getItem())
    }
}

function addTodoStorage(ad,soyad,e_mail,message){
    checkStorage();

    if(!ad.value||!soyad.value||!e_mail||!message.value){
        alert("lütfen tüm alanları doldurunuz")
        return;
    }

    const newContact = {
        ad: ad.value,
        soyad: soyad.value,
        email: e_mail.value,
        message: message.value,
        date: new Date().toLocaleString()
    };

   iletisim.push(newContact);
    localStorage.setItem('iletisim',JSON.stringify(iletisim));

    form.remove()
    alert("mesajınız basarıyla gönderilmiştir");
    console.log("Kaydedilen veri:", newContact);

}