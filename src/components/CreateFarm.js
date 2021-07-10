const CreateFarm = () => {
  return (
    <main className="main">
      <h2>Crear granja</h2>
      <form action="" method="#" className="farm-form form">
        <label htmlFor="new-farm" className="form__label">
          Nueva granja
          <input
            className="form-item"
            type="text"
            name="new-farm"
            placeholder="Granja Pepe"
          />
        </label>
        <label htmlFor="location" className="form__label">
          Geolocalización
          <input
            className="form-item"
            type="text"
            name="location"
            placeholder="1.111.111"
          />
        </label>
        <label htmlFor="phone" className="form__label">
          Nueva granja
          <input
            className="form-item"
            type="text"
            name="phone"
            placeholder="656 111 223"
          />
        </label>
        <label htmlFor="others" className="form__label">
          Comentarios adicionales
          <input
            className="form-item others"
            type="textarea"
            name="others"
            placeholder="Tipo de entrada, hora de apertura, etc."
          />
        </label>
        <button className="btn-farm">Crear</button>
      </form>
    </main>
  );
};

export default CreateFarm;
