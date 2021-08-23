const Home = () => {
  return (
    <main className="main main-landing">
      <h2>
        <i class="fas fa-clipboard-list"></i> <i class="far fa-clock"></i>
      </h2>
      <ul className="main__list pending">
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
      <h2>
        <i class="fas fa-clipboard-list"></i> <i class="fas fa-check"></i>
      </h2>
      <ul className="main__list done">
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
