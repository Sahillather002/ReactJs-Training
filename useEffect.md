useEffect

* sideEffect :
*** Code that interacts with outside system.
eg. local storage , network call , DB operations , websockets

React is in charge of maintaining state , syncing ui and state , rendering etc.

* useEffect function will always run when th component renders first time.
will not run when the value of dependencies stays same between renders.
Dependencies array is the second argument to the useEffect function.way for react to know whether it should run the useEffect or not.