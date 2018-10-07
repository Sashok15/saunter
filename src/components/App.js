import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./Navigation";
import LandingPage from "./auth/Landing";
import SignUpPage from "./auth/SignUp";
import SignInPage from "./auth/SignIn";
import PasswordForgetPage from "./auth/PasswordForget";
import HomePage from "./Home";
import AccountPage from "./auth/Account";
import * as routes from "../constants/routes";
import firebase from "../firebase/firebase.js";
import PathList from "./PathList";
import SearchPath from "./SearchPath";
import Header from "./Header";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "dima",
      fromdb: [],
      paths: [
        {
          name: "testName",
          fullName: "fullNameTest",
          description: "descriptionTest",
          length: "500"
        },
        {
          name: "testName",
          fullName: "fullNameTest",
          description: "descriptionTest",
          length: "600"
        }
      ]
    };
  }

  componentDidMount() {
    const firebaseRef = firebase
      .database()
      .ref('/').once('value');
      alert(firebaseRef)
      // .child("path");
      // const nameRef = firebaseRef.child("name");

    // firebaseRef.on("value", snap => {
    //   this.setState({
    //     name: snap.val()
    //   });
    // });
  }
  
  // componentWillUnmount() {
    // Un-register the listener on '/someData'.
    // this.firebaseRef.off('value', this.nameRef);
  // }
  // getSectionsDB = () => {
  //   return database.ref('/').once('value')
  // }
  // getTodoDB = (sectionId) => {
  //   return database.ref(`/${sectionId}`).once('value')
  // }

  // // add new section
  // addSection = (name) => {
  //   let key = database.ref('/').push().key
  //   let model = sectionModel(key, name, firebase.database.ServerValue.TIMESTAMP)
  //   return database.ref('/'+ key).set(model)
  // }
  // // add new todo item into specified section
  // addTodoItem = (id, name) => {
  //   return new Promise((resolve, reject) => {
  //     database.ref(`/${id}`).once('value').then((todo) => {
  //       let todos = todo.val().todos || []
  //       let key = database.ref(`/${id}`).push().key
  //       todos.push(todoModel(key, name, firebase.database.ServerValue.TIMESTAMP))
  //       database.ref(`/${id}/todos`).set(todos)
  //         .then( res => {resolve(res)})
  //         .catch( error => {reject(error)})
  //     })
  //   })
  // }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <hr />
          <SearchPath />
          <h1>{this.state.name}</h1>
          <Navigation />
          <hr />
          <Router exact path={routes.LANDING} component={LandingPage} />
          <Router exact path={routes.SIGN_UP} component={SignUpPage} />
          <Router exact path={routes.SIGN_IN} component={SignInPage} />
          <Router
            exact
            path={routes.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Router exact path={routes.HOME} component={HomePage} />
          <Router exact path={routes.ACCOUNT} component={AccountPage} />

          {/* <MessageList db={firebase} /> */}
          <PathList />
        </div>
      </Router>
    );
  }
}
