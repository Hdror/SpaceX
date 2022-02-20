import React from 'react'
import { Switch, Route } from 'react-router-dom'


import { HomePage } from './pages/home-page.jsx'
import {LaunchApp} from './pages/launch-app'
import { LaunchDetails } from './pages/launch-details.jsx'
import { AppHeader } from './cmps/app-header.jsx'
// import { AppFooter } from './cmps/app-footer.jsx'

export function RootCmp () {

  
    return (
      <>
        <AppHeader />

        <Switch>
          <Route component={LaunchDetails} path="/launch/:launchId" />
          <Route component={LaunchApp} path="/launch" />
          <Route component={HomePage} exact path="/" />
        </Switch>
        {/* <AppFooter /> */}
        {/* <div onClick={() => { this.props.toggleModal() }} className={this.props.isModalOpen ? "screen open" : "screen"}></div> */}
      </>
    )
}

// function mapStateToProps(state) {
//   return {
//     isModalOpen: state.pageModule.isModalOpen
//   }
// }

// const mapDispatchToProps = {
//   toggleModal
// }

// export const RootCmp = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(_RootCmp)