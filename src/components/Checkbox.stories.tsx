import { Meta, StoryObj } from "@storybook/react"; 
import { CheckboxProps, Checkbox } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: { },
  argTypes: {},
  decorators: [
    (Story) => (
        <div className="flex items-center gap-2">
            {Story()}
            <Text size="sm">Lembrar de mim em 30 dias</Text>
        </div>
    )
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {}; 