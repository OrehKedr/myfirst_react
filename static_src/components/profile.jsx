import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import CircularProgress from 'material-ui/CircularProgress';
import { loadProfile } from '../actions/profileActions';

class Profile extends React.Component {
    static propTypes = {
        profile: PropTypes.object.isRequired,
        isLoadingProfile: PropTypes.bool.isRequired,
        loadProfile: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.loadProfile();
    };

    render() {
        if (this.props.isLoadingProfile) {
            return <CircularProgress />
        };

        const { name, email } = this.props.profile;
 
        return (
            <div>
                <h2>{ name }</h2>
                <p><strong>Email: </strong> { email } </p>
            </div>
        );
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    profile: profileReducer.profile,
    isLoadingProfile: profileReducer.isLoadingProfile,
 });
 
 const mapDispatchToProps  = dispatch => bindActionCreators({ loadProfile }, dispatch);
 
 export default connect(mapStateToProps , mapDispatchToProps)(Profile);