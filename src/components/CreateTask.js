import { Link } from "react-router-dom";
const CreateTask = () => {
  return (
    <main className="main main__task">
      <Link to="/" className="go-back-link">
        <i class="far fa-arrow-alt-circle-left back-icon"></i>
      </Link>

      <h2 className="main__title">Nueva tarea</h2>

      <form action="" method="#" className="task-form row g-3">
        <div class="col">
          <fieldset className="task-form__route">
            <legend>Nueva ruta</legend>
            <div class="mb-3">
              <label htmlFor="farm" class="form-label">
                Granja
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  id="farm"
                  name="farm"
                >
                  <option selected>Selecciona una granja</option>
                  <option value="1">Granja 1</option>
                  <option value="2">Granja 2</option>
                  <option value="3">Granja 3</option>
                </select>
              </label>
            </div>
            <label htmlFor="truck" class="form-label">
              Tipo de camión
              <select
                aria-label=".form-select-sm example"
                id="truck"
                name="truck"
                class="form-select form-select-sm"
              >
                <option selected>Selecciona el tipo de camión</option>
                <option value="sm">Camión 1</option>
                <option value="md">Camión 2</option>
                <option value="bg">Camión 3</option>
              </select>
            </label>

            <label className="form-label">
              Tipo de carga
              <div class="mb-3 row">
                <div class="col">
                  <label htmlFor="pig-number" class="form-label">
                    Nº de cerdos
                    <input
                      className="form-control item-pig"
                      id="pig-number"
                      name="pig-number"
                      type="number"
                    />
                  </label>
                </div>
                <div class="col">
                  <label className="form-label" htmlFor="pig-type">
                    Tipo de cerdos
                    <select
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                      id="pig-type"
                      name="pig-type"
                    >
                      <option selected>Selecciona el tipo de cerdos</option>
                      <option value="w">Tipo 1</option>
                      <option value="b">Tipo 2</option>
                      <option value="d">Tipo 3</option>
                    </select>
                  </label>
                </div>
              </div>
            </label>
          </fieldset>
        </div>
        <div class="col">
          <fieldset>
            <legend>Fecha</legend>
            <div class="mb-3">
              <label htmlFor="date" className="form-label">
                Fecha de la tarea
                <input className="form-control" name="date" type="date" />
              </label>
            </div>
          </fieldset>
        </div>
        <div class="row">
          <button className="btn btn-primary task-btn">Crear</button>
        </div>
      </form>
    </main>
  );
};

export default CreateTask;
