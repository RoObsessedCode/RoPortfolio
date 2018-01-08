import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'yellow',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <Link
          to="/"
          style={{
            color: 'yellow',
            fontWeight: 'bold',

          }}
        >
          Home
        </Link>

        <Link id="about"
          to="/about/"
          style={{
            color: 'yellow',
            fontWeight: 'bold',

          }}
        >
          About Me
        </Link>
      </ul>

    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Rohan's Portfolio"
      meta={[
        { name: 'description', content: `Rohan's Skills and Talent` },
        { name: 'keywords', content: 'Rohan - stop stalking my code ;)' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
