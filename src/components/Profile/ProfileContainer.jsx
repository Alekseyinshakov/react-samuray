import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {getStatus, setProfile, setUserProfile, updateStatus} from "../../Redux/profile-reduser";
import {Navigate, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";





class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfile(this.props.match.params.userId);
    }


    render() {
        return <Profile {...this.props} />
    }
}

// let authRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, { getStatus, setProfile, updateStatus}),
    withRouter,
    // withAuthRedirect
    )
(ProfileContainer)

// export default connect(mapStateToProps, {setUserProfile, setProfile})(withRouter(authRedirectComponent))