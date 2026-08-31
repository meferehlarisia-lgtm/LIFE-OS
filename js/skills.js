// ================= SKILLS DATA =================

let skills = [
    {
        name: "HTML",
        category: "Web Development",
        progress: 90
    },
    {
        name: "CSS",
        category: "Web Development",
        progress: 80
    },
    {
        name: "JavaScript",
        category: "Programming",
        progress: 65
    },
    {
        name: "Photoshop",
        category: "Design",
        progress: 60
    },
    {
        name: "Git & GitHub",
        category: "Development Tools",
        progress: 45
    }
];


// ================= DISPLAY SKILLS =================

function displaySkills() {

    const skillsList = document.getElementById("skillsList");

    if (!skillsList) return;

    skillsList.innerHTML = "";

    skills.forEach((skill) => {

        const skillItem = document.createElement("div");

        skillItem.className = "skill-item";

        skillItem.innerHTML = `
            <div class="skill-item-top">

                <div class="skill-name">

                    <div class="skill-icon">
                        <i class="fa-solid fa-code"></i>
                    </div>

                    <div>
                        <strong>${skill.name}</strong>
                        <small>${skill.category}</small>
                    </div>

                </div>

                <span class="skill-percent">
                    ${skill.progress}%
                </span>

            </div>

            <div class="skill-progress">
                <div style="width: ${skill.progress}%"></div>
            </div>

            <div class="skill-footer">

                <span>
                    ${
                        skill.progress >= 100
                            ? "Completed"
                            : "In progress"
                    }
                </span>

                <span>
                    ${skill.progress >= 70 ? "Good progress" : "Keep learning"}
                </span>

            </div>
        `;

        skillsList.appendChild(skillItem);

    });

    updateSkillStats();
}


// ================= UPDATE STATISTICS =================

function updateSkillStats() {

    const total = skills.length;

    const completed =
        skills.filter(skill => skill.progress >= 100).length;

    const inProgress = total - completed;

    const average =
        total === 0
            ? 0
            : Math.round(
                skills.reduce(
                    (sum, skill) => sum + skill.progress,
                    0
                ) / total
            );

    document.getElementById("totalSkills").textContent = total;

    document.getElementById("progressSkills").textContent =
        inProgress;

    document.getElementById("completedSkills").textContent =
        completed;

    document.getElementById("averageSkill").textContent =
        average + "%";
}


// ================= ADD SKILL =================

const addSkillBtn =
    document.getElementById("addSkillBtn");

if (addSkillBtn) {

    addSkillBtn.addEventListener("click", function () {

        const name = prompt("Enter skill name:");

        if (!name) {
            return;
        }

        const category =
            prompt("Enter skill category:");

        if (!category) {
            return;
        }

        const progress =
            Number(prompt("Enter progress (0 - 100):"));

        if (
            isNaN(progress) ||
            progress < 0 ||
            progress > 100
        ) {
            alert("Please enter a number between 0 and 100.");

            return;
        }

        skills.push({
            name: name,
            category: category,
            progress: progress
        });

        displaySkills();

    });

}


// ================= START =================

displaySkills();