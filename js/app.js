const form = document.querySelector("#form") // id of form
form.addEventListener("submit", (event)=> {
    event.preventDefault()

    const formData = new FormData(form) // Capture al form fields 
    const firstname = formData.get("firstname") // <input name="fullname"/>
    const lastname = formData.get("lastname") // <input name="fullname"/>
    const email = formData.get("email")
    const hireDate = formData.get("hire_date")
    const photo = formData.get("photo")
    console.log(formData) // outputs to DevTools Console
    

    const employeeList = document.querySelector("#employeeList")
    const button = document.createElement("button")
    const tdButton = document.createElement("td")
    button.innerHTML = "Delete"
    const tableRow = document.createElement("tr")
    tableRow.innerHTML = `
    <td><img src="images/${photo.name}" alt="${photo.name}"></td>
    <td>${firstname}</td>
    <td>${lastname}</td>
    <td>${email}</td>
    <td>${hireDate}</td>
    `

button.addEventListener("click", () => {
    if(confirm("are you sure?") === true) {
    tableRow.remove()
    
}
} )

tdButton.appendChild(button)
tableRow.appendChild(tdButton)
employeeList.appendChild(tableRow)
})


