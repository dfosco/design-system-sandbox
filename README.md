# Design System Sandbox

> design-system-sandbox

Design System Sandbox is an in-browser editor to prototype with design systems in React. Based on `react-live`.

Once you install the sandbox, import your design system components and they will all be available in the in-browser editor.

### Use it for

• Prototyping layouts in JSX  
• Pair-programming and trainings  
• Build example snippets  

Currently supports React components and JSX markup. Add code you would add inside a `render()` method.

### How to install

There are two ways to use the sandbox:

#### Import the Editor component into your application to use with your design system

1) Run `yarn add design-system-sandbox`

2) Export your design system components into a `scope` object to make them available for the editor, i.e.:

```js
  import Button from "my-design-system/core/Button";
  import Card from "my-design-system/core/Card";
  import Tabs from "my-design-system/core/Tabs";

  const scope = {
    Button,
    Card,
    Tabs
  };

export { scope };
```

2) Import the `Editor` component into your application:

```js
  import { Editor } from "design-system-sandbox"
```

4) Pass your scope object into the `scope` prop, and pass the editor placeholder code into the `code` prop

```js
  <Editor code={`<Button>Click me</Button>`} scope={scope} />
```

You can also define an HTML tag for your editor object with a `tag` prop. Default is `div`

```js
  <Editor tag='main' code={`<Button>Click me</Button>`} scope={scope} />
```

#### Use the Demo sandbox application with your design system

Coming Soon 💁‍♀️

<!-- 
1) Run `yarn add design-system-sandbox/demo`

2) Open `sandbox.config.js` and add your design system package name, as well as components you want to import into the editor.

3) Still on `sandbox.config.js`, add the default code that should be the placeholder on the editor.

4) The demo app runs create-react-app, open `package.json` to change the deployment settings. Refer to `create-react-app` documentation for more.
 -->

## License

MIT © [dfosco](https://github.com/dfosco)
