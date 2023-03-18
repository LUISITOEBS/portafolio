import { Textillate } from 'textillate-react';

export const MyName = () => {
    return (
        <>
            <div className="col-12 d-flex align-items-center justify-content-center mt-5">
                <h3 className="text-white text-center">
                    <Textillate        
                        option={{
                            in: {effect:'fadeInDown'},
                        }}
                    >
                        Luis Enrique Ballesteros Soriano
                    </Textillate>
                </h3>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center mb-4">
                <p className="text-white animate__animated animate__fadeInLeftBig">Desarrollador Full-Stack</p>
            </div>
        </>
    )
}
