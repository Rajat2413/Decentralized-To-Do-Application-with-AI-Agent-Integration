# Modern Task Management Application

A beautiful and efficient task management application built with React, TypeScript, and Tailwind CSS. This application helps users organize their tasks with a rich set of features and a clean, intuitive interface.

![Task Management App](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072)

## Features

### 📋 Task Management
- Create, update, and delete tasks
- Set priority levels (low, medium, high)
- Track task status (todo, in-progress, completed)
- Add due dates
- Organize with tags
- Rich task descriptions

### 📊 Analytics Dashboard
- Real-time completion rate tracking
- Priority distribution visualization
- Status overview with progress bars
- Visual performance metrics

### 🎨 Modern UI
- Clean, professional design
- Fully responsive layout
- Smooth animations and transitions
- Intuitive task cards
- Beautiful color-coded priorities and statuses

### 🛠 Technical Features
- Built with React and TypeScript
- Tailwind CSS for styling
- Zustand for state management
- Date handling with date-fns
- Lucide React for beautiful icons

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd task-management-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

### Creating Tasks
1. Click the "Add New Task" button
2. Fill in the task details:
   - Title (required)
   - Description
   - Priority (low, medium, high)
   - Due Date (required)
   - Tags (comma-separated)
3. Click "Create Task" to save

### Managing Tasks
- Update task status by clicking the "Update Status" button
- Delete tasks using the trash icon
- View task details in the card interface
- Track progress in the analytics dashboard

### Analytics
The dashboard provides three key metrics:
1. Completion Rate: Overall progress visualization
2. Priority Distribution: Task breakdown by priority
3. Status Overview: Tasks in each status category

## Project Structure

```
src/
├── components/
│   ├── Analytics.tsx    # Analytics dashboard component
│   ├── TaskCard.tsx    # Individual task display
│   └── TaskForm.tsx    # Task creation form
├── store/
│   └── taskStore.ts    # Zustand state management
├── types.ts            # TypeScript interfaces
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Technologies Used

- **React**: UI library
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first styling
- **Zustand**: State management
- **date-fns**: Date formatting and manipulation
- **Lucide React**: Modern icon set
- **Vite**: Build tool and development server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- UI inspiration from modern design practices
- Built with ❤️ using React and TypeScript
- 
