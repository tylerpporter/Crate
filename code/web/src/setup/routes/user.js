// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'

// User routes


// These are routes that a user can take depending on what loaded on the screen or 
// where they navigate. This is where we are going to have our 'user/style-preferences' route. 
// this will render our StylePreferences component. 


export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
  },

  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },

  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
  },

  // styles: {
  //   path: '/user/style-preference',
  //   component: StyleSurvey,
  //   auth: true
  // }
}


