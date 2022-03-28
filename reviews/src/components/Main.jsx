import { Data } from "./data";
import React, { useState } from "react";
import { ReactComponent as NextIcon } from "../svgs/next.svg";
import { ReactComponent as PrevIcon } from "../svgs/previous.svg";

const Main = () => {
  const [data, setData] = useState(Data);
  const [index,setIndex]=useState(0);
  //const [display, setDisplay] = useState(data[0]);
  const {name,job,description,img}=data[index]

 
  const checkIndex=(Newindex)=>{
      if(Newindex>data.length-1){
        return 0;}
        if (Newindex<0){
            return data.length-1;
        }
        return Newindex;
    }

 const nextPerson=()=>{
      setIndex((index)=>{
          const Newindex=index+1;
         
        return checkIndex(Newindex);
      })
  }  

  const prevPerson=()=>{
    setIndex((index)=>{
        const Newindex=index-1
        return checkIndex(Newindex);
    })
}  

const handleSurprise=()=>{
    const randomNumber=Math.floor(Math.random()*(data.length));
    setIndex(randomNumber);
}
  return (
    <div>
      <h1>Our Reviews</h1>
      <div className="container">
        <img src={img} alt="" />
        <h4 className="name">{name}</h4>
        <p className="title">{job}</p>
        <p className="description">{description}</p>
        <div className="icons">
          <button onClick={prevPerson}>
            <PrevIcon />
          </button>
          <button onClick={nextPerson}>
            <NextIcon />
          </button>
        </div>
        <button  onClick={handleSurprise} className="surprise">Surprise Me</button>
      </div>
    </div>
  );
};
export default Main;
