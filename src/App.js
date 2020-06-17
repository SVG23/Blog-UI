import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom' //npm install react-router-dom
import Home from './components/Home'
import Users from './components/Users'
import Posts from './components/Posts'
import UserShow from './components/UserShow'
import PostShow from './components/PostShow'

function App() {
    return (
        <BrowserRouter>
            <div>
                
                <Link to="/">Home</Link> | 
                <Link to="/users"> Users</Link> | 
                <Link to="/posts"> Posts</Link>

                <Route path="/" component={Home} exact={true}></Route>
                <Route path="/users" component={Users} exact={true}></Route>
                <Route path="/users/:id" component={UserShow} ></Route>
                <Route path="/posts" component={Posts} exact={true}></Route>
                <Route path="/posts/:id" component={PostShow}></Route>
            </div>
        </BrowserRouter>
    )
}

export default App