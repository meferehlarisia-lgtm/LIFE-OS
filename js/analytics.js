// ================= ANALYTICS DATA =================

const analyticsData = {

    week: {
        score: 67,
        tasks: 8,
        goals: 6,
        habits: 5
    },

    month: {
        score: 70,
        tasks: 24,
        goals: 18,
        habits: 12
    },

    year: {
        score: 76,
        tasks: 145,
        goals: 32,
        habits: 24
    }

};


// ================= ELEMENTS =================

const periodSelect =
    document.getElementById("periodSelect");

const overallScore =
    document.getElementById("overallScore");


// ================= UPDATE ANALYTICS =================

function updateAnalytics(period) {

    const data = analyticsData[period];

    if (!data) {
        return;
    }

    overallScore.textContent =
        data.score;

    const stats =
        document.querySelectorAll(
            ".analytics-stat strong"
        );

    stats[0].textContent =
        data.tasks;

    stats[1].textContent =
        data.goals;

    stats[2].textContent =
        data.habits;

}


// ================= PERIOD CHANGE =================

periodSelect.addEventListener(
    "change",
    function () {

        updateAnalytics(
            this.value
        );

    }
);


// ================= START =================

updateAnalytics("month");