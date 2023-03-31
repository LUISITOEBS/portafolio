import React from 'react'

export const Estudios = () => {
    return (
        <div id='estudios'>
            <h3 className='text-center text-bold' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="0">Mis Estudios:</h3>
            <div className="row my-5">
                <div className="col-lg-6 col-sx-12 mx-auto">
                    <div className="card p-4" style={{boxShadow: '8px 8px 10px #888888'}} data-aos="fade-left" data-aos-duration="2000" data-aos-delay="0">
                        <div className="d-flex p-2 justify-content-center">
                            <img 
                                className='user-pic2'
                                src={`/buap.png`}
                                alt='BUAP'
                            />
                        </div>
                        <div className="card-body">
                            <br />
                            <h4 className="card-title text-center" style={{ color: '#6E07F3'}}>
                                Ingeniero en Ciencias de la computación
                            </h4>
                            <br />
                            <p className="card-text text-center">
                                Soy egresado de la carrera de Ingeniería en Ciencias de la Computación en la &nbsp;<b>Benemérita Universidad Autónoma de Puebla</b> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /> <br /><br />
        </div>
    )
}
