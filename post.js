document.getElementById('random').addEventListener('click',()=>{
    fetch('https://api.kanye.rest')
    .then(res=>res.json())
    .then(data=>{
        const block = document.getElementsByTagName('blockquote')[0];
        block.innerText = data.quote;
    })

})



    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=> allPost(data))

const allPost = (allPost) =>{
    const parents = document.getElementById('all-posts');
    
     for(const post of allPost){
        const {id,title,body}=post;
        
        // single post container
        const postItem = document.createElement('div');
        postItem.style.border='1px solid blue';
        postItem.style.padding='10px';
        postItem.style.margin='10px';
        postItem.style.borderRadius='5px';
        parents.appendChild(postItem);
        
        //post id
        const postId = document.createElement('h3');
        postId.style.color='red';
        postId.style.textAlign='center';
        postId.innerText = 'id '+id
        postItem.appendChild(postId);
        
        // post title 
        const postTitle = document.createElement('h3');
        postTitle.classList.add='tittle'
        // postTitle.style.textAlign='center';
        // postTitle.style.color='black';
        postTitle.innerHTML = `${title}`;
        postItem.appendChild(postTitle);
        
        // post body 
        const postDiscription = document.createElement('p');
        postDiscription.style.textAlign='center';
        postDiscription.style.lineHeight = '26px';
        postDiscription.innerText = body;
        postItem.appendChild(postDiscription);
     }
}