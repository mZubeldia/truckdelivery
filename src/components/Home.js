const Home = () => {
  return (
    <main className="main main-landing">
      <ul className="main__list pending">
        <i class="far fa-clock pending-icon landing-icon"></i>

        <li className="main__list__item">
          Ruta 1 <div class="hidden">23/oct/21</div>
        </li>
        <li className="main__list__item">
          Ruta 2 <div class="hidden">24/oct/21</div>
        </li>
        <li className="main__list__item">
          Ruta 3 <div class="hidden">28/nov/21</div>
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
