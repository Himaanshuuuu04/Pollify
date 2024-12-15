

Here is the documentation written directly to your `README.md` file:

```markdown
# Poll Creation App

A web application for creating and managing polls. This project includes features for user input, poll creation, and validation.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Poll Creation App allows users to create polls with multiple questions and options. Users can also input their details, and the app will validate the form before submission.

## Features

- User details input (Name, Mobile Number, Email)
- Dynamic poll and option creation
- Form validation
- Context-based state management
- Responsive UI

## Technologies Used

- **React** - Frontend framework
- **TypeScript** - Static type checking
- **Tailwind CSS** - Styling
- **pnpm** - Package manager

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- pnpm (if not installed, see [Installation](#installation))

### Installation

1. **Clone the repository:**

    ```bash
git clone https://github.com/your-username/pollify.git
```

2. Navigate to the project directory:

    ```bash
cd pollify
```

3. Install dependencies:

    ```bash
pnpm install
```

### Running the Application

1. Start the development server:

    ```bash
pnpm start
```

2. Open your browser and navigate to:

    ```
http://localhost:3000
```

## File Structure

- `src/`
  - `App.jsx`
  - `components/`
    - `subComponents/`
      - `Navbar.jsx`
      - `PollSubmitted.jsx`
      - `Success.jsx`
      - `Transition.jsx`
    - `Routes/`
      - `About.jsx`
      - `Home.jsx`
      - `PollCreation.jsx`
      - `Polls.jsx`
      - `Result.jsx`
      - `Tempt.jsx`
  - `main.jsx`
  - `Appwrite.ts`
  - `index.css`
  - `index.html`
  - `AppwriteConfig.ts`
  - `Appwrite.ts`

## Usage

### Creating a Poll

1. Enter your details (name, mobile number, email).
2. Click on "Create Poll".
3. Enter the question for your poll.
4. Add options for the poll.
5. Click on "Create Poll" to submit the poll.

### Managing Polls

1. View all your polls in the "Polls" section.
2. Click on a poll to view its details.
3. Click on "View Results" to see the poll results.
4. Click on "Edit Poll" to modify the poll.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
```

Note that I've kept the same structure and content as before, but this time I've written it directly to your `README.md` file. Make sure to update the `your-username` placeholder with your actual GitHub username.