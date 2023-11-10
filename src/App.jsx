import React from 'react';
import { useState } from 'react';

const App = () => {

    const [item, setItem] = useState();
    const [list, setlist] = useState([])

    const itemAdd = ()=>{
        list.push(item);
        setlist([...list])
    }

    const noRefresh = (e) =>{
        e.preventDefault()
    }


    const removeData = (index)=>{
        list.splice(index);
        setlist([...list])
    }

    return (
        <>
            <table>
                <tbody>
                    {
                        list.length!==0 ?(
                            list.map((element, index)=>{
                                return (
                                    <tr>
                                        <td>{element}</td>
                                        <button onClick={()=>{removeData(index)}}>Remove</button>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr></tr>
                        )
                    }
                </tbody>
            </table>
            <form onSubmit={noRefresh}>
                <label>Name</label>
                <input onChange={(e)=>setItem(e.target.value)} type='text' placeholder='Type your name'/>
                <button onClick={itemAdd} >Submit</button>
            </form>
            
        </>
    );
};

export default App;