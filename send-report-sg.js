const sgMail = require('@sendgrid/mail');

// 1. Configuración de la API Key
// Se toma de la variable de entorno para mayor seguridad en QA
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// 2. Estructura del Mensaje
const msg = {
  // DESTINATARIO: Cambia esto por el correo que quieras
  to: 'teveventaspasto@gmail.com',
  
  // REMITENTE: El correo que verificamos en SendGrid
  from: 'facebranddigital@gmail.com', 
  
  subject: '🚀 QA Automation Report: Tiend-App ✅',
  
  // Diseño HTML Profesional
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #d1d5db; border-radius: 12px; overflow: hidden;">
      <div style="background-color: #0070f3; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 22px;">Cypress Execution Result</h1>
      </div>
      
      <div style="padding: 25px; background-color: #ffffff;">
        <p style="color: #374151; font-size: 16px;">Hola,</p>
        <p style="color: #374151;">El proceso de automatización ha finalizado con éxito en el servidor <strong>brXeon</strong>.</p>
        
        <div style="background-color: #f3f4f6; border-radius: 8px; padding: 15px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Proyecto:</strong> Tiend-App (Vercel)</p>
          <p style="margin: 5px 0;"><strong>Estado:</strong> <span style="color: #059669; font-weight: bold;">SUCCESS ✅</span></p>
          <p style="margin: 5px 0;"><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <p style="font-size: 13px; color: #6b7280;">Este es un reporte automático generado por el robot de QA.</p>
      </div>
      
      <div style="background-color: #f9fafb; color: #9ca3af; padding: 15px; text-align: center; font-size: 11px; border-top: 1px solid #e5e7eb;">
        &copy; 2026 Ever | Facebranddigital QA Engineering
      </div>
    </div>
  `,
};

// 3. Ejecución del envío
(async () => {
  try {
    console.log('⏳ Enviando reporte a través de SendGrid...');
    await sgMail.send(msg);
    console.log('🚀 ¡Correo enviado exitosamente!');
    console.log('📬 Destinatario:', msg.to);
  } catch (error) {
    console.error('❌ Error al enviar:');
    if (error.response) {
      console.error(JSON.stringify(error.response.body, null, 2));
    } else {
      console.error(error.message);
    }
    process.exit(1);
  }
})();
