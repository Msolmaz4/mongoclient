import {createStore,applyMiddleware,compose} from 'redux' ;  // aply video yukleme icin
import thunk from 'redux-thunk' ;  // asekronlari kullanmak icin
import {composeWithDevTools} from 'redux-devtools-extension'; // devtools yuklemek gerekir konsolda gormek ucun
import rootReducer from './reducers/rootReducer';
const store =createStore(rootReducer,{},compose(

    applyMiddleware(thunk),
    composeWithDevTools()
));
export default store;