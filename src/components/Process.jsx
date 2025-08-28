import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, MessageSquare, DollarSign, Download } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "1. DM Me",
    description: "Reach out with your project details and any references you have.",
    color: "text-pixel-green"
  },
  {
    icon: PenTool,
    title: "2. I Create",
    description: "I'll get to work creating your pixel art masterpiece.",
    color: "text-pixel-yellow"
  },
  {
    icon: DollarSign,
    title: "3. Payment",
    description: "Once you're happy, I'll send you a payment link.",
    color: "text-pixel-pink"
  },
  {
    icon: Download,
    title: "4. Delivery",
    description: "You'll receive the final high-quality files for your project.",
    color: "text-pixel-blue"
  }
];

export function Process() {
  return (
    <section className="py-20 px-4 bg-pixel-bg">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 uppercase text-white" style={{ textShadow: '3px 3px 0 #000' }}>How It Works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 pixel-box flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-4">
                  <Icon className={`w-16 h-16 ${step.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}