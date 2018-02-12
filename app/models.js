/* eslint-disable default-case, no-shadow */
import { ORM, Model, many, fk, attr, oneToOne } from 'redux-orm';
import { PropTypes } from 'react';
import propTypesMixin from 'redux-orm-proptypes';
import {
    CREATE_DASHBOARD,
    CREATE_PANEL,
    CREATE_FILTER,
    EDIT_DASHBOARD,
    EDIT_PANEL,
    EDIT_FILTER,
} from './actionTypes';

const ValidatingModel = propTypesMixin(Model);

// export class Tag extends ValidatingModel {
//     static reducer(state, action, Tag) {
//         const { payload, type } = action;
//         switch (type) {
//         case CREATE_TODO:
//             const tags = payload.tags.split(',');
//             const trimmed = tags.map(name => name.trim());
//             trimmed.forEach(name => Tag.create({ name }));
//             break;
//         case ADD_TAG_TO_TODO:
//             if (!Tag.filter({ name: payload.tag }).exists()) {
//                 Tag.create({ name: payload.tag });
//             }
//             break;
//         }
//     }
// }
// Tag.modelName = 'Tag';
// Tag.backend = {
//     idAttribute: 'name',
// };


export class Dashboard extends ValidatingModel {
    static reducer(state, action, Dashboard, orm) {

    }
}



export class Panel extends ValidatingModel {
    static reducer(state, action, Panel, orm) {
        const { payload, type } = action;
        switch (type) {
            case CREATE_DASHBOARD:
                for (var i = 0; i < action.payload.panels.length; i++) {
                    Panel.create({ ...action.payload.panels[i], parentId: action.payload.id });
                }
                break;
            case EDIT_PANEL:
                break;
        }
    }
}
Panel.modelName = 'Panel';
Panel.fields = {
    // id: attr(),
    // parentId: attr(),
    // width: attr(),
    // height: attr(),
    dashboard: fk('Dashboard'),
}

export class Filter extends ValidatingModel {
    static reducer(state, action, Filter, orm) {
        const { payload, type } = action;
        switch (type) {
            case CREATE_DASHBOARD:
                for (var i = 0; i < action.payload.filters.length; i++) {
                    Filter.create({ ...action.payload.filters[i], parentId: action.payload.id });
                }
                break;
            case EDIT_FILTER:
                break;
        }
    }
}

Filter.modelName = 'Filter';
Filter.fields = {
    name: attr(),
    type: attr(),
    key: attr(),
    dashboard: fk('Dashboard'),
}

// export class User extends ValidatingModel {}
// User.modelName = 'User';

// export class Todo extends ValidatingModel {
//     static reducer(state, action, Todo, session) {
//         const { payload, type } = action;
//         switch (type) {
//         case CREATE_TODO:
//             // Payload includes a comma-delimited string
//             // of tags, corresponding to the `name` property
//             // of Tag, which is also its `idAttribute`.
//             const tagIds = action.payload.tags.split(',').map(str => str.trim());

//             // You can pass an array of ids for many-to-many relations.
//             // `redux-orm` will create the m2m rows automatically.
//             const props = Object.assign({}, payload, { tags: tagIds, done: false });
//             Todo.create(props);
//             break;
//         case MARK_DONE:
//             // withId returns a Model instance.
//             // Assignment doesn't mutate Model instances.
//             Todo.withId(payload).done = true;
//             break;
//         case DELETE_TODO:
//             Todo.withId(payload).delete();
//             break;
//         case ADD_TAG_TO_TODO:
//             Todo.withId(payload.todo).tags.add(payload.tag);
//             break;
//         case REMOVE_TAG_FROM_TODO:
//             Todo.withId(payload.todo).tags.remove(payload.tag);
//             break;
//         }
//     }
// }
// Todo.modelName = 'Todo';
// Todo.fields = {
//     tags: many('Tag', 'todos'),
//     user: fk('User', 'todos'),
// };
// Todo.propTypes = {
//     text: PropTypes.string.isRequired,
//     done: PropTypes.bool.isRequired,
//     user: PropTypes.oneOfType([
//         PropTypes.instanceOf(User),
//         PropTypes.number,
//     ]).isRequired,
//     tags: PropTypes.arrayOf(PropTypes.oneOfType([
//         PropTypes.instanceOf(Tag),
//         PropTypes.string,
//     ])).isRequired,
// };
// Todo.defaultProps = {
//     done: false,
// };

export const orm = new ORM();
orm.register(Dashboard, Filter, Panel);

export default orm;
