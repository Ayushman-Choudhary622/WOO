// Form Submission with Formspree
document.getElementById('registration-form')?.addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/mvgkqapp', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      alert('Registration Successful! You will receive an email confirmation.');
      form.reset();
    } else {
      alert('Registration failed. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting the form:', error);
    alert('Error submitting the form. Please try again.');
  }
});
