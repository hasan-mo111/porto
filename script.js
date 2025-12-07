// سنة الحقوق تلقائياً
document.getElementById('year').textContent = new Date().getFullYear();

// نسخ البريد بزر واحد
document.getElementById('copy-email')?.addEventListener('click', () => {
  const email = document.querySelector('a[href^="mailto:"]')?.textContent?.trim();
  if (!email) return;
  navigator.clipboard.writeText(email).then(() => {
    alert('تم نسخ البريد: ' + email);
  });
});
