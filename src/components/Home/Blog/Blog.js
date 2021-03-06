import React from 'react';
import wilson from '../../../images/Ellipse 3.png'
import BlogPost from '../BlogPost/BlogPost';
const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
]
const Blog = () => {
    return (
        <section className="blog my-5 py-5">
            <div className="container">
            <div className="section-header text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR BLOG</h5>
                <h2>From Our Blog News</h2>
            </div>
                <div className="card-deck mt-5 row ">
                    {
                        blogData.map(blogData => <BlogPost blogData={blogData} key={blogData.title}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;