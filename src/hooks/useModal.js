import { useDispatch, useSelector } from 'react-redux';

import { openModal, closeModal } from "../store/modal/modalSlice";
import { setProyecto, unsetProyecto } from '../store/proyecto/proyectoSlice';

const customStyles = {
    content: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '80%',
        maxHeight: '80%',
        zIndex: 999,
    },
};

export const useModal = () => {

    const { isOpen } = useSelector(state =>  state.modal);

   
    const dipatch = useDispatch();

    const openModalClick = ( proyecto ) => {
        dipatch( setProyecto(proyecto) );
        dipatch( openModal() );
    };


    const closeModalClick = async() => {
        dipatch( closeModal() );
        setTimeout(() => {
            dipatch( unsetProyecto());
        }, 500);
        
        
    };



    return {
        isOpen,
        openModalClick,
        closeModalClick,
        customStyles
    };
};