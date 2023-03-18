import { proyectos } from '../helpers/proyectos'
import { useModal } from '../hooks/useModal';

export const Tarjetas = () => {

    const { openModalClick } = useModal();

    const openModalButton = ( proyecto ) => {
        openModalClick(proyecto);
    }

    return (
        <div className="wrapper">
            <div className="my-cols">
                {
                    proyectos.map((proyecto) => (
                        <div className="my-col" key={ proyecto.id }>
                            <div className="container">
                                <div className="front" 
                                    style={{
                                    backgroundImage: `url(/${proyecto.proyecto}1.png)`
                                }}>
                                    <div className="inner">
                                        <p className="text-center">{ proyecto.proyecto }</p>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <button type='button' className="my-button rounded" onClick={()=> {openModalButton(proyecto)}}>
                                            <svg className="border">
                                                <rect width="100%" height="100%" pathLength="1" rx="1.5em" />
                                            </svg>
                                                <span style={{color: 'white'}}>
                                                    <i className="fa-solid fa-minus"></i>
                                                    &nbsp;&nbsp;Ver Más
                                                </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
