import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const addCategory = () => {
    axios.post('http://localhost:3000/categories', { name: newCategory }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => setCategories([...categories, response.data]))
      .catch(error => console.error('Error adding category:', error));
  };

  const updateCategory = (id, newName) => {
    axios.put(`http://localhost:3000/categories/${id}`, { name: newName }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(() => setCategories(categories.map(cat => (cat.id === id ? { ...cat, name: newName } : cat))))
      .catch(error => console.error('Error updating category:', error));
  };

  const deleteCategory = (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      axios.delete(`http://localhost:3000/categories/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(() => setCategories(categories.filter(cat => cat.id !== id)))
        .catch(error => console.error('Error deleting category:', error));
    }
  };

  return (
    <div>
      <input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="New Category" />
      <button onClick={addCategory}>Add Category</button>

      {categories.map(category => (
        <div key={category.id}>
          <input 
            defaultValue={category.name} 
            onBlur={(e) => updateCategory(category.id, e.target.value)} 
          />
          <button onClick={() => deleteCategory(category.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Category;
