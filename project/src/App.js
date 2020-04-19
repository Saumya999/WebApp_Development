import React from 'react';
import { Container } from 'semantic-ui-react';
import Login from './Components/Login/Login';
import HomePageLayout from './HomePageLayout';
import ProductHome from './Components/Product_related/ProductHome'
import NavigationBar from './Components/Navigation/NavigationBar'

const App = () => (
  <div>
    <NavigationBar />
    <ProductHome />
  </div>  
);
export default App;
