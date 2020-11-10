import React, { useState, useEffect, FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Timeline: React.FC<ChirpProps> = () => {
  const [chirps, setChirps] = React.useState<ChirpProps[]>([]);

  const getChirps = async () => {
    console.log("fetching chirps")
    try {
      let res = await fetch("/api/chirps/");
      let chirps = await res.json();
      chirps.reverse();
      setChirps(chirps);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getChirps();
  }, []);

  return (
    <section className="row" id="row1">
      {chirps.map((chirp: ChirpProps) => (
        <div
          key={chirp.id}
          className="card d-flex justify-content-center align-items-center shadow-lg text-center m-4 rounded text-danger bg-white "
          style={{ width: "20rem" }}
        >
          <img
            className="card-img-top"
            src="./assets/download.jpeg"
            alt="Birdie Image"
            style={{ height: "100px", width: "100px" }}
          />
          <div className="card-body">
            <h5 className="card-title bg-light">@{chirp.username}</h5>
            <p className="card-text bg-white">{chirp.message}</p>

            <Link to={`/chirp/${chirp.id}/admin`}>
              <button type="button" className="btn btn-outline-dark">
                Admin Options
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

interface ChirpProps {
  id?: string;
  username: string;
  message: string;
}

export default Timeline;
