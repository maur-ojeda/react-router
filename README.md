This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

 fix security github 

    yarn add lodash lodash.template

 se react router dom que maneja las rutas

```
yarn add react-router-dom
```



en src/index.js  agregar en las importaciones

```
 import { router } from 'react-router-dom';
```



luego se envuelve el componenete de app con router, que es un componente de alto orden por que renderiza un componenete mas pequeño en si 

```
ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));
```







se agrega un historial custom que interactua con el historial del navegador

```
yarn add history
```



en src/index.js  agregar en las importaciones
```
 import createHistory from 'history/createBrowserHistory';
```

 

 