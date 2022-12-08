import React from "react";
import { Row, Col } from "react-bootstrap";
const Datesactions = ({ deleteData, viewData }) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8" className="d-flex justify-content-between mt-4">
          <button onClick={deleteData} className="btn-style p-2">
            مسح الكل
          </button>
          <button onClick={viewData} className="btn-style p-2">
            عرض البيانات
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default Datesactions;
