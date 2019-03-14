import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Applications from "./views/applications/Applications";
import AddNewApp from "./views/applications/AddNewApp";
import EditApp from "./views/applications/EditApp";
import Users from "./views/users/Users";
import EditUser from "./views/users/EditUser";
import AddNewUser from "./views/users/AddNewUser";
import Attractions from "./views/attractions/Attractions";
import AddNewAttr from "./views/attractions/AddNewAttr";
import EditAttr from "./views/attractions/EditAttr";
import Graphs from "./views/graphs/Graphs";
import AddNewGraph from "./views/graphs/AddNewGraph";
import EditGraph from "./views/graphs/EditGraph";
import Devices from "./views/devices/Devices";
import AddNewDevice from "./views/devices/AddNewDevice";
import EditDevice from "./views/devices/EditDevice";
import EditAddressDevice from "./views/devices/EditAddressDevice";
import NotFound from "./views/NotFound";
import AddNewAddressDevice from "./views/devices/AddNewAddressDevice";
import Groups from "./views/groups/Groups";
import AddNewGroup from "./views/groups/AddNewGroup";
import EditGroup from "./views/groups/EditGroup";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/applications',
            name: 'applications',
            component: Applications
        },
        {
            path: '/applications/add-new',
            name: 'add-new-app',
            component: AddNewApp
        },
        {
            path: '/applications/edit/:id',
            name: 'edit-app',
            component: EditApp
        },
        {
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '/users/add-new',
            name: 'add-new-user',
            component: AddNewUser
        },
        {
            path: '/users/edit/:id',
            name: 'edit-user',
            component: EditUser
        },
        {
            path: '/attractions',
            name: 'attractions',
            component: Attractions
        },
        {
            path: '/attractions/add-new',
            name: 'add-new-attr',
            component: AddNewAttr
        },
        {
            path: '/attractions/edit/:id',
            name: 'edit-attr',
            component: EditAttr
        },
        {
            path: '/graphs',
            name: 'graphs',
            component: Graphs
        },
        {
            path: '/graphs/add-new',
            name: 'add-new-graph',
            component: AddNewGraph
        },
        {
            path: '/graphs/edit/:id',
            name: 'edit-graph',
            component: EditGraph
        },
        {
            path: '/devices',
            name: 'devices',
            component: Devices
        },
        {
            path: '/devices/add-new',
            name: 'add-new-device',
            component: AddNewDevice
        },
        {
            path: '/devices/edit/:id',
            name: 'edit-device',
            component: EditDevice
        },
        {
            path: '/devices/edit/:id/device-address/:device-address-id',
            name: 'edit-address-device',
            component: EditAddressDevice
        },
        {
            path: '/devices/edit/:id/device-address/add-new',
            name: 'add-new-address-device',
            component: AddNewAddressDevice
        },
        {
            path: '/groups',
            name: 'groups',
            component: Groups
        },
        {
            path: '/groups/add-new',
            name: 'add-new-group',
            component: AddNewGroup
        },
        {
            path: '/groups/edit/:id',
            name: 'edit-group',
            component: EditGroup
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        }
    ]
});
