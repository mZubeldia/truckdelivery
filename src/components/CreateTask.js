import { Link } from "react-router-dom";
const CreateTask = () => {
  return (
    <main className="main main__task">
      <Link to="/" className="go-back-link">
        <i class="far fa-arrow-alt-circle-left back-icon"></i>
      </Link>

      <h2 className="main__title">Nueva tarea</h2>

      <form action="" method="#" className="task-form">
        <fieldset className="task-form__route">
          <legend>Nueva ruta</legend>
          <div class="mb-3">
            <label htmlFor="farm" class="form-label">
              Granja
              <select
                class="form-select form-select-sm input"
                aria-label=".form-select-sm example"
                id="farm"
                name="farm"
              >
                <option selected>Nombre granja</option>
                <option value="1">Granja 1</option>
                <option value="2">Granja 2</option>
                <option value="3">Granja 3</option>
              </select>
            </label>
          </div>
          <div class="mb-3">
            <label htmlFor="truck" class="form-label">
              Camión
              <select
                aria-label=".form-select-sm example "
                id="truck"
                name="truck"
                class="form-select form-select-sm input"
              >
                <option selected>Tipo camión</option>
                <option value="sm">Camión 1</option>
                <option value="md">Camión 2</option>
                <option value="bg">Camión 3</option>
              </select>
            </label>
          </div>

          <div class="mb-3">
            <label htmlFor="abattoir" class="form-label">
              Matadero
              <select
                aria-label=".form-select-sm example "
                id="abattoir"
                name="abattoir"
                class="form-select form-select-sm input"
              >
                <option selected>Matadero</option>
                <option value="a1">Matadero 1</option>
                <option value="a2">Matadero 2</option>
                <option value="a3">Matadero 3</option>
              </select>
            </label>
          </div>

          <div class="mb-3">
            <label htmlFor="employee" class="form-label">
              Empleado
              <select
                aria-label=".form-select-sm example "
                id="employee"
                name="employee"
                class="form-select form-select-sm input"
              >
                <option selected>Nombre empleado</option>
                <option value="123">Juan Perez</option>
                <option value="122">Antonio Fernandez</option>
                <option value="132">Carlos Garcia</option>
              </select>
            </label>
          </div>

          <div class="mb-3">
            <label className="form-label">
              Tipo de carga
              <div class="mb-3">
                <label htmlFor="pig-number" class="form-label">
                  Nº cerdos
                  <input
                    className="form-control item-pig"
                    id="pig-number"
                    name="pig-number"
                    type="number"
                  />
                </label>
                <div class="mb-3">
                  <label className="form-label" htmlFor="pig-type">
                    Tipo cerdos
                    <select
                      class="form-select form-select-sm input"
                      aria-label=".form-select-sm example"
                      id="pig-type"
                      name="pig-type"
                    >
                      <option selected>Tipos</option>
                      <option value="w">Tipo 1</option>
                      <option value="b">Tipo 2</option>
                      <option value="d">Tipo 3</option>
                    </select>
                  </label>
                </div>
              </div>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Fecha</legend>
          <div class="mb-3">
            <label htmlFor="date" className="form-label">
              Fecha de recogida
              <input className="form-control" name="date" type="date" />
            </label>
          </div>
          <div class="mb-3">
            <label htmlFor="date" className="form-label">
              Fecha de entrega
              <input className="form-control" name="date" type="date" />
            </label>
          </div>
        </fieldset>
        <div class="row">
          <button className="btn btn-primary task-btn">Crear</button>
        </div>
      </form>
    </main>
  );
};

export default CreateTask;
