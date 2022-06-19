import { Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetups";

function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact component={AllMeetupsPage} />
          <Route path="/new-meetup" component={NewMeetupPage} />
          <Route path="/favorites" component={FavoritesPage} />
        </Switch>
      </Layout>
  );
}

export default App;
