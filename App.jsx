import {useState, useEffect } from "react"

import loader from "./components/Loader/Loader"

function App() {
  
  const [imagem, setImagem] = useState() 
  
  useEffect(()=> {
    getImagem()
  }, [] )

  const getImagem = async () => {

    const response = await fetch("https://dog.ceo/api/breeds/image/random Fetch")
    
  const data = await response.json()
 
  setImagem(data)
}


  return (
    <div className="App"> 

      {typeof(imagem) !=='undefined' ? 
      <img src={imagem.message}></img> 

      :
      <loader> 
        
        
        <loeader/>

    }
       
      </div>
          
      
    
  )
    


  
  
    
export default App
