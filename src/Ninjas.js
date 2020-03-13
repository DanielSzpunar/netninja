import React from 'react'

const Ninjas = ({ninjas, deleteNinja}) => {
    //console.log(props.ninjas)
    const ninjaList = ninjas.map(ninja => {
      return ninja.age > 20 ? (
        <div key ={ninja.id}>
        <div>{ninja.name}</div>
        <div>{ninja.age}</div>
        <div>{ninja.belt}</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
        </div>
      ) : null
    })

    return (
        <div>
            {ninjaList}
        </div>
    ) 
}




export default Ninjas