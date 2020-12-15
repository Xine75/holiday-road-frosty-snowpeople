const eventHub = document.querySelector(".container")

//event for details button on eatery clicked
eventHub.addEventListener("click",(event) =>{
    if(event.target.includes("eatery--")){
        const customEvent = new CustomEvent("eateryBtnClicked",{
            detail:{
                clickedEateryId: event.target.id
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

//convert to HTML
//only basic details more details accessed with detail button 
export const Eatery = (eatery) => {
    return `<article class="preview__eatery">
    <div class="eatery__data">
    <h2 class= "eatery__data--name">${eatery.businessName} </h2>
    <p class="eatery__data--description"> ${eatery.description}</p>
    <p class ="eatery__data--location">Location: ${eatery.city}, ${eatery.state}</p>
    <p class="eatery__data--accessiblity">Wheelchair Accessible: ${eatery.ameneties.wheelchairAccessible} </div>
    </div>
    <button type="text" id="detail" class="detail__eatery">Eatery Detail</button>
    </article>
    `
}