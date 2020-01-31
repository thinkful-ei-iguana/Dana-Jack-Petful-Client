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
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Earum in enim aspernatur
          rerum, iste incidunt a!
          Ratione quia eligendi
          voluptas, quisquam quos fugiat
          odio in aut quo perferendis.
          Consequatur repellat animi
          eaque! Ipsa veniam suscipit
          velit unde facilis aspernatur
          repellendus corrupti minus,
          quisquam neque quibusdam
          dolorum dolores error corporis
          deserunt iste itaque numquam
          natus quia beatae obcaecati
          deleniti! Ullam dolores, earum
          assumenda, vel ut consectetur
          labore similique animi vero
          pariatur blanditiis ex
          expedita tempora? Ratione illo
          tempore, iure at obcaecati
          minima nam inventore harum
          aliquam aperiam nemo sapiente
          molestiae.
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
