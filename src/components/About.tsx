import { Users, Target, TrendingUp, CheckCircle, Award, Shield, Heart, Globe, Clock, Package } from 'lucide-react';

const milestones = [
  { year: '1998', title: 'Company Founded', description: 'Started as a small medical supply distributor' },
  { year: '2005', title: 'ISO Certification', description: 'Achieved ISO 13485 certification for quality management' },
  { year: '2012', title: 'Regional Expansion', description: 'Expanded operations to serve 5 additional states' },
  { year: '2018', title: 'Digital Innovation', description: 'Launched online ordering platform and inventory management' },
  { year: '2023', title: 'Industry Leader', description: 'Recognized as top medical supplier with 5000+ clients' },
];

const achievements = [
  { number: '25+', label: 'Years of Excellence', icon: Award },
  { number: '5000+', label: 'Healthcare Facilities', icon: Heart },
  { number: '10,000+', label: 'Products Available', icon: Package },
  { number: '50+', label: 'Expert Team Members', icon: Users },
];

const coreValues = [
  {
    title: 'Quality First',
    description: 'Every product undergoes rigorous quality control and meets international healthcare standards.',
    icon: Shield,
  },
  {
    title: 'Customer Commitment',
    description: 'We build lasting relationships through exceptional service and support for our healthcare partners.',
    icon: Heart,
  },
  {
    title: 'Innovation',
    description: 'Continuously adopting cutting-edge medical technology to improve patient care outcomes.',
    icon: TrendingUp,
  },
  {
    title: 'Reliability',
    description: 'Consistent delivery, accurate inventory, and dependable support you can count on every time.',
    icon: Clock,
  },
  {
    title: 'Global Standards',
    description: 'Adhering to FDA regulations and international quality certifications across all our operations.',
    icon: Globe,
  },
  {
    title: 'Integrity',
    description: 'Transparent business practices and ethical conduct in every interaction with our stakeholders.',
    icon: CheckCircle,
  },
];

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Sahad Healthcare
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Your Trusted Healthcare Partner Since 1998
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            For over two decades, Sahad Healthcare has been dedicated to providing healthcare facilities with the highest quality medical equipment and consumables, enabling better patient care across the nation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 1998, Sahad Healthcare began with a simple mission: to make quality medical equipment accessible to healthcare facilities of all sizes. What started as a small distribution center has grown into one of the region's most trusted medical supply partners.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Today, we serve over 5,000 healthcare facilities including hospitals, clinics, laboratories, and emergency services. Our commitment to quality, reliability, and customer service has remained unchanged throughout our growth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand that in healthcare, every second counts. That's why we've built a robust supply chain, maintain extensive inventory, and offer 24/7 support to ensure your facility never faces equipment shortages during critical moments.
            </p>
            <div className="space-y-4">
              {[
                'ISO 13485 Certified Quality Management System',
                'FDA Approved and Regulated Products',
                '99.8% On-Time Delivery Record',
                '24/7 Emergency Support Hotline',
                'Competitive Pricing with Volume Discounts',
                'Comprehensive Product Training Programs',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-[#189F59] text-white py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                        <Icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-teal-600 mb-2">{item.number}</div>
                        <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-[#189F59] text-white py-16">
              <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold mb-4">Why Healthcare Facilities Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Extensive product catalog with over 10,000 medical items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Same-day shipping available for urgent orders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Dedicated account managers for personalized service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Flexible payment terms and bulk order discounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Technical support and product training included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-cyan-500 hidden lg:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-teal-600 font-bold text-xl mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg z-10 flex-shrink-0">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Core Values</h3>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            These principles guide every decision we make and every relationship we build in the healthcare industry.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#189F59] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide healthcare facilities with reliable, high-quality medical equipment that enhances patient care and clinical outcomes, delivered with excellence and integrity.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading supplier of medical equipment and consumables nationwide, recognized for excellence, innovation, and unwavering commitment to healthcare advancement.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-gray-600 leading-relaxed">
              Building lasting partnerships with healthcare providers by delivering exceptional service, competitive pricing, and comprehensive support that exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
