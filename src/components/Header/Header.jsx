import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { nextMonth, previousMonth } from '../../actions';

const HeaderContainer = styled.div`
  text-align: center;
  color: white;
  margin-top: 20px;
`;

const ElementsRow = styled(Row)`
  padding: 50px 0px;
`;

const HeaderCol = styled(Col)`
  background-color: #17B490;
`;

const Header = ({ selectedMonth, previousMonth, nextMonth }) => {
  return (
    <HeaderContainer>
      <Row type="flex" justify="center" align="middle">
        <HeaderCol xs={21} lg={14}>
            <ElementsRow type="flex" align="middle">
              <Col span={4} className="text-align-left cursor-pointer padding-left-20px" onClick={() => previousMonth()}>
                {"<"}
              </Col>
              <Col span={16}>
                {selectedMonth.format("MMMM")}
                <br/>
                {selectedMonth.format("YYYY")}
              </Col>
              <Col span={4} className="text-align-right cursor-pointer padding-right-20px" onClick={() => nextMonth()}>
                {">"}
              </Col>
            </ElementsRow>
        </HeaderCol>
      </Row>
    </HeaderContainer>
  );
};

Header.propTypes = {
  selectedMonth: PropTypes.any.isRequired,
  previousMonth: PropTypes.func.isRequired,
  nextMonth: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedMonth: state.time.selectedMonth
})

const mapDispatchToProps = dispatch => ({
  nextMonth: () => dispatch(nextMonth()),
  previousMonth: () => dispatch(previousMonth())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
