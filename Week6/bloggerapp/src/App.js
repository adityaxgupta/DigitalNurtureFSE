import React from 'react';
import './App.css';

const courses = [
  { id: 1, cname: 'Angular', date: '4/5/2021' },
  { id: 2, cname: 'React', date: '6/3/20201' }
];

const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' },
];

function CourseDetails({ coursesData }) {
  return (
    <div className="column">
      <h2>Course Details</h2>
      {coursesData.map((course) => (
        <div key={course.id}>
          <h3>{course.cname}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
}

function BookDetails({ booksData }) {
  return (
    <div className="column middle-column">
      <h2>Book Details</h2>
      {booksData.map((book) => (
        <div key={book.id}>
          <h4>{book.bname}</h4>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

function BlogDetails({ blogsData }) {
  return (
    <div className="column">
      <h2>Blog Details</h2>
      {blogsData.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <CourseDetails coursesData={courses} />
      <BookDetails booksData={books} />
      <BlogDetails blogsData={blogs} />
    </div>
  );
}

export default App;