function QrCode() {
    let inpt = document.querySelector('input').value;
    let img = document.querySelector('.img')

    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpt}`)
        .then(response => response.blob())
        .then(blob => {
            const img = document.createElement("img");
            const url = URL.createObjectURL(blob);
            img.src = url;
            img.height = '200';
            img.onload = () => {
                const loader = document.getElementById("loader");
                if (loader) {
                    loader.remove();
                }
            };
            img.alt = "QR Code";
            img.classList.add('show');
            document.body.appendChild(img);
        })



}