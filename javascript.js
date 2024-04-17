let pass1 = document.querySelector('#pass');
let pass2 = document.querySelector('#confirmpass');
let msg = document.querySelector('.passcheck');

let checkPass = function() {
    if (pass1.value && pass2.value === "") {
        return;
    } else if (pass1.value !== pass2.value) {
        pass1.style.border = "2px solid red";
        pass2.style.border = "2px solid red";
        msg.textContent = "*Passwords do not match";
    } else if (pass1.value === pass2.value && pass1.value) {
        pass1.style.border = "2px solid green";
        pass2.style.border = "2px solid green";
        msg.textContent = ""
    } else {
        pass1.style.border = "";
        pass2.style.border = "";
        msg.textContent = ""
    }
}

pass1.addEventListener("keyup", () => checkPass());
pass2.addEventListener("keyup", () => checkPass());
