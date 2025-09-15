import { 
  PlusIcon, 
  PlayIcon, 
  ClockIcon, 
  UserGroupIcon,
  StarIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const courses = [
  {
    id: 1,
    title: 'Advanced React Patterns',
    description: 'Master advanced React concepts including hooks, context, and performance optimization.',
    instructor: 'Shawn Jooste',
    thumbnail: '/api/placeholder/300/200',
    price: 149,
    students: 234,
    rating: 4.8,
    lessons: 24,
    duration: '8h 30m',
    status: 'Published',
    category: 'Development',
    createdAt: '2024-01-10',
  },
  {
    id: 2,
    title: 'Personal Branding Mastery',
    description: 'Build a powerful personal brand that opens doors and creates opportunities.',
    instructor: 'Shawn Jooste',
    thumbnail: '/api/placeholder/300/200',
    price: 99,
    students: 156,
    rating: 4.6,
    lessons: 18,
    duration: '6h 15m',
    status: 'Published',
    category: 'Business',
    createdAt: '2024-01-05',
  },
  {
    id: 3,
    title: 'Product Management Fundamentals',
    description: 'Learn the essential skills and frameworks for successful product management.',
    instructor: 'Shawn Jooste',
    thumbnail: '/api/placeholder/300/200',
    price: 199,
    students: 89,
    rating: 4.9,
    lessons: 32,
    duration: '12h 45m',
    status: 'Draft',
    category: 'Business',
    createdAt: '2024-01-12',
  },
]

const courseStats = [
  {
    name: 'Total Courses',
    value: '8',
    change: '+2',
    changeType: 'increase',
  },
  {
    name: 'Total Students',
    value: '1,247',
    change: '+89',
    changeType: 'increase',
  },
  {
    name: 'Completion Rate',
    value: '78%',
    change: '+5%',
    changeType: 'increase',
  },
  {
    name: 'Monthly Revenue',
    value: '$8,450',
    change: '+23%',
    changeType: 'increase',
  },
]

const categories = [
  'All Courses',
  'Development',
  'Business',
  'Design',
  'Marketing',
  'Personal Growth',
]

export default function Courses() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
          <p className="mt-1 text-sm text-gray-500">
            Create and manage your online courses
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Course
        </button>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        {courseStats.map((stat) => (
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

      {/* Category Filter */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  category === 'All Courses'
                    ? 'bg-indigo-100 text-indigo-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <div className="flex items-center justify-center h-48 bg-gray-100">
                <PlayIcon className="h-12 w-12 text-gray-400" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  course.status === 'Published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {course.status}
                </span>
                <span className="text-xs text-gray-500">{course.category}</span>
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={`h-4 w-4 ${
                        rating < Math.floor(course.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">{course.rating}</span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <UserGroupIcon className="h-4 w-4 mr-1" />
                  {course.students} students
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <PlayIcon className="h-4 w-4 mr-1" />
                  {course.lessons} lessons
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CurrencyDollarIcon className="h-5 w-5 text-green-600" />
                  <span className="text-lg font-bold text-gray-900">${course.price}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-600 hover:text-gray-900">
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
          </div>
        ))}
      </div>

      {/* Course Creation Templates */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Course Templates</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Video Course</span>
              </div>
              <span className="block text-sm font-medium text-gray-900">Video-Based Course</span>
              <span className="block text-xs text-gray-500">Perfect for step-by-step tutorials</span>
            </div>
            <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Text Course</span>
              </div>
              <span className="block text-sm font-medium text-gray-900">Text-Based Course</span>
              <span className="block text-xs text-gray-500">Great for detailed explanations</span>
            </div>
            <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Mixed Media</span>
              </div>
              <span className="block text-sm font-medium text-gray-900">Mixed Media Course</span>
              <span className="block text-xs text-gray-500">Combine videos, text, and resources</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
