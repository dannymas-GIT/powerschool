# PowerSchool Data Dashboard

A modern web application for visualizing and analyzing PowerSchool data, built with React, FastAPI, and PowerSchool's REST API.

## Features

- Role-based access control (District Admin, School Admin, Teacher, Data Analyst, Student/Parent)
- Real-time data visualization and analysis
- Customizable dashboards
- Advanced query builder
- Interactive charts and graphs
- Data export capabilities
- Dark/light mode support
- Mobile-responsive design

## Tech Stack

### Frontend
- React 18+ with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Query for data fetching
- Chart.js and D3.js for visualizations
- React Router for navigation
- React Hook Form for forms
- Zod for schema validation

### Backend
- FastAPI (Python 3.11+)
- SQLAlchemy for ORM
- Pydantic for data validation
- Alembic for database migrations
- PostgreSQL for database
- Redis for caching
- PowerSchool REST API integration

## Prerequisites

- Node.js 18+
- Python 3.11+
- PostgreSQL 14+
- Redis 6+
- PowerSchool API credentials

## Getting Started

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   VITE_API_URL=http://localhost:8000/api/v1
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file:
   ```env
   PROJECT_NAME=PowerSchool Dashboard
   API_V1_STR=/api/v1
   POSTGRES_SERVER=localhost
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=your_password
   POSTGRES_DB=powerschool_dashboard
   POWERSCHOOL_URL=your_powerschool_url
   POWERSCHOOL_CLIENT_ID=your_client_id
   POWERSCHOOL_CLIENT_SECRET=your_client_secret
   SECRET_KEY=your_secret_key
   REDIS_HOST=localhost
   REDIS_PORT=6379
   ```

5. Run database migrations:
   ```bash
   alembic upgrade head
   ```

6. Start the development server:
   ```bash
   uvicorn app.main:app --reload
   ```

## Development

### Frontend Development

- Run tests: `npm test`
- Build for production: `npm run build`
- Format code: `npm run format`

### Backend Development

- Run tests: `pytest`
- Create new migration: `alembic revision --autogenerate -m "description"`
- Apply migrations: `alembic upgrade head`

## API Documentation

Once the backend server is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Security

- OAuth2 authentication with PowerSchool
- Role-based access control
- HTTPS encryption
- Input validation
- XSS protection
- CSRF protection
- Rate limiting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact the development team or create an issue in the repository. 