import { Me, MyName, Navbar, Proyectos, Trabajos, Estudios, Contacto, Skills } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ProyectoModal } from './components/ProyectoModal';
import { useSelector } from 'react-redux';

export const PortafolioApp = () => {
    AOS.init({
        once: true,
    });

    const { isOpen } = useSelector( state => state.modal );
    
    return (
        <>
            <div className={`container-fluid ${isOpen ? 'modal-open' : ''}`}>
                <div id="topDiv" className="row topDiv">
                    <MyName />
                </div>
                <div className="row navbarDiv" style={{ overflowX: 'visible' }}>
                    <Navbar />
                </div>
                <div className="row p-5" style={{overflowX: 'hidden'}}>
                    <Me />
                </div>
                <br /><br />
                <div className="row" style={{overflowX: 'hidden'}}>
                    <Proyectos />
                </div>
                <br /><br /><br /><br />
                <div className="row" style={{overflowX: 'hidden'}}>
                    <Trabajos />
                </div>
                <div className="row" style={{overflowX: 'hidden'}}>
                    <Estudios />
                </div>
                <div className="row" style={{overflowX: 'hidden'}}>
                    <Skills />
                </div>
                <div className="row" style={{overflowX: 'hidden'}}>
                    <Contacto />
                </div>
                <ProyectoModal />
            </div>
        </>
    )
}
