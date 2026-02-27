// Typing Effect
const text = "Mobile Apps • AI Systems • Automation Tools";
let i = 0;
function typing(){
  if(i < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", ()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// Counter Animation
const counters = document.querySelectorAll(".counter");
counters.forEach(counter=>{
  const update = ()=>{
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target/100;
    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update,20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});