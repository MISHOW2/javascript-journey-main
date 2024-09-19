/*fetch('https://dog.ceo/api/breeds/image/random', {
  method: 'GET',
 
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
*/
let fetchBtn = document.getElementById("fetch-btn");

fetchBtn.addEventListener("click", ()=>{
  const fetchPicture = async ()=>{

  try {
    const fetchApi = await fetch('https://dog.ceo/api/breeds/image/random');

    const json = await fetchApi.json();

    console.log(json);
    
   let dogImg = document.getElementById("dog-image");

   dogImg.src = json.message;
    
  } catch (error){
    console.log(error)
  }
   

}

fetchPicture();
})



