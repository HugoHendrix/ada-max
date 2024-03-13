import "./styles/reset.css";
import "./styles/main.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "./providers/AuthProvider";
import { Backstage } from "./modules/backstage";
import { CreateProfile } from "./modules/profile/create-profile";
import { DeleteProfile } from "./modules/profile/delete-profile";
import { EditProfile } from "./modules/profile/edit-profile";
import { ExampleStyled } from "./examples/example-context/example-styled";
import { Home } from "./modules/home";
import { Login } from "./modules/login";
import { Profile } from "./modules/profile/profile";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ROUTES } from "./constants";
import React from "react";
import ReactDOM from "react-dom/client";
import { setupI18n } from "./lang/setup";
import { HomePage } from "./modules/homePage";
import { PageDefault } from "./modules/pageDefault/PageDefault";
import { I18nContextProvider } from "./context/I18nContext";

const queryClient = new QueryClient();

setupI18n();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <I18nContextProvider>
          <AuthProvider>
            <Routes>
              {/* TODO: Remover testes e alterar rota /home */}
              <Route path="/example" element={<ExampleStyled />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<HomePage />} />
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route
                path={ROUTES.PROFILE}
                element={
                  <ProtectedRoute role="user">
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path={ROUTES.CREATE_PROFILE}
                element={
                  <ProtectedRoute role="user">
                    <CreateProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path={ROUTES.EDIT_PROFILE}
                element={
                  <ProtectedRoute role="user">
                    <EditProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path={ROUTES.DELETE_PROFILE}
                element={
                  <ProtectedRoute role="user">
                    <DeleteProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path={ROUTES.BACKSTAGE}
                element={
                  <ProtectedRoute role="admin">
                    <Backstage />
                  </ProtectedRoute>
                }
              />

              {/* TODO: IMPLEMENTAR */}
              <Route
                path="*"
                element={
                  <PageDefault />
                }
              />
            </Routes>
          </AuthProvider>
        </I18nContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
