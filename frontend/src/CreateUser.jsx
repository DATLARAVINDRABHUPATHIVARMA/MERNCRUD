import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [serial, setSerial] = useState();
  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [skill, setSkill] = useState();
  const [baseprice, setBasePrice] = useState();
  const [finalprice, setFinalPrice] = useState();
  const [status, setStatus] = useState();
  const [team, setTeam] = useState();
  const [year, setYear] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", {
        serial,
        name,
        country,
        skill,
        baseprice,
        finalprice,
        status,
        team,
        year,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Serial</label>
            <input required
              type="number"
              placeholder="Enter Serial"
              className="form-control"
              onChange={(e) => setSerial(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Country</label>
            <input
              type="text"
              placeholder="Select Country"
              className="form-control"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Skill</label>
            <input
              type="text"
              placeholder="Enter Skill"
              className="form-control"
              onChange={(e) => setSkill(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Base Price</label>
            <input
              type="text"
              placeholder="Enter Base Price"
              className="form-control"
              onChange={(e) => setBasePrice(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Final Price</label>
            <input
              type="text"
              placeholder="Enter Final Price"
              className="form-control"
              onChange={(e) => setFinalPrice(e.target.value)}
            />
            <div className="mb-2">
              <label htmlFor="">Status</label>
              <input
                type="text"
                placeholder="Select Status"
                className="form-control"
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="">Team</label>
            <input
              type="text"
              placeholder="Select Team"
              className="form-control"
              onChange={(e) => setTeam(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Year</label>
            <input
              type="number"
              placeholder="Select Year"
              className="form-control"
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
