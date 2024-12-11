---

# **World Cup 2026 Project**

Welcome to the **World Cup 2026 Project** repository! This project serves as the foundation for a platform dedicated to delivering engaging content, live updates, and user interactions for the World Cup 2026. Below you'll find all the information you need to set up the monorepo and start contributing.

---

## **Table of Contents**
1. [Project Structure](#project-structure)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Cloning the Repository](#cloning-the-repository)
   - [Installing Dependencies](#installing-dependencies)
4. [Frontend (Next.js)](#frontend-nextjs)
   - [Setup](#frontend-setup)
   - [Development](#frontend-development)
5. [Backend (Nest.js)](#backend-nestjs)
   - [Setup](#backend-setup)
   - [Development](#backend-development)
6. [Shared Libraries](#shared-libraries)
7. [Common Commands](#common-commands)
8. [Folder Structure](#folder-structure)
9. [Contributing Guidelines](#contributing-guidelines)
10. [Contact](#contact)

---

## **Project Structure**
This monorepo is organized into the following directories:
```
worldcup2026/
│
├── apps/
│   ├── frontend/       # Next.js application
│   ├── backend/        # Nest.js application
│
├── libs/               # Shared libraries (e.g., TypeScript types, utilities)
│   ├── shared-types/   # Shared TypeScript types
│
├── .github/            # GitHub Actions workflows
├── package.json        # Root package.json for shared scripts and dependencies
├── tsconfig.base.json  # Base TypeScript configuration
└── README.md           # Project documentation
```

---

## **Tech Stack**
- **Frontend**: [Next.js](https://nextjs.org/) with TypeScript
- **Backend**: [Nest.js](https://nestjs.com/) with TypeScript
- **Database**: PostgreSQL
- **Package Manager**: PNPM
- **Shared Code**: TypeScript libraries in the `libs/` directory
- **Hosting**: Vercel (Frontend), AWS or Vercel (Backend)

---

## **Getting Started**

### **Prerequisites**
1. **Node.js** (v20.0.0 or later) and **npm**:
   - Download and install from [Node.js Official Website](https://nodejs.org/).
2. **PNPM** (Package Manager):
   - Install globally:
     ```bash
     npm install -g pnpm
     ```
3. **PostgreSQL**:
   - Install and set up a local or cloud-hosted PostgreSQL database.

---

### **Cloning the Repository**
Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/worldcup2026.git
cd worldcup2026
```

---

### **Installing Dependencies**
Install all dependencies across the monorepo using PNPM:
```bash
pnpm install
```

---

## **Frontend (Next.js)**

### **Frontend Setup**
Navigate to the `apps/frontend` directory:
```bash
cd apps/frontend
```

Run the development server:
```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### **Frontend Development**
Common scripts:
- **Start Development Server**:
  ```bash
  pnpm dev
  ```
- **Build for Production**:
  ```bash
  pnpm build
  ```
- **Lint the Code**:
  ```bash
  pnpm lint
  ```

---

## **Backend (Nest.js)**

### **Backend Setup**
Navigate to the `apps/backend` directory:
```bash
cd apps/backend
```

Start the development server:
```bash
pnpm start:dev
```

API will be available at [http://localhost:3001](http://localhost:3001).

### **Backend Development**
Common scripts:
- **Start Development Server**:
  ```bash
  pnpm start:dev
  ```
- **Build for Production**:
  ```bash
  pnpm build
  ```
- **Run Tests**:
  ```bash
  pnpm test
  ```

---

## **Shared Libraries**
Shared libraries are stored in the `libs/` directory. To use shared types or utilities:
1. Add the shared library to your app:
   ```bash
   pnpm add ../libs/shared-types -F [app-name]
   ```
2. Import the library in your code:
   ```typescript
   import { User } from '@shared-types';
   ```

---

## **Common Commands**
Run the following commands from the root of the monorepo:

- **Install Dependencies**:
  ```bash
  pnpm install
  ```

- **Start Frontend**:
  ```bash
  pnpm dev:frontend
  ```

- **Start Backend**:
  ```bash
  pnpm dev:backend
  ```

- **Build All Applications**:
  ```bash
  pnpm build
  ```

- **Run All Tests**:
  ```bash
  pnpm test
  ```

---

## **Folder Structure**
- **apps/frontend**: The Next.js frontend application.
- **apps/backend**: The Nest.js backend application.
- **libs/**: Shared libraries for TypeScript types and utilities.

---

## **Contributing Guidelines**
1. **Branching**:
   - Create a feature branch from `main`:
     ```bash
     git checkout -b feature/your-feature-name
     ```

2. **Commit Messages**:
   - Follow the [Conventional Commits](https://www.conventionalcommits.org/) format.

3. **Code Quality**:
   - Run linters and tests before pushing:
     ```bash
     pnpm lint
     pnpm test
     ```

4. **Pull Requests**:
   - Submit a pull request for code review.

---

## **Contact**
For questions or issues, reach out to the project maintainer:
- **Name**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [Your GitHub Profile](https://github.com/your-username)

---