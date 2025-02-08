import React from 'react';
import { Home, Phone, Mail, MessageCircle, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useState } from 'react';

const rooms = [
  {
    id: 1,
    name: 'Room No. 1',
    image: '/images/room1/index.jpg',
    description: 'Cozy single room with modern amenities and garden view',
    additionalPhotos: [
      '/images/room1/1.jpg',
      '/images/room1/2.jpg',
      '/images/room1/3.jpg',
      '/images/room1/4.jpg'
    ],
    fullDescription: 'hihihihi'
  },
  {
    id: 2,
    name: 'Premium Double Room',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80',
    description: 'Spacious double room with private balcony',
    additionalPhotos: [
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560184897-502a475f7a0d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80'
    ],
    fullDescription: 'The Premium Double Room is our most popular choice, offering generous space and premium amenities. This room features a comfortable double bed, a private balcony where you can enjoy your morning coffee or evening relaxation, and a dedicated study area. The room comes with built-in storage solutions, ensuring all your belongings have their place. Modern amenities include climate control, high-speed internet, and a smart TV for entertainment.'
  },
  {
    id: 3,
    name: 'Family Suite',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
    description: 'Large suite perfect for families, includes kitchenette',
    additionalPhotos: [
      'https://images.unsplash.com/photo-1560185008-a8a5107cd51b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560184897-e6d0c6b40e37?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560184897-502a475f7a0d?auto=format&fit=crop&q=80'
    ],
    fullDescription: 'Our Family Suite is designed for ultimate comfort and convenience. This spacious suite features a well-equipped kitchenette, perfect for preparing light meals and snacks. The suite offers ample living space with a separate study area and comfortable seating arrangement. Modern amenities include a refrigerator, microwave, and coffee maker. The suite\'s layout and amenities make it ideal for longer stays or for those who prefer more independence.'
  }
];

const faqs = [
  {
    question: 'What is the application process like?',
    answer: '1. The first step is filling out our application form.\n2. You will be requested to provide pictures of your house.\n3. Upon review, you will need to get a Criminal Record Check (including a vulnerable sector check) for all people over the age of 18 residing in the household.\n4. Once approved, we will schedule an in-home meeting to view the room, living arrangements and to answer any further questions you may have.\n5. Wait for your first placement with a homestay student.'
  },
  {
    question: 'How much does it pay?',
    answer: 'Please contact AIEC for further information regarding compensation.'
  },
  {
    question: 'Are there any fees associated with becoming a host?',
    answer: 'There are no fees to apply to become a homestay host, but you will be required to pay for the Criminal Record and vulnerable sector check(s).'
  },
  {
    question: 'What are the hosting requirements?',
    answer: 'Students must be provided with their own bedroom containing a dresser, desk and chair. They must also have access to a shared bathroom (unless additional option of a separate bathroom is selected). Hosts are required to provide breakfast and a hot dinner.\n\nIf you are renting a property, we recommend that you check your rental agreement and secure your landlord\'s permission, if required.\n\nWe also recommend that you check that your home insurance policy covers accommodating short-term guests within your home.'
  },
  {
    question: 'What is the average length of a homestay student?',
    answer: 'Lengths of student visits vary but are typically in the range of 4-24 weeks. Pick ups typically take place on Saturdays.'
  },
  {
    question: 'What is the company\'s homestay history?',
    answer: 'AIEC have supported thousands of students spanning over 2 decades of experience in the Lower Mainland.'
  },
  {
    question: 'What are the tax implications of becoming a homestay host?',
    answer: 'Hosts are responsible for managing their own tax affairs. We are unable to provide tax advice.'
  }
];

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[70vh]">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
          alt="Homestay exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Cozy Haven Homestay</h1>
            <p className="text-xl">Your Home Away From Home</p>
          </div>
        </div>
      </header>

      {/* Rooms Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map(room => (
            <div 
              key={room.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedRoom(room)}
            >
              <img src={room.image} alt={room.name} className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-600">{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Room Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{selectedRoom.name}</h2>
                <button 
                  onClick={() => setSelectedRoom(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <img 
                      src={selectedRoom.image} 
                      alt={selectedRoom.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  {selectedRoom.additionalPhotos.map((photo, index) => (
                    <div key={index} className="h-40">
                      <img 
                        src={photo} 
                        alt={`${selectedRoom.name} view ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Room Details</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedRoom.fullDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Information */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Our Agent</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              alt="Agent"
              className="w-48 h-48 rounded-full object-cover"
            /> */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Nichole</h3>
              <p className="text-gray-600 mb-4">Senior Property Manager</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-indigo-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-indigo-600" />
                  <span>sarah@cozyhaven.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-indigo-600" />
                  <span>123 Peaceful Street, Serenity City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Cozy Haven Homestay. All rights reserved.</p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <MessageCircle className="w-5 h-5" />
            <span>24/7 Customer Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;