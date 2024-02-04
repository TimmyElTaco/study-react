import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import { useState } from 'react'

export function App() {

    const users = [
        {
            username: 'potus',
            name: 'Joe Biden',
            isFollowing: false
        }, 
        {
            username: 'midudev',
            name: 'Miguel Duran',
            isFollowing: true
        },
        {
            username: 'timmyeltaco',
            name: 'Luis Guzman',
            isFollowing: true
        },
        {
            username: 'pedro12',
            name: 'Pedro Ramirez',
            isFollowing: false
        }
    ]

    return (
        <div className='app'>
            {
                users.map(user => {
                    const { username, name, isFollowing } = user;

                    return (
                        <TwitterFollowCard key={username} username={username} isFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </div>
    )
}