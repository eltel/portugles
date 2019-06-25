import React from "react";
import DatePicker from "react-datepicker";
// import moment from "moment";
import { FormGroup, Label, Button } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {
  constructor(props) {
    super(props);

    //  const dateValue = props.initialDate ? moment(props.initialDate) : moment();
    const dateValue = props.initialDate
      ? new Date(props.initialDate)
      : new Date(); // .getTime()
    const isHidden = props.initialDate ? false : true;

    this.state = {
      dateValue, // : new Date()
      isHidden
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ isBrowserLoaded: true });
  }

  setFieldAndTouchedValue(date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);
  }

  handleChange(date) {
    this.setState({
      dateValue: date
    });
    this.setFieldAndTouchedValue(date, true);
  }

  toggleDate(date) {
    this.setState({
      isHidden: !this.state.isHidden
    });

    this.setFieldAndTouchedValue(date, true);
  }

  render() {
    const {
      canBeDisabled,
      label,
      field,
      form: { touched, errors }
    } = this.props;
    const { isBrowserLoaded, isHidden, dateValue } = this.state;

    return (
      <FormGroup>
        <Label>{label}</Label>
        <React.Fragment>
          {isBrowserLoaded && (
            <div className="input-group">
              {!isHidden && (
                <DatePicker
                  selected={dateValue}
                  onChange={this.handleChange}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  maxDate={new Date()}
                  dropdownMode="select"
                />
              )}
            </div>
          )}
        </React.Fragment>
        {canBeDisabled && !isHidden && (
          <Button outline color="info" onClick={() => this.toggleDate(null)}>
            Present Job
          </Button>
        )}

        {canBeDisabled && isHidden && (
          <React.Fragment>
            <span>Present Job</span>
            <Button
              outline
              color="success"
              onClick={() => this.toggleDate(dateValue)}
            >
              Reset Date
            </Button>
          </React.Fragment>
        )}

        {touched[field.name] && errors[field.name] && (
          <div className="error">{errors[field.name]}</div>
        )}
      </FormGroup>
    );
  }
}
