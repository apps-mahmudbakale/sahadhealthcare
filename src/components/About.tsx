import { Users, Target, TrendingUp, CheckCircle, Award, Shield, Heart, Globe, Clock, Package, Activity, Stethoscope, Syringe, Microscope, Bed, HeartPulse } from 'lucide-react';

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

const specialties = [
  { 
    title: 'Radiological Equipment',
    icon: Activity,
    description: 'State-of-the-art imaging and diagnostic equipment including X-ray, MRI, and ultrasound systems.'
  },
  { 
    title: 'Theater Equipment',
    icon: Stethoscope,
    description: 'Complete range of surgical and operating room equipment for all medical procedures.'
  },
  { 
    title: 'Laboratory Instruments',
    icon: Microscope,
    description: 'Precision lab equipment and analyzers for accurate diagnostic testing and research.'
  },
  { 
    title: 'Hospital Beds',
    icon: Bed,
    description: 'Wide selection of hospital beds and patient care systems for all healthcare settings.'
  },
  { 
    title: 'Medical Consumables',
    icon: Syringe,
    description: 'Comprehensive range of disposable medical supplies and consumables.'
  },
  { 
    title: 'Patient Care',
    icon: HeartPulse,
    description: 'Equipment and supplies designed for patient comfort and effective treatment.'
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
            Your Trusted Healthcare Partner
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            As a leading provider of medical equipment and supplies, Sahad Healthcare is committed to delivering exceptional quality products and services to healthcare facilities across the region. Our comprehensive range of medical solutions is designed to meet the evolving needs of modern healthcare providers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Sahad Healthcare, we specialize in providing comprehensive medical equipment solutions tailored to meet the diverse needs of healthcare facilities. Our extensive product portfolio includes:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="font-medium text-gray-800">{specialty.title}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our team of experienced professionals works closely with healthcare providers to understand their unique requirements and deliver customized solutions that enhance patient care and operational efficiency.
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
