import React from "React";
import { createReactElement } from "../componentGenerator/reactFactory";
import { components } from "../components";

it("Create element from empty JSON", () => {
  let element = createReactElement({});
  expect(element).toBe("");
});

it("Create element from undefined JSON", () => {
  let element = createReactElement(undefined);
  expect(element).toBe("");
});

it("Create element from JSON - Div", () => {
  let json = {
    id: 1,
    acf_fc_layout: "Div"
  };
  let element = createReactElement(json);
  const stub = React.createElement(components["Div"], { key: 1 });
  expect(element).toMatchObject(stub);
});
it("Create element from JSON - Paragraph", () => {
  let json = {
    id: 1,
    acf_fc_layout: "Paragraph",
    content: "ciao"
  };
  let element = createReactElement(json);
  const stub = React.createElement(components["Paragraph"], {
    content: "ciao",
    key: 1
  });
  expect(element).toMatchObject(stub);
});

it("Create element from JSON - Paragraph with content", () => {
  let json = {
    id: 1,
    acf_fc_layout: "Paragraph",
    content: "Hello World"
  };
  let element = createReactElement(json);
  const stub = React.createElement(components["Paragraph"], {
    key: 1,
    content: "Hello World"
  });
  expect(element).toMatchObject(stub);
});

it("Create element from JSON - Recursive Div", () => {
  let json = {
    id: 1,
    acf_fc_layout: "Div",
    children: [
      {
        acf_fc_layout: "Paragraph",
        content: "ciao",
        id: 2
      }
    ]
  };

  let element = createReactElement(json);
  const stub = React.createElement(
    components["Div"],
    { key: 1 },
    [React.createElement(components["Paragraph"], { content: "ciao", key: 2 })]
  );
  expect(element).toMatchObject(stub);
});
