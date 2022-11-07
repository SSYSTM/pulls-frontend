import React, { useState } from 'react'
function Notes() {
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)

    function getData(val) {
        console.warn(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }
    return (
        <div className="App">
            {
                print ?
                    <p className="" style={{ textAlign: 'center', marginTop: '50px', border: '2px solid grey', paddingTop: '60px', paddingBottom: '60px', marginRight: '10px', marginLeft: '45px' }}> {data}</p>
                    : null
            }
            <textarea type="text" onChange={getData} placeholder="Add your notes..." style={{ width: '100 %', height: '150px', padding: '250px', boxSizing: 'border-box', border: '2px solid #ccc', borderRadius: '4px', marginTop: '90px', marginLeft: '50px' }} />
            <br />
            <button onClick={() => setPrint(true)} className="bg-cyan-500 hover:bg-cyan-600" style={{ padding: '5px', borderRadius: '5%', marginLeft: '3.2rem' }}>Add note</button>
        </div>
    );
}

export default Notes