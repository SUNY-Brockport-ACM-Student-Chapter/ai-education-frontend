## EduAlly Frontend

### 1. Clone the repository:
```sh
git clone <repository-url>
cd <project-directory>

(You can also use GitHub desktop)
```

### 2. Install dependencies:
```sh
npm install
```

### 3. Set up environment variables:
Create a `.env.local` file in the project root and define the necessary variables:
```sh
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

(contact Frontend Lead within the project Discord for key access)
```

### 4. Start the development server:
```sh
npm run dev
```
The application will be available at `http://localhost:3000`.

---

## Scripts

- `npm install` – Installs dependencies
- `npm run dev` – Starts the development server

---