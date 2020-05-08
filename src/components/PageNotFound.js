import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PageNotFound extends Component {
  render() {
    return (
      < div className="grid-x align-center" >
        <div className="small-12 medium-8 large-7">
          <div className="callout">
            <h1 className="text-center">Page not found</h1>
            <hr />
            <p>
              The link you followed may be broken or the page
              may have been removed.
            </p>
            <p>
              <Link to="/">
                Visit our Home page
                <img alt="" src="/images/chevron_right.svg" />
              </Link>
            </p>
          </div>
        </div>
      </div >
    )
  }
}

export default PageNotFound