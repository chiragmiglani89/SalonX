import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import api from '../services/api';
import './ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await api.get('/user');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put('/user', user);
      if (response.status === 200) {
        setEditMode(false);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <Container>
      <h2>Profile Page</h2>
      {editMode ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="secondary" onClick={() => setEditMode(false)} className="ml-2">
            Cancel
          </Button>
        </Form>
      ) : (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <Button variant="primary" onClick={() => setEditMode(true)}>
            Edit Profile
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ProfilePage;
