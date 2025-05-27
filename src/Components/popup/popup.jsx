import '../popup/popup.css'
import { useState } from "react";
export const Popup = ({ closePopup }) => {
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
    console.log('Booking form submitted:', formData);
    alert('Booking submitted successfully!');
    closePopup(); // ✅ Close after submit if desired
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Book Your Package</h2>
          <button className="popup-close-btn" onClick={closePopup}>×</button>
        </div>
        <form className="popup-booking-form" onSubmit={handleSubmit}>
          <div className="popup-form-grid">
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
            <label className="popup-full-width">
              Additional Requirements:
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any special request or note" />
            </label>
          </div>
          <button type="submit" className="popup-submit-btn">Submit Booking</button>
        </form>
      </div>
    </div>
  );
};
