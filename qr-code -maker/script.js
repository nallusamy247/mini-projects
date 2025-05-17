let container = document.querySelector(".container");
let dataIn = document.querySelector(".qr-input input");
let QRbutton = document.querySelector(".qr-input button");
let codeimg = document.querySelector(".qr-img");
let SaveQR = document.querySelector(".saveqr");

QRbutton.addEventListener("click",() => {
    let QRValue = dataIn.value;
    codeimg.innerHTML = "";
    let qrcode = new QRCode(codeimg,{
        text : QRValue,
        width:180,
        height:180,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H  


    });
    
    container.classList.add("active");
});

SaveQR.addEventListener("click", ()=>{
    let imgSrc = codeimg.querySelector("img").src;
    SaveQR.href=imgSrc;
    SaveQR.download = 'your-QR';
});
