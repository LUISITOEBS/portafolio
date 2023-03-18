import { Tarjetas } from './Tarjetas';

export const Proyectos = () => {
    return (
        <div id='proyectos' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="0">
            <h3 className='text-center text-bold'>Algunos de mis proyectos:</h3>
            <div className='d-flex justify-content-center mt-5'>
                <Tarjetas />
            </div>
        </div>

    )
}
