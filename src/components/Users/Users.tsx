import React from 'react';

const Users = (props: any) => {
    return (
        <div>
            {
                props.users.map((u: any) => <div key={u.id}>
                    <div>
                        <img src={u.urlPhoto} alt=""/>
                        {u.isFollow ? <button onClick={() => {props.unFollow(u.id)}}>unfollow</button> : <button onClick={() => {props.follow(u.id)}}>follow</button> }
                    </div>
                    <div>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;
