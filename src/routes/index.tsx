import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppRoutes from "./auth.routes";

// NOTE: 
// quando o usuário estiver logado: app.routes
// quando o usuário não estiver logado: auth.routes

const routes = () => {

  return (
    <NavigationContainer>
        <AppRoutes/>
    </NavigationContainer>
  );
}

export default routes;