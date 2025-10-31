let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let Firstname = document.querySelector("#FirstName");
    let Lastname = document.querySelector("#LastName");
    let Emailid = document.querySelector("#EmailId");
    let Password = document.querySelector("#Password");

    const nameRegex = /^[A-Za-z]{2,}(?: [A-Za-z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValided = true;

    function showError(input) {
        let parent = input.parentNode;
        let icon = parent.querySelector("i");

        if (!icon) {
            icon = document.createElement("i");
            icon.classList.add("ri-error-warning-fill");
            icon.style.position = "absolute";
            icon.style.right = "12px";
            icon.style.top = "50%";
            icon.style.transform = "translateY(-50%)";
            icon.style.color = "red";
            icon.style.fontSize = "18px";
            parent.style.position = "relative";
            parent.appendChild(icon);
        }

        input.classList.add("error");
        input.value = "Something wrong!";
        icon.style.display = "block";

        input.addEventListener("focus", () => {
            input.value = "";
            input.classList.remove("error");
            icon.style.display = "none";
            input.style.color = "#000";
        });

        isValided = false;
    }

    if (!nameRegex.test(Firstname.value.trim())) {
        showError(Firstname);
        Firstname.addEventListener("click", () => {

        });
    }
    if (!nameRegex.test(Lastname.value.trim())) showError(Lastname);
    if (!emailRegex.test(Emailid.value.trim())) showError(Emailid);
    if (!passwordRegex.test(Password.value.trim())) showError(Password);

    if (isValided) {
        alert("You have successfully logged in!");
        form.reset();
    }
});
