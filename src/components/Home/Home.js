import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
      <div className="col-sm-12">
        <form>
          <div className="form-group">
            <label for="firstname">First Name</label>
            <input type="text" 
              className="form-control" 
              id="firstname" />
          </div>
          <div className="form-group">
            <label for="lastname">Last Name</label>
            <input type="text" 
              className="form-control" 
              id="lastname" />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    </Fragment>
  )
}
