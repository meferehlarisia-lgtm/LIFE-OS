// ================= FINANCE DATA =================

let transactions = [
    {
        name: "Transport",
        amount: 500,
        type: "expense",
        date: "Today"
    },
    {
        name: "Food",
        amount: 2000,
        type: "expense",
        date: "Today"
    },
    {
        name: "Chips Business",
        amount: 25000,
        type: "income",
        date: "Yesterday"
    }
];


// ================= ELEMENTS =================

const addTransactionBtn =
    document.getElementById("addTransactionBtn");

const transactionModal =
    document.getElementById("transactionModal");

const closeModal =
    document.getElementById("closeModal");

const cancelTransaction =
    document.getElementById("cancelTransaction");

const transactionForm =
    document.getElementById("transactionForm");

const transactionList =
    document.getElementById("transactionList");


// ================= CALCULATE FINANCE =================

function calculateFinance() {

    let income = 0;
    let expenses = 0;

    transactions.forEach(function (transaction) {

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


// ================= DISPLAY TRANSACTIONS =================

function displayTransactions() {

    transactionList.innerHTML = "";

    transactions.forEach(function (transaction) {

        const row = document.createElement("div");

        row.className = "transaction";


        // ICON

        const icon = document.createElement("div");

        icon.className =
            "transaction-icon " + transaction.type;


        if (transaction.type === "income") {

            icon.innerHTML =
                '<i class="fa-solid fa-arrow-down"></i>';

        } else {

            icon.innerHTML =
                '<i class="fa-solid fa-arrow-up"></i>';

        }


        // INFORMATION

        const info = document.createElement("div");

        info.className = "transaction-info";

        info.innerHTML = `
            <strong>${transaction.name}</strong>
            <small>${transaction.date}</small>
        `;


        // AMOUNT

        const amount = document.createElement("strong");

        amount.className =
            "amount " + transaction.type;


        const sign =
            transaction.type === "income"
                ? "+"
                : "-";


        amount.textContent =
            sign +
            transaction.amount.toLocaleString() +
            " FCFA";


        row.appendChild(icon);

        row.appendChild(info);

        row.appendChild(amount);

        transactionList.appendChild(row);

    });
}


// ================= OPEN MODAL =================

addTransactionBtn.addEventListener("click", function () {

    transactionModal.classList.add("show");

});


// ================= CLOSE MODAL =================

closeModal.addEventListener("click", function () {

    transactionModal.classList.remove("show");

});


cancelTransaction.addEventListener("click", function () {

    transactionModal.classList.remove("show");

});


// ================= CLOSE WHEN CLICKING OUTSIDE =================

transactionModal.addEventListener("click", function (event) {

    if (event.target === transactionModal) {

        transactionModal.classList.remove("show");

    }

});


// ================= ADD TRANSACTION =================

transactionForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("transactionName").value.trim();

    const amount =
        Number(
            document.getElementById("transactionAmount").value
        );

    const type =
        document.getElementById("transactionType").value;


    // VALIDATION

    if (!name) {

        alert("Please enter a transaction name.");

        return;
    }


    if (!amount || amount <= 0) {

        alert("Please enter a valid amount.");

        return;
    }


    if (type !== "income" && type !== "expense") {

        alert("Please select a transaction type.");

        return;
    }


    // ADD TRANSACTION

    transactions.unshift({

        name: name,

        amount: amount,

        type: type,

        date: "Just now"

    });


    // UPDATE PAGE

    calculateFinance();

    displayTransactions();


    // CLEAR FORM

    transactionForm.reset();


    // CLOSE MODAL

    transactionModal.classList.remove("show");

});


// ================= START FINANCE =================

calculateFinance();

displayTransactions();