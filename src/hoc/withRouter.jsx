import {useParams} from "react-router-dom";
import React from "react";

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        // const navigate  = {params: useNavigate()};
        return <Children {...props}  match = {match}/>
    }
}