import { 
  PlusIcon, 
  EyeIcon, 
  PencilIcon, 
  TrashIcon,
  ArrowUpTrayIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const newsletters = [
  {
    id: 1,
    title: 'Weekly Tech Insights - Issue #47',
    status: 'Published',
    publishedDate: '2024-01-15',
    openRate: '24.5%',
    clickRate: '8.2%',
    subscribers: '2,847',
    preview: 'This week we dive into the latest React 18 features and how they can improve your development workflow...',
  },
  {
    id: 2,
    title: 'Building Better Products - Issue #46',
    status: 'Published',
    publishedDate: '2024-01-08',
    openRate: '26.1%',
    clickRate: '9.4%',
    subscribers: '2,801',
    preview: 'Product management insights from industry leaders and practical tips for building user-centric products...',
  },
  {
    id: 3,
    title: 'Personal Branding Mastery - Issue #45',
    status: 'Draft',
    publishedDate: null,
    openRate: null,
    clickRate: null,
    subscribers: '2,756',
    preview: 'Learn how to build a powerful personal brand that opens doors and creates opportunities...',
  },
]

export default function Newsletter() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Newsletter</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your newsletter content and track performance
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Newsletter
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserGroupIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Subscribers</dt>
                  <dd className="text-lg font-medium text-gray-900">2,847</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ChartBarIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Avg. Open Rate</dt>
                  <dd className="text-lg font-medium text-gray-900">25.3%</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ArrowUpTrayIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Avg. Click Rate</dt>
                  <dd className="text-lg font-medium text-gray-900">8.8%</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Newsletters</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Manage and track your newsletter campaigns
          </p>
        </div>
        <ul className="divide-y divide-gray-200">
          {newsletters.map((newsletter) => (
            <li key={newsletter.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {newsletter.title}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          newsletter.status === 'Published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {newsletter.status}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <p>{newsletter.preview}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      {newsletter.publishedDate && (
                        <span>Published {newsletter.publishedDate}</span>
                      )}
                      {newsletter.openRate && (
                        <>
                          <span className="mx-2">•</span>
                          <span>Open Rate: {newsletter.openRate}</span>
                          <span className="mx-2">•</span>
                          <span>Click Rate: {newsletter.clickRate}</span>
                        </>
                      )}
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

      {/* Newsletter Templates */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Newsletter Templates</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Tech Newsletter</span>
              </div>
              <span className="block text-sm font-medium text-gray-900">Weekly Tech Update</span>
              <span className="block text-xs text-gray-500">Clean, modern layout for tech content</span>
            </div>
            <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Business Newsletter</span>
              </div>
              <span className="block text-sm font-medium text-gray-900">Business Insights</span>
              <span className="block text-xs text-gray-500">Professional layout for business content</span>
            </div>
            <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Personal Newsletter</span>
              </div>
              <span className="block text-sm font-medium text-gray-900">Personal Update</span>
              <span className="block text-xs text-gray-500">Casual, friendly layout for personal content</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
