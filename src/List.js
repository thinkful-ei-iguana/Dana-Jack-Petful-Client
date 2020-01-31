import React from 'react';
import Queue from './queue-helper'

class List extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
        people: this.props.people
    } 
    }
    render() {
        console.log(this.state.people);
        let curr = this.state.people.first;
        console.log('cur is ', curr);
        let list = [<li className='person'>{curr.value}</li>];
        curr = curr.next;
        while (curr !== null) {
            list = [...list, <li className='person'>{curr.value}</li>];
            curr = curr.next;
        }
        console.log('list is ', list);
        return (
            <div className='list'>
                <ul className='people_list'>
                    {list}
                </ul>
            </div>
        )
    }
}
export default List;