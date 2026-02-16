import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('/api/blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="blog-page">
            <div className="page-hero">
                <div className="container">
                    <h1>Our Blog</h1>
                    <p>Latest updates, tips, and success stories</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {loading ? (
                        <div className="spinner-container">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <div className="blog-grid">
                            {blogs.map(blog => (
                                <article key={blog._id} className="blog-card card">
                                    <div className="blog-image">
                                        <img src={blog.image} alt={blog.title} />
                                        <span className="blog-category">{blog.category.replace('-', ' ')}</span>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span><FaUser /> {blog.author}</span>
                                            <span><FaCalendar /> {formatDate(blog.createdAt)}</span>
                                        </div>
                                        <h3>
                                            <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                                        </h3>
                                        <p className="blog-excerpt">{blog.excerpt}</p>
                                        <Link to={`/blog/${blog._id}`} className="read-more">
                                            Read More <FaArrowRight />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blog;
