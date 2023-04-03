import { useState } from "react";
import { FaMars, FaVenus, FaGenderless } from "react-icons/fa";

// Importamos los estílos como módulo.
import styles from "@styles/modules/Card.module.scss";

type CardGenderProps = {
  gender: "Male" | "Female" | "unknown";
};

type APILocation = {
  name: string;
  url: string;
};

type CardDetailsProps = {
  origin: APILocation;
  location: APILocation;
  status: "Alive" | "Dead" | "unknown";
};

type CardProps = {
  personaje: {
    id: number;
    name: string;
    status: "Alive" | "Dead" | "unknown";
    species: string;
    type: string;
    image: string;
    gender: "Male" | "Female" | "unknown";
    origin: APILocation;
    location: APILocation;
  };
};

/**
 * Componente CardGender
 * @param gender Género del personaje __(string)__
 * @returns Componente de React que renderiza un ícono de género.
 * @example
 * // Renderiza un ícono para género masculino
 * <CardGender gender="Male" />
 */
const CardGender = ({ gender }: CardGenderProps) => {
  return (
    <>
      {gender === "Male" && <FaMars color="#01A6EA" />}
      {gender === "Female" && <FaVenus color="#FFB1CB" />}
      {gender === "unknown" && <FaGenderless color="#FFCC10" />}
    </>
  );
};

/**
 * Componente CardDetails
 * @param origin Origen del personaje __(object)__
 * @param location Ubicación del personaje __(object)__
 * @param status Estado del personaje __(string)__
 * @returns Componente de React que renderiza los detalles de un personaje.
 * @example
 * <CardDetails
 *  origin={{ name: "Earth (C-137)" }}
 *  location={{ name: "Earth (Replacement Dimension)" }}
 *  status="Alive"
 * />
 */
const CardDetails = ({ origin, location, status }: CardDetailsProps) => {
  /*
    Cada vez que se renderiza el componente, se crea un estado local
    para mostrar el estado del personaje. Este estado se inicializa
    en false, por lo que el estado del personaje no se muestra al
    renderizar el componente. Cuando el usuario hace click en el
    enlace [show], se cambia el estado a true, lo que hace que se
    muestre el estado del personaje.
  */
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
              <span
                className={`${
                  showStatus
                    ? status === "Alive"
                      ? styles.alive
                      : status === "Dead"
                      ? styles.dead
                      : styles.unknown
                    : ""
                }`}
              >
                {status}
              </span>
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

/**
 * Componente Card
 * @param personaje Personaje a mostrar __(object)__
 * @returns Componente de React que renderiza una tarjeta con los datos de un personaje.
 * @example
 * <Card
 * personaje={personajeObject}
 * />
 */
const Card = ({ personaje }: CardProps) => {
  // Desestructuramos las propiedades del personaje, según el JSON de la API.
  const { image, name, gender, species, origin, location, status } = personaje;

  return (
    <div className="card shadow-sm">
      <div className="bd-placeholder-img card-img-top">
        <img
          src={image}
          className="card-img-top"
          width="100%"
          height="225"
          alt={name}
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
