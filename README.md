# PhysioCare AI - Physiotherapy Clinic Management System

PhysioCare AI is an academic web application prototype for physiotherapy clinics. It combines patient management, appointment scheduling, AI-assisted SOAP documentation, structured progress tracking, exercise planning, and billing into one browser-based system.

## Problem Statement

Small physiotherapy clinics often manage patient records, appointment schedules, clinical notes, exercise plans, and billing using separate paper files or disconnected tools. During treatment, therapists may observe pain reactions, restricted movement, weakness, compensation, hesitation, or balance issues, but these details can be missed because the therapist is focused on treating the patient.

This project aims to convert important clinical observations into structured records that can be reviewed across multiple sessions.

## Objective

To build a practical physiotherapy clinic workflow system that helps therapists manage daily clinic operations, generate structured physiotherapy documentation, and track patient progress over time using measurable session data.

## Key Features

- Clinic dashboard with patient, appointment, note, billing, and progress metrics
- Patient registration and medical history records
- Appointment scheduling for assessments and follow-up visits
- AI-assisted SOAP note generator
- Structured progress tracking for ROM, pain score, pain angle, strength, and movement quality
- Condition-based home exercise library
- Pain-score-based exercise intensity guidance
- Billing records with paid and pending status
- Report download as a text file
- Browser local storage for saving prototype data
- Responsive layout for laptop and mobile screens

## Tech Stack

- HTML
- CSS
- JavaScript
- Browser Local Storage

## How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Double-click `index.html`.
4. Click `Load Sample Data` to view a demo workflow.
5. Add patients, schedule appointments, save progress records, generate SOAP notes, and create bills.

No installation is required for this version.

## Project Structure

```text
physio-documentation-system/
|-- index.html
|-- style.css
|-- script.js
|-- README.md
|-- README.txt
|-- screenshots/
`-- docs/
```

## Modules

### Dashboard

Shows total patients, appointments, generated notes, pending bills, progress records, today's queue, and recent documentation.

### Patient Records

Stores patient ID, name, age, phone number, condition, and medical history.

### Appointments

Schedules patient visits such as initial assessment, follow-up, exercise review, and discharge review.

### AI Documentation

Generates a structured physiotherapy SOAP note using patient details, pain score, chief complaint, objective findings, functional limitations, treatment given, and treatment goals.

### Progress Tracking

Stores structured session observations such as joint or region, active ROM, passive ROM, pain score, pain-start angle, strength grade, movement quality, and therapist observations. This allows the system to compare changes across sessions, such as reduced pain or improved range of motion.

### Exercise Library

Provides basic condition-based exercises for low back pain, neck pain, knee pain, and shoulder pain.

### Billing

Creates simple billing records with service name, amount, and payment status.

## Future AI Roadmap

- Speech-to-text for patient history capture
- Speaker identification for doctor and patient conversation
- AI extraction of chief complaint, pain location, triggers, duration, and functional limitations
- Computer vision-based range-of-motion estimation using pose detection
- Pain reaction and movement-quality detection from video
- Longitudinal progress charts across multiple sessions
- PDF report export
- Secure login and database integration
- WhatsApp/SMS appointment reminder integration

## Safety and Privacy Note

This is an academic prototype and not a replacement for professional clinical judgment. Use only dummy or anonymized patient data. Generated reports must be reviewed by a qualified physiotherapist before clinical use.

## Resume Summary

Built a browser-based physiotherapy clinic management system with patient records, appointment scheduling, structured progress tracking, AI-assisted SOAP note generation, exercise planning, and billing workflows using HTML, CSS, JavaScript, and browser local storage.
