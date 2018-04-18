import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import moment from 'moment';
import styled, { css } from 'styled-components';
import { selectDate } from 'actions';
import { connect } from 'react-redux';

const DateCol = styled(Col)`
  background-color: #EBEBEC;
  padding: 15px 0px;

  &:hover{
    background-color: #DFDEDE;
  }

  ${props => props.istoday && css`
    background-color: #1DBD9C;
    color: white;
  `}
`;

class ActiveDate extends Component {
  state = {
    visible: false
  };

  getPopoverPlacement = (date) => {
    return window.innerWidth < 640 && (date.day() === 0 ||  date.day() === 6) ? 'right' : 'bottom'
  }

  selecteCalendarDate = () => {
    this.props.selectDate(this.props.date);
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }

  isToday = (date) => moment().isSame(date, 'day') ? 'yes' : '';

  render() {
    return (
      <DateCol xs={3} lg={2} onClick={this.selecteCalendarDate}
        istoday={this.isToday(this.props.date)}
        className="cursor-pointer">{this.props.date.date()}
      </DateCol>
    );
  }
}

ActiveDate.propTypes = {
  date: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  selectDate: (date) => dispatch(selectDate(date))
})

export default connect(null, 
  mapDispatchToProps
)(ActiveDate);;
