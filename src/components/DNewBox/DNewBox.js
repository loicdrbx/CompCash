import React, { Component } from 'react';
import './DNewBox.css';

import FButtonPill from '../FButtonPill/FButtonPill';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { db } from '../../firebase/index';

class DNewBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    nickname: '',
    size: '',
    error: '',
    status: null,
  };

  handleChange = (e) => {
    const value = e.target.value;
    if (e.target.type == 'radio') {
      this.setState({
        [e.target.name]: e.target.id,
      });
    } else {
      this.setState({
        [e.target.name]: value,
      });
    }
  };

  handleSubmit = (e, props) => {
    e.preventDefault();
    console.log(this.state);
    // Do something when the form is submitted
    let dict = {
      small: 1,
      medium: 2,
      large: 3,
    };

    db()
      .collection('Boxes')
      .doc()
      .set({
        boxsize: dict[this.state.size],
        completed: false,
        nickname: this.state.nickname,
        startdate: new Date(),
        userid: 'Srju0S7suvRvyG1HC7Az',
      })
      .then(() => {
        //Please do a popup alert here
        console.log('Document successfully written!');
        this.setState({
          status: 1,
        });
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
        this.setState({
          status: 0,
        });
      });
  };

  render() {
    var ResultText = (props) => {
      const results = props.result.status;
      if (results == 1) {
        return (
          <p className="bold">
            Successfully added{' '}
            <span className="green">{props.result.nickname}!</span>
          </p>
        );
      } else if (results == 0) {
        return (
          <p className="bold danger">Box failed to add! Refresh and retry.</p>
        );
      } else {
        return null;
      }
    };

    return (
      <div className="dash-comp container pb-3">
        <Form className="ml-4" onSubmit={this.handleSubmit}>
          <h4 className="pt-4">Add a new box</h4>
          <Form.Group as={Row} controlId="formHorizontalEmail" className="mt-4">
            <Form.Label column sm={2}>
              Box Nickname
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Amy's Box - Backyard Corner"
                className="form-text"
                name="nickname"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>
          <fieldset onChange={this.handleChange}>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Box Size
              </Form.Label>
              <Col sm={10}>
                <Form.Check type="radio" label="Small" name="size" id="small" />
                <Form.Check
                  type="radio"
                  label="Medium"
                  name="size"
                  id="medium"
                />
                <Form.Check type="radio" label="Large" name="size" id="large" />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <FButtonPill style="green" value="Submit" type="submit" />
            </Col>
          </Form.Group>
        </Form>
        <div className="ml-4">
          <ResultText result={this.state} />
        </div>
      </div>
    );
  }
}

export default DNewBox;
