import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css';

const IndexPage = () => (
  <div className={styles.div}>
    <div >
    <h1>Rohan's Portfolio</h1>
    <img src = "/rohanProfile.png"/>
    <Link to="/about/">Who's Rohan?</Link>
    </div>
  </div>
)

export default IndexPage;
