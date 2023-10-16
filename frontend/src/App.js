import NavBar from "./components/NavBar/NavBar";
import Modal from "./components/modal/modal";
import ListingsIndex from "./components/listings/listingIndex";
import { Route, Switch } from "react-router-dom";
import ListingShowPage from "./components/listings/listingShow/listingShow";

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
      </Switch>
    </>
  );
}

export default App;
