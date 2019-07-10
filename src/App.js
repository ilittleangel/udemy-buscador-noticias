import React, { Fragment } from 'react';
import Header from './components/Header'


class App extends React.Component {
  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias()
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=1c9686b7dffb4650b357e47ffd5a19ad`;
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
        </Fragment>
    )
  }

}

export default App;
