// import { LocalTaxiOutlined } from '@material-ui/icons';
// import { mount } from 'users/UsersApp';
// import React, { useRef, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// export default ({ onSignIn, history }) => {
//     const ref = useRef(null);
//     // const history = useHistory();
//     useEffect(() => {
//         const { onParentNavigate } = mount(ref.current, {
//             initialPath: history.location.pathname,
//             onNavigate: ({ pathname: nextPathname }) => { // destructuring the pathname to nextPathename
//                 console.log(history.location)
//                 const { pathname } = history.location;
//                 if (pathname !== nextPathname) {
//                     history.push(nextPathname);
//                 }
//             },
//             onSignIn,
//         });
//         history.listen(onParentNavigate);
//     }, []);

//     return (
//         <div ref={ref} />
//     );
// };
