import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

const Model = ({ modelPath, rotationSpeed }) => {
  const group = useRef();
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    group.current.rotation.y += rotationSpeed;
  });

  return <primitive ref={group} object={scene} dispose={null} />;
};

const ProductShowcase3D = () => {
  const products = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "Fully customizable online store solution",
      model: "/models/ecommerce.glb",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management"]
    },
    {
      id: 2,
      name: "Mobile App",
      description: "Cross-platform application framework",
      model: "/models/mobileapp.glb",
      features: ["iOS & Android", "Offline Support", "Push Notifications"]
    },
    {
      id: 3,
      name: "Dashboard System",
      description: "Real-time analytics and reporting",
      model: "/models/dashboard.glb",
      features: ["Data Visualization", "Custom Reports", "API Integration"]
    }
  ];

  const [activeProduct, setActiveProduct] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <section className="bg-[#d5fff7] text-[#23194f] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          PRODUCT <span className="text-sky-700">SHOWCASE</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          Interactive 3D previews of our digital products
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-96 lg:h-[500px] bg-white rounded-xl shadow-xl overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Model 
                modelPath={products[activeProduct].model} 
                rotationSpeed={autoRotate ? 0.005 : 0}
              />
              <OrbitControls enableZoom={true} autoRotate={autoRotate} />
            </Canvas>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {products[activeProduct].name}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {products[activeProduct].description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {products[activeProduct].features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-sky-700 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setAutoRotate(!autoRotate)}
                className="bg-[#23194f] text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {autoRotate ? 'Pause Rotation' : 'Start Rotation'}
              </button>
            </div>

            <div className="flex space-x-4">
              {products.map((product, index) => (
                <motion.button
                  key={product.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveProduct(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    activeProduct === index 
                      ? 'border-sky-700 shadow-md' 
                      : 'border-gray-200'
                  }`}
                >
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <img 
                      src={`/thumbnails/${product.id}.jpg`} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase3D;