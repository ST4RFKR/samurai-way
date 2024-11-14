import users from "../components/Users/Users";

const FOLLOW: string = 'FOLLOW';
const UNFOLLOW: string = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

export const followAC = (userId: string | number) => ({type: FOLLOW, userId})
export const unFollowAC = (userId: string | number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: any) => ({type: SET_USERS, users})

let initialState = {
    users: [
        // {
        //     id: 1,
        //     isFollow: true,
        //     urlPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDnW8gdU6gWQYolx7jTmrgWowhOfxQUoPCA&s',
        //     fullName: 'Dmitry K.',
        //     status: 'Hi i am boss',
        //     location: {
        //         city: 'Riga',
        //         country: 'Latvia'
        //     },
        // },
        // {
        //     id: 2,
        //     isFollow: false,
        //     urlPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDnW8gdU6gWQYolx7jTmrgWowhOfxQUoPCA&s',
        //     fullName: 'Victor L.',
        //     status: 'Hi i am boss',
        //     location: {
        //         city: 'Kiev',
        //         country: 'Ukraine'
        //     },
        // },
        // {
        //     id: 3,
        //     isFollow: true,
        //     urlPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDnW8gdU6gWQYolx7jTmrgWowhOfxQUoPCA&s',
        //     fullName: 'Sergey Y.',
        //     status: 'Hi i am boss',
        //     location: {
        //         city: 'Minsk',
        //         country: 'Belarus'
        //     },
        // }


    ],
}
const messagePageReducer = (state: any = initialState, action: any) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user:any) => {
                    if (user.id === action.userId) {
                        return { ...user,isFollow : true}
                    }return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user:any) => {
                    if (user.id === action.userId) {
                        return { ...user,isFollow : false}
                    }return user
                })
            }
        case SET_USERS :{
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;

    }
}

export default messagePageReducer;
