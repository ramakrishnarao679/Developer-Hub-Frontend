import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import "./loginPage.css";
import axios from "axios";
import HomePage from "../HomePage/HomePage";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [objData, setObjData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = objData;
  const navigate = useNavigate();

  const getInput = (name, value) => {
    let data = { [name]: value };
    setObjData({ ...objData, ...data });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post(`http://localhost:5000/login`, objData)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
          console.log(response.data);
        });
    } catch (error) {
      console.log(error.response.data);
    }
    console.log(objData);
    setObjData({ email: "", password: "" });
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
          marginTop: "100px",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="container-login">
          <h1>Login</h1>
          <TextField
            required
            id="outlined-required"
            label="Email"
            placeholder="Enter Eamil"
            type="email"
            name="email"
            value={email}
            onChange={(event) =>
              getInput(event.target.name, event.target.value)
            }
          />
          <TextField
            required
            id="outlined-required"
            label="password"
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={(event) =>
              getInput(event.target.name, event.target.value)
            }
          />
          <Button type="submit" variant="contained" sx={{ m: 2, width: "75%" }}>
            Login
          </Button>
          <p>
            Don't have an account?{" "}
            <a href="/register" className="registerpage">
              Sign Up
            </a>
          </p>
        </div>
      </Box>
    </>
  );
}
