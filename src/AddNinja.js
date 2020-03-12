import React from 'react'

class AddNinja extends React.Component {
    state = {
        name: null,
        age: null,
        belt: null
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNinja(this.state)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        
        })
        console.log(e.target.value)
    }
    render() {
        return(
            <div>
            <div>Form information:</div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />

                    <label htmlFor='age'>Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />

                    <label htmlFor='belt'>Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    <button>Submit:</button>
                </form>
                <br />
            </div>
        )
    }
}
export default AddNinja