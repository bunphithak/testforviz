
import { TestA } from '../views/Test-A'
import { TestB } from '../views/Test-B'

import {
   AccountBalance

} from 'material-ui-icons';

const appRoutes = [
   
    { path: "/test-A", sidebarName: "test-A", navbarName: "test-A", icon: AccountBalance, component: TestA },   
    { path: "/test-B", sidebarName: "test-B", navbarName: "test-B", icon: AccountBalance, component: TestB }, 
    { redirect: true, path: "/", to: "/test-A", navbarName: "Redirect" }
];

export default appRoutes;
