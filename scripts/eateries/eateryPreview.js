import { EateryDialog } from "./eateryDialogue.js"

const eateryElement = document.querySelector("preview__eatery")
const eventHub = document.querySelector(".container")


eateryElement.innerHTML = `${EateryDialog()}`

// const render = () =>{

// }