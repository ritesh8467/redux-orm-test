import { fk, many, attr, Model } from 'redux-orm';
import {
  CREATE_DASHBOARD,
  CREATE_PANEL,
  CREATE_FILTER,
  EDIT_DASHBOARD,
  EDIT_PANEL,
  EDIT_FILTER,
} from '../actionTypes';

class Dashboard extends Model {
  static reducer(action, Dashboard, session) {
    const { payload, type } = action;
    switch (type) {
      case CREATE_DASHBOARD:
        Dashboard.create({ ...action.payload.report, id: action.payload.id });
        debugger
        console.log(session.Dashboard.withId(session.Dashboard.first().id).panels.all().toRefArray())
        break;
      case EDIT_DASHBOARD:
        break;
    }
    return undefined;
  }
}
Dashboard.modelName = 'Dashboard';

Dashboard.fields = {
  id: attr(),
  title: attr(),
  description: attr(),
  isLive: attr(),
  panels: many('Panel'),
  filters: many('Filter'),
};

export default Dashboard;
