import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa';
import './BlogDetail.css';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`/api/blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="loading-page">
                <div className="spinner"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="error-page">
                <h2>Blog post not found</h2>
                <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="blog-detail-page">
            <div className="blog-detail-header" style={{ backgroundImage: `url(${blog.image})` }}>
                <div className="blog-header-overlay"></div>
                <div className="container blog-header-content">
                    <Link to="/blog" className="back-link">
                        <FaArrowLeft /> Back to Blog
                    </Link>
                    <span className="blog-category-badge">{blog.category.replace('-', ' ')}</span>
                    <h1>{blog.title}</h1>
                    <div className="blog-header-meta">
                        <span><FaUser /> {blog.author}</span>
                        <span><FaCalendar /> {formatDate(blog.createdAt)}</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <article className="blog-detail-content">
                        <div className="blog-text">
                            {blog.content.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        {blog.tags && blog.tags.length > 0 && (
                            <div className="blog-tags">
                                <h4>Tags:</h4>
                                <div className="tags-list">
                                    {blog.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>
                </div>
            </section>
        </div>
    );
};

export default BlogDetail;
