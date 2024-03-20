import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectInput } from "react-admin";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "NEW", value: "NEW" },
            { label: "PENDING", value: "PENDING" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
