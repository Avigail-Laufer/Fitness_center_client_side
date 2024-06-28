import React from 'react';
import './GymRulesPage.css'; // קובץ CSS לעיצוב

const GymRulesPage = () => {
  return (
    <div className="gym-rules-page">
      <div className="header">
        <h1>Welcome to Our Gym</h1>
        <p>Please read and agree to our gym rules and policies before proceeding with registration.</p>
      </div>
      <div className="rules-container">
        <div className="rules-section">
          <h2>General Rules</h2>
          <p>1. Bring a valid ID during registration.</p>
          <p>2. You must be at least 18 years old to register.</p>
          <p>3. Follow all gym policies and procedures.</p>
          <p>4. Respect other gym members and staff.</p>
          <p>5. Clean the equipment after use.</p>
          <p>6. No outside shoes allowed in the gym area.</p>
          <p>7. Report any damaged equipment to staff immediately.</p>
          <p>8. Keep your personal belongings in designated lockers.</p>
          <p>9. No smoking, alcohol, or drugs allowed in the gym premises.</p>
          <p>10. Follow the dress code: proper gym attire and shoes are required.</p>
          <p>11. Use headphones when listening to music.</p>
          <p>12. Do not drop weights; use proper lifting techniques.</p>
          <p>13. Wipe down machines and equipment after use.</p>
          <p>14. Do not monopolize equipment; be considerate of others waiting to use it.</p>
          <p>15. No food allowed in the gym area; drinks must be in sealed containers.</p>
          <p>16. Follow the gym's opening and closing hours strictly.</p>
          <p>17. Children under 18 are not allowed unless accompanied by an adult.</p>
        </div>
        <div className="rules-section">
          <h2>Membership Policies</h2>
          <p>1. Membership fees are non-refundable and non-transferable.</p>
          <p>2. Monthly membership dues must be paid by the 5th of each month.</p>
          <p>3. A $20 fee will be charged for returned checks.</p>
          <p>4. Membership can be suspended or terminated for violating gym rules.</p>
          <p>5. Notify the gym of any changes to your personal or payment information.</p>
          <p>6. Members are responsible for their own health and safety.</p>
          <p>7. The gym is not liable for any personal injuries or lost items.</p>
          <p>8. Members must use their own access cards; sharing access cards is prohibited.</p>
          <p>9. Membership may be frozen for medical reasons with proper documentation.</p>
          <p>10. Guest passes must be obtained for non-members.</p>
        </div>
      </div>
      <div className="footer">
        <button onClick={() => window.location.href = '/ContactUs'}>I Agree and Proceed to Registration</button>
      </div>
    </div>
  );
};

export default GymRulesPage;