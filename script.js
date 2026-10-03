const form =
    document.getElementById("studentForm");

const table =
    document.getElementById("studentTable");


const message =
    document.getElementById("message");


const registerButton =
    document.getElementById("registerButton");



let studentId = 103;



form.addEventListener(
    "submit",
    function(event) {
   

                event.preventDefault();


        const name =
            document.getElementById("name").value.trim();


        const email =
            document.getElementById("email").value.trim();


        const course =
            document.getElementById("course").value;

        if (
            name === "" ||
            email === "" ||
            course === ""
        ) {

            message.innerText =
                "Please fill all fields.";

            message.style.color = "red";

            return;
        }
        const row =
            document.createElement("tr");
        row.innerHTML = `

            <td>${studentId}</td>

            <td>${name}</td>

            <td>${email}</td>

            <td>${course}</td>

            <td>
                <button class="deleteButton">
                    Delete
                </button>
            </td>
        `;


        table.appendChild(row);
        

        const deleteButton =
            row.querySelector(".deleteButton");
        deleteButton.addEventListener(
            "click",
            function() {

                row.remove();

            }
        );
        message.innerText =
            "Student registered successfully!";

        message.style.color = "green";

        registerButton.innerText =
            "Registered ✓";

        studentId++;

        form.reset();


    }
);

    
