const eventHub = document.querySelector(".container")

//event for details button on eatery clicked
eventHub.addEventListener("click",(event) =>{
    //check the value 
    if(event.target.id.includes("eatery--") ){
        const customEvent = new CustomEvent("eateryBtnClicked",{
            detail:{
                clickedEateryId: event.target.id.split("--")[1]  
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

//convert to HTML
//only basic details more details accessed with detail button 
export const eatery = (eatery) => {
    return `<article class="preview__eatery">
    <div class="eatery__data">
    <h1 class= "eatery__data--name">Eatery: ${eatery.businessName} </h1>
    <p class="eatery__data--description"> ${eatery.description}</p>
    <p class ="eatery__data--location"> ${eatery.city}, ${eatery.state}</p>
    </div>
    <button type="text" id="eatery--${eatery.id}" class="detail__eatery">Details</button>
    </article>
    `
}