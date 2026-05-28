import RootLayout from "./layouts/RootLayout";
import AppRoutes from "./routes";
import { useEffect } from "react";
import { attemptRefresh } from "./services/api";

const App = () => {
  useEffect(() => {
    // attempt silent refresh on app startup to populate in-memory access token
    attemptRefresh().catch(() => {
      // silent failures are ok; user will need to log in interactively
    });
  }, []);

  return (
    <RootLayout>
      <AppRoutes />
    </RootLayout>
  );
};

export default App;
