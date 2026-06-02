# PhysioCare AI - Physiotherapy Clinic Management System

PhysioCare AI is an academic web application prototype for physiotherapy clinics. It combines patient management, appointment scheduling, AI-assisted SOAP documentation, exercise planning, and billing into one browser-based system.

## Problem Statement

Small physiotherapy clinics often manage patient records, appointment schedules, clinical notes, exercise plans, and billing using separate paper files or disconnected tools. This can make documentation slow, reduce visibility into patient progress, and increase administrative work for therapists.

## Objective

To build a practical physiotherapy clinic workflow system that helps therapists manage daily clinic operations and generate structured physiotherapy documentation from assessment data.

## Key Features

- Clinic dashboard with patient, appointment, note, and billing metrics
- Patient registration and medical history records
- Appointment scheduling for assessments and follow-up visits
- AI-assisted SOAP note generator
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
5. Add patients, schedule appointments, generate SOAP notes, and create bills.

No installation is required for this version.

## Project Structure

```text
physio-documentation-system/
├── index.html
├── style.css
├── script.js
├── README.md
├── README.txt
├── screenshots/
└── docs/
```

## Modules

### Dashboard

Shows total patients, appointments, generated notes, pending bills, today's queue, and recent documentation.

### Patient Records

Stores patient ID, name, age, phone number, condition, and medical history.

### Appointments

Schedules patient visits such as initial assessment, follow-up, exercise review, and discharge review.

### AI Documentation

Generates a structured physiotherapy SOAP note using patient details, pain score, chief complaint, objective findings, functional limitations, treatment given, and treatment goals.

### Exercise Library

Provides basic condition-based exercises for low back pain, neck pain, knee pain, and shoulder pain.

### Billing

Creates simple billing records with service name, amount, and payment status.

## Safety and Privacy Note

This is an academic prototype and not a replacement for professional clinical judgment. Use only dummy or anonymized patient data. Generated reports must be reviewed by a qualified physiotherapist before clinical use.

## Future Enhancements

- Secure therapist login
- Database integration
- PDF export
- AI API integration for natural clinical note generation
- Patient progress charts
- WhatsApp/SMS reminder integration
- Exercise images and videos
- Role-based clinic staff access
- Search and filters for patients, appointments, and invoices

## Resume Summary

Built a browser-based physiotherapy clinic management system with patient records, appointment scheduling, AI-assisted SOAP note generation, exercise planning, and billing workflows using HTML, CSS, JavaScript, and browser local storage.
