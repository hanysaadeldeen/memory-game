document.querySelector(".control-button span").onclick = function () {
    let yourName = prompt("whats your name")
    if (yourName == null || yourName == "") {
        document.querySelector(".name span").innerHTML = "unKnown"
    } else {
        document.querySelector(".name span").innerHTML = yourName
    }
    document.querySelector(".control-button ").remove()
}

let duration = 1000

let boxcontainer = document.querySelector(".memory-game")
let bloxs = (Array.from(boxcontainer.children))


let orderRange = [...Array(bloxs.length).keys()]
//? الكود ال تحت يساوي ال فوق
// *let orderRange=Array.from(Array(bloxs.length).keys())

shuffle(orderRange)



bloxs.forEach((element, index) => {
    element.style.order = orderRange[index]
    element.addEventListener("click", function () {
        //هنستدعي الفنكشن عشان تطبف عليها الأكشن
        flipblock(element)





    })

})
//flip block function

function flipblock(selected) {
    //add class
    selected.classList.add("flip")

    //collect all fliped card
    let allfilppendblocks = bloxs.filter(e => e.classList.contains("flip"))


    if (allfilppendblocks.length === 2) {
        stopclick()
        checkedmatheched(allfilppendblocks[0], allfilppendblocks[1])

    }


}
function stopclick() {

    boxcontainer.classList.add("no-click")
    setInterval(() => {
        boxcontainer.classList.remove("no-click")
    }, duration);
}
function checkedmatheched(firstblock, secondblock) {

    let triese = document.querySelector(".tries span")

    if (firstblock.dataset.technology === secondblock.dataset.technology) {
        firstblock.classList.remove("flip")
        secondblock.classList.remove("flip")

        firstblock.classList.add("has-matched")
        secondblock.classList.add("has-matched")
        document.getElementById("success").play()

    } else {
        triese.innerHTML = parseInt(triese.innerHTML) + 1
        setTimeout(() => {
            //لو محطتش وقت هيلف علطول مش هيلحق يقفل فهيبقا زي ال مفتحتش التاني
            firstblock.classList.remove("flip")
            secondblock.classList.remove("flip")
        }, duration)
        document.getElementById("fales").play()

    }


}



function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


