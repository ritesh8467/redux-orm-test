import { fk, many, attr, Model, oneToOne } from 'redux-orm';
import {
  CREATE_DASHBOARD,
  CREATE_PANEL,
  CREATE_FILTER,
  EDIT_DASHBOARD,
  EDIT_PANEL,
  EDIT_FILTER,
} from '../actionTypes';

class Panel extends Model {
  static reducer(action, Panel, session) {
    const { payload, type } = action;
    switch (type) {
      case CREATE_DASHBOARD:
        debugger
        for (var i = 0; i < action.payload.panels.length; i++) {
          Panel.create({ ...action.payload.panels[i], parentId: action.payload.id });
        }
        break;
      case EDIT_PANEL:
        break;
    }
    return undefined;
  }
  // Declare any static or instance methods you need.
}
Panel.modelName = 'Panel';
Panel.fields = {
  id: attr(),
  parentId: attr(),
  width: attr(),
  height: attr(),
  dashboard: oneToOne('Dashboard'),
}
export default Panel;
