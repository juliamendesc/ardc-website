import React, { useState } from "react";
import { Form, Stack } from "react-bootstrap";
import Button from "components/Button";

function MentorshipForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mentorshipType, setMentorshipType] = useState(1);
  const [frontendChecked, setFrontendChecked] = useState(false);
  const [backendChecked, setBackendChecked] = useState(false);
  const [projectMgmtChecked, setProjectMgmtChecked] = useState(false);
  const [uxuiChecked, setUXUIChecked] = useState(false);
  const [message, setMessage] = useState('');

  const sendForm = (evt) => {
    evt.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "name": name,
      "email": email,
      "mentorship_type": mentorshipType,
      "front_end": frontendChecked ? 1 : 0,
      "back_end": backendChecked ? 1 : 0,
      "project_mgmt": projectMgmtChecked ? 1 : 0,
      "ux_ui": uxuiChecked ? 1 : 0,
      "message": message,
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://apex.oracle.com/pls/apex/ardc/forms/mentorship", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <Form>
      <Stack gap={3}>
        <Form.Group className="mb-3" controlId="nameInputField">
          <Form.Control type="text" name="nameInputField" placeholder="Nome *" value={name} onChange={(e) => setName(e.target.value)} size="lg" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="emailInputField">
          <Form.Control type="email" name="emailInputField" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} size="lg" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="mentorshipTypeField">
          <Stack gap={3}>
            <div>Que tipo de mentorias procuras? *</div>
            <Form.Check type="radio" id="mentorshipTypeIndividual" checked={mentorshipType === 1} value={1} label="Individual" onChange={(e) => setMentorshipType(e.target.checked ? 1 : 2)} />
            <Form.Check type="radio" id="mentorshipTypeGroup" checked={mentorshipType === 2} value={2} label="Em grupo" onChange={(e) => setMentorshipType(e.target.checked ? 2 : 1)} />
          </Stack>
        </Form.Group>
        <Form.Group className="mb-3" controlId="mentorshipAreas">
          <Stack gap={3}>
            <div>Em que área(s) procuras mentoria? *</div>
            <Form.Check type="checkbox" id="mentorshipAreaFrontend" checked={frontendChecked} label="Frontend Development" onChange={(e) => setFrontendChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="mentorshipAreaBackend" checked={backendChecked} label="Backend Development" onChange={(e) => setBackendChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="mentorshipAreaUXUI" checked={uxuiChecked} label="UX / UI Design" onChange={(e) => setUXUIChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="mentorshipAreaPM" checked={projectMgmtChecked} label="Project Management" onChange={(e) => setProjectMgmtChecked(e.target.checked ? true : false)} />
          </Stack>
        </Form.Group>
        <Form.Group className="mb-3" controlId="subjectMessageField">
          <Form.Control type="text" as="textarea" rows="3" placeholder="Mensagem / Comentário" value={message} onChange={(e) => setMessage(e.target.value)} size="lg" />
        </Form.Group>
      </Stack>

      <div className="d-flex justify-content-between">
        <p className="mandatory-hint">* Preenchimento obrigatório</p>
        <Button btnClass="button-primary" btnType="submit" disabled={!name || !email || !message} onClick={sendForm}>
          Submeter
        </Button>
      </div>
    </Form>
  );
}

export default MentorshipForm;
