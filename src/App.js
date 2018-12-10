import React, { Component } from 'react';

import { Main } from 'pages/main'
import  SignInContainer from 'pages/profile/views/signIn/SignInContainer'
import { SearchContainer as Search }  from 'pages/search'
import  { CateContainer as Cate } from 'pages/cate'
import  { DetailContainer as GoodDetail } from 'pages/detail'
import  { CartContainer as Cart } from 'pages/cart'
import  { BrandContainer as Brand } from 'pages/brandSpecialSale'

import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route  path="/home" component={ Main } />
        {/* <Route  path="/home" component={ Main } /> */}
        <Route path="/user/signIn" component= { SignInContainer } />
        <Route path="/search" component= { Search } />
        <Route path="/cateDetail/:id" component= { Cate } />
        <Route path="/goodDetail/:id" component= { GoodDetail } />
        <Route path="/cart" component= { Cart } />
        <Route path="/brandSpecialSale" component= { Brand } />
      </Switch>
    );
  }
}

export default App;
