import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}


export default initializeAuthentication;




/* steps fot Authentication


Step 01: initial setup

1. firebase : create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method .

Step 02 : setup component.
1. Create Login Component.
2. Create Register Component.

Step 03: set auth system
1. set up signIn Method.
2. set up signOut Method
3. User state
4. Special Observer(useEffect)
5. return necessary methods and states from use Fire base.

Step 04:create auth context(useAuth)

1. Create a auth context
2. Create context provider.
3. use auth provider.
4. set context provider context value.
5. create useAuth hook.

step 05: create private route

1. create Private Route.
2. Set private Route.

Step 6 : Redirect After LogIn

1. After login redirect to their destination.
*/