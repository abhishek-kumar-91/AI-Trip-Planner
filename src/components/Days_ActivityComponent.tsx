
const itinerary = [
  {
    day: 'Day 1',
    title: 'Arrival in Kathmandu',
    details: [
      'Arrive in Kathmandu, the capital city of Nepal.',
      'Check into your accommodation and rest after your journey.'
    ]
  },
  {
    day: 'Day 2',
    title: 'Kathmandu Sightseeing',
    details: []
  },
  {
    day: 'Day 3',
    title: 'Bhaktapur and Nagarkot',
    details: []
  }
];

export default function Days_ActivityComponent() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto font-sans">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">DAYS & ACTIVITY</h2>
      {itinerary.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center space-x-3 mb-1">
            <span className="bg-yellow-200 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full">{item.day}</span>
            <span className="text-md font-semibold text-gray-800">{item.title}</span>
          </div>
          {item.details.length > 0 && (
            <ul className="list-disc list-inside text-gray-600 ml-8 text-sm">
              {item.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
