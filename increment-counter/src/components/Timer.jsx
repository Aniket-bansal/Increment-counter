import React, { useEffect, useState } from 'react'

function Timer() {
    const[timer,setTimer] = useState(10)

    useEffect(()=>{
       const id= setInterval(()=>{
           if(timer>100)
           {
               clearInterval(id)
           }
           else{
            setTimer(timer+1)
           }
            
        },1000)

    return()=>{
        clearInterval(id)
   };
    }, []);

  return (
    <div>Count UP: {timer}
    </div>
  )
}

export default Timer