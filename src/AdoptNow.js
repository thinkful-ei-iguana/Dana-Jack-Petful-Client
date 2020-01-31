import * as React from 'react';
import Queue from './queue-helper';
import List from './List';

export class AdoptNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: new Queue(),
      upNext: {
        dog: {
          imageURL: '',
          imageDescription: '',
          name: '',
          sex: '',
          age: 0,
          breed: '',
          story: ''
        },
        cat: {
          imageURL: '',
          imageDescription: '',
          name: '',
          sex: '',
          age: 0,
          breed: '',
          story: ''
        }
      },
      yourTurn: false,
      waitLength: 0
    };
  }

  getQuedPets() {
    Promise.all([
      fetch(
        'https://tranquil-caverns-87214.herokuapp.com/api/cat'
      ),
      fetch(
        'https://tranquil-caverns-87214.herokuapp.com/api/dog'
      )
    ])
      .then(([catrsp, dogrsp]) => {
        if (!catrsp.ok) {
          throw new Error(
            'something went wrong'
          );
        }
        if (!dogrsp.ok) {
          throw new Error(
            'something went wrong'
          );
        }
        return Promise.all([
          catrsp.json(),
          dogrsp.json()
        ]);
      })
      .then(([catjson, dogjson]) => {
        this.setState({
          ...this.state,
          upNext: {
            dog: dogjson,
            cat: catjson
          }
        });
      })
      .catch(e =>
        this.setState({
          ...this.state,
          error: e
        })
      );
  }

  componentDidMount() {
    this.getQuedPets();
    this.DequeuePeople();
  }

  QueueUpPeople(people) {
    let temp = new Queue();
    for (
      let i = 0;
      i < people.length;
      i++
    ) {
      temp.enqueue(people[i]);
    }
    temp.enqueue('You!');
    this.setState({
      people: temp,
      waitLength: people.length
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
          let turn = false;
          let wait = this.state.waitLength -1;
          if(wait <= 0){
            turn = true;
          }
          this.setState({
            people: temp,
            waitLength: wait,
            yourTurn: turn
          })
        }).then(() => {
          this.getQuedPets();
        })

      } else {
        this.setState({
          yourTurn: true
        })
      }
    }, 3000);
  }

  componentWillMount() {
    const people = [
      'Tauhida',
      'Jack',
      'Dana'
    ];
    this.QueueUpPeople(people);
  }

  render() {
    let renderbutton = null;
    if (this.state.yourTurn) {
      renderbutton = (
        <button className="AdoptDogNow__button">
          Adopt this Animal Now!
        </button>
      );
    }
    return (
      <div className="AdoptNow">
        <img
          src={
            this.state.upNext.cat
              .imageURL
          }
          alt={
            this.state.upNext.cat
              .imageDescription
          }
          width="396"
        ></img>

        <ul className="catstats">
          <li className="AdoptNow__name">
            name:{' '}
            {this.state.upNext.cat.name}
          </li>
          <li className="AdoptNow__sex">
            sex:{' '}
            {this.state.upNext.cat.sex}
          </li>
          <li className="AdoptNow__age">
            age:{' '}
            {this.state.upNext.cat.age}
          </li>
          <li className="AdoptNow__breed">
            breed:{' '}
            {
              this.state.upNext.cat
                .breed
            }
          </li>
          <li className="AdoptNow__story">
            story:{' '}
            {
              this.state.upNext.cat
                .story
            }
          </li>
          <li></li>
        </ul>

        {renderbutton}
        <img
          src={
            this.state.upNext.dog
              .imageURL
          }
          alt={
            this.state.upNext.dog
              .imageDescription
          }
          width="396"
        ></img>
        <ul className="dogstats">
          <li className="AdoptNow__name">
            name:{' '}
            {this.state.upNext.dog.name}
          </li>
          <li className="AdoptNow__sex">
            sex:{' '}
            {this.state.upNext.dog.sex}
          </li>
          <li className="AdoptNow__age">
            age:{' '}
            {this.state.upNext.dog.age}
          </li>
          <li className="AdoptNow__breed">
            breed:{' '}
            {
              this.state.upNext.dog
                .breed
            }
          </li>
          <li className="AdoptNow__story">
            story:{' '}
            {
              this.state.upNext.dog
                .story
            }
          </li>
          <li></li>
        </ul>

        {renderbutton}
        <List
          people={this.state.people}
        ></List>
      </div>
    );
  }
}

