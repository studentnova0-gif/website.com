document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('admissionForm');
  const statusMessage = document.getElementById('statusMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const applicantName = document.getElementById('fullName').value;

    // Display submission confirmation
    statusMessage.className = 'status-msg success';
    statusMessage.textContent = `Thank you, ${applicantName}! Your admission form has been submitted successfully. We will contact you soon.`;

    // Reset form after submission
    form.reset();
  });
});