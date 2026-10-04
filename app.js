const displayTime = document.getElementById("display-time");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const clearButton = document.getElementById("clear-button");
const storeButton = document.getElementById("store-button");
const storeList = document.getElementById("store-list");
const deleteList = document.getElementById("delete-list");
let storeListArray = [];

let second = 0;
let minute = 0;
let hour = 0;
let timer = null;

startButton.addEventListener("click", () => {
    timer = setInterval(() => {
        second++
        if (second == 60) {
            second = 0;
            minute++
            if (minute == 60) {
                minute = 0;
                hour++
            }
        }
    displayTime.innerText = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
    }, 1000)
    startButton.disabled = true;
});

stopButton.addEventListener("click", () => {
    clearInterval(timer);
    startButton.disabled = false;
})

clearButton.addEventListener("click", () => {
    clearInterval(timer);
    second = 0;
    minute = 0;
    hour = 0;
    displayTime.innerText = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
    startButton.disabled = false;
})

storeButton.addEventListener("click", () => {
    storeList.style.display = "block";
    let listItem = document.createElement("li");
    listItem.innerText = displayTime.innerText;
    storeList.appendChild(listItem);
    storeListArray.push(displayTime.innerText);
    if (storeListArray.length == 5) {
        let warning = document.createElement("h4");
        warning.innerText = "Maximum Store 5 Items";
        storeList.appendChild(warning);
        clearInterval(timer);
        second = 0;
        minute = 0;
        hour = 0;
    displayTime.innerText = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
        storeButton.disabled = true;
    }
    deleteList.addEventListener("click", () => {
        listItem.remove();
        storeListArray = []
        storeButton.disabled = false;
    })
})