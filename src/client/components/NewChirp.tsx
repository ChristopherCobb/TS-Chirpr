import React from "react";
import { useState, useEffect } from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";

const NewChirp: React.FC<ChirpProp> = (props) => {
  const [username, setUser] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleName = (e) => {
    setUser(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    submitChirp();
    history.push("/");
  };

  const history = useHistory();

  const submitChirp = async () => {
    const chirp = {
      username: username,
      message: message,
    };

    await fetch("/api/chirps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chirp),
    });
  };

  useEffect(() => {
    submitChirp();
  }, []);

  return (
    <form className=" d-flex justify-content-center align-items-center">
      <div className="form-group col-6 shadow-lg border text-danger border-info rounded mt-3 text-center">
        <label className="font-weight-bold">Username</label>
        <input
          type="text"
          className="form-control"
          id="username-form"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => {
            handleName(e);
          }}
        />
        <div className="form-group">
          <label className="font-weight-bolder">Chirp</label>
          <input
            type="text"
            className="form-control"
            id="message-form"
            placeholder="Enter Chirp Here"
            value={message}
            onChange={(e) => {
              handleMessage(e);
            }}
          ></input>
        </div>
        <button
          type="button"
          className="btn btn-outline-danger w-20 mx-auto shadow-sm mb-2"
          onClick={handleClick}
        >
          Send Chirp!
        </button>
      </div>
    </form>
  );
};

export interface ChirpProp extends RouteComponentProps<{ id:string }> {
  id: number;
  username: string;
  message: string;
}

export default NewChirp;
