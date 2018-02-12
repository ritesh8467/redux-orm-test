/* eslint-disable no-shadow */
import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { connect } from 'react-redux';
import {
    TodoItem,
    AddTodoForm,
    UserSelector,
} from './components';
import {
    createDashboard,
    createFilter,
    createPanel,
    editDashboard,
    editFilter,
    editPanel,
} from './actions';
import {
    dashboard,
    dashboards,
    panels,
    filters,
} from './selectors';

class App extends PureComponent {
    render() {
        debugger
        const props = this.props;

        const {
            dashboard,
            dashboards,
            panels,
            filters,

            createDashboard,
            createFilter,
            createPanel,
            editDashboard,
            editFilter,
            editPanel,
        } = props;

        console.log('Props received by App component:', props);
        let allDashboards = [];
        for (var i = 0; i < dashboards.length; i++) {
            allDashboards.push(<div>{dashboards[i].id}</div>);
        }
        let allPanels = [];
        for (var i = 0; i < panels.length; i++) {
            allPanels.push(<div>{panels[i].id}</div>);
        }
        let allFilters = [];
        for (var i = 0; i < filters.length; i++) {
            allFilters.push(<div>{filters[i].id}</div>);
        }

        return (
            <div>
                <h1>Show Dashboards</h1>
                <button onClick={createDashboard}>add</button>
                <div>
                Dashboards -----------
                {allDashboards}
                </div>
                <div>
                Filters--------
                {allFilters}
                </div>
                <div>
                Panels ---------
                {allPanels}
                </div>
            </div>
        );
    }
}

// App.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.object).isRequired,
//     users: PropTypes.arrayOf(PropTypes.object).isRequired,
//     selectedUser: PropTypes.object.isRequired,

//     selectUser: PropTypes.func.isRequired,
//     createTodo: PropTypes.func.isRequired,
//     markDone: PropTypes.func.isRequired,
//     deleteTodo: PropTypes.func.isRequired,
//     addTagToTodo: PropTypes.func.isRequired,
//     removeTagFromTodo: PropTypes.func.isRequired,
// };

// This function takes the Redux state, runs the
// selectors and returns the props passed to App.
function stateToProps(state) {
    return {
        dashboards: dashboards(state),
        filters: filters(state),
        dashboard: dashboard(state),
        panels: panels(state),
    };
}
debugger

// This maps our action creators to props and binds
// them to dispatch.
const dispatchToProps = {
    createDashboard,
    createFilter,
    createPanel,
    editDashboard,
    editFilter,
    editPanel,
};

export default connect(stateToProps, dispatchToProps)(App);
