//open database
//create objectstore
//make transactions
let db;
let openRequest = indexedDB.open("myDatabase");
openRequest.addEventListener("success", (e) => {
    console.log("DB Success");
    db = openRequest.result;
})
openRequest.addEventListener("error", (e) => {
    console.log("DB error");
})
openRequest.addEventListener("upgradeneeded", (e) => {
    console.log("DB upgraded and also for initial DB creating");
    db = openRequest.result;
    console.log(db);

    db.createObjectStore("video", { keyPath: "id" });
    db.createObjectStore("image", { keyPath: "id" });

})