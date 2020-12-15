'use strict'

import React, {
  Component
} from 'react'
import AppContent from './components/app-content'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch(e) {
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${e.target.value}`).then((result) => {
        console.log(result)
        this.setState({
          userInfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          }
        })
      })
    }
  }

  getRepos (type){
    return (e) => {
      ajax().get(`https://api.github.com/users/alisson-amaral-silva/${type}`)
      .then(response => {
        this.setState({
          [type]: response.map((repo) => {
            return {
              name: repo.name,
              link: repo.html_url
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
    handleSearch = {
      (e) => this.handleSearch(e)
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