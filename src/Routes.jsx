import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ActivityDetailVistor = React.lazy(
  () => import("pages/ActivityDetailVistor"),
);
const JudgementSuccessNotice = React.lazy(
  () => import("pages/JudgementSuccessNotice"),
);
const ActivitiesCollection = React.lazy(
  () => import("pages/ActivitiesCollection"),
);
const PropsManager = React.lazy(() => import("pages/PropsManager"));
const OrganizationCreate = React.lazy(() => import("pages/OrganizationCreate"));
const ActivitiesManagement = React.lazy(
  () => import("pages/ActivitiesManagement"),
);
const ActivitiesModify = React.lazy(() => import("pages/ActivitiesModify"));
const Supervise = React.lazy(() => import("pages/Supervise"));
const MessageBoard = React.lazy(() => import("pages/MessageBoard"));
const ModifyPassword = React.lazy(() => import("pages/ModifyPassword"));
const ActivitiesRecords = React.lazy(() => import("pages/ActivitiesRecords"));
const ModifyForgetPassword = React.lazy(
  () => import("pages/ModifyForgetPassword"),
);
const OrganizationPowerEdit = React.lazy(
  () => import("pages/OrganizationPowerEdit"),
);
const UserRestrictSelect = React.lazy(() => import("pages/UserRestrictSelect"));
const ActivityDetail = React.lazy(() => import("pages/ActivityDetail"));
const EditOrganizationInterview = React.lazy(
  () => import("pages/EditOrganizationInterview"),
);
const EmergencyActivitiesForm = React.lazy(
  () => import("pages/EmergencyActivitiesForm"),
);
const ReportForm = React.lazy(() => import("pages/ReportForm"));
const TracePublisherCollection = React.lazy(
  () => import("pages/TracePublisherCollection"),
);
const ActivitiesPublishSelect = React.lazy(
  () => import("pages/ActivitiesPublishSelect"),
);
const HomeVistor = React.lazy(() => import("pages/HomeVistor"));
const LocationMap = React.lazy(() => import("pages/LocationMap"));
const Store = React.lazy(() => import("pages/Store"));
const GeneralActivitiesForm = React.lazy(
  () => import("pages/GeneralActivitiesForm"),
);
const HomeListVistor = React.lazy(() => import("pages/HomeListVistor"));
const Friends = React.lazy(() => import("pages/Friends"));
const UserRemoveSelect = React.lazy(() => import("pages/UserRemoveSelect"));
const AnnounceBoard = React.lazy(() => import("pages/AnnounceBoard"));
const LogIn = React.lazy(() => import("pages/LogIn"));
const UserReportsSelect = React.lazy(() => import("pages/UserReportsSelect"));
const SendAnnounce = React.lazy(() => import("pages/SendAnnounce"));
const AnnounceDetail = React.lazy(() => import("pages/AnnounceDetail"));
const Register = React.lazy(() => import("pages/Register"));
const OrganizationDetail = React.lazy(() => import("pages/OrganizationDetail"));
const AccountManagement = React.lazy(() => import("pages/AccountManagement"));
const HomeListNormalUser = React.lazy(() => import("pages/HomeListNormalUser"));
const FriendsRemoveSelect = React.lazy(
  () => import("pages/FriendsRemoveSelect"),
);
const OrganizationManagement = React.lazy(
  () => import("pages/OrganizationManagement"),
);
const HomeSystemManager = React.lazy(() => import("pages/HomeSystemManager"));
const HomeNormalUser = React.lazy(() => import("pages/HomeNormalUser"));
const OrganizationEdit = React.lazy(() => import("pages/OrganizationEdit"));
const HomeListSystemManager = React.lazy(
  () => import("pages/HomeListSystemManager"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/homelistsystemmanager"
            element={<HomeListSystemManager />}
          />
          <Route path="/organizationedit" element={<OrganizationEdit />} />
          <Route path="/homenormaluser" element={<HomeNormalUser />} />
          <Route path="/homesystemmanager" element={<HomeSystemManager />} />
          <Route
            path="/organizationmanagement"
            element={<OrganizationManagement />}
          />
          <Route
            path="/friendsremoveselect"
            element={<FriendsRemoveSelect />}
          />
          <Route path="/homelistnormaluser" element={<HomeListNormalUser />} />
          <Route path="/accountmanagement" element={<AccountManagement />} />
          <Route path="/organizationdetail" element={<OrganizationDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/announcedetail" element={<AnnounceDetail />} />
          <Route path="/sendannounce" element={<SendAnnounce />} />
          <Route path="/userreportsselect" element={<UserReportsSelect />} />
          <Route path="/announceboard" element={<AnnounceBoard />} />
          <Route path="/userremoveselect" element={<UserRemoveSelect />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/homelistvistor" element={<HomeListVistor />} />
          <Route
            path="/generalactivitiesform"
            element={<GeneralActivitiesForm />}
          />
          <Route path="/store" element={<Store />} />
          <Route path="/locationmap" element={<LocationMap />} />
          <Route path="/homevistor" element={<HomeVistor />} />
          <Route
            path="/activitiespublishselect"
            element={<ActivitiesPublishSelect />}
          />
          <Route
            path="/tracepublishercollection"
            element={<TracePublisherCollection />}
          />
          <Route path="/reportform" element={<ReportForm />} />
          <Route
            path="/emergencyactivitiesform"
            element={<EmergencyActivitiesForm />}
          />
          <Route
            path="/editorganizationinterview"
            element={<EditOrganizationInterview />}
          />
          <Route path="/activitydetail" element={<ActivityDetail />} />
          <Route path="/userrestrictselect" element={<UserRestrictSelect />} />
          <Route
            path="/organizationpoweredit"
            element={<OrganizationPowerEdit />}
          />
          <Route
            path="/modifyforgetpassword"
            element={<ModifyForgetPassword />}
          />
          <Route path="/activitiesrecords" element={<ActivitiesRecords />} />
          <Route path="/modifypassword" element={<ModifyPassword />} />
          <Route path="/messageboard" element={<MessageBoard />} />
          <Route path="/supervise" element={<Supervise />} />
          <Route path="/activitiesmodify" element={<ActivitiesModify />} />
          <Route
            path="/activitiesmanagement"
            element={<ActivitiesManagement />}
          />
          <Route path="/organizationcreate" element={<OrganizationCreate />} />
          <Route path="/propsmanager" element={<PropsManager />} />
          <Route
            path="/activitiescollection"
            element={<ActivitiesCollection />}
          />
          <Route
            path="/judgementsuccessnotice"
            element={<JudgementSuccessNotice />}
          />
          <Route
            path="/activitydetailvistor"
            element={<ActivityDetailVistor />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
