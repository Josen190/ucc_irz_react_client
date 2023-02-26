
// import React, {useContext} from 'react';
// import { authContext } from './api/authentication/authController';
// import { Route } from 'react-router';

// export default class AppRoute extends Route {
//     constructor(props){
//         super(props);
//         let params = useContext(authContext);
//     }

//   render() {
//     return (
//         <Route path={this.props.path} element={this.props.element} loader={this.props.loader({params: {data: useContext(authContext)}})}>
//         {this.props.children}
//       </Route>
//     )
//   }
// }
