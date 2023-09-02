let error = document.getElementById('error');
error.style.display='none';

const searchHandelar = () =>{
    const inputSearchFrield = document.getElementById('input-search')
    const inputSearchText = inputSearchFrield.value;
    
    if(inputSearchText == ''){
        alert('please search products name');
    }
    else{
    // api 
    const url = `https://www.themealdb.com/api/json/v11/1/search.php?s=${inputSearchText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        const itemContainer = document.getElementById('row');
        let i =data.meals;
        if(i.length==0){
            console.log('sornnj')
        }
        itemContainer.innerHTML = '' ;
        
        data.meals.forEach((item)=>{
            console.log(item)
            const {strMeal,idMeal,strMealThumb,strInstructions} = item ;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('col');
            
            itemDiv.innerHTML = `
            <div onclick="itemClickHandelar(${idMeal})" class="col">
            <div class="card">
              <img src="${strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${strMeal}</h5>
                <p class="card-text">${strInstructions.slice(0,150)}</p>
              </div>
            </div>
          </div>
            `
            itemContainer.appendChild(itemDiv)
        })
    }
    ).catch(err=>errDisplayF(err))

    // clear input frield
    inputSearchFrield.value = '';
   } 
    }
    
     //error 
    function errDisplayF(err){
        error.style.display = 'block'
    }  



// api single item deatils
const itemClickHandelar =async (idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    const res = await fetch(url)
    const data = await res.json()
    displaySingelItemF(data.meals[0])
    
    
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>displaySingelItemF(data.meals[0]));
}

function displaySingelItemF(itemData){
    const itemContainer = document.getElementById('item');
    itemContainer.innerHTML =
    `
    <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${itemData.strMealThumb}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">${itemData.strMeal}</h5>
                        <p class="card-text"> ${itemData.strInstructions.slice(0,250)} </p>
                </div>
            </div>
     </div>
    `
}