//  const animItems = document.querySelectorAll('.animation')

// if (animItems.length > 0){
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll(){
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemHeight = animItem.animItems;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 0

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if(animItemHeight > window.innerHeight){
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }
            
//             if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
//                 animItem.classList.add('_active');
//             } else{
//                 animItem.classList.remove('_active');
//             }
//             function offset(el){
//                 const rect = el.getBoundingClientRect(),
//                 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//                 scrollTop = window.pageXOffset || document.documentElement.scrollTop;
//                 return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
//             }
//         }
//     }
// }

const scrollElements = document.querySelectorAll(".animation");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("_active");
};

const hideScrollElement = (element) => {
  element.classList.remove("_active");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
      console.log(el)
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});





const myLink = document.querySelector('#boxing') 
const block = document.querySelector('.boxing')
 
 
myLink.addEventListener('click', (e) =>{ 
    const coords = block.getBoundingClientRect()
    window.scrollTo({ 
        top: coords.top, 
        left: coords.left, 
        behavior: 'smooth' 
    }); 
})

const myLunk = document.querySelector('#fitboxing') 
const myblock = document.querySelector('.fitboxing')
 
 
myLunk.addEventListener('click', (e) =>{ 
    const coords = myblock.getBoundingClientRect()
    window.scrollTo({ 
        top: coords.top, 
        left: coords.left, 
        behavior: 'smooth' 
    }); 
})

const myConts = document.querySelector('#escape') 
const blocks = document.querySelector('.boxing')
 
 
myConts.addEventListener('click', (e) =>{ 
    const coords = myblock.getBoundingClientRect()
    window.scrollTo({ 
        top: coords.top, 
        left: coords.left, 
        behavior: 'smooth' 
    }); 
})
