import { Component } from "react";
import check from './checked.png';

export class ToDoList extends Component {
    constructor() {
        super ();

        this.state = {
            userInput: '',
            toDoList: []
        }
    }
    
    onChangeEvent (e) {
        this.setState ({ userInput: e})
    }
    onFormSubmit(e) {
        e.preventDefault();
    }
    addItem(input) {
        if (input==='') {
            alert ('Please enter an item')
        }
        else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList: listArray, userInput: ''})
        }
    }
    deleteItem () {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray})
    }
    crossedWord (event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }


    render () {
        return(
            <div>
                <form onSubmit = {this.onFormSubmit}>
            <div className="container">
                <input type="text" 
                placeholder="What needs to be done?"
                onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                value = {this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick = {() => this.addItem(this.state.userInput)} className="btn-add btn">ADD</button>
            </div>
            <ul>
                {this.state.toDoList.map((item, index) =>(
                    <li onClick = {this.crossedWord} key={index}>
                        <img src={check} width="30px" alt="shoppingBag"/>
                    {item}
                    </li>
                    
                ))}
            </ul>
            <div className="container">
                <button onClick = {() => this.deleteItem()} className="btn-delete btn">Delete</button>
            </div>
            </form>
            </div>
        )
    }
}