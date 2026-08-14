const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");


// Mobile sidebar
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});


// Close sidebar when clicking a navigation item on mobile
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("click", () => {

        if (window.innerWidth <= 900) {
            sidebar.classList.remove("open");
        }

    });
});


// Task interaction
const tasks = document.querySelectorAll(".task input");

tasks.forEach(task => {

    task.addEventListener("change", () => {

        const taskElement = task.closest(".task");

        if (task.checked) {
            taskElement.classList.add("completed");
        } else {
            taskElement.classList.remove("completed");
        }

    });

});