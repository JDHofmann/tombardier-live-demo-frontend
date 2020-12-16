import './App.css';
import React from 'react'
import { connect } from 'react-redux';
import {  Route, Switch } from 'react-router-dom';
import Header from './containers/Header';
import Footer from './components/Footer';
import ProjectsIndex from './containers/ProjectsIndex';
import Contact from './containers/Contact';
import About from './containers/About';
import { fetchUser, editAccountInfo, editSiteInfo, createProject, submitLogin, fetchCurrentUser, handleLogout } from './redux/actions'
import Login from './components/Login';
import Admin from './components/Admin'


class App extends React.Component{

  componentDidMount(){
    this.props.fetchUser()
    const token = localStorage.getItem("token")
    if(token){
      this.props.fetchCurrentUser(token)
    }
    else {
      console.log("no token")
    }
  }

  renderTitle = () => {
    return  <h1 className="site-title solo">{this.props.user.site_title}</h1>
  }

  render(){
    return (
      <>
      <div className="App">
        <Header />
        <Switch>
          <Route 
            path="/login"
            render={ () =>
              <Login 
              submitLogin={this.props.submitLogin}
              currentUser={this.props.currentUser}
              />
            }
          />
          { this.props.currentUser ?
          <Route 
            path="/admin"
            render={ () =>
              <Admin 
                currentUser={this.props.currentUser}
                editAccountInfo={this.props.editAccountInfo}
              />
            }
          />
          : null
          }
          <Route 
            path="/contact" 
            render={ () => <>
              { this.props.user ? 
              <>
              {this.renderTitle()}
              <Contact 
                user={this.props.user}
                currentUser={this.props.currentUser}
                editSiteInfo={this.props.editSiteInfo}
              />
              </> 
                : null
              }
              </>
            }
          />
          <Route 
            path="/about" 
            render={ () => <>
            {this.props.user ?
            <>
            {this.renderTitle()}
            <About 
              user={this.props.user}
              editSiteInfo={this.props.editSiteInfo}
            /> 
            </>
            :null}
            </>
            }
          />
          <Route 
            path="/"
            render={(routerProps) => 
              <>
                { this.props.user ? 
                <ProjectsIndex 
                  renderTitle={this.renderTitle}
                  history={routerProps.history}
                  projects={this.props.user.user_projects}
                  user={this.props.user}
                  currentUser={this.props.currentUser}
                  createProject={this.props.createProject}
                  editSiteInfo={this.props.editSiteInfo}
                  />
                : null
                }
              </>
            }
          />
        </Switch>
      </div>
        <Footer 
            user={this.props.user}
            submitLogin={this.props.submitLogin}
            startEditMode={this.props.startEditMode}
            startViewMode={this.props.startViewMode}
            currentUser={this.props.currentUser}
            handleLogout={this.props.handleLogout}
        />
        </>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser()),
    editAccountInfo: (patchObj) => dispatch(editAccountInfo(patchObj)),
    editSiteInfo: (patchObj) => dispatch(editSiteInfo(patchObj)),
    createProject: (userId) => dispatch(createProject(userId)),
    submitLogin: (loginObj) => dispatch(submitLogin(loginObj)),
    fetchCurrentUser: (token) => dispatch(fetchCurrentUser(token)),
    handleLogout: () => dispatch(handleLogout())
  }
}

const msp = state => {
  return {
    user: state.user,
    currentUser: state.currentUser
  }
}

export default connect(msp, mdp)(App);
