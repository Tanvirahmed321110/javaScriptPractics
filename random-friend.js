// random friends api
const randomFriendApiF = () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(function(data) {displayRandomFriend(data)})
}
randomFriendApiF()

const displayRandomFriend = (allObject) => {
    const friendContainer = document.getElementById('friends');       
        const friends =allObject.results;
        const maleFriend = friends.filter((friend)=>friend.gender=='female');
        const maleFriend12 = maleFriend.slice(0,12);
        
        for (const friend of maleFriend12){
            const {phone,email} = friend;
            const {medium} = friend.picture
            const friendDiv = document.createElement('div');
            friendDiv.classList.add('friend');
            
            friendDiv.innerHTML = 
            `<img src=" ${medium}">
            <h3>Name : ${friend.name.title} ${friend.name.first} ${friend.name.last} </h3>
            <p>Address: ${friend.location.city} ${friend.location.state} ${friend.location.country} </p>
            <small>email : ${email}</small>
            <h4>Phone : ${phone}</h4>
            `
            friendContainer.appendChild(friendDiv)
    }

}