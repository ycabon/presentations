# maquette-jsx
This library allows you to use the [JSX](https://reactjs.org/docs/introducing-jsx.html) notation with [maquette](https://maquettejs.org). This allows you to write code like this:

```jsx
let render = () => {
  return <div>
    { nameInput.render() }
    <p class="output">
      Hello {name || 'you'}!
    </p>
  </div>;
}
```

## Getting started
- Install maquette-jsx by running `npm install maquette maquette-jsx`
- When using Typescript: Add the following lines to your `tsconfig.json`:
  - `"jsx": "react"`
  - `"jsxFactory": "jsx"`
- When using babel:  Add the following plugin:
  - `"plugins": [ ["transform-react-jsx", {"pragma": "jsx"}] ]`
  - Call maquette-jsx's `enableGlobalJsx` function before calling maquette's `createProjector()`
- You can now return JSX from your `render` functions

## Example
https://github.com/AFASSoftware/maquette-typescript-jsx-starter
