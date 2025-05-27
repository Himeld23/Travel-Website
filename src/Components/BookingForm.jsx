import { useState } from 'react';
import  '../Components/BookingForm.css' // Optional for styling

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    people: '',
    children: '',
    travelDate: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here (e.g., API call or email)
    console.log('Booking form submitted:', formData);
    alert('Booking submitted successfully!');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Your Package</h2>

      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>

      <label>
        Number of People:
        <input type="number" name="people" min="1" value={formData.people} onChange={handleChange} required />
      </label>

      <label>
        Number of Children:
        <input type="number" name="children" min="0" value={formData.children} onChange={handleChange} />
      </label>

      <label>
        Date of Travel:
        <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} required />
      </label>

      <label>
        Additional Requirements:
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any special request or note" />
      </label>

      <button type="submit">Submit Booking</button>
    </form>
  );
};

export default BookingForm;
