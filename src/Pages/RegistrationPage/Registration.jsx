import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import "./Registration.css";
import HomePage from "../HomePage/HomePage";
import axios from "axios";

export default function Registration() {
  const [objData, setObjData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    skill: "",
    password: "",
    confirmpassword: "",
  });
  const { fullname, email, mobile, skill, password, confirmpassword } = objData;
  const getData = (name, value) => {
    let data = { [name]: value };
    setObjData({ ...objData, ...data });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        objData,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data);
    }
    console.log(objData);
    setObjData({
      fullname: "",
      email: "",
      mobile: "",
      skill: "",
      password: "",
      confirmpassword: "",
    });
  };
  return (
    <>
      <HomePage />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
        noValidate
        autoComplete="off"
        onSubmit={submit}
      >
        <div className="container-register">
          <h1>Register</h1>
          <TextField
            required
            id="outlined-required"
            label="FullName"
            type="text"
            name="fullname"
            value={fullname}
            placeholder="Enter Full Name"
            onChange={(e) => getData(e.target.name, e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            type="text"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => getData(e.target.name, e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="mobile"
            type="text"
            name="mobile"
            value={mobile}
            placeholder="Enter mobile number"
            onChange={(e) => getData(e.target.name, e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="skill"
            type="text"
            name="skill"
            value={skill}
            placeholder="Enter skills"
            onChange={(e) => getData(e.target.name, e.target.value)}
          />
          <small>
            Please Provide skills by seperation of comma <b>( , )</b>
          </small>
          <TextField
            required
            id="outlined-required"
            label="password"
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => getData(e.target.name, e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="confirmPasword"
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            placeholder="Enter confirm Password"
            onChange={(e) => getData(e.target.name, e.target.value)}
          />
          <Button type="submit" variant="contained" sx={{ m: 2, width: "75%" }}>
            Register
          </Button>
          <p>
            Already have an account?{" "}
            <a href="/login" className="loginpage">
              Sign In
            </a>
          </p>
        </div>
      </Box>
    </>
  );
}
