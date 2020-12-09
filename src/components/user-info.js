'use strict'

import React from 'react'

const UserInfo = () => (
    <div className='user-info'>
    <img src='https://avatars3.githubusercontent.com/u/60556153?v=4' />
    
    <h1 className='username'>
        <a href='https://api.github.com/users/alisson-amaral-silva'>
          Alisson Amaral
        </a>
    </h1>
    <ul className='repos-info'>
      <li>Repositorios: 122</li>
      <li>Seguidores: 10</li>
      <li>Seguindo: 10</li>
    </ul>
  </div>
)

export default UserInfo
