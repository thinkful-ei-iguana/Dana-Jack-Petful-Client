import * as React from 'react';
import Queue from './queue-helper';
import List from './List'

export class AdoptNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      queue: new Queue().enqueue(
        this.people[0]
      )
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
  }

  people = [
    'Tauhida',
    'Jack',
    'Dana',
    'Benedict Cumberbatch',
    'Black Lively',
    'Ellen Degeneres',
    'Nick Cage',
    `Nick Cage's Clone`,
    'Cher',
    'Mr. Bean',
    'Mr. Snuffleuffagus',
    'Bert',
    'Juanberto',
    'Jillberto'
  ];
  render() {
    return (
      <div className="AdoptNow">
        <img
          src={
            this.state.upNext.cat.imageURL
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

        <img
          src={
            this.state.upNext.dog.imageURL
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
        <button className="AdoptNow__button">
          Adopt Now! (if it's your turn)
        </button>
        <List getPets={this.getQuedPets()}></List>
      </div>
    );
  }
}
//{/**/}