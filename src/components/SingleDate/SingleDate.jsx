import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'antd';
import styled, { css } from 'styled-components';
import DatePopoverContent from './DatePopoverContent';
import { selectDate } from 'actions';

const DayLabelCol = styled(Col)`
  padding: 10px;
`;

const EventRow = styled(Row)`
  &:first-of-type{
    margin-top: 10px;
  }
`;

const EventCol = styled(Col)`
  padding: 10px;

  ${props => props.index % 2 !== 0 && css`
    background-color: #EBEBEC;
    border-bottom: 1px solid #D8D8D8;
    border-top: 1px solid #D8D8D8;
  `}
`;

class SingleDate extends Component {
  render() {
    return (
      <div>
          <Row type="flex" justify="start" align="middle">
            <DayLabelCol xs={20}>{this.props.selectedDate.format('D MMMM YYYY')}</DayLabelCol>
            <Col xs={4}>
              <Button onClick={() => this.props.selectDate(null)}>Go Back</Button>
            </Col>
          </Row>
  
          {
              this.props.events.map((event, index) =>
                <EventRow type="flex" justify="center" align="middle" key={event.id}>
                    <EventCol xs={21} lg={14} index={index}>{event.date.format('D MMMM YYYY HH:mm') + " : " + event.name}</EventCol>
                </EventRow>
              )
          }
  
          <DatePopoverContent hide={false} date={this.props.selectedDate}/>
      </div>
    );
  }
}

SingleDate.propTypes = {
  events: PropTypes.array.isRequired
};
  
const getCurrentDateEvents = (selectedDate, events) => {
  const filteredEvents = events.filter(
    (event) => 
      event.date.year() === selectedDate.year() && 
      event.date.date() === selectedDate.date() &&
      event.date.day() === selectedDate.day()
  );
  return filteredEvents.sort((a, b) => {
    if (a.date.isAfter(b.date))
      return 1;
    
    if (a.date.isBefore(b.date))
      return -1;

    return 0;
  });
}

const mapStateToProps = state => ({
  events: getCurrentDateEvents(state.time.selectedDate, state.events),
  selectedDate: state.time.selectedDate
})

const mapDispatchToProps = dispatch => ({
  selectDate: (date) => dispatch(selectDate(date))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleDate);
