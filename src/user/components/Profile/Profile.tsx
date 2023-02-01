import Image from 'next/image';
import React from 'react';
import classes from './Profile.module.css';

type ProfileProps = {
  avatar: string;
  name: string;
  location?: string | null;
  bio?: string | null;
  followers: number;
  following: number;
};

const Profile = (props: ProfileProps) => {
  return (
    <div className={classes.root}>
      <Image
        src={props.avatar}
        alt=""
        width={300}
        height={300}
        style={{ borderRadius: '13px' }}
      />
      <article>
        <h1 className={classes.title}>
          {props.name} {props.location && `, ${props.location}`}
        </h1>
        <p>{props.bio}</p>
        <aside className={classes.counters}>
          <small style={{ paddingRight: 10 }}>
            {props.followers} followers
          </small>
          <small>{props.following} following</small>
        </aside>
      </article>
    </div>
  );
};

export default Profile;
