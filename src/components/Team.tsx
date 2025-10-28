import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Medical Officer',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Over 20 years of experience in medical equipment consulting and healthcare solutions.',
  },
  {
    name: 'Michael Chen',
    role: 'Director of Operations',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Expert in supply chain management with a focus on medical equipment distribution.',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Head of Quality Assurance',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Ensures all products meet FDA standards and international quality certifications.',
  },
  {
    name: 'James Thompson',
    role: 'Customer Relations Manager',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Dedicated to providing exceptional service and building lasting client relationships.',
  },
  {
    name: 'Dr. Lisa Anderson',
    role: 'Technical Specialist',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Specializes in advanced diagnostic equipment and training healthcare professionals.',
  },
  {
    name: 'David Kumar',
    role: 'Logistics Coordinator',
    image: 'https://images.pexels.com/photos/5648362/pexels-photo-5648362.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Manages nationwide distribution ensuring timely delivery of critical supplies.',
  },
];

export default function Team() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Meet the Experts Behind MedEquip
          </h2>
          <p className="text-xl text-gray-600">
            Our dedicated team of healthcare professionals and industry experts are committed to providing you with the best medical solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals passionate about improving healthcare. Explore career opportunities with MedEquip.
          </p>
          <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}
