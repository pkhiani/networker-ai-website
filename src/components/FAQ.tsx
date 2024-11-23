import React from 'react';

const faqs = [
  {
    question: 'How does it personalize my messages?',
    answer: 'Our AI analyzes the recipient\'s profile, your connection context, and your goals to craft unique, relevant messages that resonate.'
  },
  {
    question: 'Is this secure?',
    answer: 'Yes! We don\'t store any of your LinkedIn data or messages. Everything is processed securely and in real-time.'
  },
  {
    question: 'Does it work for recruiters?',
    answer: 'Absolutely! Recruiters can use Networker.ai to craft personalized outreach messages that get higher response rates.'
  },
  {
    question: 'How many messages can I generate?',
    answer: 'The free version includes 25 messages per month. Premium plans offer unlimited message generation.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}