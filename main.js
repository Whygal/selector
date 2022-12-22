const input = document.querySelector('.input-field')
const fruitsContainer = document.querySelector('.fruitsContainer')
const fruitsArr = ['apple', 'banana', 'kiwi']

input.addEventListener('keyup', (event) => {
    fruitsContainer.innerHTML = ''
    const filteredArr = fruitsArr.filter((fruit) => fruit.includes(event.target.value))
    if(filteredArr.length > 0 ){
        displayFruits(filteredArr)
    }
    else{
        const noDivFound = document.createElement('div')
        noDivFound.innerHTML= `<p>no fruit found</p>`

        noDivFound.style.border = '1px solid black'
        noDivFound.style.color = 'white'
        noDivFound.style.background = 'red'
        noDivFound.style.fontWeight = '800'
        noDivFound.style.width = '100px'

        fruitsContainer.appendChild(noDivFound)

    }
})

const displayFruits = (arr) => {arr.forEach((fruit) => {    
    const div = document.createElement('div')
    div.innerHTML= `<p>${fruit}</p>`
    div.className='fruit'
    div.style.border = '1px solid black'
    div.style.width = '15rem'
    div.style.backgroundColor = 'blueViolet'
    div.style.color = 'white'
    div.style.borderRadius = '7%'
    fruitsContainer.appendChild(div)
})}

displayFruits(fruitsArr)


















// const span = document.querySelectorAll('span')
// const input = document.querySelector('.input-field')
// spanArr = []

// const newSpan = span.forEach(function (t){
// spanArr.push(t.innerHTML) 
// });


// const type = () => {
//       input.addEventListener('keyup', function(e){
//             let val = e.target.value;
            
//       const wordsToDel = spanArr.filter(span => !span.startsWith(val));      
//       console.log(wordsToDel)
            
//       span.forEach(function(c){
//             for(i=0;i<wordsToDel.length;i++){
//             if(c.innerText === wordsToDel[i]){
//                   console.log('yay') 
//                   c.style.visibility = "hidden"     
//             }
//             }
//       });

//       if(wordsToDel.length === 0){
//             const error = document.querySelector('.error')
//             error.style.visibility = 'visible';
//             span.forEach(function(d){
//                   d.style.visibility = 'hidden'
//             })
//       }
//       });

// }
// type() 
   







// const notFound = () => {
//                   const notFound = document.createElement('div')
//                   notFound.innerText = 'tag is not found!'
//                   document.body.appendChild(notFound)
// }

// span.forEach(function(s){
//       if(!val.startsWith(s)){
//                   notFound()    
//                   }
//             });






// const spanToDel = document.querySelector('.del')
// spanToDel.remove()

// span.forEach({function(inp){

//   inp.addEventListener('onload', function(){

//     if(div.startWith(input.innerText)){
     
// } else {
//      div.remove()
// }
//  })   

// }
// });


 

