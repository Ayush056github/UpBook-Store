# BookStore Project

A full-stack web application for managing and browsing books, built with Node.js backend and React frontend.

## 🚀 Features

- **Backend API**: RESTful API built with Node.js and Express
- **Frontend**: Modern React application with Tailwind CSS
- **User Authentication**: Sign up, login, and logout functionality
- **Book Management**: Browse, search, and manage books
- **Responsive Design**: Mobile-friendly interface

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT Authentication

### Frontend
- React.js
- Vite
- Tailwind CSS
- Context API for state management

## 📁 Project Structure

```
BookStore/
├── Backend/           # Node.js server
│   ├── controller/    # Route controllers
│   ├── model/         # Database models
│   ├── route/         # API routes
│   └── index.js       # Server entry point
├── Frontend/          # React application
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── context/    # Authentication context
│   │   ├── home/       # Home page components
│   │   └── courses/    # Course-related components
│   └── public/         # Static assets
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Backend Setup
1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your configuration:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📱 Available Scripts

### Backend
- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon

### Frontend
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

## 🔐 API Endpoints

- `POST /api/users/signup` - User registration
- `POST /api/users/login` - User authentication
- `GET /api/books` - Get all books
- `POST /api/books` - Create a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ayush Mathur**

## 🙏 Acknowledgments

- React.js community
- Node.js community
- Tailwind CSS team
