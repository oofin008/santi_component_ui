This project was my personal side project created for personal use.

## Latest Update
#### MiniCardGrid
 - Add imageSrc attribute.
 - Add onError handler for img, to show placeholder correctly.
 - Add background attribute.
 - Add theme attribute (not finish yet).

## Table of Contents

- [Usage](#usage)
- [Components List](#components-list)
- [Contribute](#contribute)

## Usage

```js
import { COMPONENT } from '@oofin008/santi-component-ui';
```

## Components List
You can see all components category [here](https://santi-component-ui.web.app/) along with example code.
### Card

```js
<Card />
```

### MiniCardGrid

```js
<MiniCardGrid
  background="linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)"
  theme="light"
  data={[
    {
      title: 'test 1 very longgg titleadasdasdasdasdasd',
      content: 'lorem ipsum project description action mission mansion',
      imageSrc: 'asdf'
    },
    {
      title: 'test 2',
      content: 'lorem ipsum project description action mission mansion',
      imageSrc: 'https://i.stack.imgur.com/2awmj.png'
    }
  ]}
/>
```

## Contribute

If you want to help me adding more awesome component, feel free to fork my project on [Github](https://github.com/oofin008/santi_component_ui) and pull request.

You can run following command for developing this project.

## Available Scripts

In the project directory, you can run: 
#### `npm i`
Install package, you know that.

#### `npm run styleguide`

Start development server to see the component category.\
You can read [document](https://styled-components.com/docs) for more information.

#### `npm run build`

Builds the app for production to the `dist` folder.\
