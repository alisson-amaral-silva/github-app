'use strict'

import React, {
  Component
} from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

// import './css/style.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl(username, type) {
    const internalUser = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch(e) {
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      this.setState({
        isFetching: true
      })
      ajax().get(this.getGitHubApiUrl(e.target.value)).then((result) => {
          console.log(result)
          this.setState({
            userInfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        .always(() => this.setState({
          isFetching: false
        }))
    }
  }

  getRepos(type) {
    return (e) => {
      ajax().get(this.getGitHubApiUrl(this.state.userInfo.login, type))
        .then(response => {
          this.setState({
            [type]: response.map((repo) => {
              return {
                name: repo.name,
                link: repo.owner.html_url
              }
            })
          })
        })
    }
  }


  render() {
    return <AppContent
    userInfo = {
      this.state.userInfo
    }
    repos = {
      this.state.repos
    }
    starred = {
      this.state.starred
    }
    isFetching = {
      this.state.isFetching
    }
    handleSearch = {
      this.handleSearch
    }
    getRepos = {
      () => this.getRepos('repos')
    }
    getStarred = {
      () => this.getRepos('starred')
    }
    />
  }
}