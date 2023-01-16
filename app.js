let url="http://numbersapi.com/"
let number=document.getElementById("number");
let btn_random=document.getElementById("get_random");
let btn_fact=document.getElementById("get_fact");
let fact=document.querySelector(".fact")
let fetchFact=(num)=>{
    let finalUrl=url+num;
    
    fetch (finalUrl)
    .then((resp)=>resp.text())
    .then((data)=>{
        fact.style.display="block";
        fact.innerHTML=`
        <h2>${num}</h2>
        <p>${data}</p>`
        document.querySelector(".container").append(fact);
    })
}

btn_random.addEventListener("click",function() {
        let num=Math.floor(Math.random()*301)
    fetchFact(num)
})

btn_fact.addEventListener("click",function(){
    let num=number.value;
    fetchFact(num)
    
});

fetchFact(100)