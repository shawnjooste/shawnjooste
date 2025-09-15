import { 
  PlusIcon, 
  CalendarIcon, 
  ClockIcon, 
  UserIcon,
  CurrencyDollarIcon,
  PencilIcon,
  EyeIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline'

const consultingStats = [
  {
    name: 'Total Sessions',
    value: '47',
    change: '+8',
    changeType: 'increase',
  },
  {
    name: 'Active Clients',
    value: '12',
    change: '+3',
    changeType: 'increase',
  },
  {
    name: 'Completion Rate',
    value: '94%',
    change: '+2%',
    changeType: 'increase',
  },
  {
    name: 'Monthly Revenue',
    value: '$3,200',
    change: '+15%',
    changeType: 'increase',
  },
]

const upcomingSessions = [
  {
    id: 1,
    client: 'Sarah Johnson',
    type: '1-on-1 Call',
    date: '2024-01-20',
    time: '2:00 PM',
    duration: '60 min',
    status: 'Scheduled',
    topic: 'Career Transition Strategy',
    rate: 150,
  },
  {
    id: 2,
    client: 'Mike Chen',
    type: 'Group Workshop',
    date: '2024-01-22',
    time: '10:00 AM',
    duration: '90 min',
    status: 'Scheduled',
    topic: 'Product Management Fundamentals',
    rate: 200,
  },
  {
    id: 3,
    client: 'Emily Rodriguez',
    type: 'Video Call',
    date: '2024-01-25',
    time: '3:30 PM',
    duration: '45 min',
    status: 'Pending',
    topic: 'Personal Branding Review',
    rate: 120,
  },
]

const completedSessions = [
  {
    id: 4,
    client: 'Alex Kim',
    type: '1-on-1 Call',
    date: '2024-01-18',
    time: '1:00 PM',
    duration: '60 min',
    status: 'Completed',
    topic: 'Leadership Development',
    rate: 150,
    feedback: 'Excellent session, very helpful insights',
  },
  {
    id: 5,
    client: 'David Wilson',
    type: 'Group Workshop',
    date: '2024-01-15',
    time: '2:00 PM',
    duration: '90 min',
    status: 'Completed',
    topic: 'Team Building Workshop',
    rate: 200,
    feedback: 'Great workshop, team loved it',
  },
]

const serviceTypes = [
  {
    name: '1-on-1 Coaching',
    description: 'Personalized coaching sessions',
    rate: 150,
    duration: '60 min',
    icon: UserIcon,
  },
  {
    name: 'Group Workshops',
    description: 'Interactive group learning sessions',
    rate: 200,
    duration: '90 min',
    icon: UserIcon,
  },
  {
    name: 'Video Consultations',
    description: 'Remote video consultations',
    rate: 120,
    duration: '45 min',
    icon: VideoCameraIcon,
  },
]

export default function Consulting() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Consulting</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your consulting sessions and client relationships
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <PlusIcon className="h-5 w-5 mr-2" />
          Schedule Session
        </button>
      </div>

      {/* Consulting Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        {consultingStats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CalendarIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Sessions */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Sessions</h3>
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{session.client}</h4>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      session.status === 'Scheduled' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {session.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{session.topic}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {session.date}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {session.time}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {session.duration}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                      ${session.rate}
                    </div>
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-900 text-sm">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 text-sm">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Completed Sessions */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Sessions</h3>
            <div className="space-y-4">
              {completedSessions.map((session) => (
                <div key={session.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{session.client}</h4>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {session.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{session.topic}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {session.date}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {session.time}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                      ${session.rate}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 italic">&ldquo;{session.feedback}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Types */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Service Types</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {serviceTypes.map((service) => (
              <div key={service.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <service.icon className="h-8 w-8 text-indigo-600" />
                  <h4 className="ml-3 text-lg font-medium text-gray-900">{service.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CurrencyDollarIcon className="h-4 w-4 text-gray-400" />
                    <span className="ml-1 text-sm font-medium text-gray-900">${service.rate}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 text-gray-400" />
                    <span className="ml-1 text-sm text-gray-500">{service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calendar Integration */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Calendar Integration</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Google Calendar</h4>
              <p className="text-sm text-gray-600 mb-3">Sync your consulting sessions with Google Calendar</p>
              <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Connect Google Calendar
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Calendly Integration</h4>
              <p className="text-sm text-gray-600 mb-3">Allow clients to book sessions directly</p>
              <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Connect Calendly
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
