import { 
  PlusIcon, 
  UserGroupIcon, 
  ChatBubbleLeftRightIcon,
  HeartIcon,
  ShareIcon,
  FlagIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const communityStats = [
  {
    name: 'Total Members',
    value: '1,234',
    change: '+15%',
    changeType: 'increase',
  },
  {
    name: 'Active Today',
    value: '89',
    change: '+8%',
    changeType: 'increase',
  },
  {
    name: 'Posts This Week',
    value: '47',
    change: '+23%',
    changeType: 'increase',
  },
  {
    name: 'Engagement Rate',
    value: '12.4%',
    change: '+3%',
    changeType: 'increase',
  },
]

const recentPosts = [
  {
    id: 1,
    author: 'Sarah Johnson',
    avatar: 'SJ',
    title: 'Best practices for React state management in 2024',
    content: 'I\'ve been experimenting with different state management solutions and wanted to share my findings...',
    timestamp: '2 hours ago',
    likes: 24,
    comments: 8,
    category: 'Development',
  },
  {
    id: 2,
    author: 'Mike Chen',
    avatar: 'MC',
    title: 'Building a personal brand as a developer',
    content: 'Has anyone here successfully built a strong personal brand? I\'d love to hear your strategies...',
    timestamp: '4 hours ago',
    likes: 18,
    comments: 12,
    category: 'Career',
  },
  {
    id: 3,
    author: 'Emily Rodriguez',
    avatar: 'ER',
    title: 'New AI tools for productivity',
    content: 'I\'ve been testing some new AI productivity tools and they\'re game-changers for my workflow...',
    timestamp: '6 hours ago',
    likes: 31,
    comments: 15,
    category: 'Tools',
  },
]

const categories = [
  { name: 'General', count: 45, color: 'bg-blue-100 text-blue-800' },
  { name: 'Development', count: 32, color: 'bg-green-100 text-green-800' },
  { name: 'Career', count: 28, color: 'bg-purple-100 text-purple-800' },
  { name: 'Tools', count: 19, color: 'bg-orange-100 text-orange-800' },
  { name: 'Networking', count: 15, color: 'bg-pink-100 text-pink-800' },
]

export default function Community() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Community</h1>
          <p className="mt-1 text-sm text-gray-500">
            Connect with your audience and build meaningful relationships
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Post
        </button>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        {communityStats.map((stat) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Posts */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Recent Posts</h3>
                <div className="relative">
                  <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">{post.avatar}</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <span className="text-xs text-gray-500">{post.timestamp}</span>
                        </div>
                        <div className="mt-1">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${categories.find(c => c.name === post.category)?.color || 'bg-gray-100 text-gray-800'}`}>
                            {post.category}
                          </span>
                        </div>
                        <h4 className="mt-2 text-sm font-medium text-gray-900">{post.title}</h4>
                        <p className="mt-1 text-sm text-gray-600">{post.content}</p>
                        <div className="mt-3 flex items-center space-x-4">
                          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                            <HeartIcon className="h-4 w-4 mr-1" />
                            {post.likes}
                          </button>
                          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                            <ChatBubbleLeftRightIcon className="h-4 w-4 mr-1" />
                            {post.comments}
                          </button>
                          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                            <ShareIcon className="h-4 w-4 mr-1" />
                            Share
                          </button>
                          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                            <FlagIcon className="h-4 w-4 mr-1" />
                            Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Categories & Quick Actions */}
        <div className="space-y-6">
          {/* Categories */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${category.color}`}>
                      {category.name}
                    </span>
                    <span className="text-sm text-gray-500">{category.count}</span>
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
                  Create Discussion Topic
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-gray-200">
                  Start Poll
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-gray-200">
                  Announce Event
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-gray-200">
                  Share Resource
                </button>
              </div>
            </div>
          </div>

          {/* Top Contributors */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {[
                  { name: 'Sarah Johnson', posts: 24, avatar: 'SJ' },
                  { name: 'Mike Chen', posts: 18, avatar: 'MC' },
                  { name: 'Emily Rodriguez', posts: 15, avatar: 'ER' },
                  { name: 'Alex Kim', posts: 12, avatar: 'AK' },
                ].map((contributor) => (
                  <div key={contributor.name} className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                      <span className="text-white text-xs font-medium">{contributor.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{contributor.name}</p>
                      <p className="text-sm text-gray-500">{contributor.posts} posts</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
