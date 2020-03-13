import React from 'react';
import Panel from '../../components/panel/panel.component';
import Header from '../../components/header/header.component';

import {connect} from 'react-redux';

const Settings = (props) => {
const {picture} = props.user;
  return(
    <>
    <Panel />
    <div className="content">
      <Header title="Settings" />
      <div className="setting-block">
            <div className="change-img">
                <div className="img">
                    <img src={`${picture}`} alt="" />
                </div>
            </div>
            <form action="" className="form">
                <div className="form-item">
                    <div className="icon">
                        <img src={require("../../style/img/notification.png")} alt="" />
                    </div>
                    <div className="input-item">
                        <input type="text" />
                    </div>
                </div>
                <div className="form-item">
                    <div className="icon">
                        <img src={require("../../style/img/notification.png")} alt="" />
                    </div>
                    <div className="input-item">
                        <input type="text" />>
                    </div>
                </div>
                <div className="form-item">
                    <div className="icon">
                        <img src={require("../../style/img/notification.png")} alt="" />
                    </div>
                    <div className="input-item">
                        <input type="text" />
                    </div>
                </div>
            </form>
            <button>save</button>
        </div>
    </div>
  </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Settings);