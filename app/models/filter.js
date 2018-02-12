import { fk, many, attr, Model, oneToOne } from 'redux-orm';
import {
  CREATE_DASHBOARD,
  CREATE_PANEL,
  CREATE_FILTER,
  EDIT_DASHBOARD,
  EDIT_PANEL,
  EDIT_FILTER,
} from '../actionTypes';

class Filter extends Model {
  static reducer(action, Filter, session) {
    const { payload, type } = action;
    switch (type) {
      case CREATE_DASHBOARD:
        debugger
        for (var i = 0; i < action.payload.filters.length; i++) {
          Filter.create({ ...action.payload.filters[i], parentId: action.payload.id });
        }
        break;
      case EDIT_FILTER:
        break;
    }
    return undefined;
  }
  // Declare any static or instance methods you need.
}
Filter.modelName = 'Filter';
Filter.fields = {
  name: attr(),
  type: attr(),
  key: attr(),
  dashboard: oneToOne('Dashboard'),
}

export default Filter;
