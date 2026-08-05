// Maneja el envío del formulario de contacto de Escoseg.
// El formulario está configurado para enviarse a Formspree (https://formspree.io).
// Para activarlo: crea una cuenta gratuita en Formspree, crea un formulario y
// reemplaza "TU_ID_DE_FORMSPREE" en el atributo action del <form> por tu endpoint real,
// por ejemplo: https://formspree.io/f/abcdwxyz
//
// Alternativas ya incluidas en la página sin configuración adicional:
// - Botón "Escríbenos por WhatsApp" (enlace wa.me)
// - Botón "Enviar correo" (enlace mailto:)

(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var fieldsBox = document.getElementById('form-fields');
  var successBox = document.getElementById('success-box');

  form.addEventListener('submit', function (event) {
    var action = form.getAttribute('action') || '';
    var isFormspreeConfigured = action.indexOf('formspree.io') !== -1 && action.indexOf('TU_ID_DE_FORMSPREE') === -1;

    // Si Formspree todavía no está configurado, evitamos el envío real (que fallaría)
    // y solo mostramos el mensaje de confirmación a modo de vista previa.
    if (!isFormspreeConfigured) {
      event.preventDefault();
      console.warn('Escoseg: configura el endpoint de Formspree en el atributo action del formulario para activar el envío real.');
      showSuccess();
      return;
    }

    // Con Formspree configurado, enviamos por fetch para mostrar el mensaje
    // de éxito sin recargar la página.
    event.preventDefault();
    var data = new FormData(form);

    fetch(action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        if (response.ok) {
          showSuccess();
        } else {
          alert('No se pudo enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.');
        }
      })
      .catch(function () {
        alert('No se pudo enviar tu solicitud. Verifica tu conexión o escríbenos por WhatsApp.');
      });
  });

  function showSuccess() {
    if (fieldsBox) fieldsBox.style.display = 'none';
    if (successBox) successBox.classList.add('show');
  }
})();
