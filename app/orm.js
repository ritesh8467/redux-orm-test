import { ORM } from 'redux-orm';
import Dashboard from './models/dashboard' ;
import Filter from './models/filter' ;
import Panel from './models/panel' ;

const orm = new ORM();
orm.register(Filter, Panel, Dashboard);

export default orm;
