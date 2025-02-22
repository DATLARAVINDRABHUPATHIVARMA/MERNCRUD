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
            <input
              required
              type="number"
              placeholder="Enter Serial"
              className="form-control"
              onChange={(e) => setSerial(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              required
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Country</label>
            <select
              required
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option selected>Select Country</option>
              <option value="India">India</option>
              <option value="England">England</option>
              <option value="Australia">Australia</option>
              <option value="South Africa">South Africa</option>
              <option value="New Zealand">New Zealand</option>
              <option value="West Indies">West Indies</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="USA">United States of America</option>
              <option value="UAE">United Arab Emirates</option>
              <option value="Ireland">Ireland</option>
              <option value="Scotland">Scotland</option>
              <option value="Thailand">Thailand</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="">Skill</label>
            <select
              required
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setSkill(e.target.value)}
            >
              <option selected>Select Skill</option>
              <option value="Batter">Batter</option>
              <option value="Bowler">Bowler</option>
              <option value="All-Rounder">All-Rounder</option>
              <option value="WK-Batter">WK-Batter</option>
            </select>
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
                required
                type="text"
                placeholder="Select Status"
                className="form-control"
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="">Team</label>
            <select
              required
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setTeam(e.target.value)}
            >
              <option selected>Select Team</option>
              <option value="Delhi Capitals Women">
                Delhi Capitals Women (DCW)
              </option>
              <option value="Gujarat Giants Women">
                Gujarat Giants Women (GGW)
              </option>
              <option value="Mumbai Indians Women">
                Mumbai Indians Women (MIW)
              </option>
              <option value="Royal Challengers Bangalore Women">
                Royal Challengers Bangalore Women (RCBW)
              </option>
              <option value="UP Warriorz Women">
                UP Warriorz Women (UPWW)
              </option>
              <option value=""></option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="">Year</label>
            <select
              required
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
