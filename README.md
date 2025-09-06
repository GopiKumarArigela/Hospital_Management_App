# Hospital_Management_App


🏥 Hospital Management System

The Hospital Management System (HMS) is a microservices-based full-stack application designed to streamline hospital operations. It manages patients, doctors, appointments, billing, and medical records in a secure, scalable, and efficient way.

This project demonstrates enterprise-level best practices and is built as part of a Capstone Project.

📌 Problem Statement

Hospitals require an integrated digital system to manage patients, doctors, appointments, billing, and records. The system should:

Reduce manual paperwork

Improve patient/doctor efficiency

Ensure security of medical records

Handle large-scale concurrent operations

🧑‍💻 Workflows
👩‍🦰 Patient Workflow

Patient registers → Authentication with JWT

Books appointment with doctor

Receives notifications (SMS/Email)

Pays bill online/offline

Accesses medical history & prescriptions

👨‍⚕️ Doctor Workflow

Doctor login → Dashboard

View assigned appointments

Update patient diagnosis & prescriptions

Track patient medical history

🛠️ Admin Workflow

Manage doctors, departments, and schedules

Manage patients, room allocation

Generate bills & insurance claims

Audit logs & reporting

⚙️ Technical Details
🔹 Frontend

Angular + Bootstrap → Responsive UI for patients, doctors, and admins

🔹 Backend (Spring Boot Microservices)

Patient Service

Doctor Service

Appointment Service

Billing Service

Notification Service

Audit/Logs Service

🔹 Databases

MySQL → Structured (patients, doctors, appointments, billing)

MongoDB → Unstructured (medical records, prescriptions, logs)

🔹 Messaging

Apache Kafka → Async notifications, appointment updates, billing events

🔹 Security

JWT / OAuth2 → Authentication & role-based access (Doctor, Patient, Admin)

✅ Best Practices Implemented

Pagination for patient records & billing history

AOP Logging for sensitive actions (medical updates, payments)

Event-driven design with Kafka

Centralized configuration with Config Server (Git-based)

Auditing (HIPAA/GDPR readiness)

Separation of Concerns (Microservices + API Gateway + Discovery Server)

🖼️ Reference UI

📌 Figma Wireframes / Mockups

🏗️ Outcome of the Project

By the end, the HMS provides:

🔐 Secure login for doctors, patients, and admins

📅 Online appointment booking

💳 Billing & payment system (with pagination & history)

📁 Secure medical record management

🔔 Notifications for patients & doctors

📊 Admin dashboards with reports & audit logs

🛠️ Tech Stack

Spring Boot → Backend microservices

Angular → Frontend

MySQL → Transactional DB

MongoDB → Medical records/logs

Apache Kafka → Event-driven communication

Bootstrap → Responsive UI

JWT → Authentication & authorization

📌 Future Enhancements

Payment gateway integration (Stripe/PayPal)

Docker & Kubernetes deployment

Cloud deployment on AWS/GCP/Azure
