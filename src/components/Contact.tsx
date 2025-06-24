import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
        type: 'UAS Operator',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            alert('Message sent successfully!');
            setFormData({
                name: '',
                organization: '',
                email: '',
                type: 'UAS Operator',
                message: ''
            });
        } else {
            alert('Failed to send. Try again.');
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-200">
            <div className="mt-16 bg-gray-200 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Let's <span className="text-green-600">Connect</span>
                    </h2>
                    <p className="text-gray-600 text-center mb-8">
                        Ready to transform agriculture with precision technology? Let's discuss how we can work together.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    placeholder="Company/Institution"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Type</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    required
                                >
                                    <option>UAS Operator</option>
                                    <option>Agribusiness</option>
                                    <option>Research Institution</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Tell us about your organization and partnership interests..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
                        >
                            Start Partnership Discussion
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;