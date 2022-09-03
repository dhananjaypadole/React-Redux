# Container
## HomeContainer.js
```
import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart,removeToCart} from '../service/actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;
```
## HeaderContainer.js
```
import Header from '../components/Header'
import {connect} from 'react-redux'
const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;
```
***
# Components
## HeaderContainer.js
```
import React from 'react'
function Header(props)
{
    console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}

export default Header
```
## HomeComponent.js
```
import React from 'react'

function Home(props) {
    console.log(props);
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                    <button 
                    className='remove-cart-btn'
                    onClick={
                        ()=>{props.addToCartHandler()}
                        }>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home
```
*** 
# Action

## action.js
```
import {ADD_TO_CART,REMOVE_TO_CART} from '../constants'
export const addToCart =(data)=>{
    // console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const removeToCart =()=>{
    return {
        type:REMOVE_TO_CART
    }
}

``` 

# Reducer
## RootReducer.js
```
import {combineReducers} from 'redux'
import cardItems from './reducer'

export default combineReducers({
    cardItems,
})
```
 ## reducer.js
 ```
 import { ADD_TO_CART,REMOVE_TO_CART } from '../constants'
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
        case REMOVE_TO_CART:
            // console.warn("reducer",action)
            state.pop()
            return [
                ...state
            ]
        default:
            return state
    }
}

 ```

 # Constant
 ```
export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_TO_CART="REMOVE_TO_CART"
 ```
