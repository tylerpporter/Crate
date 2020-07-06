// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'

/* Importing StylePreference Component to be rendered when route is directed to StylePreference */
// import StylePreference from '../../modules/user/StylePreference'


// User routes
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
  }
}

/* Need to make route to user style prferences page */

// style-preference: {                  // Method will call for this route
//   path: '/user/style-preference',    // the route path to the style preference page
//   component: StylePreference,        // the component/container for the style preferene display
//   auth: true
// }

/* Need make StylePreference Component to the directory of ../../pages/StylePreference.js */
