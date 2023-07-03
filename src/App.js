import react, { useState } from 'react';

function App() {
   let mycolor="blue";
   
   const [bg,setbg] =useState(mycolor);
   const[name,setname] = useState("click me");

   const Bgchange = () =>{
    let newbg="red";
    setbg(newbg);
    setname("click ..doubleclick");
    
  
  };
  const Bgback =()=>{
    setbg(mycolor);
    setname("how are you?");
  };
  
  return (
   <>
   <div style={{ backgroundColor:bg }}>
    <center>
    <button onClick={Bgchange} onDoubleClick={Bgback}>{name}</button>
  </center>
  </div>
   </>
  );
  }
export default App;
