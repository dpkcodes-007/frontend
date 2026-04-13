const regis = document.getElementById("registerbtn")

regis.addEventListener("click",(evtobj) => {

    evtobj.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value

    let userls = {
        name : name,
        email : email,
        pass : pass
    }

    let file = JSON.parse(localStorage.getItem("obj")) || []

    file.push(userls)

    localStorage.setItem("obj", JSON.stringify(file))

    alert ("succesfully stored your data")  

})