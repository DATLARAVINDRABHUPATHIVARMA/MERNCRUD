import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
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

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result);
        setSerial(result.data.serial);
        setName(result.data.name);
        setCountry(result.data.country);
        setSkill(result.data.skill);
        setBasePrice(result.data.baseprice);
        setFinalPrice(result.data.finalprice);
        setStatus(result.data.status);
        setTeam(result.data.team);
        setYear(result.data.year);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, {
        serial,
        name,
        country,
        skill,
        baseprice,
        finalprice,
        status,
        team,
        year
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
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Serial</label>
            <input
              type="number"
              placeholder="Enter Serial"
              className="form-control"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Country</label>
            <input required
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Skill</label>
            <input required
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Base Price</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={baseprice}
              onChange={(e) => setBasePrice(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Final Price</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={finalprice}
              onChange={(e) => setFinalPrice(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Status</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Team</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Year</label>
            <input
              required
              type="number"
              placeholder="Select Year"
              className="form-control"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
