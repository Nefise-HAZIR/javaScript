const clock=document.querySelector('.clock');

const tick =()=>{
    const now=new Date();
    const hours=now.getHours();
    const Minutes=now.getMinutes();
    const seconds=now.getSeconds();

    //console.log(hours,Minutes,seconds)

    const html=`
    <span>${hours}</span>
    <span>${Minutes}</span>
    <span>${seconds}</span>
    `;

    clock.innerHTML=html;
}

setInterval(tick, 1000);