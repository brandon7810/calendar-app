import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import styled, { css } from 'styled-components';

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

const Footer = ({ events }) => {
  return (
    <div>
        {
          events.map((event, index) =>
            <EventRow type="flex" justify="center" align="middle" key={event.id}>
                <EventCol xs={21} lg={14} index={index}>{event.date.format('D MMMM YYYY HH:mm') + " : " + event.name}</EventCol>
            </EventRow>
          )
        }
      </div>
  );
};

Footer.propTypes = {
  events: PropTypes.array.isRequired
};
  
const getCurrentMonthEvents = (selectedMonth, events) => {
  const filteredEvents = events.filter((event) => event.date.year() === selectedMonth.year() && event.date.month() === selectedMonth.month());
  return filteredEvents.sort((a, b) => {
    if (a.date.isAfter(b.date))
      return 1;
    
    if (a.date.isBefore(b.date))
      return -1;

    return 0;
  });
}

const mapStateToProps = state => ({
  events: getCurrentMonthEvents(state.time.selectedMonth, state.events)
})

export default connect(
  mapStateToProps
)(Footer);
  