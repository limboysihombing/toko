import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home.js'
import Login from './pages/Login'
import Cart from './pages/Cart';
import Store from './pages/Store';
import Register from './pages/Register'
import Profile from './pages/Profile'
import About from './components/layouts/About'
import { Header } from './components/layouts/Header'
import Page404 from './pages/Page404';
import { ProtectedRoutes } from './ProtectedRoutes'
import './css/kadoonline.css';
import axios from 'axios'
import { nanoid } from 'nanoid'

import React, { useState, useEffect } from 'react'
import { Context } from './services/Context'

import { auth, db } from "./firebase";


export default function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({})
  const [product, setProduct] = useState(null)
  const [cart, setCart] = useState(null)
  const [box, setBox] = useState([])


  useEffect(() => {
    document.title = "Home"
    logIn()
  })

  const logIn = () => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        getUserData()
      }
      else {
        console.log("no user")
      }
    });
  }

  const logOut = () => {
    auth.signOut().then(() => {
      setLoggedIn(false)
      setUser({})
      console.log("Berhasil Sign Out")
    }).catch((error) => {
      console.log("Gagal Sign Out")
    });
  }

  const register = (newAccount) => {
    axios({
      url: 'http://localhost:5000/auth/register',
      method: 'post',
      data: newAccount,
    }).then(response => {
      if (response.status === 200) {
        return response.data
      } else {
        console.log("coba lagi")
      }
    }).then(user => {
      console.log(user)
    })

  }

  const getUserData = () => {
    var docRef = db.collection("users").doc(auth.currentUser.uid);
    docRef.get().then(function (doc) {
      if (doc.exists) {
        const data = doc.data()
        auth.currentUser.updateProfile({ displayName: data.name, photoURL: data.photoURL })
          .then(function () {
            setUser(auth.currentUser)
            setLoggedIn(true)
          }).catch(function (error) {
            console.log(error)
          });
      } else {
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  const loadProduct = () => {
    let p = []
    db.collection("products").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        p.push(doc)
      });
      setProduct(p)
    });
    // addData()

  }
  const loadCart = () => {
    let c = []
    // db.collection('cart').doc('roomA').collection('messages').doc('message1');
    db.collection(`cart`).where('uid', '==', `72ekEyWc3hV3kAMhTR3pLLMytr32`).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        c.push(doc)
      });
      setCart(c)
    });
  }

  //   db.collection("users").doc(user.uid).collection('cart').get().then(function (querySnapshot) {
  //     querySnapshot.forEach(function (doc) {
  //       // c.push(doc)
  //       console.log(doc.data())
  //     });
  //     // setCart(c)
  //   });
  // }
  // async function addData() {
  //   for (let i = 0; i < 20; i++) {
  //     await db.collection('products').doc(Math.random().toString()).set({ name: "product a", category: "elektronik", photo: "sfdjk", price: 35000 })
  //       .catch(function (error) {
  //         console.error("Error adding document: ", error);
  //       });

  //   }
  // }

  async function addToCart(cb) {
    for (let i = 0; i < box.length; i++) {
      await db.collection("users").doc(user.uid).collection('cart').doc(nanoid()).collection('cartItem').doc(box[i].id).set(box[i].data()).then(() => {
        console.log(true)
      })
    }
    cb({ result: true, msg: "Kotak berhasil dimasukkan dalam keranjang!" });
  }
  // const upload = (cb) => {

  // uploadCart()
  // console.log("selesai")
  // db.collection("users").doc(user.uid).collection('cart').doc(nanoid()).set({
  //   name: "Los Angeles",
  //   state: "CA",
  //   country: "USA"
  // })
  //   .then(function () {
  //     cb({ results: true, msg: "Kotak berhasil dimasukkan dalam keranjang!" });
  //   })
  //   .catch(function (error) {
  //     console.error("Error writing document: ", error);
  //   });
  // }

  const addToBox = (data) => {
    setBox([...box, data])
  }
  const deleteItemFromBox = (id) => {
    setBox(box.filter(obj => id !== obj.id))
  }
  const resetBox = () => {
    setBox([])
  }

  return (
    <Context.Provider value={{ isLoggedIn, logIn, logOut }}>
      <Router>
        <Header user={user} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <ProtectedRoutes path="/cart" component={Cart} cart={cart} loadCart={loadCart} />
          {/* <ProtectedRoutes path="/cart" render={(props) => (
            <Cart loadCarts={loadCarts} />
          )} /> */}
          <Route path="/register" render={(props) => (
            <Register register={register} />
          )} />
          <Route path="/store">
            <Store product={product} box={box} loadProduct={loadProduct} addToBox={addToBox} addToCart={addToCart} deleteItemFromBox={deleteItemFromBox} resetBox={resetBox} />
          </Route>
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </Context.Provider>
  )
}