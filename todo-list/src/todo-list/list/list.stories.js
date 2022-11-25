import List from "./list";

export default {
  title: "Todo List/List",
  component: List,
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {};
