import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {getStatus, setProfile, setUserProfile, updateStatus, savePhoto} from "../../Redux/profile-reduser";
import {Navigate, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";





class ProfileContainer extends React.Component {


    refreshProfile() {
        console.log(555)
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myId;
            if (!userId) {
                debugger;
                window.location.href = '/login';
            }
        }
        this.props.setProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId ) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props}
        isOwner={!this.props.match.params.userId}/>
    }
}

// let authRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        myId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { getStatus, setProfile, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
    )
(ProfileContainer)

// export default connect(mapStateToProps, {setUserProfile, setProfile})(withRouter(authRedirectComponent))