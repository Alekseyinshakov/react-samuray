import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {setProfile, setUserProfile} from "../../Redux/profile-reduser";
import {Navigate, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfile(this.props.match.params.userId);
    }


    render() {
        return <Profile {...this.props} />
    }
}

let authRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {setUserProfile, setProfile})(withRouter(authRedirectComponent))