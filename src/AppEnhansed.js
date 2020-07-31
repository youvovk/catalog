import { connect } from 'react-redux';
import { App } from './App';

const mapState2Props = (state) => ({});

const mapDispatch2Props = dispatch => ({});

const Enhanced = connect(
    mapState2Props,
)(App);

export { Enhanced as App };