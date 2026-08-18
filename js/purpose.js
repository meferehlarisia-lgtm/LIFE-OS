// ================= PURPOSE DATA =================

let purposeGoals = [

    {
        name: "Build a professional software portfolio",
        category: "Career",
        progress: 75
    },

    {
        name: "Complete my Software Engineering studies",
        category: "Education",
        progress: 65
    },

    {
        name: "Develop my leadership skills",
        category: "Leadership",
        progress: 80
    },

    {
        name: "Create meaningful technology projects",
        category: "Career",
        progress: 60
    },

    {
        name: "Help young people discover their potential",
        category: "Personal",
        progress: 90
    }

];


// ================= ELEMENTS =================

const purposeGoalList =
    document.getElementById("purposeGoalList");

const addPurposeBtn =
    document.getElementById("addPurposeBtn");

const purposeModal =
    document.getElementById("purposeModal");

const closePurposeModal =
    document.getElementById("closePurposeModal");

const cancelPurpose =
    document.getElementById("cancelPurpose");

const purposeForm =
    document.getElementById("purposeForm");


// ================= DISPLAY GOALS =================

function displayPurposeGoals() {

    purposeGoalList.innerHTML = "";

    purposeGoals.forEach(function (goal) {

        const item =
            document.createElement("div");

        item.className =
            "purpose-goal";


        item.innerHTML = `

            <div class="goal-icon">

                <i class="fa-solid fa-bullseye"></i>

            </div>


            <div class="goal-details">

                <strong>
                    ${goal.name}
                </strong>

                <small>
                    ${goal.category}
                </small>

            </div>


            <div class="goal-progress">

                <div class="goal-progress-bar">

                    <div style="width: ${goal.progress}%"></div>

                </div>

                <span>
                    ${goal.progress}%
                </span>

            </div>

        `;


        purposeGoalList.appendChild(item);

    });

}


// ================= UPDATE STATS =================

function updatePurposeStats() {

    document.getElementById(
        "purposeGoals"
    ).textContent = purposeGoals.length;


    const completed =
        purposeGoals.filter(
            goal => goal.progress >= 80
        ).length;


    document.getElementById(
        "completedGoals"
    ).textContent = completed;

}


// ================= OPEN MODAL =================

addPurposeBtn.addEventListener(
    "click",
    function () {

        purposeModal.classList.add("show");

    }
);


// ================= CLOSE MODAL =================

closePurposeModal.addEventListener(
    "click",
    function () {

        purposeModal.classList.remove("show");

    }
);


cancelPurpose.addEventListener(
    "click",
    function () {

        purposeModal.classList.remove("show");

    }
);


// ================= ADD GOAL =================

purposeForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "purposeGoalName"
            ).value.trim();


        const category =
            document.getElementById(
                "purposeCategory"
            ).value;


        if (!name || !category) {

            alert(
                "Please complete all fields."
            );

            return;

        }


        purposeGoals.push({

            name: name,

            category: category,

            progress: 0

        });


        purposeForm.reset();

        purposeModal.classList.remove(
            "show"
        );


        displayPurposeGoals();

        updatePurposeStats();

    }
);


// ================= START =================

displayPurposeGoals();

updatePurposeStats();