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
    contactno: "",
  });

  // Fetch accommodations from API when component mounts
  useEffect(() => {
    fetchAccommodations();
  }, []);

  // Function to fetch accommodations
  const fetchAccommodations = async () => {
    try {
      const response = await axios.get("https://localhost:8065/Accomodation/getAccomodation");
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Data:", formData); // Debugging log

    const requestData = {
      ...formData,
    };

    fetch("https://localhost:8065/Accomodation/InsertAccomodation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Insertion successful!", data);
        setShowModal(false);
        fetchAccommodations(); // Refresh table
        setFormData({ name: "", availability: "", address: "", contactno: "" });
      })
      .catch((error) => {
        console.error("Error inserting accommodation:", error);
      });
  };

  const handleDelete = (aid) => {
    console.log("Deleting accommodation with AID:", aid); // Debugging log

    fetch(`https://localhost:8065/Accomodation/DeleteAccomodation/${aid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Deletion successful!");
        fetchAccommodations(); // Refresh table after deletion
      })
      .catch((error) => {
        console.error("Error deleting accommodation:", error);
        alert("Error deleting accommodation. Check console for details.");
      });
  };

  return (
    <Container fluid className="py-4" style={{
      backgroundColor: '#FAF3E0', // Holistic background color
      minHeight: '100vh',
      minWidth:'170vh',
      fontFamily: '"Poppins", sans-serif',
    }}>
      <h1 className="fs-2 fw-bold mb-4 text-center" style={{
        color: '#8B0000',
        textShadow: '2px 2px 8px rgba(251, 19, 19, 0.6)'
      }}>
        Settings - Accommodation
      </h1>
      <Card className="shadow-lg mx-auto" style={{
        maxWidth: '1200px', // Set a max width for the card
        backgroundColor: '#FFF5C3',
        border: '3px solid #FFD700',
        boxShadow: '0px 4px 15px rgba(218, 165, 32, 0.5)',
      }}>
        <Card.Body>
          <Button variant="primary" onClick={() => setShowModal(true)} style={{ backgroundColor: '#8B0000', border: 'none' }}>
            Add Accommodation
          </Button>
          <Table  bordered hover responsive className="mt-3" style={{
            backgroundColor: '#FFF8E1', // Set a background color for the table
            borderRadius: '8px',
            border: '2px solid #FFD700',
          }}>
            <thead style={{ backgroundColor: '#FFD700', color: '#8B0000' }}>
              <tr>
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
                  <tr key={acc.aid} style={{
                    backgroundColor: '#FAF0D9', // Light background for rows
                  }}>
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
                <tr>
                  <td colSpan="5" className="text-center">No accommodations found</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal for Adding */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg" // Increase the size of the modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: '#FFD700' }}>
          <Modal.Title id="contained-modal-title-vcenter" style={{ color: '#8B0000' }}>
            Add Accommodation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#FFF5C3' }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                style={{ borderRadius: '6px', border: '1px solid #ccc' }} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Availability</Form.Label>
              <Form.Control 
                type="text" 
                name="availability" 
                value={formData.availability} 
                onChange={handleChange} 
                required 
                style={{ borderRadius: '6px', border: '1px solid #ccc' }} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control 
                type="text" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                required 
                style={{ borderRadius: '6px', border: '1px solid #ccc' }} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact No</Form.Label>
              <Form.Control 
                type="text" 
                name="contactno" 
                value={formData.contactno} 
                onChange={handleChange} 
                required 
                style={{ borderRadius: '6px', border: '1px solid #ccc' }} 
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ backgroundColor: '#8B0000', border: 'none' }}>
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Setting;