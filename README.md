# Personal Platform

A comprehensive all-in-one platform that combines the features of Ghost (newsletter), Skool (community), Kajabi (courses & consulting), and Go High Level (CRM) into a single unified experience.

## Features

### 📧 Newsletter Management (Ghost Alternative)
- Create and manage newsletter content
- Track subscriber growth and engagement
- Newsletter templates and scheduling
- Analytics and performance metrics

### 👥 Community Platform (Skool Alternative)
- Discussion forums and categories
- Member engagement tracking
- Post management and moderation
- Community analytics

### 🎓 Course Creation (Kajabi Alternative)
- Create and manage online courses
- Student enrollment and progress tracking
- Course analytics and revenue tracking
- Multiple course formats (video, text, mixed)

### 💼 Consulting Services (Kajabi Alternative)
- Session scheduling and management
- Client relationship tracking
- Calendar integration
- Session analytics and feedback

### 📊 CRM System (Go High Level Alternative)
- Contact management
- Lead tracking and pipeline management
- Sales analytics
- Communication history

### 📈 Analytics Dashboard
- Comprehensive platform analytics
- Revenue tracking
- User engagement metrics
- Performance insights

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your Supabase project:
   - Create a new Supabase project
   - Copy your project URL and anon key to `.env.local`
   - Run the database migrations from `supabase/migrations/`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Database Schema

The application uses the following main tables:

- `users` - User accounts and profiles
- `newsletters` - Newsletter content and metadata
- `subscribers` - Newsletter subscriber list
- `courses` - Course information and pricing
- `community_posts` - Community discussions
- `consulting_sessions` - Consulting session details
- `contacts` - CRM contact information

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Supabase Setup

1. Create a new Supabase project
2. Run the migration scripts from `supabase/migrations/`
3. Set up Row Level Security (RLS) policies as needed
4. Configure authentication settings

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── analytics/
│   ├── community/
│   ├── consulting/
│   ├── courses/
│   ├── crm/
│   └── newsletter/
├── components/          # React components
│   ├── Analytics.tsx
│   ├── Community.tsx
│   ├── Consulting.tsx
│   ├── Courses.tsx
│   ├── CRM.tsx
│   ├── Dashboard.tsx
│   ├── Navbar.tsx
│   ├── Newsletter.tsx
│   └── Sidebar.tsx
└── lib/                # Utility functions and configurations
    └── supabase.ts     # Supabase client configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the GitHub repository.