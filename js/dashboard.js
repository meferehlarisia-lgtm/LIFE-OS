// ================= LIFE OS OVERVIEW =================

// Wait until the page is completely loaded
document.addEventListener("DOMContentLoaded", function () {

    // ================= SIDEBAR =================

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");

    if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", function () {
            sidebar.classList.toggle("active");
        });
    }


    // ================= ADD ACTIVITY =================

    const addActivityBtn = document.getElementById("addActivityBtn");

    if (addActivityBtn) {

        addActivityBtn.addEventListener("click", function () {

            const activityName = prompt("What activity do you want to add?");

            if (!activityName || activityName.trim() === "") {
                return;
            }

            const activityCategory = prompt(
                "Which category is this activity for?\n\n" +
                "Examples: Academics, Skills, Purpose, Personal, Finance"
            );

            if (!activityCategory || activityCategory.trim() === "") {
                return;
            }

            const activityTime = prompt(
                "How much time will this activity take?\n\n" +
                "Example: 1 hour, 30 minutes"
            );

            if (!activityTime || activityTime.trim() === "") {
                return;
            }


            // Create the new task
            const taskList = document.querySelector(".task-list");

            if (!taskList) {
                alert("Today's Focus section could not be found.");
                return;
            }


            const task = document.createElement("label");

            task.className = "task";

            task.innerHTML = `
                <input type="checkbox">

                <span class="custom-check"></span>

                <div class="task-content">
                    <strong>${activityName}</strong>
                    <small>${activityCategory} · ${activityTime}</small>
                </div>
            `;


            // Add activity to Today's Focus
            taskList.appendChild(task);


            // Make checkbox work
            const checkbox = task.querySelector("input");

            checkbox.addEventListener("change", function () {

                if (this.checked) {
                    task.classList.add("completed");
                } else {
                    task.classList.remove("completed");
                }

            });


            alert("Activity added successfully!");

        });

    }


    // ================= EXISTING TASK CHECKBOXES =================

    const tasks = document.querySelectorAll(".task");

    tasks.forEach(function (task) {

        const checkbox = task.querySelector("input[type='checkbox']");

        if (!checkbox) {
            return;
        }

        checkbox.addEventListener("change", function () {

            if (this.checked) {
                task.classList.add("completed");
            } else {
                task.classList.remove("completed");
            }

        });

    });


    // ================= VIEW ANALYTICS =================

    const viewAnalyticsBtn = document.querySelector(".view-btn");

    if (viewAnalyticsBtn) {

        viewAnalyticsBtn.addEventListener("click", function () {
            window.location.href = "pages/analytics.html";
        });

    }


    // ================= VIEW ALL OPPORTUNITIES =================

    const viewAllBtn = document.querySelector(".opportunities-card .view-all");

    if (viewAllBtn) {

        viewAllBtn.addEventListener("click", function () {
            window.location.href = "pages/opportunities.html";
        });

    }


    // ================= OPPORTUNITY ARROWS =================

    const opportunityButtons =
        document.querySelectorAll(".arrow-btn");

    opportunityButtons.forEach(function (button) {

        button.addEventListener("click", function () {
            window.location.href = "pages/opportunities.html";
        });

    });


    // ================= ADD TASK =================

    const addTaskBtn = document.querySelector(".add-task");

    if (addTaskBtn) {

        addTaskBtn.addEventListener("click", function () {

            const taskName = prompt("Enter your new task:");

            if (!taskName || taskName.trim() === "") {
                return;
            }

            const category = prompt(
                "Enter category:\n\n" +
                "Examples: Academics, Skills, Purpose, Personal"
            );

            if (!category || category.trim() === "") {
                return;
            }

            const duration = prompt(
                "Enter duration:\n\n" +
                "Example: 1 hour, 30 minutes"
            );

            if (!duration || duration.trim() === "") {
                return;
            }


            const taskList = document.querySelector(".task-list");

            const task = document.createElement("label");

            task.className = "task";

            task.innerHTML = `
                <input type="checkbox">

                <span class="custom-check"></span>

                <div class="task-content">
                    <strong>${taskName}</strong>
                    <small>${category} · ${duration}</small>
                </div>
            `;

            taskList.appendChild(task);


            const checkbox =
                task.querySelector("input");

            checkbox.addEventListener("change", function () {

                task.classList.toggle(
                    "completed",
                    this.checked
                );

            });

        });

    }

});