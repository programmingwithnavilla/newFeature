import React, { Component } from "react";
import Header from "../../components/common/header/header";
import Footer from "../../components/common/footer/footer";

export default class Layout extends Component {
  render() {

    return (
      <section>
        <Header />
        <div className="col d-flex flex-column main-content p-0">
          new Feature
        </div>
        <Footer />
      </section>
    );
  }
}
