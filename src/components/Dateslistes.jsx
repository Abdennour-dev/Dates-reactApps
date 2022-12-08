import React from "react";
import { Row, Col } from "react-bootstrap";
const DatesListes = ({ person }) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8" className="">
          <div className="rectangle p-2">
            {person.length ? (
              person.map((item) => {
                return (
                  <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                    <img
                      className="img-avatar"
                      // src="https://img.icons8.com/fluency/96/null/manager.png"
                      src="p1.jpg"
                      alt="img"
                    />
                    <div className="px-3">
                      <p className="d-inline fs-5">{item.name}</p>
                      <p className="fs-6">{item.date}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 className="text-center mt-5 ">لا يوجد مواعيد اليوم</h1>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DatesListes;
