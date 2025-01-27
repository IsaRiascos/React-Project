import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Page404 from "./pages/page-404/page404";
import Home from "./pages/home/Home";
import Conta from "./pages/Conta/contaminacion";
import Escazes from "./pages/escazes/Escazes";
import EscazesCyC from "./pages/escazes/EscazesCyC";
import Acidificacion from "./pages/acificacion/Acidficacion";
import Scena from "./pages/Conta/scena-conta/Scena";
import ScenaCausa from "./pages/Conta/Causas/scena-causas/ScenaCausa";
import Causas from "./pages/Conta/Causas/causas";
import Consecuencias from "./pages/Conta/Consecuencias/consecuencias";
import Bienvenida from "./pages/Conta/Bienvenida/bienvenida"
import Soluciones from "./pages/Conta/Soluciones/soluciones"
import ScenaSolucion from "./pages/Conta/Soluciones/scenasolucion/ScenaSolucion"
import ScenaConsecuencias from "./pages/Conta/Consecuencias/scenaconsecuencias/ScenaConsecuencias";
import QuizComponent from "./pages/quiz/Quiz";
import Entrance from "./pages/escazes/Entrance/Entrance";
import Mejoras from "./pages/escazes/Mejoras";
import Guia from "./pages/guiaquiz/Guia";
const router = createBrowserRouter([

  {path:"/",element: <Navigate to= "/Login" replace/>},
  {path: "/login",element: <Login />},
  {path: "/*" ,element: <Page404/>},
  {path: "/home", element: <Home/>},
  {path: "/contaminacion", element: <Conta/>},
  {path: "/escazes", element: <Escazes/>},
  {path: "/escazes-cyc", element: <EscazesCyC/>},
  {path: "/acidificacion", element: <Acidificacion/>},
  {path: "/Scena", element: <Scena/>, },
  {path: "/causas", element: <Causas/>, },
  {path: "/ScenaCausa", element: <ScenaCausa/>, },
  {path: "/consecuencias", element: <Consecuencias/>, },
  {path: "/Bienvenida", element: <Bienvenida/>, },
  {path: "/soluciones", element: <Soluciones/>, },
  {path: "/ScenaSolucion", element: <ScenaSolucion/>, },
  {path: "/ScenaConsecuencias", element: <ScenaConsecuencias/>, },
  {path: "/quizz", element: <QuizComponent/>, },
  {path: "/Entran", element: <Entrance/>, },
  {path: "/Mejora", element: <Mejoras/>, },
  {path: "/Guia", element: <Guia/>, },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

  
