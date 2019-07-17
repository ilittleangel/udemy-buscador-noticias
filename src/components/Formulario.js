import React from 'react';


class Formulario extends React.Component {

    // como Formulario va a tener state tiene que ser
    // class Component, en lugar de Stateless Component.
    state = {
        // general seria la categoria por defecto
        categoria: 'general'
    };

    render() {
        return(
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Busca por categoria</h2>
                        <div className="input-field col s12 m8 offset-m2">
                            <select onChange={this.handleOnChange}>
                                <option value="general">general</option>
                                <option value="business">business</option>
                                <option value="entertainment">entertainment</option>
                                <option value="health">health</option>
                                <option value="science">science</option>
                                <option value="sports">sports</option>
                                <option value="technology">technology</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    handleOnChange = (e) => {
        this.setState({
            categoria: e.target.value

        }, () => {
            this.props.consultarNoticias(this.state.categoria)
            // para pasarlo a la pagina principal App.js, se hace mediante un callback
            // setState puede recibir una funcion que se ejecuta despues, que seria el callback
        });
    }
}

export default Formulario;
