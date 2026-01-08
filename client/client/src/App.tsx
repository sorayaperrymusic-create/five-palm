import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import DayDetail from "./pages/DayDetail";
import CampaignOverview from "./pages/CampaignOverview";
import CampaignTimeline from "./pages/CampaignTimeline";
import ExpectedPerformance from "./pages/ExpectedPerformance";
import ReadyToCreateStory from "./pages/ReadyToCreateStory";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/day/:day" component={DayDetail} />
      <Route path="/overview" component={CampaignOverview} />
      <Route path="/timeline" component={CampaignTimeline} />
      <Route path="/performance" component={ExpectedPerformance} />
      <Route path="/story" component={ReadyToCreateStory} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
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
