import { Link } from "react-router-dom";
const CreateTask = () => {
  return (
    <main className="main">
      <Link to="/">Volver </Link>

      <h2>Nueva tarea</h2>

      <form action="" method="#" className="task-form form">
        <fieldset className="task-form__route">
          <legend>Nueva ruta</legend>
          <label htmlFor="farm" className="form__label ">
            Granja
            <select className="item" id="farm" name="farm">
              <option value="1">Granja 1</option>
              <option value="2">Granja 2</option>
              <option value="3">Granja 3</option>
            </select>
          </label>

          <label htmlFor="truck" className="form__label">
            Tipo de camión
            <select className="item" id="truck" name="truck">
              <option value="sm">Camión 1</option>
              <option value="md">Camión 2</option>
              <option value="bg">Camión 3</option>
            </select>
          </label>

          <label className="form__label">
            Tipo de carga
            <label htmlFor="pig-number" className="form__label">
              Nº de cerdos
              <input
                className="item item-pig"
                id="pig-number"
                name="pig-number"
                type="number"
              />
            </label>
            <label className="form__label" htmlFor="pig-type">
              Tipo de cerdos
              <select className="item" id="pig-type" name="pig-type">
                <option value="w">Tipo 1</option>
                <option value="b">Tipo 2</option>
                <option value="d">Tipo 3</option>
              </select>
            </label>
          </label>
        </fieldset>

        <fieldset>
          <legend>Fecha</legend>
          <label htmlFor="date" className="form__label">
            Fecha de la tarea
            <input className="item" name="date" type="date" />
          </label>
        </fieldset>
        <button className="task-btn">Crear</button>
      </form>
    </main>
  );
};

export default CreateTask;
