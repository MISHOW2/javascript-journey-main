

fetch('https://dummyjson.com/products/add',{

  method: 'POST',
  headers:{
    'Content-type': 'application/json'
  },
  body: JSON.stringify({

  })
}).then(response =>response.json()
).then(data => console.log(data)
)




/*const getAllProducts = async () =>{

  try {
    const response = await fetch('https://dummyjson.com/products');

    const json = await response.json();
    console.log(json);
    
  } catch (error) {
     console.log(error);
     
  }
  
}

getAllProducts()*/