import React from "react";
import Shoppingcart from "./Shoppingcart";

const ShoppingcartMeta = {
  title: "atoms/Shoppingcart",
  component: Shoppingcart,
  argTypes: {
    testID: { table: { disable: true } },
    type: { name: "Type" },
    size: { name: "Size" },
  },
};

const testID = "Shoppingcart-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Shoppingcart {...args} />;

export const OrangeShoppingcart = Template.bind({});
OrangeShoppingcart.args = {
  testID: testID,
  type: "orange",
  size: "small",
};

export const BlackShoppingcart = Template.bind({});
BlackShoppingcart.args = {
  testID: testID,
  type: "black",
  size: "large",
};
export const WhiteShoppingcart = Template.bind({});
WhiteShoppingcart.args = {
  testID: testID,
  type: "white",
  size: "large",
};

export default ShoppingcartMeta;