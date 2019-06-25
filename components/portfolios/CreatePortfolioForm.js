import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Alert } from "reactstrap";
import PortInput from "../form/PortInput";
import PortDate from "../form/PortDate";

// import moment from "moment";

const validateInputs = values => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!values[key] && key != "endDate") {
      errors[key] = `${key} is required!`;
    }
  });

  const startDate = new Date(values.startDate);
  const endDate = new Date(values.endDate);

  if (startDate && endDate && endDate < startDate) {
    errors.endDate = "End date cannot be before start date";
  }

  return errors;
};

const CreatePortfolioForm = ({ initialValues, onSubmit, error }) => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            className="form-control"
            type="text"
            label="Title"
            name="title"
            component={PortInput}
          />

          <Field
            className="form-control"
            type="text"
            label="Company"
            name="company"
            component={PortInput}
          />

          <Field
            className="form-control"
            type="text"
            label="Location"
            name="location"
            component={PortInput}
          />

          <Field
            className="form-control"
            type="text"
            label="Position"
            name="position"
            component={PortInput}
          />

          <Field
            className="form-control"
            type="textarea"
            label="Description"
            name="description"
            component={PortInput}
          />

          <Field
            initialDate={initialValues.startDate}
            label="Start Date"
            name="startDate"
            component={PortDate}
          />

          <Field
            initialDate={initialValues.endDate}
            label="End Date"
            canBeDisabled={true}
            name="endDate"
            component={PortDate}
          />
          {error && <Alert color="danger">{error}</Alert>}
          <Button
            outline
            color="success"
            size="lg"
            type="submit"
            disabled={isSubmitting}
          >
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default CreatePortfolioForm;

// import React from "react";
//
// class CreatePortfolioForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: "", description: "", language: "javascript" };
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({ [event.target.name]: event.target.value });
//   }
//
//   handleSubmit(event) {
//     alert(
//       "A title was submitted: " +
//         this.state.title +
//         "" +
//         this.state.description +
//         "" +
//         this.state.language
//     );
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <Label>
//           Title:
//           <input
//             name="title"
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={this.state.description}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Pick your favorite programming language:
//           <select
//             name="language"
//             value={this.state.language}
//             onChange={this.handleChange}
//           >
//             <option value="javascript">Javascript</option>
//             <option value="java">Java</option>
//             <option value="python">Python</option>
//             <option value="c#">C#</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
//
// export default CreatePortfolioForm;
