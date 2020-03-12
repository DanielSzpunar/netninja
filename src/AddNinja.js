import React from 'react'

class AddNinja extends React.Component {
    

    
    handleSumbit = (e) => {
        e.preventDefault()
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handlerSubmit}>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" />

                    <label htmlFor='age'></label>
                    <input type="text" id="age" />

                    <label htmlFor='belt'></label>
                    <input type="text" id="belt" />
                </form>
            </div>
        )
    }
}

export default AddNinja