import React, { Fragment } from 'react';
import './Playlist.css';

export const Playlist = () => {
  const createModal = () => {
    document.getElementById('playlist-modal').style.display = 'block';
    document.querySelector('body').style.background = '#ddd';
  }

  const closeModal = () => {
    document.getElementById('playlist-modal').style.display = 'none';
    document.querySelector('body').style.background = 'transparent';
  }
  return (
    <Fragment>
      <div className="col-sm-12">
        <div className="btn-header">
          <button className="btn btn-primary" onClick={e => createModal()}>Create new playlist</button>
        </div>
      </div>
      <div className="col-sm-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Playlist</th>
              <th scope="col" style={{width: 50 + '%'}}>Files</th>
              <th scope="col" colSpan="2" className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="playlist-modal" id="playlist-modal">
        <div className="playlist-form">
          <div className="playlist-form-menu">
            <span id="close" onClick={e => closeModal()}>close</span>
          </div>
          <div className="playlist-form-header">
            header
          </div>
          <div className="playlist-form-body">
            <form>
              <div className="form-group">
                <label>Playlist Name</label>
                <input type="text" 
                  className="form-control" 
                  id="playlistname"
                  name="playlistname"
                  value={playlistname}
                  onChange={e => onChangeHandler(e)} />
              </div>
              <input type="submit" className="btn btn-primary btn-block" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
