import React, { useState } from 'react';
import { Container, Card, Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const CreateSchedule = () => {
  const [scheduleDates, setScheduleDates] = useState([{ date: '', slots: [{ time: '', vacancy: '' }] }]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  // Handle input change for date and slots
  const handleChange = (index, field, value) => {
    const newScheduleDates = [...scheduleDates];
    if (field === 'date') {
      newScheduleDates[index].date = value;
    } else {
      const slotIndex = field.slotIndex;
      newScheduleDates[index].slots[slotIndex][field.name] = value;
    }
    setScheduleDates(newScheduleDates);
  };

  // Add a new date entry
  const addDate = () => {
    setScheduleDates([...scheduleDates, { date: '', slots: [{ time: '', vacancy: '' }] }]);
  };

  // Add a new slot entry for a specific date
  const addSlot = (index) => {
    const newScheduleDates = [...scheduleDates];
    newScheduleDates[index].slots.push({ time: '', vacancy: '' });
    setScheduleDates(newScheduleDates);
  };

  const removeSlot = (dateIndex, slotIndex) => {
    const newScheduleDates = [...scheduleDates];
    newScheduleDates[dateIndex].slots.splice(slotIndex, 1);
    setScheduleDates(newScheduleDates);
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate the form
    for (const schedule of scheduleDates) {
      if (!schedule.date) {
        setError('All date fields must be filled out.');
        return;
      }
      for (const slot of schedule.slots) {
        if (!slot.time || !slot.vacancy) {
          setError('All slot fields must be filled out.');
          return;
        }
      }
    }

    // Prepare the request body
    const requestBody = { scheduleDates };

    try {
      const response = await axios.post('http://localhost:8062/schedules/createSchedules', requestBody);
      console.log('Response:', response.data);
      setShowModal(false);
      setScheduleDates([{ date: '', slots: [{ time: '', vacancy: '' }] }]); // Reset form
    } catch (error) {
      console.error('Error creating schedules:', error);
      setError('Failed to create schedules. Please try again.');
    }
  };

  return (
    <Container fluid className="py-4" style={{ backgroundColor: '#FAF3E0', minHeight: '100vh', fontFamily: '"Poppins", sans-serif' }}>
      <h1 className="fs-2 fw-bold mb-4 text-center" style={{ color: '#8B0000', textShadow: '2px 2px 8px rgba(251, 19, 19, 0.6)' }}>
        Create Schedule
      </h1>
      <Card className="shadow-lg mx-auto" style={{ maxWidth: '800px', backgroundColor: '#FFF5C3', border: '3px solid #FFD700' }}>
        <Card.Body>
          <Button variant="primary" onClick={() => setShowModal(true)} style={{ backgroundColor: '#8B0000', border: 'none' }}>
            Add Schedule
          </Button>

          <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
            <Modal.Header closeButton style={{ backgroundColor: '#FFD700' }}>
              <Modal.Title style={{ color: '#8B0000' }}>Add Schedule</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#FFF5C3' }}>
              <Form onSubmit={handleSubmit}>
                {scheduleDates.map((schedule, index) => (
                  <div key={index} className="mb-3">
                    <Form.Group>
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="date"
                        value={schedule.date}
                        onChange={(e) => handleChange(index, 'date', e.target.value)}
                        required
                      />
                    </Form.Group>
                    {schedule.slots.map((slot, slotIndex) => (
                      <div key={slotIndex} className="d-flex mb-2">
                        <Form.Group className="me-2" style={{ flex: 1 }}>
                          <Form.Label>Time</Form.Label>
                          <Form.Control
                            type="time"
                            name=" time"
                            value={slot.time}
                            onChange={(e) => handleChange(index, { name: 'time', slotIndex }, e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="me-2" style={{ flex: 1 }}>
                          <Form.Label>Vacancy</Form.Label>
                          <Form.Control
                            type="number"
                            name="vacancy"
                            value={slot.vacancy}
                            onChange={(e) => handleChange(index, { name: 'vacancy', slotIndex }, e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Button variant="danger" onClick={() => removeSlot(index, slotIndex)}>Remove Slot</Button>
                      </div>
                    ))}
                    <Button variant="secondary" onClick={() => addSlot(index)}>Add Slot</Button>
                  </div>
                ))}
                {error && <div className="text-danger">{error}</div>}
                <Button type="submit" variant="success">Submit</Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateSchedule;