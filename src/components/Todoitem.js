import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
    return {
        borderBottom:'1px solid black',
        backgroundColor: '#eee',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }      
            }
        
            markComplete = () => {

            }
     
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(
                        this,id)} /> {' '}
                   <h5> {title}</h5>
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>Delete</button>
                    </p>
            </div>
        )
    }
}
//Proptypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px',
    float: 'right'

}
export default Todoitem
