const Home = () => {
  return (
    <main className="main main-landing">
      <section className="main__list pending">
        <ul class="today-wrapper">
          <div className="landing-title-wrapper">
            <i class="far fa-clock pending-icon landing-icon"></i>
            <div class="title-text-wrapper">
              <h2 className="landing-title-text">Hoy</h2> <span>25 agosto</span>
            </div>
          </div>

          <li className="main__list__item">
            <a href="#" className="pending-link">
              Ruta 1 <div class="hidden">Granja Norte</div>
            </a>
          </li>
          <li className="main__list__item">
            <a href="#" className="pending-link">
              Ruta 2 <div class="hidden">Granja Sur</div>
            </a>
          </li>
        </ul>

        <ul class="pending-wrapper">
          <li className="main__list__item pending__item">
            <a href="#" className="pending-link">
              Ruta 3 <div class="hidden">Granja Norte</div>{" "}
              <div class="hidden">28 sept</div>
            </a>
          </li>
        </ul>
      </section>

      <section className="main__list done">
        <i class="fas fa-check done-icon landing-icon"></i>

        <ul class="done-wrapper">
          <li className="main__list__item">
            <a href="" className="done-link">
              Ruta A <div class="hidden">14/apr/21</div>
            </a>
          </li>
          <li className="main__list__item">
            <a href="" className="done-link">
              Ruta B <div class="hidden">28/may/21</div>
            </a>
          </li>
          <li className="main__list__item">
            <a href="" className="done-link">
              Ruta C <div class="hidden">28/dec/20</div>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
