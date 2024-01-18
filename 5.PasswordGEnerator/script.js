function generate(length=12){
    let char="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?><:}{+_,./;'[]'}!@#$%^&*"

    let password=""
    for(var i=0;i<length;i++){
        var c = Math.floor(Math.random() * char.length);
        password +=char[c]
    }
    document.querySelector(".password").textContent=password;
}