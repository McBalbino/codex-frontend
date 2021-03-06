import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import TaskEdit from './pages/TaskEdit'
import TaskForm from './pages/TaskForm'
import TaskList from './pages/TaskList'
import Register from './routes/Register'
import Login from './routes/Login'

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/task-list" component={TaskList} />
                <Route exact path="/task-form" component={TaskForm} />
                <Route exact path="/task-edit" component={TaskEdit} />

                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}