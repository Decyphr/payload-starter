import { Checkbox } from "~/cms/blocks/form/checkbox";
import { Country } from "~/cms/blocks/form/country";
import { Email } from "~/cms/blocks/form/email";
import { Message } from "~/cms/blocks/form/message";
import { Number } from "~/cms/blocks/form/number";
import { Select } from "~/cms/blocks/form/select";
import { State } from "~/cms/blocks/form/state";
import { Text } from "~/cms/blocks/form/text";
import { Textarea } from "~/cms/blocks/form/textarea";

export const fields = {
  checkbox: Checkbox,
  country: Country,
  email: Email,
  message: Message,
  number: Number,
  select: Select,
  state: State,
  text: Text,
  textarea: Textarea,
};
