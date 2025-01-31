import React, { useEffect, useState } from "react";
import { Container, Card, Table, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

const Setting = () => {
  const [accommodations, setAccommodations] = useState([]); // Store accommodations
  const [showModal, setShowModal] = useState(false); // Show/hide modal
  const [formData, setFormData] = useState({
    name: "",
    availability: "",
    address: "",
    contactNo: "",
  });

  // Fetch accommondations from API when component mounts
  useEffect(() => {
    fetchAccommodations();
  }, []);

  // Function to fetch accommodations
  const fetchAccommodations = async () => {
    try {
      const response = await axios.get("http://localhost:8062/admin/getaccc");
      console.log("Fetched Data:", response.data); // Debugging log
      setAccommodations(response.data);
    } catch (error) {
      console.error("Error fetching accommodations:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Insert)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting Data:", formData); // Debugging log
      await axios.post("http://localhost:8062/admin/insert-accomodation", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Insertion successful!");
      setShowModal(false);
      fetchAccommodations(); // Refresh table
      setFormData({ name: "", availability: "", address: "", contactno: "" });
    } catch (error) {
      console.error("Error inserting accommodation:", error);
    }
  };

  // Handle delete accommodation
  const handleDelete = async (aid) => {
    try {
      console.log("Deleting accommodation with AID:", aid); // Debugging log
  
      await axios.delete("http://localhost:8062/admin/delete-accomodation", {
        data: { aid }, // Sending aid in request body
        headers: { "Content-Type": "application/json" },
      });
  
      console.log("Deletion successful!");
      fetchAccommodations(); // Refresh table after deletion
    } catch (error) {
      console.error("Error deleting accommodation:", error);
      alert("Error deleting accommodation. Check console for details.");
    }
  };

  return (
    <Container className="py-4">
      <h1 className="fs-2 fw-bold mb-4">Settings - Accommodation</h1>
      <Card className="shadow-sm">
        <Card.Body>
          <Button variant="primary" onClick={() => setShowModal(true)}>Add Accommodation</Button>
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
              {accommodations.length > 0 ? (
                accommodations.map((acc) => (
                  <tr key={acc.aid}>
                    <td>{acc.aid}</td>
                    <td>{acc.name}</td>
                    <td>{acc.availability}</td>
                    <td>{acc.address}</td>
                    <td>{acc.contactno}</td>
                    <td>
                        <Button variant="danger" size="sm" onClick={() => handleDelete(acc.aid)}>Delete</Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="6" className="text-center">No accommodations found</td></tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal for Adding */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Accommodation</Modal.Title>
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
            <Button variant="primary" type="submit">Add</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Setting;
