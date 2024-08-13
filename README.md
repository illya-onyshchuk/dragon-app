## Quick Start

### Installation

1. **Clone the repository to your local machine**:

    ```bash
     git clone https://github.com/illya-onyshchuk/dragon-app.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd dragon-app
    ```

3. **Install the dependencies**:
    ```bash
    npm install
    ```
  
4. **Start the project**:
    ```bash
    npm run dev
    ```
   
## Deploy

### Setup

The deployment configuration is defined in `.github/workflows/deploy.yml`.

### Deployment Process

1. On each push to the `main` branch, GitHub Actions will:
   - Check out the repository.
   - Set up Node.js.
   - Install dependencies.
   - Build the project.
   - Deploy the built files to the server specified in the secrets.
