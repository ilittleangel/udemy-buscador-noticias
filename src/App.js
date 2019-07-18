import React, { Fragment } from 'react'
import Header from './components/Header'
import Noticias from './components/Noticias'
import Formulario from './components/Formulario'


class App extends React.Component {
  state = {
    categoria: '',
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias()
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=1c9686b7dffb4650b357e47ffd5a19ad`;
    console.log(url);
    const response = await fetch(url);
    const noticias = await response.json();
    this.setState({
      noticias: noticias.articles
    })
  };

  render() {
    return(
        <Fragment>
          <Header titulo="Noticias API REST"/>
          <div className="container white contenedor-noticias">
            <Formulario consultarNoticias={this.consultarNoticias}/>
            <Noticias noticias={this.state.noticias}/>
          </div>
        </Fragment>
    )
  }

}

export default App;
