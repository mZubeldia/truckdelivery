const Home = () => {
  return (
    <main className="main">
      <h2>
        <i class="fas fa-clipboard-list"></i> <i class="far fa-clock"></i>
      </h2>
      <ul className="main__list">
        <li className="main__list__item">Ruta 1</li>
        <li className="main__list__item">Ruta 2</li>
        <li className="main__list__item">Ruta 3</li>
      </ul>
      <h2>
        <i class="fas fa-clipboard-list"></i> <i class="fas fa-check"></i>
      </h2>
      <ul className="main__list">
        <li className="main__list__item">Ruta A</li>
        <li className="main__list__item">Ruta B</li>
        <li className="main__list__item">Ruta C</li>
      </ul>
    </main>
  );
};

export default Home;
