let db;
let budgetVersion;

// Creates a new db request for a "budget" database
const request = indexedDB.open("BudgetDB", budgetVersion || 21);
