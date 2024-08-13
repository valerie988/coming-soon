var form = document.querySelector("form")
const apparel = function() {
    let db = null
    let myStore = null
    let openDBReq = indexedDB.open("comingSoon")

    openDBReq.addEventListener("error", (err) => {
        console.warn("database not created")
    })

    openDBReq.addEventListener("success", (suc) => {
        console.log("Database successfully created")
    })

    openDBReq.addEventListener("upgradeneeded", (up) => {
        up.preventDefault()
        db = up.target.result
        myStore = db.createObjectStore("mail", {
            keyPath: "id",
            autoIncrement: true
        })
    })

    form.addEventListener("submit", (ev) => {
        ev.preventDefault()
        var email = document.querySelector("#email").value
        
        let myemail =  {
            email: email
        }
       const Trans = db.transaction("mail", "readwrite")

        Trans.oncomplete = () => {
            console.log("Transaction completed")
        }

        myStore = Trans.objectStore("mail")
        request = myStore.add(myemail)

        request.onsuccess = (e) => {
            console.log("Form successfully added")
        }

        request.onerror = (e) => {
            console.log("something went wrong with the class")
        }
    })
}
apparel()  