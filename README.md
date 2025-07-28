# 📝 Todo List App

> A clean and responsive todo list application built for practice and learning purposes.

## 🚀 Features

- ✅ Add new todos with due dates
- 📅 Set datetime for task deadlines
- ✏️ Edit existing todos
- 🗑️ Delete unwanted tasks
- ☑️ Mark todos as complete/incomplete
- 🎨 Clean, modern UI with Tailwind CSS

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Frontend:** EJS templating, Tailwind CSS

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kaival775/Todo-List-Backend-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start MongoDB**
   - Make sure MongoDB is running on your system
   - Default connection: `mongodb://localhost:27017`

5. **Run the application**
   ```bash
   npm start
   ```
   or for development with nodemon:
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`

## 📁 Project Structure

```
TodoListBackendProject/
├── models/
│   └── todo.js          # MongoDB schema
├── views/
│   └── index.ejs        # Main template
├── .gitignore          # Git ignore rules
├── server.js           # Main server file
├── package.json        # Dependencies
└── README.md           # This file
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display all todos |
| POST | `/create` | Create new todo |
| PUT | `/toggle/:id` | Toggle todo completion |
| POST | `/update/:id` | Update existing todo |
| POST | `/delete/:id` | Delete todo |

## 🎯 Usage

1. **Add Todo:** Enter task description and set due date, then click "Add Todo"
2. **Mark Complete:** Click the checkbox to mark tasks as done
3. **Edit Todo:** Click the edit button (pencil icon) to modify tasks
4. **Delete Todo:** Click the delete button (trash icon) to remove tasks

## 🎨 UI Features

- **Clean Design:** Minimalist interface with proper spacing
- **Hover Effects:** Interactive buttons with smooth transitions
- **Visual Feedback:** Different styles for completed vs pending tasks

## 📚 Learning Objectives

This project was created for practice and covers:

- 🗄️ MongoDB database operations
- 🎭 EJS templating engine
- 🎨 Tailwind CSS styling
- 🔄 CRUD operations
- 📡 RESTful API design

## 🤝 Contributing

This is a practice project, but feel free to:
- Fork the repository
- Create feature branches
- Submit pull requests
- Report issues

## 📄 License

This project is for educational purposes only.

## 🙏 Acknowledgments

- Built as a learning exercise
- Inspired by modern todo applications
- Thanks to the open-source community

---

**Note:** This project is created for practice and learning purposes. It demonstrates fundamental web development concepts and full-stack application architecture.

🌟 **Happy Coding!** 🌟