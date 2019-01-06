import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action.js';
import { baseRequest, baiduImgGet } from 'src/apis';

class Home extends React.Component {
  componentDidMount() {
    this.getImages()
  }
  getImages = async () => {
    const data = await baseRequest(baiduImgGet());
    console.log(data);
  }
  changeName = () => {
    this.props.getUserName('li')
  }
  render() {
    return (
      <>
        <div onClick={this.changeName}>点击改变name</div>
        <div>
          { this.props.home.name }
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);