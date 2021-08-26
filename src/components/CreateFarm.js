import { Link } from "react-router-dom";

const CreateFarm = () => {
  return (
    <main className="main main__farm">
      <Link to="/" className="go-back-link">
        <i class="far fa-arrow-alt-circle-left back-icon"></i>{" "}
      </Link>

      <h2 className="main__farm__title">Nueva granja</h2>
      <form action="" method="#" className="row g-3 farm-form">
        <div className="row form-container">
          <label htmlFor="new-farm" className="form-label">
            Nombre
            <input
              className="form-control input"
              type="text"
              name="new-farm"
              placeholder="Granja Pepe"
            />
          </label>
          <label htmlFor="location" className="form-label">
            Geolocalización
            <input
              className="form-control input"
              type="text"
              name="location"
              placeholder="1.111.111"
            />
          </label>

          <label htmlFor="phone" className="form-label phone">
            Telefono
            <input
              className="form-control input"
              type="text"
              name="phone"
              placeholder="656 111 223"
            />
          </label>

          <label htmlFor="others" className="form-label">
            Comentarios
            <textarea
              className="form-control input"
              type="textarea"
              name="others"
              rows="3"
              placeholder="Tipo de entrada, hora de apertura, etc."
            />
          </label>
          <button className="btn-farm btn btn-primary">Crear</button>
        </div>
      </form>
    </main>
  );
};

export default CreateFarm;
