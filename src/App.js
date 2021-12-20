import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { BlogDetail } from "./pages/BlogDetail";
import { TourDetail } from "./pages/TourDetail";
import { PageDetail } from "./pages/PageDetail";
import { PageAPI } from "./data/api/pages";
import { TourAPI } from "./data/api/tours";

function App() {
  const slug = "/tour-du-lich-khach-doan";
  const [page, setPage] = useState({});
  const [tours, setTours] = useState([]);
  useEffect(() => {
    (async () => {
      const getPage = await PageAPI.getPage(slug);
      const getTours = await TourAPI.getAllTour();

      setPage(getPage.data);
      setTours(getTours.data);
    })();
  }, []);

  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/page">
          <BlogDetail />
        </Route>
        {/* <Route exact path="/tour-1">
          <TourDetail />
        </Route> */}
        <Route path={slug}>
          <PageDetail item={page} />
        </Route>
        {tours.map((e) => {
          console.log(e.slug);
          return (
            <Route key={e._id} path={"/" + e.slug}>
              <TourDetail tour={e} />
            </Route>
          );
        })}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
