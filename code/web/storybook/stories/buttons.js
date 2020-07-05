/*  a story is a function that returns something that can be rendered to screen */

// Imports
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// UI Imports
import Button from "../../src/ui/button/Button";
import Icon from "../../src/ui/icon/Icon";

// Buttons
storiesOf("Button", module) // string argument is component title
  .add("primary", () => (
    <Button type="button" theme="primary" onClick={action("clicked")}>
      Button
    </Button>
  )) // each .add call takes a story name, a story function that returns a renderable object (JSX), and optional parameters
  .add("secondary", () => (
    <Button type="button" theme="secondary" onClick={action("clicked")}>
      Button
    </Button>
  ))
  .add("default", () => (
    <Button type="button" onClick={action("clicked")}>
      Button
    </Button>
  ))
  .add("with icon", () => (
    <Button type="button" theme="primary" onClick={action("clicked")}>
      Button <Icon size={1.3}>face</Icon>
    </Button>
  ));
