import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import * as timeService from 'helpers/timeService';
import ActiveDate from './ActiveDate';

const InactiveDateCol = styled(Col)`
  background-color: #EBEBEC;
  padding: 15px 0px;
  color: #C8C8C8;

  &:hover{
    background-color: #DFDEDE;
  }
`;

const WeekHeaderCol = styled(Col)`
  background-color: #D8D8D8;
  padding: 5px 0px;
`;

const InactiveDate = ({date}) => (
  <InactiveDateCol xs={3} lg={2} >{date.date()}</InactiveDateCol>
);

const Body = ({ selectedMonth, calendarDates, addEvent }) => {
  const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  
  return (
    <div className="text-align-center">
      <Row type="flex" justify="center" align="middle" >
        {
          week.map(day =>
            <WeekHeaderCol xs={3} lg={2} key={day}>{day}</WeekHeaderCol>
          )
        }
      </Row>
        
      {
        calendarDates.map((week, weekId) => 
          <Row type="flex" justify="center" align="middle" key={'week' + weekId}>
            {
              week.map((date, dateId) => {
                return  selectedMonth.month() === date.month() ?  
                    (
                      <ActiveDate key={'date' + weekId.toString() + dateId} date={date} />
                    ) : (
                      <InactiveDate key={'date' + weekId.toString() + dateId} date={date} />
                    )
              })
            }
          </Row>
        )
      }
    </div>
  );
};

Body.propTypes = {
  selectedMonth: PropTypes.object.isRequired,
  calendarDates: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  selectedMonth: state.time.selectedMonth,
  calendarDates: timeService.generateCalendarDates(state.time.selectedMonth)
})

export default connect(
  mapStateToProps
)(Body);
