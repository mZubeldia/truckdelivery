import { Link } from "react-router-dom";

const CreateFarm = () => {
  return (
    <main className="main main__farm">
      <Link to="/" className="go-back-link">
        Volver{" "}
      </Link>

      <h2 className="main__farm__title">Crear granja</h2>
      <form action="" method="#" className="row g-3 farm-form">
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="new-farm" className="form-label">
                Nueva granja
                <input
                  className="form-control"
                  type="text"
                  name="new-farm"
                  placeholder="Granja Pepe"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Geolocalización
                <input
                  className="form-control"
                  type="text"
                  name="location"
                  placeholder="1.111.111"
                />
              </label>
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="phone" className="form-label ">
                Nueva granja
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  placeholder="656 111 223"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="others" className="form-label mb-3">
                Comentarios adicionales
                <textarea
                  className="form-control"
                  type="textarea"
                  name="others"
                  rows="3"
                  placeholder="Tipo de entrada, hora de apertura, etc."
                />
              </label>
            </div>
          </div>
        </div>

        <button className="btn-farm btn btn-primary">Crear</button>
      </form>
    </main>
  );
};

export default CreateFarm;
