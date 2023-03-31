import { useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useModal } from '../hooks/useModal';
import { Slider } from './Slider';




Modal.setAppElement('#root');

export const ProyectoModal = (  ) => {

    const { isOpen, closeModalClick, customStyles } = useModal();
    const { proyecto } = useSelector( state => state.proyecto );

    return (
        <Modal
            isOpen={ isOpen }
            onRequestClose={ closeModalClick }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }
        >
            <br />
            <div className="d-flex p-2 justify-content-center">
                <Slider images={ proyecto?.imagenes } />
            </div>
            <br />
            <div className="card-body">
                <h4 className="card-title text-center" style={{ color: '#6E07F3'}}>
                    {proyecto?.proyecto}
                </h4>
                <br />
                <p className="card-text text-center">
                    {proyecto?.descripcion}
                </p>
            </div>
            <br /><br />
            <h6 className="card-title text-center" style={{ color: '#6E07F3'}}>
                Tecnologías usadas:
            </h6>
            <br /><br />
            <div className="row d-flex justify-content-center">
                { proyecto?.tecnologias.map(tec => (
                    <div className="d-flex align-self-center justify-content-center col-3 m-2" key={tec.id}
                        style={{
                            width: '50px', 
                            height: '50px',
                        }}
                    >
                        <img
                            src={`/tecnologias/${tec.nombre}.png`}
                            className=""
                            style={{
                                width: '50px', 
                                height: '50px',
                                backgroundSize: 'cover',
                                border: 'none'
                            }}
                            alt={tec.nombre}
                        />
                    </div>
                    
                ))}
            </div>
            <br /><br />
            <div className="row">
                <div className="col-12">
                    <button type="button" className="my-button rounded" onClick={ ()=>{closeModalClick()} }>
                        <svg className="border">
                            <rect width="100%" height="100%" pathLength="1" rx="1.5em" />
                        </svg>
                        <p 
                            className="d-flex text-center align-items-center"
                            style={{
                                color: 'white',
                                margin: '0px'
                            }}
                        >
                        <i className="fa-solid fa-x"></i>
                            &nbsp; &nbsp;<span className="align-self-center" style={{fontSize: '16px'}}>Cerrar</span>
                        </p>
                    </button>
                </div>
            </div>


        </Modal>
    )
}
