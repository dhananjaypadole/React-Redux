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
**(Video 7)**
**(Video 8)**
**(Video 9)**
**(Video 10)**
**(Video 11)**
**(Video 12)**
**(Video 13)**