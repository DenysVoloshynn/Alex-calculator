
function addListenerToButtonDelete() {
    const buttonsDelete = document.querySelectorAll(".delete")

    for (let button of buttonsDelete) {
        button.addEventListener("click", function deleteLesson(e) {
            const card = e.target.closest(".card")
            card.remove()
            countMiddle(e)
        })
    }

}
addListenerToButtonDelete()


const createSubj = document.querySelector("#create-subj")
createSubj.addEventListener("click", function createSubj(e) {
    e.preventDefault()

    const subjInput = document.querySelector("#input-subj")

    const cardHTML = `            <div class="card">
    <p class="subject-name">${subjInput.value}</p>
    <div class="radio-wrapper selection">
        <div class="radio">
            1
            <input type="radio" name="matematikk">
        </div>
        <div class="radio">
            2
            <input type="radio" name="matematikk">
        </div>
        <div class="radio">
            3
            <input type="radio" name="matematikk">
        </div>
        <div class="radio">
            4
            <input type="radio" name="matematikk">
        </div>
        <div class="radio">
            5
            <input type="radio" name="matematikk">
        </div>
        <div class="radio">
            6
            <input type="radio" name="matematikk">
        </div>
        <button class="delete"> &#10005; </button>
    </div>
</div>`


    if (subjInput.value.trim().length > 0) {
        const cardsList = document.querySelector(".cards-list")
        cardsList.insertAdjacentHTML("afterbegin", cardHTML)

        subjInput.value = ""
        subjInput.focus()

        addListenerToButtonDelete ()
        addListenerToSelections ()
    }

})







function addListenerToSelections() {
    const selections = document.querySelectorAll(".selection")
    for (let selection of selections) {
        selection.addEventListener("click", function (e) {
            if (e.target.closest(".radio")) {

                removeAttributes(e, selection)
                const currRadio = e.target.closest(".radio")
                currRadio.setAttribute("active", null)
                countMiddle(e)
            }
        })
    }
}
addListenerToSelections ()


function removeAttributes(e, currSelection) {
    const activeRadio = currSelection.querySelector("[active]")
    if (activeRadio) {
        activeRadio.removeAttribute("active")
    }
}



let middle = 0

function countMiddle(e) {
    const middleHTML = document.querySelector("#middle-number")
    const allActiveRadios = document.querySelectorAll("[active]")

    let overAll = 0

    for (let activeRadio of allActiveRadios) {

        overAll += +activeRadio.innerText
        middle = +overAll / +allActiveRadios.length

    }

    if(allActiveRadios.length === 0) {
        middle = 0
    }

    middleHTML.innerText = middle.toFixed(2)


    
}