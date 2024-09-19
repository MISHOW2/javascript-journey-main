const getUserData =  async ()=>{
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await response.json();
     
    let loadUser = document.getElementById('load-users');
  
    
    console.log(users);
    
  
    users.forEach(user => {
      let userDiv = document.createElement("div");
  
      userDiv.classList.add('user');
  
      userDiv.innerHTML =`
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
          <p>Website: ${user.website}</p>
      `;
  
      loadUser.appendChild(userDiv);
      
      loadUser.style.textAlign ="left"
      
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

getUserData();