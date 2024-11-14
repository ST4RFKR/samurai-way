import React from 'react';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png';

const Users = (props: any) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
      props.setUsers(res.data.items);
    });
  }

  return (
    <div>
      {props.users.map((u: any) => (
        <div key={u.id}>
          <div>
            <img
              style={{ width: '150px' }}
              src={u.photos.small !== null ? u.photos.small : userPhoto}
              alt=""
            />
            {u.isFollow ? (
              <button
                onClick={() => {
                  props.unFollow(u.id);
                }}>
                unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
                }}>
                follow
              </button>
            )}
          </div>
          <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default Users;
