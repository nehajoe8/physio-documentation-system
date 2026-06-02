# AI-Powered Physiotherapy Documentation System

An academic web application prototype that helps physiotherapists generate structured documentation from patient assessment details.

## Problem Statement

Physiotherapists often spend significant time preparing assessment notes, treatment plans, and follow-up documentation. Manual documentation can be repetitive and may vary in structure between sessions. This project aims to reduce documentation effort by converting clinical assessment inputs into a structured physiotherapy report.

## Objective

To build a beginner-friendly AI-assisted physiotherapy documentation system that generates SOAP notes, treatment plans, and basic home exercise suggestions from assessment data.

## Features

- Patient and assessment data entry form
- SOAP note generation
- Condition-based exercise suggestions
- Pain-score-based exercise intensity guidance
- Session saving using browser local storage
- Report download as a text file
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
4. Fill the assessment form.
5. Click `Generate SOAP Note`.

No installation is required for this version.

## Project Structure

```text
physio-doc-system/
├── index.html
├── style.css
├── script.js
├── README.md
└── README.txt
```

## Sample Use Case

1. A physiotherapist enters patient ID, age, condition, pain score, chief complaint, objective findings, treatment given, and goals.
2. The system generates a structured SOAP note.
3. The system suggests a basic home exercise plan based on the selected condition.
4. The report can be saved or downloaded.

## Safety and Privacy Note

This is an academic prototype and not a replacement for professional clinical judgment. Use only dummy or anonymized patient data. Generated reports must be reviewed by a qualified physiotherapist before clinical use.

## Future Enhancements

- Add secure login for therapists
- Store records in a database
- Export reports as PDF
- Add AI API integration for more natural clinical documentation
- Add patient progress tracking with charts
- Add exercise images and videos
- Add role-based access for clinic staff

## Resume Summary

Built an AI-powered physiotherapy documentation web app that generates structured SOAP notes, treatment plans, and exercise recommendations from clinical assessment data using HTML, CSS, and JavaScript.
