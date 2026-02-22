import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ButtonComponent from './components/ButtonComponent'
import FooterComponent from './components/FooterComponent'

//let number = 0;


function App() {
  const [number, setNumber] = useState(0);
  let myPlaceHolder = "Escribe aquí";
  const[greetings, setGreetings] = useState("Bienvenidos a mi web");
  

  const addOne = () => {
  //number++;
  setNumber(number + 1);
  console.log(number);
  
  
}

  return (
    <>

    <HeaderComponent greetings ={greetings}></HeaderComponent>

    <main className="main-content">
    <h2>Hola</h2>
    <h2 onClick={addOne}>Number: {number}</h2>
    <input placeholder={myPlaceHolder} type="text" />
     <ButtonComponent></ButtonComponent>
    </main>
    <footer>
      <FooterComponent></FooterComponent>


    </footer>
     
    </>
  )
}

export default App
