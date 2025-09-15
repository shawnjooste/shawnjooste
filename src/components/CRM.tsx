import { 
  PlusIcon, 
  MagnifyingGlassIcon,
  FunnelIcon,
  EnvelopeIcon,
  PhoneIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const crmStats = [
  {
    name: 'Total Contacts',
    value: '1,247',
    change: '+23',
    changeType: 'increase',
  },
  {
    name: 'Active Leads',
    value: '89',
    change: '+12',
    changeType: 'increase',
  },
  {
    name: 'Converted This Month',
    value: '34',
    change: '+8',
    changeType: 'increase',
  },
  {
    name: 'Pipeline Value',
    value: '$45,600',
    change: '+15%',
    changeType: 'increase',
  },
]

const contacts = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Solutions Inc.',
    title: 'Product Manager',
    status: 'Lead',
    source: 'Website',
    lastContact: '2024-01-18',
    tags: ['VIP', 'Product'],
    value: 2500,
  },
  {
    id: 2,
    name: 'Mike Chen',
    email: 'mike@example.com',
    phone: '+1 (555) 234-5678',
    company: 'StartupXYZ',
    title: 'Founder',
    status: 'Customer',
    source: 'Referral',
    lastContact: '2024-01-15',
    tags: ['High Value'],
    value: 5000,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    email: 'emily@example.com',
    phone: '+1 (555) 345-6789',
    company: 'Design Studio',
    title: 'Creative Director',
    status: 'Prospect',
    source: 'Social Media',
    lastContact: '2024-01-12',
    tags: ['Design', 'Creative'],
    value: 1200,
  },
  {
    id: 4,
    name: 'Alex Kim',
    email: 'alex@example.com',
    phone: '+1 (555) 456-7890',
    company: 'Marketing Agency',
    title: 'Marketing Director',
    status: 'Customer',
    source: 'Email Campaign',
    lastContact: '2024-01-10',
    tags: ['Marketing', 'Agency'],
    value: 3200,
  },
]

const leadSources = [
  { name: 'Website', count: 45, percentage: 35 },
  { name: 'Social Media', count: 32, percentage: 25 },
  { name: 'Referral', count: 28, percentage: 22 },
  { name: 'Email Campaign', count: 23, percentage: 18 },
]

const pipelineStages = [
  { name: 'Lead', count: 89, value: 12500 },
  { name: 'Prospect', count: 45, value: 18700 },
  { name: 'Qualified', count: 23, value: 9600 },
  { name: 'Proposal', count: 12, value: 4800 },
  { name: 'Closed Won', count: 34, value: 0 },
]

export default function CRM() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">CRM</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your contacts and track your sales pipeline
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Contact
        </button>
      </div>

      {/* CRM Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        {crmStats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <UserGroupIcon className="h-6 w-6 text-gray-400" />
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

      {/* Search and Filters */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="relative flex-1 max-w-lg">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex space-x-3">
              <select className="border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>All Status</option>
                <option>Lead</option>
                <option>Prospect</option>
                <option>Customer</option>
              </select>
              <select className="border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>All Sources</option>
                <option>Website</option>
                <option>Social Media</option>
                <option>Referral</option>
                <option>Email Campaign</option>
              </select>
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <FunnelIcon className="h-4 w-4 mr-1" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contacts List */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Contacts</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Your contact database and relationship management
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-indigo-600 truncate">
                            {contact.name}
                          </p>
                          <div className="ml-2 flex-shrink-0 flex">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              contact.status === 'Customer' 
                                ? 'bg-green-100 text-green-800'
                                : contact.status === 'Lead'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {contact.status}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 flex">
                          <div className="flex items-center text-sm text-gray-500">
                            <p className="truncate">{contact.title} at {contact.company}</p>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 space-x-4">
                          <div className="flex items-center">
                            <EnvelopeIcon className="h-4 w-4 mr-1" />
                            {contact.email}
                          </div>
                          <div className="flex items-center">
                            <PhoneIcon className="h-4 w-4 mr-1" />
                            {contact.phone}
                          </div>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {contact.tags.map((tag) => (
                              <span key={tag} className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                            ${contact.value}
                          </div>
                        </div>
                      </div>
                      <div className="ml-5 flex-shrink-0 flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <PencilIcon className="h-5 w-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Analytics Sidebar */}
        <div className="space-y-6">
          {/* Pipeline Stages */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Pipeline</h3>
              <div className="space-y-3">
                {pipelineStages.map((stage) => (
                  <div key={stage.name} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-gray-900">{stage.name}</span>
                        <span className="text-gray-500">{stage.count}</span>
                      </div>
                      <div className="mt-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full" 
                          style={{ width: `${(stage.count / 89) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lead Sources */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Lead Sources</h3>
              <div className="space-y-3">
                {leadSources.map((source) => (
                  <div key={source.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{source.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">{source.count}</span>
                      <span className="text-xs text-gray-400">({source.percentage}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-gray-200">
                  Import Contacts
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-gray-200">
                  Export Data
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-gray-200">
                  Create Email Campaign
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-gray-200">
                  Schedule Follow-up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
