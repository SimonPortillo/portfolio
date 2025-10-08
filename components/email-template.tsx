import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({ name, email, subject, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
        Ny kontakthenvendelse
      </h1>
      <div style={{ marginTop: '20px' }}>
        <p><strong>Emne:</strong> {subject}</p>
        <p><strong>Fra:</strong> {name}</p>
        <p><strong>E-post:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      </div>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <p><strong>Melding:</strong></p>
        <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
      </div>
      <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #ddd', fontSize: '12px', color: '#666' }}>
        <p>Denne meldingen ble sendt fra kontaktskjemaet på nettstedet.</p>
      </div>
    </div>
  );
}