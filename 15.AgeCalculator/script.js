function Calculate() {
    let birthday = document.getElementById('birthday').value;
    var today = new Date();
    var birth = new Date(birthday);
    var age = today.getFullYear() - birth.getFullYear();
    const result = document.querySelector('.result').innerHTML = age;

    console.log(age);
}
