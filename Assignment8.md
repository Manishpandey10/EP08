1-How do you create Nested Routes react-router-dom configuration
ans-
--------------------------------------------------------------------
2- CreateHashRouter, createMemoryRouter :
createHashRouter: createHAshRouter is useful when one is unable to configure the web server to direct all the traffic to your React Router application using normal URL.
it uses url hash when say the url i very long something like that or just want to use to simple some hash part of url 
while ""createBrowserRouter" is used for dynamic servers and cleaner URLs.
createMemoryRouter: it is used in testing and non browser env. it keeps the entire route history in memory.it becomes useful in testing
----------------------------------------------------------------------
3-  Order of life cycle method of react Class based components.
ans- 1. Component is mounted first and constructor is loaded first and the instacne of the class is loaded and the component is rendered.
2.the component is rendered.
3.render method creates a virtual DOM representation based on the current state variables and Props
4.ComponentDidMount() is a method which is used to perform task which requires component to be in the DOM such as Fetching Data, Event Listners etc.
UPDATING/UPDATE PHASE
1.this is done when the state or props values changes or the parent component is re-rendered.
shouldComponentUpdate()it returns a boolean value and is used to determine if the component needs to re-render or not based on the next state/prop. at false then rest of the update phase is skipped.
getSnapshotBeforeUpdate() it is method which captures some information from the DOM before it is updated.

ComponentDidUpdate() It is used for those task which requires the Component to be updated Dom. such as adding data, updating data, clearing timeout or removing event listners.

UNMOUNTING 
this happens when component is removed from the DOM.
it has ComponentWillUnmount() method.
------------------------------------------------------------
4-Why do we use ComponentDidMount() method
ans- ComponentDidMount() is a method which is used to perform task which requires component to be in the DOM such as Fetching Data, Event Listners etc.
--------------------------------------------------------------
5-why do we use ComponentWillUnmount()
ans- This method is used to perform any cleanup tasks that require the component to be in the DOM, such as removing event listeners, clearing timers, or canceling requests.
--------------------------------------------------------------
6-Why do we use super keyword in Constructor.
ans- Super key is call the constructor of parent class. This is necessary to use super keyword to access the props and state of parent class in the children class(es).we need to use the super props in constructor to be able to use methods of parent class. for example if there is a class which is extended from React.createComponent if we dont use super keyword {super(props)} then it will throw an error saying it is not defined.
-----------------------------------------------------------------
7- why can't React useEffect() callback be async?
ans- we cannot directly give async function as a callback function in useEffect , because async/await functions always returns a promise and useEffect expects callback to return nothing or a simple function.
we can create/use self-invoking anonymous functions to make callback in useEffect async
for example,
useEffect(
    ()=>{
        (
            async function(){}
        )();
    },[]
) 
or you can create nested-named function
for example, 
useEffect(
    ()=>{
        function abcd = async() =>{
            //async function code for eg. fetch()
        }
    }
    abcd();
,[])
---------------------------------------------------------------------------