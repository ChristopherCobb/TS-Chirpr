import React, { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";

const Admin: React.FC<IAdminProps> = (props: IAdminProps) => {
  const [username, getUser] = useState<string>();
  const [message, getMessage] = useState<string>();

  const editChirp = async (id: string) => {
    const oneChirp = {
      username: username,
      message: message,
    };
    console.log(oneChirp)

    let res = await fetch(`/api/chirps/${props.match.params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( oneChirp ),
    });
      props.history.push("/");

  };
  const deleteChirp = async (id: string) => {
    let res = await fetch(`/api/chirps/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      props.history.push("/");
    } else {
      console.log("unable to delete chirp");
    }
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
  getUser(e.target.value);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    getMessage(e.target.value);

  const handleEdit = (e) => {
    editChirp(e);
  };

  return (
    <section className="row" id="row1">
      <div
        // key={chirp.id}
        className="card d-flex align-items-center shadow-lg text-center m-4 rounded text-danger bg-white "
        style={{ width: "20rem" }}
      >
        <img
          className="card-img-top"
          src="./public/assets/download"
          alt="Birdie Image"
          style={{ height: "100px", width: "100px" }}
        />
        <div className="card-body ">
          <h5 className="card-title bg-light">
            {" "}
          </h5>
          <textarea
            className="card-text bg-white"
            placeholder="Username"
            // defaultValue={username}
            onChange={(e) => handleUserChange(e)}
          >
            {message}
          </textarea>
          <textarea
            className="card-text bg-white my-2"
            placeholder="Edit Chirp Here"
            value={message}
            onChange={(e) => handleMessageChange(e)}
          >
            {message}
          </textarea>
          <br></br>
          <button
            className="btn btn-sm btn-outline-danger mx-2rounded "
            onClick={(e) => handleEdit(e)}
          >
            Save Edit
          </button>
          <button
            className="btn btn-sm btn-outline-danger mx-2 rounded "
             onClick={() => deleteChirp(props.match.params.id)}
          >
            Delete Chirp
          </button>

          <Link to="/">
            <button type="button" className="btn btn-sm mx-2 my-2 btn-outline-dark">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};


export interface IAdminProps extends RouteComponentProps<{ id: string }> {}

export default Admin;
