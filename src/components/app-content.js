'use-strict'

import React, {PropTypes} from 'react'
import Search from './search/index'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred, handleSearch, getRepos, getStarred, isFetching }) => (
    <div className='app'>
            <Search isDisabled={isFetching} handleSearch={handleSearch} />
            {isFetching && <div>Carregando...</div>}
            {!!userInfo && <UserInfo userInfo={userInfo} />}
            {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

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
    userInfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default AppContent