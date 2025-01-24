import type { CheckboxField } from "@payloadcms/plugin-form-builder/types";
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import React from "react";
import { useFormContext } from "react-hook-form";

import { Error } from "~/blocks/form/error";
import { Width } from "~/blocks/form/width";
import { Checkbox as CheckboxUi } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";

export const Checkbox: React.FC<
  CheckboxField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any;
      }>
    >;
    getValues: any;
    register: UseFormRegister<FieldValues>;
    setValue: any;
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  const props = register(name, { required });
  const { setValue } = useFormContext();

  return (
    <Width width={width}>
      <div className="flex items-center gap-2">
        <CheckboxUi
          defaultChecked={defaultValue}
          id={name}
          {...props}
          onCheckedChange={(checked) => {
            setValue(props.name, checked);
          }}
        />
        <Label htmlFor={name}>
          {required && (
            <span className="required">
              *
              {" "}
              <span className="sr-only">(required)</span>
            </span>
          )}
          {label}
        </Label>
      </div>
      {errors[name] && <Error />}
    </Width>
  );
};
