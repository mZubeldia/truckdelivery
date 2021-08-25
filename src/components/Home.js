const Home = () => {
  return (
    <main className="main main-landing">
      <ul className="main__list pending">
        <div class="today-wrapper">
          <div className="landing-title-wrapper">
            <i class="far fa-clock pending-icon landing-icon"></i>
            <div class="title-text-wrapper">
              <h2 className="landing-title-text">Hoy</h2> <span>25 agosto</span>
            </div>
          </div>
          <li className="main__list__item">
            Ruta 1 <div class="hidden">Granja Norte</div>
          </li>
          <li className="main__list__item">
            Ruta 2 <div class="hidden">Granja Sur</div>
          </li>
        </div>
        <li className="main__list__item">
          Ruta 3 <div class="hidden">Granja Norte</div>{" "}
          <div class="hidden">28 sept</div>
        </li>
      </ul>

      <ul className="main__list done">
        <i class="fas fa-check done-icon landing-icon"></i>

        <li className="main__list__item">
          Ruta A <div class="hidden">14/apr/21</div>
        </li>
        <li className="main__list__item">
          Ruta B <div class="hidden">28/may/21</div>
        </li>
        <li className="main__list__item">
          Ruta C <div class="hidden">28/dec/20</div>
        </li>
      </ul>
    </main>
  );
};

export default Home;
