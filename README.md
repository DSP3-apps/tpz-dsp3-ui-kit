# Vite, React, Typescript and Tailwind npm package

- [Vite, React, Typescript and Tailwind npm package](#vite-react-typescript-and-tailwind-npm-package)
  - [Developing components](#developing-components)
  - [Publish](#publish)
    - [To publish the package on Gitlab Package Registry, follow these steps:](#to-publish-the-package-on-gitlab-package-registry-follow-these-steps)
    - [To publish the package on Github Package Registry, follow these steps:](#to-publish-the-package-on-github-package-registry-follow-these-steps)
  - [✔️ Installing the package](#️-installing-the-package)
  - [Local Development](#local-development)
- [Styling](#styling)
  - [Colours](#colours)
    - [States](#states)
      - [Focus](#focus)
      - [Hover / Active](#hover--active)
  - [Text \& Font](#text--font)
    - [Text Size](#text-size)
  - [Breakpoints](#breakpoints)
  - [Notes](#notes)


## Developing components

To develop the components, follow these steps:

1. Write your component code in the `src` folder.
2. Export the component in the `src/main.ts` file.
3. Create a corresponding story file next to the component to showcase it in Storybook.
4. Run `yarn storybook` to view your developed component live on the Storybook viewer.

## Publish

### To publish the package on Gitlab Package Registry, follow these steps:

1. Modify the name and version in the `package.json` file according to this pattern: `@your-scope/package-name`.
2. Generate a developer token from your GitLab account. This token will be needed in step 6.
3. Create a repository on GitLab for your library.
4. Add an `.npmrc` file at the root of this package with the following content:

```
@your-scope:registry=https://gitlab.com/api/v4/projects/your_project_id/packages/npm/
//gitlab.com/api/v4/projects/your_project_id/packages/npm/:_authToken="${NPM_TOKEN}"
```

Replace `your_project_id` with the Project ID that can be found in the GitLab repository.

5. Run the command `NPM_TOKEN=token npm publish` to publish the package to the npm registry.

<br>

### To publish the package on Github Package Registry, follow these steps:

To publish the package on GitHub Package Registry, follow these steps:

1. Modify the name and version in the `package.json` file according to this pattern: `@your-scope/package-name`.
2. Create a personal access token (PAT) with the `write:packages` scope. You can create a PAT by going to your GitHub account settings and navigating to "Developer settings" > "Personal access tokens".
3. Create a `.npmrc` file at the root of this package with the following content:

```
@NAMESPACE:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_PAT
```

Replace `NAMESPACE` with your GitHub username and `YOUR_PAT` with your personal access token.

4. login to npm on scope level via

```
$ npm login --scope=@NAMESPACE --auth-type=legacy --registry=https://npm.pkg.github.com


> Username: USERNAME
> Password: TOKEN

```

5. Run the command `npm publish` to publish the package to the GitHub Package Registry.

<br>

## ✔️ Installing the package

*The library does not bundle the Tailwind CSS library, Therefore, you need to configure Tailwind CSS on your project to use this component library<br>
For more information, refer to the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation/framework-guides).*

To use the UI Library in your project, follow these steps:

1. Provide the `.npmrc` file with the following credentials on the target repository.
2. Clone the released package on the target repository using the command `npm i @your-scope/ui-kit`.
3. Configure Tailwind to scan the library components by adding this line to the content array on the `tailwind.config.js`.

```
content: [
    ...

    './node_modules/@your-scope/ui-kit/dist/ui-kit.umd.js',
  ],
```

4. Import the library in your component, for example: `import {Button} from '@scope/ui-kit'`.
5. Use the component: `<Button color="blue" > Click me! </Button>`.

<br>

## Local Development

1. In this repo build your latest changes: `yarn build`
2. In this repo Publish your latest changes: `yalc publish`
3. In the app repo, install package (this needs done on each change): `yalc add -D @tpzdsp/tpz-dsp3-ui-kit`

# Styling

The Tailwind config has been designed to be a mixture of modern Tailwind practices and naming and GDS names for consistency and semantics.

## Colours

The available colours are a reduced palette have been taken from the [GDS colour palette](https://design-system.service.gov.uk/styles/colour/). Each colour has shades `100` to `900` (`900` being the darkest), where `500` is the exact hex code of the colour in the palette. For example, if you need `background: govuk-colour("red")`, that would be `bg-red-500`.

As per the GDS, there are colours that have secondary names that should be used for specific contexts, which are shown below, along side a list of the available colours:

| GDS Name     | Tailwind Name | Contextual Name(s)                                          |
| ------------ | ------------- | ----------------------------------------------------------- |
| `white`      | `white`       |                                                             |
| `black`      | `black`       | `text-primary`, `focus-text`, `border-input`, `link-active` |
| `red`        | `red-500`     | `error`                                                     |
| `yellow`     | `yellow`      | `focus`                                                     |
| `green`      | `green`       | `success`, `brand`, `link`, `link-hover` (`green-600`)      |
| `orange`     | `orange`      | `warning`                                                   |
| `dark-grey`  | `gray`        | `text-secondary`                                            |
| `mid-grey`   | `slate`       | `border`                                                    |
| `light-grey` | `stone`       |                                                             |
| `purple`     | `purple`      | `link-visited`                                              |

### States

#### Focus

Any element with focus must have a yellow background and black text, which is achieved with `bg-focus` and `text-focus-text`. Certain components, like buttons, may have a different focus style depending on whether the user is also hovering or interacting with the compoennt, but the focus colour must always be the same.

#### Hover / Active

For hover states, the colour of the element should darken **one shade**. For example, `bg-green-500 hover:bg-green-600`.
Active states will depend on the component. Links should use their respective contextual names, so `link-hover`, `link-active`, etc.

## Text & Font

The `GDS Transport` font file is not included in this repository due to the license, however the font family name is the first one in the font family list so it will attempt to use it if available.
The font file should be supplied by each project individually.

### Text Size

The sizing is based off of the [GDS modern typography scale](https://design-system.service.gov.uk/styles/type-scale/). The names of the font sizes have been altered:

| GovUK Name       | Tailwind Name |
| ---------------- | ------------- |
| 16               | `base`        |
| 19               | `lg`          |
| 24               | `xl`          |
| 27 (rarely used) | `2xl`         |
| 36               | `3xl`         |
| 48               | `4xl`         |
| 80 (rarely used) | `5xl`         |

The default `text-...` class name is automatically responsive, based on the 2 differrent font size tables provided by the GDS for small or large screens. This means writing `text-xl`, for example, will apply the font size for small screens, and optionally, if the screen is large enough, the size for large screens. You should not need to write responsive font size classes for this reason.

If you need a font size that is *not* responsive, you can use the static names. For example, `text-static-xl` will apply the small screen point 24 font size and it will not change (`text-static-lg-xl` would be large screen).

## Breakpoints

There are 4 breakpoints which map exactly to the `govuk-frontend`:

| GovUK Name | Tailwind Name | Size   |
| ---------- | ------------- | ------ |
| `mobile`   | `xs`          | 320px  |
| `tablet`   | `sm`          | 740px  |
| `desktop`  | `md`          | 980px  |
| `wide`     | `lg`          | 1300px |

## Notes

There are a few utility variants defined in the Tailwind config:

- `focus-idle:`: used when the element is focussed but not active or being hovered
- `hover-enabled:`: used when an element is hovered, but the element is not disabled
- `active-enabled`: same as above, but for if the element is active