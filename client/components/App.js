import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionsCreators';
import Main from './Main';

const mapStateToProps = (state) => {
  // console.log('mapStateToProps', state);
  return {
    posts: state.posts,
    comments: state.comments,
  }
}//store to props

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
} //actions to props

const App = connect(mapStateToProps, mapDispatchToProps)(Main);


export default App;
