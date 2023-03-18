import { TrabajoCard } from "./TrabajoCard"

export const Trabajos = () => {
    return (
        <div id='trabajos'>
            <h3 className='text-center text-bold' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="0">Anteriores trabajos:</h3>
            <div className='d-flex justify-content-center m-5'>
                <div className="row m-3">
                    <TrabajoCard />
                </div>
            </div>
        </div>
    )
}
