let db;
let budgetVersion;

// Creates a new db request for a "budget" database
const request = indexedDB.open("BudgetDB", budgetVersion || 21);

request.onupgradeneeded = function (e) {
  console.log("Upgrade needed in IndexDB");

  const { oldVersion } = e;
  const newVersion = e.newVersion || db.version;

  console.log(`DB updated from version ${oldVersion} to ${newVersion}`);

  db = e.target.result;

  if (db.objectStoreNames.length === 0) {
    db.creatObjectStore("BudgetStore", { autoIncrement: true });
  }
};

request.onerror = function (e) {
  console.log(`Whoops! ${e.target.errorCode}`);
};
