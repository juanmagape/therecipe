import React from 'react';

function App() {

  function redireccionButton() {
    window.location.href = '../second.html';
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">¡Descube nuestras recetas!</h1>
      <button id='rediBut' onClick={redireccionButton} className='border border-secondary rounded ps-5 pe-5 pb-2 pt-2 me-auto ms-auto d-block mt-5'>Nuestras recetas</button>    

      <h1 className="text-center mt-5">¡Las ultimas recetas!</h1>

      <div className="grid text-center d-flex gap-4 mt-5">
        <div className="col-4">
          <div className="card">
            <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

        </div>
        <div className="col-4">
        <div className="card">
            <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
              <img src="" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;