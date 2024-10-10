const listImage = document.querySelector('.list-images')
const imgs = document.getElementsByTagName('img')
const length = imgs.length
let current = 0
setInterval(()=>{
    console.log(current);
    if(current == length - 1){
        current = 0
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(0px)`
    }else
    {
        current ++
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width*-1*current}px)`;      
    }
},3000)