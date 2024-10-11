import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../screens/Layout";
import MyBestFriends from "../screens/MyBestFriends";
import MyCommunications from "../screens/MyCommunications";
import MyData from "../screens/MyData";
import MyRefunds from "../screens/MyRefunds";
import MyTasks from "../screens/MyTasks";

const WebRoutes = () =>
  <Routes>
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        path="my-data"
        element={<MyData />}
      />

      <Route
        path="my-tasks"
        element={<MyTasks />}
      />

      <Route
        path="my-refunds"
        element={<MyRefunds />}
      />

      <Route
        path="my-communications"
        element={<MyCommunications />}
      />

      <Route
        path="my-best-friends"
        element={<MyBestFriends />}
      />

      <Route
        index
        element={<Navigate to="/my-tasks" />}
      />

      <Route
        path="*"
        element={<Navigate to="/my-tasks" />}
      />
    </Route>
  </Routes>

export default WebRoutes
