import { Me, MyName, Navbar, Proyectos, Trabajos, Estudios, Contacto } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ProyectoModal } from './components/ProyectoModal';

export const PortafolioApp = () => {
    AOS.init({
        once: true
    });
    return (
        <>
            <ProyectoModal />
            <div className="container-fluid">
                <div id="topDiv" className="row" style={{backgroundColor: '#6E07F3'}}>
                    <MyName />
                </div>
                <div className="row navbarDiv">
                    <Navbar />
                </div>
                <div className="row p-5">
                    <Me />
                </div>
                <br /><br />
                <div className="row">
                    <Proyectos />
                </div>
                <br /><br /><br /><br />
                <div className="row">
                    <Trabajos />
                </div>
                <div className="row">
                    <Estudios />
                </div>
                <div className="row">
                    <Contacto />
                </div>
            </div>
        </>
    )
}
