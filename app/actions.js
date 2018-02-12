import {
    CREATE_DASHBOARD,
    CREATE_PANEL,
    CREATE_FILTER,
    EDIT_DASHBOARD,
    EDIT_PANEL,
    EDIT_FILTER,
} from './actionTypes';
import dashboardJson from './data/dashboard';

export const createDashboard = (dashboard) => {
    const newDashboard = { ...dashboardJson, id: Date.now() };
    return {
        type: CREATE_DASHBOARD,
        payload: newDashboard,
    };
};

export const createPanel = (panel) => {
    return {
        type: CREATE_PANEL,
        payload: dashboard,
    };
};

export const createFilter = (filter) => {
    return {
        type: CREATE_FILTER,
        payload: filter,
    };
};

export const editDashboard = (dashboard) => {
    return {
        type: EDIT_DASHBOARD,
        payload: dashboard,
    };
};

export const editPanel = (panel) => {
    return {
        type: EDIT_PANEL,
        payload: dashboard,
    };
};

export const editFilter = (filter) => {
    return {
        type: EDIT_FILTER,
        payload: filter,
    };
};
