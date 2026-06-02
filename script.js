const STORAGE_KEY = "physioCareClinicData";

const exerciseData = [
  { condition: "Low Back Pain", name: "Pelvic Tilts", details: "Gentle lumbar mobility exercise for pain-free movement control." },
  { condition: "Low Back Pain", name: "Glute Bridges", details: "Strengthens glutes and posterior chain for spinal support." },
  { condition: "Low Back Pain", name: "Core Bracing", details: "Improves trunk stability during daily activities." },
  { condition: "Neck Pain", name: "Chin Tucks", details: "Trains deep neck flexors and supports posture correction." },
  { condition: "Neck Pain", name: "Scapular Retraction", details: "Improves upper back control and reduces neck loading." },
  { condition: "Knee Pain", name: "Quadriceps Sets", details: "Early strengthening exercise for knee stability." },
  { condition: "Knee Pain", name: "Straight Leg Raises", details: "Builds quadriceps strength with controlled loading." },
  { condition: "Shoulder Pain", name: "Pendulum Exercise", details: "Gentle shoulder mobility exercise for painful range." },
  { condition: "Shoulder Pain", name: "Wall Climbs", details: "Assisted shoulder range-of-motion progression." }
];

let data = loadData();
let latestGeneratedNote = "";

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    return JSON.parse(saved);
  }

  return {
    patients: [],
    appointments: [],
    notes: [],
    bills: []
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getValue(id) {
  return document.getElementById(id).value.trim();
}

function setValue(id, value) {
  document.getElementById(id).value = value;
}

function getSelectedPatient(selectId) {
  const patientId = getValue(selectId);
  return data.patients.find(patient => patient.id === patientId);
}

function renderAll() {
  renderDashboard();
  renderPatients();
  renderPatientOptions();
  renderAppointments();
  renderBills();
  renderExercises("All");
}

function renderDashboard() {
  document.getElementById("patientCount").textContent = data.patients.length;
  document.getElementById("appointmentCount").textContent = data.appointments.length;
  document.getElementById("noteCount").textContent = data.notes.length;
  document.getElementById("pendingBillCount").textContent = data.bills.filter(bill => bill.status === "Pending").length;

  const today = new Date().toISOString().slice(0, 10);
  const todayAppointments = data.appointments.filter(appointment => appointment.date === today);

  document.getElementById("todayAppointments").innerHTML = todayAppointments.length
    ? todayAppointments.map(appointment => cardTemplate(appointment.patientName, `${appointment.time} - ${appointment.type}`, "Scheduled today")).join("")
    : emptyTemplate("No appointments scheduled for today.");

  document.getElementById("recentNotes").innerHTML = data.notes.length
    ? data.notes.slice(0, 4).map(note => cardTemplate(note.patientName, note.date, "SOAP note generated")).join("")
    : emptyTemplate("No documentation generated yet.");
}

function renderPatients() {
  document.getElementById("patientList").innerHTML = data.patients.length
    ? data.patients.map(patient => cardTemplate(patient.name, `${patient.id} | Age ${patient.age || "NA"} | ${patient.phone || "No phone"}`, patient.diagnosis || "No diagnosis added")).join("")
    : emptyTemplate("No patients added yet.");
}

function renderPatientOptions() {
  const options = data.patients.length
    ? data.patients.map(patient => `<option value="${patient.id}">${patient.id} - ${patient.name}</option>`).join("")
    : `<option value="">Add a patient first</option>`;

  ["appointmentPatient", "docPatient", "billPatient"].forEach(id => {
    document.getElementById(id).innerHTML = options;
  });
}

function renderAppointments() {
  document.getElementById("appointmentList").innerHTML = data.appointments.length
    ? data.appointments.map(appointment => cardTemplate(appointment.patientName, `${appointment.date} at ${appointment.time}`, appointment.type)).join("")
    : emptyTemplate("No appointments scheduled yet.");
}

function renderBills() {
  document.getElementById("billList").innerHTML = data.bills.length
    ? data.bills.map(bill => `
      <article class="list-card">
        <strong>${bill.patientName}</strong>
        <p>${bill.service}</p>
        <p>Amount: Rs. ${bill.amount}</p>
        <span class="status ${bill.status === "Pending" ? "pending" : ""}">${bill.status}</span>
      </article>
    `).join("")
    : emptyTemplate("No billing records yet.");
}

function renderExercises(condition) {
  const filtered = condition === "All"
    ? exerciseData
    : exerciseData.filter(exercise => exercise.condition === condition);

  document.getElementById("exerciseLibrary").innerHTML = filtered.map(exercise => `
    <article class="exercise-card">
      <h4>${exercise.name}</h4>
      <p><strong>${exercise.condition}</strong></p>
      <p>${exercise.details}</p>
    </article>
  `).join("");
}

function cardTemplate(title, lineOne, lineTwo) {
  return `
    <article class="list-card">
      <strong>${title}</strong>
      <p>${lineOne}</p>
      <p>${lineTwo}</p>
    </article>
  `;
}

function emptyTemplate(message) {
  return `<article class="list-card"><p>${message}</p></article>`;
}

function addPatient() {
  const id = getValue("patientId") || `PT-${String(data.patients.length + 1).padStart(3, "0")}`;
  const name = getValue("patientName");

  if (!name) {
    alert("Please enter the patient name.");
    return;
  }

  data.patients.push({
    id,
    name,
    age: getValue("patientAge"),
    phone: getValue("patientPhone"),
    diagnosis: getValue("diagnosis"),
    history: getValue("medicalHistory")
  });

  ["patientId", "patientName", "patientAge", "patientPhone", "diagnosis", "medicalHistory"].forEach(id => setValue(id, ""));
  saveData();
  renderAll();
}

function addAppointment() {
  const patient = getSelectedPatient("appointmentPatient");

  if (!patient) {
    alert("Please add a patient first.");
    return;
  }

  data.appointments.push({
    patientId: patient.id,
    patientName: patient.name,
    date: getValue("appointmentDate"),
    time: getValue("appointmentTime"),
    type: getValue("appointmentType")
  });

  saveData();
  renderAll();
}

function addBill() {
  const patient = getSelectedPatient("billPatient");

  if (!patient) {
    alert("Please add a patient first.");
    return;
  }

  data.bills.push({
    patientId: patient.id,
    patientName: patient.name,
    service: getValue("serviceName") || "Physiotherapy session",
    amount: getValue("serviceAmount") || "0",
    status: getValue("paymentStatus")
  });

  setValue("serviceName", "");
  setValue("serviceAmount", "");
  saveData();
  renderAll();
}

function createExercisePlan(condition, painScore) {
  const pain = Number(painScore);
  const selectedExercises = exerciseData
    .filter(exercise => exercise.condition === condition)
    .map(exercise => exercise.name);

  const fallback = ["Gentle mobility", "Stretching", "Strengthening", "Functional activity practice"];
  const exercises = selectedExercises.length ? selectedExercises : fallback;
  const intensity = pain >= 7
    ? "Low intensity, pain-free range, avoid aggressive loading."
    : pain >= 4
      ? "Moderate intensity with symptom monitoring."
      : "Progressive strengthening and function-based training as tolerated.";

  return exercises.map((exercise, index) => `${index + 1}. ${exercise}`).join("\n") + `\n\nIntensity guidance: ${intensity}`;
}

function generateNote() {
  const patient = getSelectedPatient("docPatient");

  if (!patient) {
    alert("Please add and select a patient first.");
    return "";
  }

  const painScore = getValue("painScore") || "Not provided";
  const note = `PHYSIOTHERAPY SOAP NOTE
Date: ${new Date().toLocaleDateString()}

PATIENT DETAILS
Patient ID: ${patient.id}
Name: ${patient.name}
Age: ${patient.age || "Not provided"}
Condition / Diagnosis: ${patient.diagnosis || "Not provided"}
Medical History: ${patient.history || "Not provided"}

S - SUBJECTIVE
Chief complaint: ${getValue("chiefComplaint") || "Not provided"}
Symptom duration: ${getValue("symptomDuration") || "Not provided"}
Pain score: ${painScore}/10

O - OBJECTIVE
Clinical findings:
${getValue("objectiveFindings") || "Not provided"}

Functional limitations:
${getValue("functionalLimitations") || "Not provided"}

Treatment provided:
${getValue("treatmentGiven") || "Not provided"}

A - ASSESSMENT
The patient presents with findings consistent with ${patient.diagnosis || "the selected physiotherapy condition"}. Current symptoms affect function and daily activities. Physiotherapy intervention should focus on pain reduction, mobility restoration, strengthening, movement education, and gradual return to functional activity.

P - PLAN
Treatment goals:
${getValue("treatmentGoals") || "Not provided"}

Recommended plan:
1. Continue structured physiotherapy sessions.
2. Monitor pain, range of motion, strength, and functional tolerance.
3. Progress exercises based on symptoms and performance.
4. Provide patient education for posture, ergonomics, and safe activity modification.
5. Reassess and update plan during follow-up visits.

HOME EXERCISE PLAN
${createExercisePlan(patient.diagnosis, painScore)}

DISCLAIMER
This academic prototype provides documentation support only. Clinical decisions must be reviewed by a qualified physiotherapist.`;

  latestGeneratedNote = note;
  document.getElementById("noteOutput").textContent = note;
  return note;
}

function saveNote() {
  const patient = getSelectedPatient("docPatient");
  const note = latestGeneratedNote || generateNote();

  if (!patient || !note) {
    return;
  }

  data.notes.unshift({
    patientId: patient.id,
    patientName: patient.name,
    date: new Date().toLocaleString(),
    note
  });

  saveData();
  renderAll();
  alert("SOAP note saved.");
}

function downloadNote() {
  const note = latestGeneratedNote || document.getElementById("noteOutput").textContent;

  if (!note || note.includes("Select a patient")) {
    alert("Please generate a note first.");
    return;
  }

  const file = new Blob([note], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = "physiotherapy-soap-note.txt";
  link.click();
  URL.revokeObjectURL(link.href);
}

function loadSampleData() {
  data = {
    patients: [
      {
        id: "PT-001",
        name: "Sample Patient A",
        age: "42",
        phone: "0000000000",
        diagnosis: "Low Back Pain",
        history: "Desk work, recurrent pain with prolonged sitting."
      },
      {
        id: "PT-002",
        name: "Sample Patient B",
        age: "28",
        phone: "0000000000",
        diagnosis: "Knee Pain",
        history: "Pain during stairs and squatting."
      }
    ],
    appointments: [
      {
        patientId: "PT-001",
        patientName: "Sample Patient A",
        date: new Date().toISOString().slice(0, 10),
        time: "10:30",
        type: "Follow-up"
      }
    ],
    notes: [],
    bills: [
      {
        patientId: "PT-001",
        patientName: "Sample Patient A",
        service: "Physiotherapy session",
        amount: "500",
        status: "Pending"
      }
    ]
  };

  saveData();
  renderAll();
}

document.querySelectorAll(".nav-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-button").forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(button.dataset.view).classList.add("active");
    document.getElementById("pageTitle").textContent = button.textContent;
  });
});

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(item => item.classList.remove("active"));
    chip.classList.add("active");
    renderExercises(chip.dataset.condition);
  });
});

document.getElementById("addPatientButton").addEventListener("click", addPatient);
document.getElementById("addAppointmentButton").addEventListener("click", addAppointment);
document.getElementById("addBillButton").addEventListener("click", addBill);
document.getElementById("generateNoteButton").addEventListener("click", generateNote);
document.getElementById("saveNoteButton").addEventListener("click", saveNote);
document.getElementById("downloadNoteButton").addEventListener("click", downloadNote);
document.getElementById("sampleDataButton").addEventListener("click", loadSampleData);

renderAll();
