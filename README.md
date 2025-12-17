# TaskMaster

A simple and intuitive task management application built with modern web technologies. TaskMaster allows users to create, edit, delete, and track their tasks with an easy-to-use interface.

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Linting**: ESLint with TypeScript support

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Authentication
- **Register**: Create a new account using the register page.
- **Login**: Use existing credentials to log in.
- For testing purposes, dummy users are provided on the login page. You can use any of the listed email/password combinations to log in.

### Managing Tasks
- **Add Task**: Click the "Add Task" button to create a new task with a title and description.
- **Edit Task**: Click the edit icon on any task to modify its title and description.
- **Delete Task**: Click the delete icon and confirm to remove a task.
- **Toggle Completion**: Click the checkbox to mark a task as completed or incomplete.
- **Filter Tasks**: Use the filter buttons (All, Active, Completed) to view tasks by status.

### Features
- Responsive design that works on desktop and mobile devices.
- Real-time task filtering and counting.
- Toast notifications for user feedback.
- Protected routes requiring authentication.

## File Structure

```
task-manager/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── ConfirmModal.tsx
│   │   ├── Input.tsx
│   │   ├── TaskItem.tsx
│   │   └── TaskModal.tsx
│   ├── context/
│   │   ├── AuthProvider.tsx
│   │   └── context.ts
│   ├── hooks/
│   │   └── useAuth.ts
│   ├── lib/
│   │   └── faker.ts
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── routes/
│   │   └── ProtectedRoute.tsx
│   ├── types/
│   │   └── task.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint for code linting
- `npm run preview`: Preview the production build locally

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
