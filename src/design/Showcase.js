// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../DocsArticle');

var Showcase = React.createClass({
  render: function () {
    return (
      <DocsArticle title="Showcase" colorIndex="neutral-4">
        <p>
          The showcase offers a set of notional application designs that embody
          the elements of this style guide and implementation platform.
          Each example in the showcase demonstrates a unique approach to
          meeting a user need.  You'll notice that while the examples in the
          showcase express unique value and differentiated capabilities,
          they are grounded in common interaction patterns and are aligned
          with a common brand.
        </p>
        <section>
          <a className="reference" id="hpsw-analytics"> </a>
          <h2>Analytics</h2>
          <img src="img/hpe-software-showcase2.png" title="Analytics" />
        </section>

        <section>
          <a className="reference" id="hpsw-big-data"> </a>
          <h2>Big Data</h2>
          <img src="img/hpe-software-showcase6.png" title="Big Data" />
        </section>

        <section>
          <a className="reference" id="hpsw-cloud-analytics"> </a>
          <h2>Cloud Analytics</h2>
          <img src="img/hpe-software-showcase7.png" title="Cloud Analytics" />
        </section>

        <section>
          <a className="reference" id="hpsw-business-analytics"> </a>
          <h2>IT Business Analytics</h2>
          <img src="img/hpe-software-showcase1.png" title="IT Business Analytics" />
        </section>

        <section>
          <a className="reference" id="hpsw-login"> </a>
          <h2>Login</h2>
          <img src="img/hpsw-login.png" title="Login" />
        </section>

        <section>
          <a className="reference" id="oneview-dashboard"> </a>
          <h2>OneView Dashboard</h2>
          <img src="img/hpe_oneview_dashboard.svg" title="OneView Dashboard" />
        </section>

        <section>
          <a className="reference" id="oneview-detail-page"> </a>
          <h2>OneView Detail Page</h2>
          <img src="img/hpe_oneview_details.svg" title="OneView Detail Page" />
        </section>

        <section>
          <a className="reference" id="hpsw-ops-dashboard"> </a>
          <h2>Ops Dashboard</h2>
          <img src="img/hpe-software-showcase3.png" title="Ops Dashboard" />
        </section>

        <section>
          <a className="reference" id="propel-dashboard"> </a>
          <h2>Propel Dashboard</h2>
          <img src="img/propel-shop-dashboard.png" title="Propel Dashboard" />
        </section>

        <section>
          <a className="reference" id="propel-prod-detail"> </a>
          <h2>Propel Product Detail</h2>
          <img src="img/propel-shop-prod-detail.png" title="Propel Product Detail" />
        </section>

        <section>
          <a className="reference" id="hpsw-service-anywhere"> </a>
          <h2>Service Anywhere</h2>
          <img src="img/hpe-software-showcase5.png" title="Service Anywhere" />
        </section>

        <section>
          <a className="reference" id="hpsw-web-inspect"> </a>
          <h2>Web Inspect</h2>
          <img src="img/hpe-software-showcase4.png" title="Web Inspect" />
        </section>
      </DocsArticle>
    );
  }
});

module.exports = Showcase;
