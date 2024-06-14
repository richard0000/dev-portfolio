import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
  imageStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 10,
  },
};

const Hobbies = (props) => {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.hobbies, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      {data
        ? (
          <div className="section-content-container">
            <Container style={styles.containerStyle}>
              <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {data.hobbies.map((hobby) => (
                  <Fade key={hobby.title}>
                    <div>
                      <img src={hobby.imageSource} alt={hobby.title} style={styles.imageStyle} />
                      <h3>{hobby.text}</h3>
                    </div>
                  </Fade>
                ))}
              </Row>
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
};

Hobbies.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Hobbies;
