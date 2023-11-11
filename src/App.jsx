import React, { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

    useEffect(()=>{
        console.log("Hello")
    },[15  ])

    const [myData, setmyData] = useState({name : "", roll : "", city : "", gender : "" })

    const myinputData = (property, value)=>{
        setmyData(prvObj=>({
            ...prvObj,
            [property] : value
        })) 
    }
    const refreshOff = (event)=>{
        event.preventDefault();
        console.log(myData)
    }


    return (
        <div className='container'>

        <form onSubmit={refreshOff}>
            <label> Name :</label>
            <input onChange={(e)=>{myinputData("name", e.target.value)}} value={myData.name} type="text" placeholder='Type your name' />
            <label> Roll :</label>
            <input onChange={(e)=>{myinputData("roll", e.target.value)}} value={myData.roll} type="number" placeholder='Type your roll' />
            <select onChange={(e)=>{myinputData("city", e.target.value)}} value={myData.city} name="" id="">city : 
                <option value="">Choose City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
            </select>
            <label>Gender :</label>
            <input onChange={()=>{myinputData("gender","male")}} checked={myData.gender==="male"} type="radio" name="gender" /> Male
            <input onChange={()=>{myinputData("gender","female")}}checked={myData.gender==="female"}type="radio" name="gender" /> Female
            <br />

            <button>Submit</button>
        </form>


    

        </div>
    );
};

export default App;