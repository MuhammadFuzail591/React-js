const arrowRight = document.querySelector(".right-btn");
const arrowLeft = document.querySelector(".left-btn");
const basket1Count = document.querySelector(".basket-1-count");
const basket2Count = document.querySelector(".basket-2-count");
let count1 = parseInt(basket1Count.textContent);
let count2 = parseInt(basket2Count.textContent);

arrowLeft.addEventListener("click",()=>{
    if(count1>0 && count2>0){
        count1++;
        count2--;
        basket1Count.textContent = count1;
        basket2Count.textContent = count2;
    }

})
arrowRight.addEventListener("click",()=>{
    count1--;
    count2++;
    basket1Count.textContent = count1;
    basket2Count.textContent = count2;
})