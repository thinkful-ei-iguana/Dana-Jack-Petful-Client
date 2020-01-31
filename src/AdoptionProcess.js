import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AdoptionProcess extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(
    nextProps
  ) {}

  shouldComponentUpdate(
    nextProps,
    nextState
  ) {}

  componentWillUpdate(
    nextProps,
    nextState
  ) {}

  componentDidUpdate(
    prevProps,
    prevState
  ) {}

  componentWillUnmount() {}

  render() {
    return (
      <div class="AdoptionProcess">
        <img
          src={require('./images/n02088238_7741.jpg')}
          alt="dog wanting adoption"
          width="396"
        ></img>
        <p className="description">
          This process is pretty simple: just click the "Start Adoption Process" button and 
          you'll be taken directly to the page with friend you can adopt! But you'll have to wait your
          turn. If the pet you want gets adopted by someone else, thats totally fine cause there are plenty
          of other friends to adopt (5 of each but shhhh). Once its your turn, simply click "adopt" under
          the friend youre looking to take home! If you're not happy with the selection feel free to get in line
          again and see who comes up next time!
        </p>
        <Link
          className="StartProcess"
          to="/adopt"
        >
          Start Adoption Process
        </Link>
      </div>
    );
  }
}

AdoptionProcess.propTypes = {};

export default AdoptionProcess;
