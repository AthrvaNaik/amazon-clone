const images=document.querySelectorAll('.header-slider ul img')
const prev=document.querySelector('.control-prev')
const next=document.querySelector('.control-next')

let n=0
function changeSlide(){
    for (let i = 0; i <images.length; i++) {
        images[i].style.display='none'
    }
    images[n].style.display='block'
}


prev.addEventListener('click',(e)=>{
    if(n>0){
        n-=1
    }else{
        n=images.length-1;
    }
    changeSlide()
})
next.addEventListener('click',(e)=>{
    if(n<images.length-1){
        n+=1
    }else{
        n=0;
    }
    changeSlide()
})



const scrollContainer=document.querySelectorAll('.products')
for (const item of scrollContainer) {
    item.addEventListener('wheel',(e)=>{
        e.preventDefault()
        item.scrollLeft+=e.deltaY
        
    })
}