import React from 'react';
import Noticia from './Noticia';


const Noticias = ({noticias}) => (
    <div className="row">
        {noticias.map(n => (
            <Noticia
                key={n.url}
                noticia={n}
            />
        ))}
    </div>
);

export default Noticias;
