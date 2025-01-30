import React, { useEffect, useState } from "react";
import { Container, Card, Table, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

const Setting = () => {
  const [accommodations, setAccommodations] = useState([]); // Store accommodation data
  const [showModal, setShowModal] = useState(false); // Show/hide modal
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    availability: "",
    address: "",
    contactNo: "",
  });

  const [editing, setEditing] = useState(false); // Check if updating

  // Fetch accommodations from API
  useEffect(() => {
    fetchAccommodations();
  }, []);

  const fetchAccommodations = async () => {
    try {
      const response = await axios.get("/api/accommodations"); // Fetch from backend
      setAccommodations(response.data);
    } catch (error) {
      console.error("Error fetching accommodations:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Insert or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await axios.put(`/api/accommodations/${formData.id}`, formData);
      } else {
        await axios.post("/api/accommodations", formData);
      }
      setShowModal(false);
      fetchAccommodations(); // Refresh data
      setFormData({ id: "", name: "", availability: "", address: "", contactNo: "" });
      setEditing(false);
    } catch (error) {
      console.error("Error saving accommodation:", error);
    }
  };

  // Handle edit accommodation
  const handleEdit = (accommodation) => {
    setFormData(accommodation);
    setEditing(true);
    setShowModal(true);
  };

  // Handle delete accommodation
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/accommodations/${id}`);
      fetchAccommodations();
    } catch (error) {
      console.error("Error deleting accommodation:", error);
    }
  };

  return (
    <Container className="py-4">
      <h1 className="fs-2 fw-bold mb-4">Settings - Accommodation</h1>
      <Card className="shadow-sm">
        <Card.Body>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Add Accommodation
          </Button>
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>AID</th>
                <th>Name</th>
                <th>Availability</th>
                <th>Address</th>
                <th>Contact No</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {accommodations.map((acc) => (
                <tr key={acc.id}>
                  <td>{acc.id}</td>
                  <td>{acc.name}</td>
                  <td>{acc.availability}</td>
                  <td>{acc.address}</td>
                  <td>{acc.contactNo}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => handleEdit(acc)}>
                      Edit
                    </Button>{" "}
                    <Button variant="danger" size="sm" onClick={() => handleDelete(acc.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal for Adding/Editing */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? "Edit Accommodation" : "Add Accommodation"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Availability</Form.Label>
              <Form.Control type="text" name="availability" value={formData.availability} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact No</Form.Label>
              <Form.Control type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editing ? "Update" : "Add"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Setting;
