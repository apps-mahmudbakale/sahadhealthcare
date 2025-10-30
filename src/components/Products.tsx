import { Star } from 'lucide-react';
import MRI from '../assets/products/product14.jpeg';
import Xray from '../assets/products/product6.jpeg';
import StaticXray from '../assets/products/product5.jpeg';
import OperatingTable from '../assets/products/Electric-Operating-Table-Model-JHDS.webp';
import Mammography from '../assets/products/MAMO.jpg';
import CArmXray from '../assets/products/CARM.jpg';
import PortableUltrasound from '../assets/products/Pultra.jpg';
import DigitalUltrasound from '../assets/products/DUltra.jpg';
import Dialysis from '../assets/products/dialysis.jpg';
import ElectricBeds from '../assets/products/Electric bed.jpg';
import Resuscitair from '../assets/products/res machine.jpg';
import BabyCut from '../assets/products/baby cut.jpg';
import EDTA from '../assets/products/EDA contaiber.jpg';
import ScalpVein from '../assets/products/scalp vein.jpg';
import Needle from '../assets/products/Needle.jpg';
import TissueProcessor from '../assets/products/Tissue Processor.jpg';
import BabyIncubator from '../assets/products/babyicubator.jpg';
import AnaestheticMachine from '../assets/products/Anaestic.jpg';
import PatientExaminationBed from '../assets/products/Patient Examination Bed.jpg';
import UrineContainer from '../assets/products/Urine.jpg';






const products = [
  {
    name: 'MRI Machine',
    category: 'Diagnostic Equipment',
    price: '$89.99',
    rating: 2.8,
    image: MRI,
    inStock: true,
  },
  {
    name: 'Digital Mobile X‑ray Machine',
    category: 'Diagnostic Equipment',
    price: '$129.99',
    rating: 4.9,
    image: Xray,
    inStock: true,
  },
  {
    name: 'Static X‑ray Machine',
    category: 'Diagnostic Equipment',
    price: '$45.99',
    rating: 4.7,
    image: StaticXray,
    inStock: true,
  },
  {
    name: 'Fully Electric Operating Table',
    category: 'Patient Monitoring',
    price: '$34.99',
    rating: 4.6,
    image: OperatingTable,
    inStock: true,
  },
  {
    name: 'Mammography Machine',
    category: 'Medical Consumables',
    price: '$24.99',
    rating: 4.8,
    image: Mammography,
    inStock: true,
  },
  {
    name: 'Portable Ultrasound Machine',
    category: 'Medical Consumables',
    price: '$39.99',
    rating: 4.7,
    image: PortableUltrasound,
  },
  {
    name: 'C‑arm X‑ray Machine',
    category: 'Medical Consumables',
    price: '$18.99',
    rating: 4.9,
    image: CArmXray,
    inStock: true,
  },
  {
    name: 'Digital Ultrasound Machine',
    category: 'General Supplies',
    price: '$12.99',
    rating: 4.5,
    image: DigitalUltrasound,
    inStock: true,
  },
  {
    name: 'Dialysis chair',
    category: 'Laboratory Equipment',
    price: '$599.99',
    rating: 4.8,
    image: Dialysis,
    inStock: true,
  },
  {
    name: 'Electric Beds',
    category: 'Laboratory Equipment',
    price: '$449.99',
    rating: 4.7,
    image: ElectricBeds,
    inStock: true,
  },
  {
    name: 'Resuscitair Machine',
    category: 'Diagnostic Equipment',
    price: '$1,299.99',
    rating: 4.9,
    image: Resuscitair,
    inStock: true,
  },
  {
    name: 'Baby Cut',
    category: 'General Supplies',
    price: '$54.99',
    rating: 4.6,
    image: BabyCut,
    inStock: true,
  },
  {
    name: 'EDTA Container',
    category: 'Emergency Equipment',
    price: '$799.99',
    rating: 4.8,
    image: EDTA,
    inStock: true,
  },
  {
    name: 'Scalp Vein',
    category: 'Emergency Equipment',
    price: '$1,599.99',
    rating: 4.9,
    image: ScalpVein,
    inStock: true,
  },
  {
    name: 'Needle',
    category: 'Laboratory Equipment',
    price: '$29.99',
    rating: 4.7,
    image: Needle,
    inStock: true,
  },
  {
    name: 'Fully Automated Tissue Processor',
    category: 'General Supplies',
    price: '$249.99',
    rating: 4.6,
    image: TissueProcessor,
    inStock: true,
  },
  {
    name: 'Baby Incubator',
    category: 'Emergency Equipment',
    price: '$899.99',
    rating: 4.7,
    image: BabyIncubator,
    inStock: true,
  },
  {
    name: 'Anaesthetic Machine',
    category: 'General Supplies',
    price: '$22.99',
    rating: 4.8,
    image: AnaestheticMachine,
    inStock: true,
  },
   {
    name: 'Patient Examination Bed',
    category: 'General Supplies',
    price: '$22.99',
    rating: 4.8,
    image: PatientExaminationBed,
    inStock: true,
  },
   {
    name: 'Urine Container',
    category: 'General Supplies',
    price: '$22.99',
    rating: 4.8,
    image: UrineContainer,
    inStock: true,
  }
];

const whatsappNumber = '1234567890';

const handleWhatsAppOrder = (productName: string) => {
  const message = encodeURIComponent(
    `Hi! I would like to inquire about:\n\nProduct: ${productName}\n\nPlease provide more details.`
  );
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
};

export default function Products() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Premium Medical Equipment Catalog
          </h2>
          <p className="text-xl text-gray-600">
            Browse our extensive collection of quality medical equipment and consumables. Order instantly via WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.inStock && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    In Stock
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs text-teal-600 font-semibold uppercase tracking-wider mb-2">
                  {product.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>
                <div className="mt-auto">
                  <div className="h-6 mb-4"></div>
                  <button
                    onClick={() => handleWhatsAppOrder(product.name)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Need Bulk Orders or Custom Solutions?</h3>
          <p className="text-xl mb-8 text-teal-50">
            Contact us for volume discounts and customized medical equipment packages tailored to your facility's needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleWhatsAppOrder('Bulk Order Inquiry')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp for Bulk Orders
            </button>
            <button className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-lg font-semibold shadow-lg transition-all">
              Request Quote via Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
