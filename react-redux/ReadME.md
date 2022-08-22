# React-Redux
Youtube series by `code step by step` video series name `react redux tutorial in hindi`

In this project we will learn about react and redux. we can use redux with other framework or labrary also. like we can use redux with angular or vue also 

## Topics of Series
- Intriduction
- Redux Architechture 
- Props in redux
- install redux with react 
- Make necessary file with wrapper 
- Action 
- Reducer 
- Root Reducer 
- Container 
- Middleware
- Selector
- A project with redux
- Interview question on redux 
  

  **(Video 1)**
  ## Introduction 
- what is redux
- why we need it 
- understand it with diagram
- the topics of this series
  
  #### What is Redux
  - container where we can `store whole application's data`  
  - it is used for `state management`  
  - it doesnt belong to components state its belongs to application's state
  - One application can have `only one store` (interview que)

```
In component based development like in angular and react we need redux to make communication between component easy. In old days before angular and react redux was not required. 
```

Redux come in UI side only.


**(Video 2)**
## Redux Architecture 

![Redux Architectre](https://static.javatpoint.com/tutorial/reactjs/images/react-redux-architecture.png)   

1) UI --> View/Ui trigger data action(data)  
2) Action --> gets the data from either view or from api 

Other fieds are self explanatory 
- remember data flow in in one direction only (it will follow sequence)      
   
**(Video 3)**
### React with redux installation

- check npm and node
- install react js 
- install redux 
- install react-redux   (to link react with redux)

- check npm and node
  ```
  npm -v
  node -v
  ```
- install react js 
  ```
  npx create-react-app application_name
  ```
- install redux 
  ``` npm redux
   ```
- install react-redux   
``` npm react-redux
   ```

**(Video 4)**
### Props revision
No Need of this video if you know about aboyt props and how to pass data using props  

**(Video 5)**
### File and folder structure `(IMP)`

It is good practise if we follow below folder structure as same folder str. is followed on redux offical website.

Over view  
```
Components  
Container   
Service   
        Actions
        Reducers  
        Constants
```

```
Components  
   `Home.js`
Container   
    `HomeContainer.js`
Service   
        Actions
             Actions.js
        Reducers  
             Reducer.js
             RootReducer.js  (will combine all reducers)
        `Constants.js`

```

just remember we can give different name also like to reducer.js we can give index.js also 
**(Video 6)**  
 ### Design for add to cart

 In this video we dont have much only css and html we did to get cart page 

 ```
 only thing to remember in this video is that in redux we directly not call component we call component through container because we want to use 2 methods those we will see in later videos
 ```  
 means `App <-- Container <-- Component`

**(Video 7)**
### Actions in Redux

In this Video we will learn 
- what is action
- make function in action file
- return data and type
- Add constant and use constant in action  
  
Action : Basically action send data from react to redux store   (`React --> Redux store`)

Example :
like we have storeroom at our home similarly we have redux store in our application. we can put data in redux store and any component can takeout data from the redux store just like store room we use in our home 

`Action` : send React data(/api data) from react to store 
`Reducer` : manage the redux store data (whatever data is stored in redux store that reducer manage)

(made changes in action.js file)

src/Action/Action.js
`Action.js :`
```
import {ADD_TO_CART} from '../Constants'
const addToCart =(data)=>{
    return {
        type:ADD_TO_CART,
        data:data}
}
```
to tell what type of action we want to perform we have to create such const/functions which is suppose to return object which tell about the `type` and `data`

it is recommended that type should not we string .therefore we imported constant file where we have all type name

**Why we Created Constant.js file ??**    
Ans:
Type whatever we are returning from action same type we will require in reducer so to keep that same and in sync we have created 1 separte file called constat.js we will declare all there and use that furter.

**(Video 8)**  
### Reducer and RootReducer  

**Reducer**  
Basically reducer will receive data from action and and it will filterout and deceive which objcet have to update and send it to store 

rootreducer.js file we can also name it as index.js and it is basically use to combine all other reducers and in reducer.js file we have our switch cases.  

here onward code is written in Reducer/index.js and Reducer/Reducer.js file and theory is written over here   

- In reducer.js file we have created const variable as the function we created require that as parameter.
- in our code in reducer we have function cardItem it require 2 arguments one is state(/initial state) and 2nd is action
- in reducer we require switch case as there can be multiple operation that we want to perform so for those we require switch case in reducer
- in reducer use if InitialState and action argument is very imp action is use to get the operation we want to perform and initialState is use while performing the operation (best way to nder stand refer the code)  
- whatever state we are using in reducer that nothing to do with the state of the component. that is state of application you can say 
- as we know that there can be only `one store` in `one application` but we can have multiple reducer in application so those reducer we have to merge in rootReducer(/Reducer/index.js)

`rootreducer`  
-remember in rootreducer we require 2 imp thing   
1) combineReducer from redux and export the same 
  `import { combineReducers } from 'react-redux'`  
2) also import reducer.js

**(Video 9)**  
### Container - mapDispatchToProps - mapStateToProps

what we will see in this video:  
- what is container 
- connect react and redux
- import react-redux, action and component
- use `mapDispatcheToProps`
- use `mapStateToProps`
  
`Container` : is use to connect react and redux  
`mapDispatcheToProps`: save data from Component to store (component --> store)
`mapStateToPr0ps` : send data from store to components (stire --> components)

(can use any name other than `mapDispatcheToProps`or `mapStateToPrps`)

below things need to import in conainer/HomeContainer.js file
- import `connexct` like  import {connect} from 'react-redux'   //use to connect react with redux
- import `Action`   like  import {addToCart} from '../services/Actions/Action'
- write `mapDispatcheToProps` function 
- write `mapStateToPr0ps` function
- export `connect` function  with 2 parameter and home component 
  
  ```
  const mapStateToProps=state=>({
    // data:state.cardItems
})  

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)) 
}) 


export default connect(mapStateToProps,mapDispatchToProps)(Home)  
```

**(Video 10)**
**(Video 11)**
**(Video 12)**
**(Video 13)**