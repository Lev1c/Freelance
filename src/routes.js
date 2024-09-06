import {MAIN_ROUTE, WORK_ROUTE, TARGET_ROUTE, SPECIALISTITS_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, CHAT_ROUTE, WALLET_ROUTE, TASK_ROUTE, EMAIL_ROUTE, EDIT_ROUTE, CREATE_ROUTE, RATE_ROUTE, ADDWORK_ROUTE, EDITPROFILE_ROUTE, EXECUTOR_PROFILE_ROUTE, CUSTOMER_PROFILE_ROUTE, VERIFICATIONexecutor_ROUTE, VERIFICATIONcustomer_ROUTE, EDITWORK_ROUTE, EDITPROFILEexecutor_ROUTE, EDITPROFILCustomer_ROUTE, FEEDBACK_ROUTE, ADMIN_ROUTE, ADMIN_LISTUSER_ROUTE, ADMIN_CUSTOMER_ROUTE, ADMIN_ECECUTOR_ROUTE, ADMIN_EXECUTOR_ROUTE, ADMIN_CREDIT_ROUTE, ADMIN_INSURE_ROUTE, ADMIN_ARBIT_ROUTE, ADMIN_SETTINGS_ROUTE, ADMIN_TASK_ROUTE} from "./utils/consts";

import Home from './components/home/Home'
import Work from "./components/work/Work.js";
import Target from "./components/target/Target.js";
import Specialists from "./components/specialists/Specialists.js";
import Profile from "./components/profile/profile";
import ProfileExecutor from "./components/profileExecutor/profile";
import ProfileCustomer from "./components/profileCustomer/profile";
import Registration from "./components/auth/Registration";
import Chat from "./components/chat/chat";
import Wallet from "./components/wallet/wallet";
import Task from "./components/tasks/task";
import AuthEmail from "./components/auth/AuthEmail";
import Edit from "./components/target/Edit";
import CreateWork from "./components/createWork/CreateWork";
import RateBuy from "./components/wallet/RateBuy";
import AddWork from "./components/profile/profile-components/addWork";
import VerifCustomer from "./components/profile/verifCustomer";
import VerifExecutor from "./components/profile/verifExecutor";
import EditWork from "./components/profile/profile-components/editWork";
import MainEditExecutor from "./components/profile/profile-components/mainEditExecutor";
import MainEdit from "./components/profile/profile-components/mainEdit";
import MainEditCustomer from "./components/profile/profile-components/mainEditCustomer";
import FeedBack from "./components/target/Targer-components/feedback";
import Admin from "./components/admin/Admin";
import ListUser from "./components/admin/admin-components/listUser";
import ListUserCustomer from "./components/admin/customer/listUser";
import ListUserExecutor from "./components/admin/executor/listUser";
import ListUserCredit from "./components/admin/credit/listUser";
import ListUserInsure from "./components/admin/insure/listUser";
import ListUserArbit from "./components/admin/arbitrate/listUser";
import Settings from "./components/admin/settings/listUser";
import ListUserTask from "./components/admin/task/listUser";


export const authRoutes = [
    {
        path: TARGET_ROUTE + "/:id",
        Component: <Target/>
    },
    {
        path: FEEDBACK_ROUTE + "/:id",
        Component: <FeedBack/>
    },
    {
        path: EXECUTOR_PROFILE_ROUTE + "/:id",
        Component: <ProfileExecutor/>
    },
    {
        path: CUSTOMER_PROFILE_ROUTE + "/:id",
        Component: <ProfileCustomer/>
    },
    {
        path: PROFILE_ROUTE,
        Component: <Profile/>
    },
    {
        path: CHAT_ROUTE,
        Component: <Chat/>
    },
    {
        path: WALLET_ROUTE,
        Component: <Wallet/>
    },
    {
        path: TASK_ROUTE,
        Component: <Task/>
    },
    {
        path: EDIT_ROUTE  + '/:id',
        Component: <Edit/>
    },
    {
        path: CREATE_ROUTE,
        Component: <CreateWork/>
    },
    {
        path: RATE_ROUTE,
        Component: <RateBuy/>
    },
    {
        path: ADDWORK_ROUTE,
        Component: <AddWork/>
    },
    {
        path: EDITPROFILE_ROUTE,
        Component: <MainEdit/>
    },
    {
        path: EDITPROFILEexecutor_ROUTE,
        Component: <MainEditExecutor/>
    },
    {
        path: EDITPROFILCustomer_ROUTE,
        Component: <MainEditCustomer/>
    },
    {
        path: EDITWORK_ROUTE + '/:id',
        Component: <EditWork/>
    },
    {
        path: VERIFICATIONexecutor_ROUTE,
        Component: <VerifExecutor/>
    },
    {
        path: VERIFICATIONcustomer_ROUTE,
        Component: <VerifCustomer/>
    },
    {
        path: ADMIN_LISTUSER_ROUTE,
        Component: <ListUser/>
    },
    {
        path: ADMIN_CUSTOMER_ROUTE,
        Component: <ListUserCustomer/>
    },
    {
        path: ADMIN_EXECUTOR_ROUTE,
        Component: <ListUserExecutor/>
    },
    {
        path: ADMIN_CREDIT_ROUTE,
        Component: <ListUserCredit/>
    },
    {
        path: ADMIN_INSURE_ROUTE,
        Component: <ListUserInsure/>
    },
    {
        path: ADMIN_ARBIT_ROUTE,
        Component: <ListUserArbit/>
    },
    {
        path: ADMIN_SETTINGS_ROUTE,
        Component: <Settings/>
    },
    {
        path: ADMIN_TASK_ROUTE,
        Component: <ListUserTask/>
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Home/>
    },
    {
        path: WORK_ROUTE,
        Component: <Work/>
    },
    {
        path: SPECIALISTITS_ROUTE,
        Component: <Specialists/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Registration/>
    },
    {
        path: EMAIL_ROUTE,
        Component: <AuthEmail/>
    },
]
