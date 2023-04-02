import { useState } from "react";
import { Link } from "react-router-dom";

import { FaMars, FaVenus, FaGenderless } from "react-icons/fa";

import styles from "../styles/modules/Card.module.scss";

const CardGender = ({ gender }) => {
  return (
    <>
      {gender === "Male" && <FaMars color="#01A6EA" />}
      {gender === "Female" && <FaVenus color="#FFB1CB" />}
      {gender === "unknown" && <FaGenderless color="#FFCC10" />}
    </>
  );
};

const CardDetails = ({ origin, location, status }) => {
  const [showStatus, setShowStatus] = useState(false);
  return (
    <div
      className={`d-flex flex-col align-items-center justify-content-center card-text mb-4 ${styles.details}`}
    >
      <div className="col">
        <div className="row">
          <p className="m-0">
            <strong>Origin: </strong> {origin.name}
          </p>
        </div>
        <div className="row">
          <p className="m-0">
            <strong>Location: </strong> {location.name}
          </p>
        </div>
        <div className="row">
          <p className="m-0">
            <strong>Status: </strong>{" "}
            {showStatus ? (
              status
            ) : (
              <a
                className="btn btn-link text-muted p-0"
                onClick={() => setShowStatus(true)}
              >
                [show]
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const Card = ({ personaje }) => {
  const { id, image, name, gender, species, origin, location, status } =
    personaje;

  return (
    <div className="card shadow-sm">
      <div className="bd-placeholder-img card-img-top">
        <img
          src={image}
          className="card-img-top"
          width="100%"
          height="225"
          alt="..."
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">
          <div className="d-flex">
            <div className="flex-grow-1">{name}</div>
            <div className="flex-shrink-0">
              <CardGender gender={gender} />
            </div>
          </div>
        </h5>
        <h6 className="card-subtitle mb-3 text-muted">{species}</h6>
        <CardDetails origin={origin} location={location} status={status} />
      </div>
    </div>
  );
};

export default Card;
