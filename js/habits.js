// ================= HABITS DATA =================

let habits = [

    {
        name: "Read 10 pages",
        category: "Personal Growth",
        streak: 5,
        completed: false
    },

    {
        name: "Exercise",
        category: "Health",
        streak: 7,
        completed: true
    },

    {
        name: "Study for 1 hour",
        category: "Academics",
        streak: 4,
        completed: false
    },

    {
        name: "Practice coding",
        category: "Skills",
        streak: 6,
        completed: true
    }

];


// ================= DISPLAY HABITS =================

function displayHabits() {

    const habitList =
        document.getElementById("habitList");

    if (!habitList) return;

    habitList.innerHTML = "";


    habits.forEach((habit, index) => {

        const item =
            document.createElement("div");

        item.className =
            "habit-item" +
            (habit.completed ? " completed" : "");


        item.innerHTML = `

            <div class="habit-left">

                <button
                    class="habit-check ${
                        habit.completed ? "completed" : ""
                    }"
                    onclick="toggleHabit(${index})"
                >

                    <i class="fa-solid ${
                        habit.completed
                            ? "fa-check"
                            : "fa-circle"
                    }"></i>

                </button>


                <div class="habit-info">

                    <strong>
                        ${habit.name}
                    </strong>

                    <small>
                        ${habit.category}
                    </small>

                </div>

            </div>


            <div class="habit-right">

                <span class="streak">

                    <i class="fa-solid fa-fire"></i>

                    ${habit.streak} day streak

                </span>

            </div>

        `;


        habitList.appendChild(item);

    });


    updateStatistics();

}


// ================= TOGGLE HABIT =================

function toggleHabit(index) {

    habits[index].completed =
        !habits[index].completed;


    if (habits[index].completed) {

        habits[index].streak++;

    } else {

        habits[index].streak =
            Math.max(0, habits[index].streak - 1);

    }


    displayHabits();

}


// ================= STATISTICS =================

function updateStatistics() {

    const total = habits.length;


    const completed =
        habits.filter(
            habit => habit.completed
        ).length;


    const progress =
        total === 0
            ? 0
            : Math.round(
                (completed / total) * 100
            );


    const bestStreak =
        total === 0
            ? 0
            : Math.max(
                ...habits.map(
                    habit => habit.streak
                )
            );


    document.getElementById(
        "totalHabits"
    ).textContent = total;


    document.getElementById(
        "completedToday"
    ).textContent = completed;


    document.getElementById(
        "bestStreak"
    ).textContent =
        bestStreak + " days";


    document.getElementById(
        "todayProgress"
    ).textContent =
        progress + "%";

}


// ================= ADD HABIT =================

const addHabitBtn =
    document.getElementById("addHabitBtn");


if (addHabitBtn) {

    addHabitBtn.addEventListener(
        "click",
        function () {

            const name =
                prompt("Enter habit name:");

            if (!name) {
                return;
            }


            const category =
                prompt("Enter habit category:");

            if (!category) {
                return;
            }


            habits.push({

                name: name,

                category: category,

                streak: 0,

                completed: false

            });


            displayHabits();

        }
    );

}


// ================= START =================

displayHabits();