import React from 'react';


const Noticia = ({noticia}) => {

    // aplicando destructuring extraemos cada uno de
    // los elementos de la noticia
    const {urlToImage, url, title, description, source} = noticia;

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>

        : null;


    return (
        // como en Noticias.js pusimos un className=row
        // ahora tenemos acceso al grid y podemos poner un
        // className=col

        // Ademas esto son clases de materilize: s12 m6 l4
        // y significa que en el tamaño pequeño usa las 12 columnas,
        // en el tamaño mediano usa 6 y en el large usa 4

        // Ademas vamos a colocar componentes anidados, estos son:
        // card y dentro card-image, card-content y card-action,
        // cada uno con su container. El ultimo es para poder hacer click
        <div className="col s12 m6 l4">
            <div className="card">

                {imagen}

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">
                        Ver noticia completa
                    </a>
                </div>

            </div>
        </div>
    )
};

export default Noticia;
