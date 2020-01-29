import React, { Fragment, useState } from 'react';
import './Home.css';

export const Home = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: ''
  });

  const { firstname, lastname } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData, 'submitted')
  }

  return (
    <Fragment>
      <div className="login-container">
        <div className="col-sm-12">
          <form onSubmit={e => submitForm(e)}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" 
                className="form-control" 
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={e => onChangeHandler(e)} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" 
                className="form-control" 
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={e => onChangeHandler(e)} />
            </div>
            <input type="submit" className="btn btn-primary btn-block" value="Submit" />
          </form>
        </div>
      </div>
    </Fragment>
  )
}
