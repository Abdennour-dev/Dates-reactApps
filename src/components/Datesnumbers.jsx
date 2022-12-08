import React from "react";
import { Row, Col } from "react-bootstrap";

const Datesnumbers = ({ person }) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8" className="mb-2">
          لديك {person.length} مواعيد اليوم
        </Col>
      </Row>
    </div>
  );
};

export default Datesnumbers;
