// Library
import React from "react";
import MaterialJsonSchemaForm from "react-jsonschema-form-material-ui";

// Internals
import schema from "./schema.json";
import uiSchema from "./ui-schema.json";
import givenFormData from "./form-data.json";
const givenXhrSchema = require("./xhr-schema.json"); // Optional

export default () => {
  console.log("Tesstte");
  const [formData, setFormData] = React.useState(givenFormData);

  return (
    <MaterialJsonSchemaForm
      schema={schema}
      uiSchema={uiSchema}
      xhrSchema={givenXhrSchema || {}} // Optional
      // Optional - You need to explicitly provide your custom theme from MUI5 onwards
      formData={formData}
      onChange={({ formData }) => setFormData(formData)}
      onSubmit={(submittedData) => console.log("form submitted", submittedData)}
    />
  );
};
