// json parse and stringify

// const store = {
//     storeName : 'Bd shoping',
//     address : 'gulsan dhaka',
//     phone : '01853333434',
//     woner : 
//     {
//         ownerName : 'kabir khan',
//         ownerAddress :'pg'
//     },
//     items : ['cosmatik','soap','cold dring','other'],
//     isExpensive : false
// }

// const sendServer = JSON.stringify(store);
// console.log(sendServer.isExpensive);

// const foundServer = JSON.parse(sendServer);
// console.log(foundServer.isExpensive)


// arrow funtion in fatch
// function getData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res) => res.json()) 
//     .then(data=>{
//         const {id,title} = data;
//         const apiContainer =document.getElementById('api-container');
//         apiContainer.style.backgroundColor ='red'
//         apiContainer.style.textAlign='center';
//         const newH2 = document.createElement('h2');
//         newH2.innerHTML = `<h2> Title :- ${title} </h2> `
//         apiContainer.appendChild(newH2);
        
//         const newH1 = document.createElement('h1');
//         newH1.innerText = 'Id = ' +id;
//         apiContainer.appendChild(newH1)
//     })
// }


// old function in fatch
// const getData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function(get){return get.json()})
//     .then(function(data){
//         let {id,title} =data;
//         id='id' +id;
//         const section = document.getElementById('api-container');
//         section.style.backgroundColor = 'gray';
//         section.style.textAlign ='center';
        
//         const sectionH2 = document.createElement('h2');
//         sectionH2.innerHTML = `<p>Title : ${title} </p>`
//         sectionH2.style.color='blue';
//         section.appendChild(sectionH2)
        
//         const sectionh3 = document.createElement('h3');
//         sectionh3.innerText = id;
//         section.appendChild(sectionh3)
        
//     })
// }


function getUser () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(info => showDisplayGetUserF(info))
}

function showDisplayGetUserF (data) {

     for(const item of data){
        
        const {name,id,username,email,address} =item;
        
        const parents = document.getElementById('items-container');
        const userData = document.createElement('div');
        userData.style.padding='10px';
        userData.style.margin='10px';
        userData.style.border='1px solid red';
        userData.style.borderRadius = '5px'
        parents.appendChild(userData);
        
        //user id show
        const userId = document.createElement('h3');
        userId.style.color ='red';
        userId.innerText = 'Id :'+ id;
        userData.appendChild(userId)
        
        // name show
        const userNam = document.createElement('h3');
        userNam.innerText = `Name : ${name}`;
        userNam.style.textAlign='center'
        userNam.style.fontWeight='bold';
        userData.appendChild(userNam);
        
        // email show;
        const userEmail = document.createElement('p');
        userEmail.innerHTML = `Email : ${email}`;
        userData.appendChild(userEmail)
     }
}