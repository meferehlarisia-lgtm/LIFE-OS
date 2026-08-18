// ================= OPPORTUNITIES DATA =================

let opportunities = [

    {
        name: "Web Development Internship",
        organization: "Tech Company",
        type: "internship",
        deadline: "2026-08-20",
        saved: true
    },

    {
        name: "Technology Scholarship",
        organization: "Education Foundation",
        type: "scholarship",
        deadline: "2026-08-25",
        saved: true
    },

    {
        name: "Young Innovators Program",
        organization: "Innovation Hub",
        type: "program",
        deadline: "2026-09-02",
        saved: false
    },

    {
        name: "Student Coding Challenge",
        organization: "Developer Community",
        type: "competition",
        deadline: "2026-09-10",
        saved: false
    },

    {
        name: "Software Engineering Internship",
        organization: "Digital Solutions",
        type: "internship",
        deadline: "2026-09-15",
        saved: false
    },

    {
        name: "Future Leaders Program",
        organization: "Youth Foundation",
        type: "program",
        deadline: "2026-09-20",
        saved: false
    }

];


// ================= ELEMENTS =================

const opportunityList =
    document.getElementById("opportunityList");

const searchOpportunity =
    document.getElementById("searchOpportunity");

const opportunityFilter =
    document.getElementById("opportunityFilter");

const addOpportunityBtn =
    document.getElementById("addOpportunityBtn");

const opportunityModal =
    document.getElementById("opportunityModal");

const closeOpportunityModal =
    document.getElementById("closeOpportunityModal");

const cancelOpportunity =
    document.getElementById("cancelOpportunity");

const opportunityForm =
    document.getElementById("opportunityForm");


// ================= ICON =================

function getOpportunityIcon(type) {

    if (type === "internship") {
        return "fa-laptop-code";
    }

    if (type === "scholarship") {
        return "fa-graduation-cap";
    }

    if (type === "competition") {
        return "fa-trophy";
    }

    return "fa-rocket";
}


// ================= FORMAT DATE =================

function formatDate(date) {

    const newDate = new Date(date);

    return newDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}


// ================= DISPLAY =================

function displayOpportunities() {

    const search =
        searchOpportunity.value.toLowerCase();

    const filter =
        opportunityFilter.value;


    const filtered =
        opportunities.filter(function (opportunity) {

            const matchesSearch =
                opportunity.name
                    .toLowerCase()
                    .includes(search) ||
                opportunity.organization
                    .toLowerCase()
                    .includes(search);

            const matchesFilter =
                filter === "all" ||
                opportunity.type === filter;

            return matchesSearch && matchesFilter;

        });


    opportunityList.innerHTML = "";


    if (filtered.length === 0) {

        opportunityList.innerHTML = `
            <div class="empty-message">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>No opportunities found.</p>
            </div>
        `;

        return;
    }


    filtered.forEach(function (opportunity) {

        const card =
            document.createElement("div");

        card.className =
            "opportunity-item";


        card.innerHTML = `

            <div class="opportunity-item-top">

                <div class="opportunity-item-icon">

                    <i class="fa-solid ${getOpportunityIcon(opportunity.type)}"></i>

                </div>

                <button
                    class="save-btn ${opportunity.saved ? "saved" : ""}"
                    data-name="${opportunity.name}"
                >

                    <i class="fa-solid fa-bookmark"></i>

                </button>

            </div>


            <h3>
                ${opportunity.name}
            </h3>


            <p class="organization">
                ${opportunity.organization}
            </p>


            <div class="opportunity-meta">

                <span class="opportunity-type">
                    ${opportunity.type}
                </span>

                <span class="deadline">
                    <i class="fa-regular fa-clock"></i>
                    ${formatDate(opportunity.deadline)}
                </span>

            </div>

        `;


        opportunityList.appendChild(card);

    });


    // SAVE BUTTONS

    document.querySelectorAll(".save-btn")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const name =
                    button.dataset.name;

                const opportunity =
                    opportunities.find(
                        item => item.name === name
                    );


                opportunity.saved =
                    !opportunity.saved;


                displayOpportunities();

                updateStats();

            });

        });

}


// ================= STATISTICS =================

function updateStats() {

    const total =
        opportunities.length;


    const saved =
        opportunities.filter(
            opportunity => opportunity.saved
        ).length;


    const closingSoon =
        opportunities.filter(
            opportunity => {

                const today =
                    new Date();

                const deadline =
                    new Date(opportunity.deadline);

                const difference =
                    (deadline - today) /
                    (1000 * 60 * 60 * 24);

                return difference >= 0 &&
                    difference <= 14;

            }
        ).length;


    document.getElementById(
        "totalOpportunities"
    ).textContent = total;


    document.getElementById(
        "savedOpportunities"
    ).textContent = saved;


    document.getElementById(
        "closingSoon"
    ).textContent = closingSoon;

}


// ================= SEARCH =================

searchOpportunity.addEventListener(
    "input",
    displayOpportunities
);


// ================= FILTER =================

opportunityFilter.addEventListener(
    "change",
    displayOpportunities
);


// ================= OPEN MODAL =================

addOpportunityBtn.addEventListener(
    "click",
    function () {

        opportunityModal.classList.add("show");

    }
);


// ================= CLOSE MODAL =================

closeOpportunityModal.addEventListener(
    "click",
    function () {

        opportunityModal.classList.remove("show");

    }
);


cancelOpportunity.addEventListener(
    "click",
    function () {

        opportunityModal.classList.remove("show");

    }
);


// ================= ADD OPPORTUNITY =================

opportunityForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "opportunityName"
            ).value.trim();


        const organization =
            document.getElementById(
                "opportunityOrganization"
            ).value.trim();


        const type =
            document.getElementById(
                "opportunityType"
            ).value;


        const deadline =
            document.getElementById(
                "opportunityDeadline"
            ).value;


        if (
            !name ||
            !organization ||
            !type ||
            !deadline
        ) {

            alert(
                "Please complete all fields."
            );

            return;

        }


        opportunities.unshift({

            name: name,

            organization: organization,

            type: type,

            deadline: deadline,

            saved: true

        });


        opportunityForm.reset();

        opportunityModal.classList.remove(
            "show"
        );


        displayOpportunities();

        updateStats();

    }
);


// ================= START =================

displayOpportunities();

updateStats();