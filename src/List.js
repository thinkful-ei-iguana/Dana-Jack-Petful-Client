import React from 'react';
import Queue from './queue-helper'

class List extends React.Component {
    constructor(props){
        super(props);  
    }
    state = {
        people: new Queue()
    }

    QueueUpPeople(people) {
        let temp = new Queue();
        for (let i = 0; i < people.length; i++) {
            temp.enqueue(people[i]);
        }
        temp.enqueue('You!');
        this.setState({
            people: temp
        })
    }

    DequeuePeople() {
        setInterval(() => {
            let temp = this.state.people;
            if (temp.first.value !== 'You!') {
                temp.dequeue();
                fetch(
                    'https://tranquil-caverns-87214.herokuapp.com/api/cat',
                    { method: 'DELETE' }
                ).then(() => {
                    this.setState({
                        people: temp
                    })
                }).then(() =>{
                })

            }
        }, 3000)
    }

    componentDidMount() {
        this.DequeuePeople();
    }

    componentWillMount() {
        const people = ['a', 'b'];
        this.QueueUpPeople(people);
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