import { AppContent } from "@/layout";
import { HomeScreen, LoginScreen, NewsScreen, ProfileScreen } from "@/screen";
import { RouteKey } from "@/types/enum";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RouteKey.HOME} element={<AppContent />}>
        <Route path={RouteKey.HOME} element={<HomeScreen />} />
        <Route path={RouteKey.NEWS} element={<NewsScreen />} />
        <Route path={RouteKey.LOGIN} element={<LoginScreen />} />
        <Route path={RouteKey.PROFILE} element={<ProfileScreen />} />
      </Route>
    </>
  )
);
