import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
// Files & Data
import { person } from "./data";
import Datesnumbers from "./components/Datesnumbers";
import DatesListes from "./components/Dateslistes";
import Datesactions from "./components/Datesactions";

const App = () => {
  const [persondata, setPersondata] = useState(person);
  const onDelete = () => {
    setPersondata([]);
  };
  const onViewdata = () => {
    setPersondata(person);
  };
  useEffect(() => {
    setPersondata([]);
  }, []);
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Datesnumbers person={persondata} />
        <DatesListes person={persondata} />
        <Datesactions deleteData={onDelete} viewData={onViewdata} />
      </Container>
    </div>
  );
};

export default App;
