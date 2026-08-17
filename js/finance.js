// ================= FINANCE DATA =================

let transactions = [
    {
        name: "Transport",
        amount: 500,
        type: "expense"
    },
    {
        name: "Food",
        amount: 2000,
        type: "expense"
    },
    {
        name: "Freelance Work",
        amount: 25000,
        type: "income"
    }
];


// ================= CALCULATE FINANCE =================

function calculateFinance() {

    let income = 0;
    let expenses = 0;

    transactions.forEach(transaction => {

        if (transaction.type === "income") {
            income += transaction.amount;
        }

        if (transaction.type === "expense") {
            expenses += transaction.amount;
        }

    });

    const balance = income - expenses;

    document.getElementById("income").textContent =
        income.toLocaleString() + " FCFA";

    document.getElementById("expenses").textContent =
        expenses.toLocaleString() + " FCFA";

    document.getElementById("balance").textContent =
        balance.toLocaleString() + " FCFA";

    document.getElementById("savings").textContent =
        balance.toLocaleString() + " FCFA";
}


// ================= ADD TRANSACTION =================

const addTransactionBtn =
    document.getElementById("addTransactionBtn");

addTransactionBtn.addEventListener("click", function () {

    const name = prompt("Enter transaction name:");

    if (!name) {
        return;
    }

    const amount = Number(
        prompt("Enter amount:")
    );

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const type = prompt(
        "Enter type: income or expense"
    );

    if (type !== "income" && type !== "expense") {
        alert("Please enter income or expense.");
        return;
    }

    transactions.push({
        name: name,
        amount: amount,
        type: type
    });

    calculateFinance();

    alert("Transaction added successfully!");

});


// ================= START =================

calculateFinance();