// src/pages/Category.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Category = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const addCategory = () => {
    axios.post('http://localhost:3000/categories', { name: newCategory })
      .then(response => {
        setCategories([...categories, response.data]);
        alert('Category added successfully');
        navigate('/');
      })
      .catch(error => console.error('Error adding category:', error));
  };

  return (
    
    <div className="flex-col">
      <div className="flex flex-col">
        <label className="label" htmlFor="newCategory">New Category</label>
        <input 
          value={newCategory} 
          onChange={(e) => setNewCategory(e.target.value)} 
          placeholder="New Category" 
          className="input"
        />
      </div>
      <button onClick={addCategory} className="btn btn-primary">Add Category</button>

      <div className="space-y-2 mt-4">
        {categories.map(category => (
          <div key={category.id} className="flex justify-between items-center border p-2 rounded">
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
