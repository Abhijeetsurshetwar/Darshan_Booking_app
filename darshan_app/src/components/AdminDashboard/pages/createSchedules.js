import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button, Modal, Table } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';

const CreateSchedule = () => {
  const [scheduleType, setScheduleType] = useState('Pooja');
  const [scheduleDates, setScheduleDates] = useState([{ date: '', slots: [{ time: '', vacancy: 0 }] }]);
  const [existingSchedules, setExistingSchedules] = useState([]);
  const [selectedScheduleId, setSelectedScheduleId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const userInfo = useSelector((state) => state.user.userinfo);
  const token = userInfo?.token;

  useEffect(() => {
    fetchExistingSchedules();
  }, []);

  const fetchExistingSchedules = async () => {
    try {
      const response = await axios.get('http://localhost:8060/schedules/getschedules', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setExistingSchedules(response.data);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  };

  const convertTo24HourFormat = (time12h) => {
    const [hours, minutes] = time12h.split(":");
    const ampm = time12h.slice(-2).toLowerCase();

    let hours24 = parseInt(hours, 10);

    if (ampm === "pm" && hours24 < 12) {
      hours24 += 12; // Convert PM to 24-hour time
    } else if (ampm === "am" && hours24 === 12) {
      hours24 = 0; // Convert 12 AM to 00
    }

    return `${hours24.toString().padStart(2, "0")}:${minutes}`;
  };

  const handleChange = (index, field, value) => {
    const newScheduleDates = [...scheduleDates];

    if (field === 'date') {
      newScheduleDates[index].date = value;
    } else {
      const slotIndex = field.slotIndex;
      if (field.name === 'time') {
        // Convert the time to 24-hour format
        newScheduleDates[index].slots[slotIndex][field.name] = convertTo24HourFormat(value);
      } else {
        newScheduleDates[index].slots[slotIndex][field.name] = value;
      }
    }

    setScheduleDates(newScheduleDates);
  };

  const addDate = () => {
    setScheduleDates([...scheduleDates, { date: '', slots: [{ time: '', vacancy: 0 }] }]);
  };

  const addSlot = (index) => {
    const newScheduleDates = [...scheduleDates];
    newScheduleDates[index].slots.push({ time: '', vacancy: 0 });
    setScheduleDates(newScheduleDates);
  };

  const removeSlot = (dateIndex, slotIndex) => {
    const newScheduleDates = [...scheduleDates];
    newScheduleDates[dateIndex].slots.splice(slotIndex, 1);
    setScheduleDates(newScheduleDates);
  };

  const handleScheduleSelection = (e) => {
    const scheduleId = e.target.value;
    setSelectedScheduleId(scheduleId);

    if (scheduleId === "") {
      // If creating a new schedule
      setScheduleDates([{ date: '', slots: [{ time: '', vacancy: 0 }] }]);
    } else {
      // If selecting an existing schedule, load its details
      const selectedSchedule = existingSchedules.find(schedule => schedule.id === scheduleId);
      if (selectedSchedule) {
        setScheduleType(selectedSchedule.name); // set schedule type (Pooja/Darshan)
        setScheduleDates(selectedSchedule.scheduleDates || []);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    for (const schedule of scheduleDates) {
      if (!schedule.date) {
        setError('All date fields must be filled out.');
        return;
      }
      for (const slot of schedule.slots) {
        if (!slot.time || slot.vacancy < 0) {
          setError('All slot fields must be filled out correctly.');
          return;
        }
      }
    }

    const requestBody = scheduleDates;

    try {
      if (selectedScheduleId) {
        // Updating existing schedule
        await axios.post(
          `http://localhost:8060/schedules/addScheduleDates?scheduleId=${selectedScheduleId}`,
          requestBody,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          }
        );
      } else {
        // Creating a new schedule
        await axios.post(
          `http://localhost:8060/schedules/createScheduleWithDates`,
          [{ name: scheduleType, scheduleDates: requestBody }],
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          }
        );
      }
      setShowModal(false);
      setScheduleDates([{ date: '', slots: [{ time: '', vacancy: 0 }] }]);
      fetchExistingSchedules();
    } catch (error) {
      console.error('Error adding schedule dates:', error);
      setError('Failed to add schedule dates. Please try again.');
    }
  };

  return (
    <Container fluid className="py-4" style={{ backgroundColor: '#FAF3E0', minHeight: '100vh', minWidth:'170vh' }}>
      <h1 className="fs-2 fw-bold mb-4 text-center" style={{ color: '#8B0000' }}>Create Schedule</h1>
      <Card className="shadow-lg mx-auto" style={{ maxWidth: '800px', backgroundColor: '#FFF5C3' }}>
        <Card.Body>
          <Button variant="primary" onClick={() => setShowModal(true)}>Add Schedule</Button>
          <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
            <Modal.Header closeButton style={{ backgroundColor: '#FFD700' }}>
              <Modal.Title style={{ color: '#8B0000' }}>Add Schedule</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Schedule</Form.Label>
                  <Form.Select
                    value={selectedScheduleId || ""}
                    onChange={handleScheduleSelection}
                  >
                    <option value="">Create New Schedule</option>
                    {existingSchedules.map((schedule) => (
                      <option key={schedule.id} value={schedule.id}>
                        {schedule.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

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
                            name="time"
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
                            onChange={(e) => handleChange(index, { name: 'vacancy', slotIndex }, parseInt(e.target.value) || 0)}
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
          <h3 className="mt-4">Existing Schedules</h3>
          <Table bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Type</th>
                <th>Date</th>
                <th>Time</th>
                <th>Vacancy</th>
              </tr>
            </thead>
            <tbody>
              {existingSchedules.map((schedule) => (
                schedule.scheduleDates.map((dateSchedule) => (
                  dateSchedule.slots.map((slot, slotIndex) => (
                    <tr key={`${dateSchedule.date}-${slotIndex}`}>
                      <td>{schedule.name}</td>
                      <td>{dateSchedule.date}</td>
                      <td>{slot.time}</td>
                      <td>{slot.vacancy}</td>
                    </tr>
                  ))
                ))
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateSchedule;