import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import axios from "axios";
import {setProfile, setUserProfile} from "../../Redux/profile-reduser";
import { useParams } from 'react-router-dom';
import {profileAPI} from "../../api/api";

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}


class ProfileContainer extends React.Component {
    componentDidMount() {
        profileAPI.getProfileData(this.props.match.params.userId || 31064).then(data => {
            this.props.setUserProfile(data)
        })
    }


    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))