import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer';
import Body from '../Body';
import Header from '../Header';
import SingleDate from '../SingleDate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {
          this.props.selectedDate ? 
          <SingleDate /> : 
        
          <div>
            <Header />
            <Body />
            <Footer />
          </div>
        }   
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedDate: state.time.selectedDate
})

export default connect(
  mapStateToProps
)(App);
  
