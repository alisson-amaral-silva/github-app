'use-strict'

import React, {PropTypes} from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred }) => (
    <div className='app'>
            <Search />
            {!!userInfo && <UserInfo userInfo={userInfo} />}
            {!!userInfo && <Actions />}

            {!!repos.length && <Repos 
            className='repos' 
            title='Repositórios'
            repos={[{
            name: 'Nome do repositorio',
            link: '#'
            }]}/>}

            {!!starred.length && <Repos 
            className='starred' 
            title='Favoritos'
            repos={[{
            name: 'Nome do repositorio',
            link: '#'
            }]}/>}
            
    </div>
)

AppContent.propTypes = {
    userInfo: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent