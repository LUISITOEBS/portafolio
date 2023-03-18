
import { Cualidades } from './Cualidades';

export const Me = () => {
    return (
        <div className="d-flex" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000">
            <div className="card p-4 my-5" style={{ boxShadow: '0px 0px 10px #888888',}}>
                <div className='row p-2'>
                    <div className="d-flex col-lg-4 col-xs-12 mb-3 justify-content-center align-items-center">
                        <div className="middle">
                            <img className='user-pic'/>
                        </div>
                    </div>
                    <div className="d-flex col-lg-8 col-xs-12 justify-content-center">
                        <div className="card-body">
                            <h2 className="card-title text-center" style={{ color: '#6E07F3'}}>
                                Luis Enrique Ballesteros Soriano
                            </h2>
                            <br/>
                            <p className="card-text text-justify">
                                Soy un Desarrollador Web Full-Stack altamente capacitado, 
                                con tres años de experiencia trabajando en diversos proyectos 
                                para clientes de diferentes sectores. Mi conocimiento y 
                                habilidades en múltiples lenguajes de programación me 
                                permiten crear soluciones de software escalables, eficientes 
                                y de alta calidad. 
                                Estoy comprometido con la excelencia y la satisfacción del cliente, 
                                y siempre busco superar las expectativas en cada proyecto 
                                en el que trabajo.
                            </p>
                            <br />
                            <Cualidades />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
