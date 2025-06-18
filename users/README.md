# Users

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

## Features

- Sub-navigation layout with contextual slots
- User list with table, view, delete, and import functionality
- Add new user form with validation
- Signal-based custom state manager
- Toast notification system with loading spinner
- File upload for importing users (JSON)
- Dashboard with card layout
- Lazy-loaded routes

## Project structure

src/
├── app/
│   ├── pages/             # Page-level components
│   ├── components/        # Reusable UI components
│   ├── shared/            # Shared components
│   ├── services/          # API calls (e.g., UserService, ToastService)
│   ├── store/             # Custom signal-based state managers
│   ├── app-routing.module.ts
│   └── app.component.*

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/marius-ignatescu/users-app.git
```

### 2. Install dependencies
```bash
npm install @angular/cli

# Core Angular dependencies
npm install @angular/forms @angular/common @angular/router

# Angular CDK for table and layout components
npm install @angular/cdk
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
