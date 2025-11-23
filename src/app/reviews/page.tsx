"use client";

import { useState, useEffect } from "react";
import { Star, Send, User, MessageSquare } from "lucide-react";

interface Review {
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
}

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const res = await fetch('/api/reviews');
            if (res.ok) {
                const data = await res.json();
                setReviews(data);
            }
        } catch (error) {
            console.error('Failed to fetch reviews', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setMessage('');

        try {
            const res = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setMessage('Review submitted successfully! 🎉');
                setFormData({ name: '', rating: 5, comment: '' });
                fetchReviews(); // Refresh list
            } else {
                setMessage('Failed to submit review. Please try again.');
            }
        } catch {
            setMessage('An error occurred.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
            <div className="bg-primary p-6 pb-12 rounded-b-[2.5rem] shadow-lg">
                <div className="flex justify-between items-center text-white mb-2">
                    <h1 className="text-2xl font-bold">Student Reviews</h1>
                    <Star className="opacity-80" fill="currentColor" />
                </div>
                <p className="text-emerald-100 text-sm">See what others say about us ✨</p>
            </div>

            <div className="px-6 -mt-8 space-y-6">
                {/* Review Form */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center">
                        <MessageSquare size={18} className="mr-2 text-primary" />
                        Write a Review
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Your Name</label>
                            <div className="relative">
                                <User size={16} className="absolute left-3 top-3 text-slate-400" />
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Rating</label>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, rating: star })}
                                        className={`text-2xl transition-transform hover:scale-110 focus:outline-none ${formData.rating >= star ? 'text-amber-400' : 'text-slate-200 dark:text-slate-700'}`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Comment</label>
                            <textarea
                                required
                                value={formData.comment}
                                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all h-24 resize-none"
                                placeholder="Share your experience..."
                            />
                        </div>

                        {message && (
                            <div className={`p-3 rounded-xl text-xs font-medium text-center ${message.includes('success') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                {message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-gradient-to-r from-primary to-emerald-600 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitting ? 'Submitting...' : <><Send size={16} className="mr-2" /> Submit Review</>}
                        </button>
                    </form>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 px-2">Recent Reviews</h3>

                    {loading ? (
                        <div className="text-center py-8">
                            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                            <p className="text-muted-foreground text-sm">Loading reviews...</p>
                        </div>
                    ) : reviews.length === 0 ? (
                        <div className="text-center py-8 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                            <p className="text-muted-foreground text-sm">No reviews yet. Be the first!</p>
                        </div>
                    ) : (
                        reviews.map((review) => (
                            <div key={review.id} className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-xs">
                                            {review.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">{review.name}</h3>
                                            <p className="text-[10px] text-slate-400">{new Date(review.date).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex text-amber-400 text-xs">
                                        {'★'.repeat(review.rating)}
                                        <span className="text-slate-200 dark:text-slate-700">{'★'.repeat(5 - review.rating)}</span>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2 pl-10 border-l-2 border-slate-100 dark:border-slate-800">
                                    "{review.comment}"
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
