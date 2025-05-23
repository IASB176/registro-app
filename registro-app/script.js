const SUPABASE_URL = 'https://<tu-proyecto>.supabase.co';
const SUPABASE_KEY = '<tu-api-key>';

const form = document.getElementById('registro-form');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;

  const res = await fetch(`${SUPABASE_URL}/rest/v1/usuarios`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({ nombre, correo })
  });

  if (res.ok) {
    mensaje.textContent = 'Registro exitoso';
    form.reset();
  } else {
    mensaje.textContent = 'Error al registrar';
  }
});
