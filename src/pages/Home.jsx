import { BiHomeAlt2 } from "react-icons/bi";
import { SiReact } from "react-icons/si";

import styles from "@styles/modules/Home.module.scss";

import Button from "@components/Button";

const Home = () => {
  return (
    <main className={`${styles.home} d-flex flex-row align-items-center`}>
      <section className="col">
        <div className="d-flex flex-column">
          <section className="col py-5 text-center">
            <div className="row py-lg-5 justify-content-center flex-grow-1">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light display-2">
                  <BiHomeAlt2 /> Inicio
                </h1>
                <p className="lead fs-2 text-muted">
                  Sitio web de personajes y episodios de Rick And Morty.
                </p>
                <div className="d-flex gap-3 flex-row justify-content-center">
                  <Button
                    className="mr-3 px-4 py-2"
                    type="primary"
                    text="Personajes"
                    to="/personajes"
                  />
                  <Button
                    className="ml-3 px-4 py-2"
                    type="secondary"
                    text="Episodios"
                    to="/episodios"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="d-flex flex-col">
                <div className="col-12 col-md-6 mx-auto">
                  Sitio web creado con <SiReact /> React.
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Home;
