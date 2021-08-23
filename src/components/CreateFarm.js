import { Link } from "react-router-dom";

const CreateFarm = () => {
  return (
    <main className="main main__farm">
      <Link to="/" className="go-back-link">
        Volver{" "}
      </Link>

      <h2 className="main__farm__title">Nueva granja</h2>
      <form action="" method="#" className="row g-3 farm-form">
        <div className="row">
          <div className="mb-3">
            <label htmlFor="new-farm" className="form-label">
              Nombre
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

          <label htmlFor="phone" className="form-label phone">
            Telefono
            <input
              className="form-control"
              type="text"
              name="phone"
              placeholder="656 111 223"
            />
          </label>

          <div className="mb-3">
            <label htmlFor="others" className="form-label">
              Comentarios
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

        <button className="btn-farm btn btn-primary">Crear</button>
      </form>
    </main>
  );
};

export default CreateFarm;
