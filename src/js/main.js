// buat sebuah method / function
// function handleSubmit
    // sama aja
// 

// perbedaan class dan id
// klo id hanya bisa 1id , klo class tidak bisa 2x

// arrow function
const handleSubmit = (event) => {
    //buat form static
    event.preventDefault()

    // tangkap nilai input dari user
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let address = document.getElementById('address').value
    let birthday = document.getElementById('birthday').value

    let user = sessionStorage.setItem("username",username)
    let Email = sessionStorage.setItem("email",email)
    let Phone = sessionStorage.setItem("phone",phone)
    let Address = sessionStorage.setItem("address",address)
    let Birthday = sessionStorage.setItem("birthday",birthday)
    
    alert(`
        Nama = ${username}
        Email = ${email}
        Phone = ${phone}
        Address = ${address}
        Tanggal tahun lahir = ${birthday}
        age = ${2021 - parseInt(birthday.split("-") [0]) + "Years old"}
    `)
}