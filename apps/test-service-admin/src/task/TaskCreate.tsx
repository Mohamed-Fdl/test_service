import * as React from "react";
import { Create, SimpleForm, CreateProps, SelectInput } from "react-admin";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
