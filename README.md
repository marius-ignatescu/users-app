# users-app
Users App

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
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
