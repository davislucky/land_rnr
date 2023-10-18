import NavBar from "./components/NavBar/NavBar";
import Modal from "./components/modal/modal";
import ListingsIndex from "./components/listings/listingIndex";
import { Route, Switch } from "react-router-dom";
import ListingShowPage from "./components/listings/listingShow/listingShow";
import UserShow from "./components/userShow";

function App() {
  return (
    <>
      <Modal />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ListingsIndex />
        </Route>
        <Route exact path ="/listings/:listingId">
          <ListingShowPage />
        </Route>
        <Route exact path ="/user">
          <UserShow />
        </Route>
      </Switch>
    </>
  );
}

export default App;
