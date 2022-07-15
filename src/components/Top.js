import React,{useState} from "react";
import { Button } from "react-bootstrap";

export default function Top() {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 350){
        setVisible(true)
      } 
      else if (scrolled <= 10){
        setVisible(false)
      }
    };
    window.addEventListener('scroll', toggleVisible);
    const goto=()=>{
      window.scrollTo({top:0,behavior:'smooth',})
    }
  return (
    <>
      {(visible)&&<Button variant="dark" onClick={goto} id="go"><i className="far fa-arrow-alt-circle-up" ></i></Button>}
    </>
  );
}
