import React from "react";
import imgLogo from '/logo.png'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'

function Footer() {

    return (
        <div className="border-top pt-3 mt-5 ">
            <div class="grid  mt-5">
                <div className="d-flex">
                    <div class="col-5 text-center">
                        <img src={imgLogo} alt="Image logo The Recipe" />
                        <h5 className="bold mt-2">The Recipe</h5>
                    </div>
                    <div class="col-3  ">
                        <h5 className="bold">Conócenos</h5>
                        <div className="mt-3">
                        <p>Sobre Nosotros</p>
                        <p>Terminos Legales</p>
                        </div>

                    </div>
                    <div class="col-4 ">
                        <h5 className="bold">Redes sociales</h5>
                        <div className="mt-3">
                            <p>Twitter</p>
                            <p>Instagram</p>
                            <p>Facebook</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;