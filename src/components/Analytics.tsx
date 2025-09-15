import { 
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  EyeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const analyticsStats = [
  {
    name: 'Total Revenue',
    value: '$24,500',
    change: '+18.2%',
    changeType: 'increase',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Active Users',
    value: '1,247',
    change: '+12.5%',
    changeType: 'increase',
    icon: UserGroupIcon,
  },
  {
    name: 'Course Enrollments',
    value: '156',
    change: '+23.1%',
    changeType: 'increase',
    icon: AcademicCapIcon,
  },
  {
    name: 'Community Posts',
    value: '89',
    change: '+8.7%',
    changeType: 'increase',
    icon: ChatBubbleLeftRightIcon,
  },
]

const revenueData = [
  { month: 'Jan', revenue: 8500, courses: 45, consulting: 3200 },
  { month: 'Feb', revenue: 9200, courses: 52, consulting: 2800 },
  { month: 'Mar', revenue: 7800, courses: 38, consulting: 3500 },
  { month: 'Apr', revenue: 10500, courses: 61, consulting: 4200 },
  { month: 'May', revenue: 11800, courses: 67, consulting: 3800 },
  { month: 'Jun', revenue: 12400, courses: 71, consulting: 4100 },
]

const topContent = [
  {
    title: 'Advanced React Patterns Course',
    type: 'Course',
    views: 1247,
    revenue: 18500,
    conversion: 12.4,
  },
  {
    title: 'Weekly Tech Insights Newsletter',
    type: 'Newsletter',
    views: 2847,
    revenue: 0,
    conversion: 24.5,
  },
  {
    title: 'Personal Branding Workshop',
    type: 'Consulting',
    views: 89,
    revenue: 8900,
    conversion: 15.2,
  },
  {
    title: 'Building Better Products Course',
    type: 'Course',
    views: 892,
    revenue: 13200,
    conversion: 18.7,
  },
]

const audienceInsights = [
  {
    metric: 'Newsletter Open Rate',
    value: '24.5%',
    change: '+2.1%',
    changeType: 'increase',
  },
  {
    metric: 'Course Completion Rate',
    value: '78.3%',
    change: '+5.2%',
    changeType: 'increase',
  },
  {
    metric: 'Community Engagement',
    value: '12.4%',
    change: '+1.8%',
    changeType: 'increase',
  },
  {
    metric: 'Consulting Satisfaction',
    value: '4.8/5',
    change: '+0.2',
    changeType: 'increase',
  },
]

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-1 text-sm text-gray-500">
          Track your platform performance and user engagement
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {analyticsStats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.changeType === 'increase' ? (
                  <ArrowTrendingUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" />
                ) : (
                  <ArrowTrendingDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" />
                )}
                <span className="sr-only">{stat.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                {stat.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trends</h3>
            <div className="space-y-4">
              {revenueData.map((data) => (
                <div key={data.month} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-900 w-8">{data.month}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${(data.revenue / 13000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">${data.revenue.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Performing Content */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Top Performing Content</h3>
            <div className="space-y-4">
              {topContent.map((content, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{content.title}</p>
                    <p className="text-xs text-gray-500">{content.type}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <EyeIcon className="h-4 w-4 mr-1" />
                      {content.views}
                    </div>
                    {content.revenue > 0 && (
                      <div className="flex items-center">
                        <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                        ${content.revenue.toLocaleString()}
                      </div>
                    )}
                    <span className="font-medium">{content.conversion}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Audience Insights */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Audience Insights</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audienceInsights.map((insight) => (
              <div key={insight.metric} className="text-center">
                <p className="text-sm font-medium text-gray-500 mb-1">{insight.metric}</p>
                <p className="text-2xl font-bold text-gray-900 mb-1">{insight.value}</p>
                <p className={`text-sm font-medium ${
                  insight.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {insight.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Newsletter Analytics */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Newsletter Analytics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Total Subscribers</span>
                <span className="text-sm font-medium">2,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Avg. Open Rate</span>
                <span className="text-sm font-medium">24.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Avg. Click Rate</span>
                <span className="text-sm font-medium">8.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Unsubscribe Rate</span>
                <span className="text-sm font-medium">0.3%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Community Analytics */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Community Analytics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Total Members</span>
                <span className="text-sm font-medium">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Active This Week</span>
                <span className="text-sm font-medium">89</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Posts This Month</span>
                <span className="text-sm font-medium">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Engagement Rate</span>
                <span className="text-sm font-medium">12.4%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Course Sales</span>
                <span className="text-sm font-medium">$15,600</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Consulting</span>
                <span className="text-sm font-medium">$6,800</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Affiliate</span>
                <span className="text-sm font-medium">$1,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Other</span>
                <span className="text-sm font-medium">$900</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
