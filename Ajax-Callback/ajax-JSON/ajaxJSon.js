document.getElementById("ajax").addEventListener("click", getAllEmployee);

function getAllEmployee() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "employee.json", true);

    xhr.onload = function () {
        let list = document.getElementById("employees");

        if (this.status === 200) {
            //console.log(this.responseText);
            //String olarak gelen responseText i mizi array yapıyoruz
            const employees = JSON.parse(this.responseText);
            //console.log(employees);
            employees.forEach(employee => {
                list.innerHTML += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>
            `
            });
            
        }
    }

    xhr.send();
}