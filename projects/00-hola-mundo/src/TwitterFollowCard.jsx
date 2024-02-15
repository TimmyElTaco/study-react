/* eslint-disable react/prop-types */


import { useState } from 'react';

export function TwitterFollowCard({ username, initialIsFollowing, children }) {
    const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing);


    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="avatar de george" 
                    src={`https://unavatar.io/${username}/`}/>
                <div className='tw-followCard-data'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-dataUsername'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}