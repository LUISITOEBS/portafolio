import { trabajos } from "../helpers/trabajos" 
export const TrabajoCard = () => {
    return (
        <>
            {
                trabajos.map( trabajo => (
                    <div className="col-md-6 col-xs-12 p-5" key={trabajo.id} data-aos="fade-right" data-aos-duration="2000" data-aos-delay="0">
                        <div className="card p-5" 
                            style={{
                                boxShadow: '8px 8px 10px #888888',
                                height: '100%'
                            }}
                        >
                            <div className="card-title">
                                <h4 className="text-center" style={{ color: '#6E07F3'}}>
                                    {trabajo.empresa}
                                </h4>
                            </div>
                            <div className="card-body">
                                <b>Puesto: </b>
                                {trabajo.posicion}
                                <br /><br />
                                <b>Responsabilidades: </b>
                                <ul className="list-group mt-2">
                                    { trabajo.responsabilidades.map(resp => (
                                        <p key={resp.id}>
                                            <li className="list-group-item">
                                                {resp.responsabilidad}
                                            </li>
                                        </p>
                                    ))}
                                </ul>

                                <br /><br />
                                <b>Logros: </b>
                                <ul className="list-group mt-2">
                                    { trabajo.logros.map(log => (
                                        <p key={log.id}>
                                            <li className="list-group-item">
                                                {log.logro}
                                            </li>
                                        </p>
                                    ))}
                                </ul>

                                <br /><br />
                                <b>Tecnologias usadas: </b>
                                <br /><br />
                                <div className="row d-flex justify-content-center">
                                    { trabajo.tecnologias.map(tec => (
                                        <div className="d-flex align-self-center justify-content-center col-3 m-2" key={tec.id}
                                            style={{
                                                width: '50px', 
                                                height: '50px',
                                            }}
                                        >
                                            <img
                                                src={`/tecnologias/${tec.name}.png`}
                                                className=""
                                                style={{
                                                    width: '50px', 
                                                    height: '50px',
                                                    backgroundSize: 'cover',
                                                    border: 'none'
                                                }}
                                                alt={tec.name}
                                            />
                                        </div>
                                        
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}