import React from 'react';
import './DNewBox.css';

import FButtonPill from '../FButtonPill/FButtonPill';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function DNewBox(props) {
  return (
    <div className="dash-comp container pb-3">
      <Form className="ml-4">
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
            />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Box Size
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Small"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                className="radio-green"
              />
              <Form.Check
                type="radio"
                label="Medium"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="Large"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <FButtonPill style="green" value="Submit" />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default DNewBox;
