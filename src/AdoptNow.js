import * as React from 'react';

export class AdoptNow extends React.Component {
  constructor(props) {
    super(props);
    state = {
      upNext: {
        imageURL: '',
        imageDescription: '',
        name: '',
        sex: '',
        age: 0,
        breed: '',
        story: ''
      }
    };
  }

  render() {
    return (
      <div className="AdoptNow">
        <img
          src={
            this.state.upNext.imageURL
          }
          width="396"
        ></img>

        <ul>
          <li className="AdoptNow__name">
            name:
          </li>
          <li className="AdoptNow__sex">
            sex:
          </li>
          <li className="AdoptNow__age">
            age:
          </li>
          <li className="AdoptNow__breed">
            breed:
          </li>
          <li className="AdoptNow__story">
            story:
          </li>
          <li></li>
        </ul>
      </div>
    );
  }
}
