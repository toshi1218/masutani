import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import InheritanceSuccession from "./pages/InheritanceSuccession";
import WillExecution from "./pages/WillExecution";
import VoluntaryGuardianship from "./pages/VoluntaryGuardianship";
import Office from "./pages/Office";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/office"} component={Office} />
      <Route path={"/services/inheritance-succession"} component={InheritanceSuccession} />
      <Route path={"/services/will-execution"} component={WillExecution} />
      <Route path={"/services/voluntary-guardianship"} component={VoluntaryGuardianship} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
