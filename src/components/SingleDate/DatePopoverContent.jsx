import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import styled, { css } from 'styled-components';
import { addEvent } from 'actions';

const FormInput = styled.input`
  ${props => props.name === 'hour' && css`
    margin-right: 5px;
  `}
  ${props => (props.name === 'hour' || props.name === 'minute') && css`
    width: 70px;
    margin-bottom: 5px;
  `}
  ${props => props.name === 'event-name' && css`
    width: 145px;
    margin-bottom: 5px;
  `}
`;

const SaveButton = styled(Button)`
  background-color: #D8D8D8;
`;

class DatePopoverContent extends Component {
  state = {
    hour: '',
    minute: '',
    'event-name': ''
  };

  handleChange = (event) => {   
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  saveEvent = () => {
    if(this.state.hour && this.state.minute && this.state['event-name']) {
      const eventDate = moment(this.props.date)
          .hour(Number(this.state.hour))
          .minute(Number(this.state.minute));

      this.props.addEvent(this.state['event-name'], eventDate);

      this.setState({
        hour: '',
        minute: '',
        'event-name': ''
      });

      if(this.props.hide)
        this.props.hide();
    }
  }

  render() {
    return (
      <div className="text-align-center">
        <FormInput type="text" name="hour" value={this.state.hour} onChange={this.handleChange} placeholder="Hour"/>
        <FormInput type="text" name="minute" value={this.state.minute} onChange={this.handleChange}  placeholder="Minute"/>
        <br/>
        <FormInput type="text" name="event-name" value={this.state['event-name']} onChange={this.handleChange} placeholder="Event Name"/>
        <br/>
        <SaveButton onClick={this.saveEvent}>Save</SaveButton>
      </div>
    );
  }
}

DatePopoverContent.propTypes = {
  date: PropTypes.object.isRequired,
  addEvent: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addEvent: (name, date) => dispatch(addEvent(name, date))
})

export default connect(null, 
  mapDispatchToProps
)(DatePopoverContent);;
