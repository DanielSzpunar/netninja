import React from 'react'

const Ninjas = ({ninjas}) => {
    //console.log(props.ninjas)
    console.log(ninjas)
    const ninjaList = ninjas.map(ninja => {
        return (
          <div key = {ninja.id}>
            <div>{ninja.name}</div>
            <div>{ninja.age}</div>
            <div>{ninja.belt}</div>
          </div>
        );
    })

    return (
        <div>
            {ninjaList}
        </div>
    ) 
}




export default Ninjas