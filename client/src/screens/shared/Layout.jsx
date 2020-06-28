import React, { Component, lazy, Suspense } from "react";
import { Conditional } from "../../utils/const/index"
import ErrorBoundry from "../../components/specifics/ErrorBoundry"
const Header = lazy(() => import("../../components/common/header/Header"));
const Footer = lazy(() => import("../../components/common/footer/Footer"));
export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  render() {
    return (
      <section>
        <Suspense fallback={<p>loading...</p>}>
          <Header />
        </Suspense>
        <ErrorBoundry>
          <p>1</p>
        </ErrorBoundry>
        <div className="col d-flex flex-column main-content p-0">
          new Feature
          <Conditional checkRender={true}>
            <h1>1</h1>
          </Conditional>

        </div>
        <Suspense fallback={<p>loading...</p>}>
          <Footer />
        </Suspense>
      </section>
    );
  }
}
