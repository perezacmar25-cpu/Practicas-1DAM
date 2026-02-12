

function ButtonComponent() {

    const sayHello = () =>{
        console.log("Hello");
        
    }

    const handleChange = (e) => {
        console.log(e);
        
    }
  return (
    <><><button onClick={sayHello}>
          Login
      </button><br /></><input type="text" onChange={handleChange} /></>)
}

export default ButtonComponent
