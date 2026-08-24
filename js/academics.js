// ================= COURSES =================

let courses = [
    {
        name: "Database Systems",
        code: "DBS 201",
        score: 82
    },
    {
        name: "Web Development",
        code: "WEB 202",
        score: 78
    },
    {
        name: "Software Engineering",
        code: "SWE 203",
        score: 75
    },
    {
        name: "Data Structures",
        code: "DSA 204",
        score: 77
    }
];


// ================= ASSIGNMENTS =================

let assignments = [
    {
        name: "Database Project",
        course: "Database Systems",
        deadline: "Aug 26"
    },
    {
        name: "Portfolio Website",
        course: "Web Development",
        deadline: "Aug 28"
    },
    {
        name: "Software Design Report",
        course: "Software Engineering",
        deadline: "Sep 02"
    },
    {
        name: "Data Structures Exercise",
        course: "Data Structures",
        deadline: "Sep 05"
    }
];


// ================= GOALS =================

let academicGoals = [
    {
        name: "Achieve 80% average",
        progress: 78
    },
    {
        name: "Complete all assignments",
        progress: 65
    },
    {
        name: "Improve programming skills",
        progress: 72
    }
];


// ================= DISPLAY COURSES =================

function displayCourses() {

    const courseList = document.getElementById("courseList");

    courseList.innerHTML = "";

    courses.forEach(function(course) {

        const item = document.createElement("div");

        item.className = "course";

        item.innerHTML = `
            <div class="course-icon">
                <i class="fa-solid fa-book-open"></i>
            </div>

            <div class="course-info">
                <strong>${course.name}</strong>
                <small>${course.code}</small>
            </div>

            <span class="course-score">
                ${course.score}%
            </span>
        `;

        courseList.appendChild(item);

    });

}


// ================= DISPLAY ASSIGNMENTS =================

function displayAssignments() {

    const assignmentList =
        document.getElementById("assignmentList");

    assignmentList.innerHTML = "";

    assignments.forEach(function(assignment) {

        const item = document.createElement("div");

        item.className = "assignment";

        item.innerHTML = `
            <div class="assignment-icon">
                <i class="fa-solid fa-file-lines"></i>
            </div>

            <div class="assignment-info">
                <strong>${assignment.name}</strong>
                <small>${assignment.course}</small>
            </div>

            <span class="assignment-date">
                ${assignment.deadline}
            </span>
        `;

        assignmentList.appendChild(item);

    });

}


// ================= DISPLAY GOALS =================

function displayGoals() {

    const goalList =
        document.getElementById("goalList");

    goalList.innerHTML = "";

    academicGoals.forEach(function(goal) {

        const item = document.createElement("div");

        item.className = "goal";

        item.innerHTML = `
            <div class="goal-header">
                <strong>${goal.name}</strong>
                <span>${goal.progress}%</span>
            </div>

            <div class="goal-bar">
                <div style="width: ${goal.progress}%"></div>
            </div>
        `;

        goalList.appendChild(item);

    });

}


// ================= UPDATE SUMMARY =================

function updateSummary() {

    const courseCount =
        document.getElementById("courseCount");

    const assignmentCount =
        document.getElementById("assignmentCount");

    courseCount.textContent = courses.length;

    assignmentCount.textContent = assignments.length;

}


// ================= ADD COURSE =================

const addCourseBtn =
    document.getElementById("addCourseBtn");

addCourseBtn.addEventListener("click", function() {

    const name = prompt("Enter course name:");

    if (!name) {
        return;
    }

    const code = prompt("Enter course code:");

    if (!code) {
        return;
    }

    courses.push({
        name: name,
        code: code,
        score: 0
    });

    displayCourses();
    updateSummary();

});


// ================= ADD GOAL =================

const addGoalBtn =
    document.getElementById("addGoalBtn");

addGoalBtn.addEventListener("click", function() {

    const name = prompt("Enter your academic goal:");

    if (!name) {
        return;
    }

    academicGoals.push({
        name: name,
        progress: 0
    });

    displayGoals();

});


// ================= START =================

displayCourses();
displayAssignments();
displayGoals();
updateSummary();