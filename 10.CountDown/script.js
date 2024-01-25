function timeCount(){
    let div=document.querySelector('.time')
    let input=document.querySelector('.addTime').value

    let interval=setInterval(()=>{
        const hour=Math.floor(input/3600);
        const minutes=Math.floor((input % 3600)/60)
        const second=input%60;
        div.textContent=`${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(second).padStart(2, '0')}`;

        if(input===0){
            clearInterval(interval);
            alert('Timer is finished!');
        }else{
            input--;
        }
    },1000)
}