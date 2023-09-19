import './opiniones_styles.css'

function Opiniones() {
  return (
    <section className="Opiniones_de_clientes">
      <article className="Reseñas">
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card">
                <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" className="card-img-top" alt="Everly" />
                <div className="card-body">
                  <h5>Pablo Motos</h5>
                  <h3>Se nota la calidad del servicio desde que entras en uno de los vehículos.</h3>
                  <div className="results">
                    <p>29/Noviembre/2022</p>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">Comparta su experiencia con nosotros</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <div className="card-media">
                  <figure>
                    <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" alt="Seato Summit worker" className="card-img-top" />
                  </figure>
                  <div className="company"></div>
                </div>
                <div className="card-body">
                  <h5>Abigail Montes</h5>
                  <h3>Fácil y práctico, además de que ofrecen muchas facilidades.</h3>
                  <div className="results">
                    <p>13/Agosto/2021</p>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">Comparta su experiencia con nosotros</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <div>
                  <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" alt="Mambe" />
                </div>
                <div className="card-body">
                  <h5>Ricardo Obregón</h5>
                  <h3>Increíble atención al cliente, siempre están atentos a lo que necesitas.</h3>
                  <div className="results">
                    <p>27/Febrero/2023</p>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">Comparta su experiencia con nosotros</button>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </article>
    </section>
  );
}

export default Opiniones;