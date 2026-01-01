     1|# React + TypeScript + Vite
     2|
     3|This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
     4|
     5|Currently, two official plugins are available:
     6|
     7|- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
     8|- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
     9|
    10|## React Compiler
    11|
    12|The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
    13|
    14|## Expanding the ESLint configuration
    15|
    16|If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:
    17|
    18|```js
    19|export default defineConfig([
    20|  globalIgnores(['dist']),
    21|  {
    22|    files: ['**/*.{ts,tsx}'],
    23|    extends: [
    24|      // Other configs...
    25|
    26|      // Remove tseslint.configs.recommended and replace with this
    27|      tseslint.configs.recommendedTypeChecked,
    28|      // Alternatively, use this for stricter rules
    29|      tseslint.configs.strictTypeChecked,
    30|      // Optionally, add this for stylistic rules
    31|      tseslint.configs.stylisticTypeChecked,
    32|
    33|      // Other configs...
    34|    ],
    35|    languageOptions: {
    36|      parserOptions: {
    37|        project: ['./tsconfig.node.json', './tsconfig.app.json'],
    38|        tsconfigRootDir: import.meta.dirname,
    39|      },
    40|      // other options...
    41|    },
    42|  },
    43|])
    44|```
    45|
    46|You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:
    47|
    48|```js
    49|// eslint.config.js
    50|import reactX from 'eslint-plugin-react-x'
    51|import reactDom from 'eslint-plugin-react-dom'
    52|
    53|export default defineConfig([
    54|  globalIgnores(['dist']),
    55|  {
    56|    files: ['**/*.{ts,tsx}'],
    57|    extends: [
    58|      // Other configs...
    59|      // Enable lint rules for React
    60|      reactX.configs['recommended-typescript'],
    61|      // Enable lint rules for React DOM
    62|      reactDom.configs.recommended,
    63|    ],
    64|    languageOptions: {
    65|      parserOptions: {
    66|        project: ['./tsconfig.node.json', './tsconfig.app.json'],
    67|        tsconfigRootDir: import.meta.dirname,
    68|      },
    69|      // other options...
    70|    },
    71|  },
    72|])
    73|```
    74|
    75|## Deployment
    76|
    77|This project can be deployed to Vercel. To set up deployment, link your GitHub repository to Vercel and ensure the `vercel.json` file is present in the project root. Vercel will automatically detect the framework and deploy the application.
