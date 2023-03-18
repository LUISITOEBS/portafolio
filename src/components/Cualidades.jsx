import { useRef, useEffect } from 'react';

export const Cualidades = () => {
  const rolesRef = useRef(null);

  useEffect(() => {
        let current = 1;
        const height = rolesRef.current.clientHeight;
        const numberDivs = rolesRef.current.children.length;
        const first = rolesRef.current.children[0];

        const interval = setInterval(() => {
            const number = current * -height;
            first.style.marginTop = `${number}px`;

            if (current === numberDivs) {
                first.style.marginTop = '0px';
                current = 1;
            } else {
                current++;
            }
        }, 2500);

        return () => clearInterval(interval);
  }, []);

  return (
    <div className='row'>
        <div className="roles" ref={rolesRef}>
            <div>
                <p>Soy bueno trabajando en equipo.</p>
            </div>
            <div>
                Soy proactivo.
            </div>
            <div>
                Me gustan los retos.
            </div>
            <div>
                Siempre estoy contento.
            </div>
            <div>
                Apasionado con lo que hago.
            </div>
        </div>
    </div>
  );
}