import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC,unFollowAC, setUsersAC} from "../../redux/usersPageReducer";


let mapStateToProps = (state: any) => {
    return {
users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow : (userID: any) => {
            dispatch(followAC(userID))
        },
        unFollow : (userID: any) => {
            dispatch(unFollowAC(userID))
        }, setUsers : (users:any) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
