import type { EmailField } from "@payloadcms/plugin-form-builder/types";
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import React from "react";

import { Error } from "~/cms/blocks/form/error";
import { Width } from "~/cms/blocks/form/width";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export const Email: React.FC<
  EmailField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any;
      }>
    >;
    register: UseFormRegister<FieldValues>;
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  return (
    <Width width={width}>
      <Label htmlFor={name}>
        {label}

        {required && (
          <span className="required">
            *
            {" "}
            <span className="sr-only">(required)</span>
          </span>
        )}
      </Label>
      <Input
        defaultValue={defaultValue}
        id={name}
        type="text"
        {...register(name, { pattern: /^\S[^\s@]*@\S+$/, required })}
      />

      {errors[name] && <Error />}
    </Width>
  );
};
