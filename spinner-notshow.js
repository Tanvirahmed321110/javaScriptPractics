const api = (inputTextSearch)=>{
    if(inputTextSearch == ''){
        alert("please type name of hotel food");
        spinnerF('none')
    } 
    else if(inputTextSearch){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputTextSearch}`)
    .then((response)=>response.json())
    .then((data)=>displayResultF(data.meals));
        }
}
// handelar search
document.getElementById('searchItemHandelar').addEventListener('click',function(){
    const inputSearch = document.getElementById('input-search')
    let inputTextSearch = inputSearch.value ;
    
    spinnerF('block');
    toggleItem('none')
    api(inputTextSearch)
    // clear input frield
    inputSearch.value = ''
})
// textsearch default
api('fish')

// spinner 
const spinnerF = (offOrOn) =>{
    document.getElementById('spinner').style.display =`${offOrOn}`;
}
// items
const toggleItem = (blockOrnone) =>{
    document.getElementById('items').style.display = `${blockOrnone}`;
}

// display result 
const displayResultF = (items) =>{
    let notAvailable = document.getElementById('Not');
    if(items == null){
        notAvailable.style.display='block'
        notAvailable.innerHTML=`<h2> Sorry item not available!! </h2>`
        }
        
        const container = document.getElementById('items');
        container.textContent = ''
        items?.forEach((item)=>{
        
        const {strMealThumb,strMeal,strInstructions,strIngredient14} = item ;
        console.log(item)
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
            <img width="220px" src="${strMealThumb}">
            <h2>Item Name : ${strMeal} </h2> 
            <p> ${strInstructions.slice(0,122)}</p>
            <h4> ${strIngredient14 ? strIngredient14 : 'Not '} </h4>
        `
        container.appendChild(div);   
        // not available display none;
        notAvailable.style.display='none';
    })
    spinnerF('none');
    toggleItem('block');

}