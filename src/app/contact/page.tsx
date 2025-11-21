"use client";

import { useState } from "react";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would typically send the data to an API
    };

    return (
        <div className="p-4 pb-24 space-y-6">
            <h1 className="text-2xl font-bold text-primary">Contact Us</h1>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-3">
                <a href="https://wa.me/46764305834" className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-900/30">
                    <div className="bg-green-100 dark:bg-green-800 p-2 rounded-full text-green-600 dark:text-green-300 mr-3">
                        <MessageCircle size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground">WhatsApp</p>
                        <p className="font-medium text-green-700 dark:text-green-400">+46 76 430 58 34</p>
                    </div>
                </a>

                <a href="mailto:onlinequran50@gmail.com" className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30">
                    <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full text-blue-600 dark:text-blue-300 mr-3">
                        <Mail size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="font-medium text-blue-700 dark:text-blue-400">onlinequran50@gmail.com</p>
                    </div>
                </a>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-lg font-semibold mb-4">Send a Message</h2>

                {submitted ? (
                    <div className="text-center py-8 text-green-600">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Send size={24} />
                        </div>
                        <p className="font-medium">Message Sent!</p>
                        <p className="text-sm text-muted-foreground mt-1">We will get back to you soon.</p>
                        <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-primary underline">Send another</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input type="text" required className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input type="email" required className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea required rows={4} className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center">
                            <Send size={18} className="mr-2" /> Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
