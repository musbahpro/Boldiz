let open = document.getElementById("open");
let close = document.getElementById("close");
let ulList = document.getElementById("ulList");

close.addEventListener("click",()=>{
   ulList.className="navLinks"
})
open.addEventListener("click",()=>{
    ulList.className="navLinks activ"

  })
  
  function filterProjects(category) {
   const projectCards = document.querySelectorAll('.prodacts');
   projectCards.forEach(card => {
       const categories = card.classList;
       if (category === 'all' || categories.contains(category)) {
           card.style.display = 'block';
       } else {
           card.style.display = 'none';
       }
   });
}


