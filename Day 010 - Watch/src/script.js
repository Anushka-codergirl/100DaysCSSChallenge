const date=document.querySelector(".clock__date");
const time=document.querySelector(".clock__time");
const subShield=document.querySelector(".subShield");

const printDots=()=>{
  for(let i=0;i<60;i++){
  let dot=document.createElement("div");
  dot.classList.add("subShield__dot")
  dot.style.transform=`rotate(${360/60*i}deg) translateX(80px) `
  subShield.appendChild(dot)
  }
  
}


printDots();

const getData=()=>{
  let now=new Date();
  let arr=now.toString().split(" ");
  date.textContent=`${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]}`;
  time.innerHTML=`${arr[4].split(":")[0]}:${arr[4].split(":")[1]}<span>${arr[4].split(":")[2]}</span>`;
}

const heartChange=()=>{
  let ratio=Math.round(Math.random()*(110 - 50) + 50)
  const circle=document.querySelector("circle")
  const heart=document.querySelector(".heart");
  const pulse=document.querySelector(".pulse");
  pulse.textContent=ratio;
  heart.style.animationDuration=`${60/ratio}s`;
  circle.style.animationDuration=`${60/ratio}s`
}
setInterval(getData,1000)
setInterval(heartChange,5000)