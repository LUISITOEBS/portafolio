export const Contacto = () => {

    const whatsappClick = () => {
        window.open('https://wa.me/2211566447', '_blank');
    }

    const facebookClick = () => {
        window.open('https://www.facebook.com/luisenrique.ballesterossoriano/', '_blank');
    }

    return (
        <div id="contacto" style={{background: '#141c3a'}} >
            <div className="row p-5">
                <h3 
                    className='text-center text-bold' 
                    data-aos="fade-left"
                    data-aos-duration="2000" 
                    data-aos-delay="0"
                    style={{color: 'white'}}
                >
                    Mi contacto:
                </h3>
                <p className="text-center"  style={{color: '#5BE9B9'}}>
                    Contacteme a través de los siguientes medios:
                </p>
                <footer 
                    className="container" 
                    data-aos="fade-left"
                    data-aos-duration="2000" 
                    data-aos-delay="0"
                >
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <button type="button" className="my-button rounded" onClick={ facebookClick }>
                                <svg className="border">
                                    <rect width="100%" height="100%" pathLength="1" rx="1.5em" />
                                </svg>
                                <p 
                                    className="d-flex text-center align-items-center facebook"
                                    style={{
                                        color: 'white',
                                        margin: '0px'
                                    }}
                                >
                                <i className="fa fa-facebook"></i>
                                    &nbsp; &nbsp;<span className="align-self-center" style={{fontSize: '16px'}}>Escríbeme en Facebook</span>
                                </p>
                            </button>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <button type="button" className="my-button rounded" onClick={ whatsappClick }>
                                <svg className="border">
                                    <rect width="100%" height="100%" pathLength="1" rx="1.5em" />
                                </svg>
                                <p 
                                    className="d-flex text-center align-items-center whatsapp"
                                    style={{
                                        color: 'white',
                                        margin: '0px'
                                    }}
                                >
                                <i className="fa fa-whatsapp"></i>
                                    &nbsp; &nbsp;<span className="align-self-center" style={{fontSize: '16px'}}>Chatea conmigo</span>
                                </p>
                            </button>
                        </div>
                    </div>
                    
                    
                    <p className="text-center"  style={{color: '#5BE9B9'}}>
                        O si lo prefieres mándame un correo: <br /><br />
                        
                    </p>

                    <p className="text-center" style={{color: '#5BE9B9', marginLeft: '-9px'}}>
                        luise.ballesteross@gmail.com
                    </p>

                    <div className="copyright">
                        <p className="text-center">
                            © Sitio web creado por Luis Enrique Ballesteros Soriano
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}