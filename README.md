# Hospital_Management_App

🏥 Hospital Management System
📌 Problem Statement
Hospitals require an integrated digital system to manage patients, doctors, appointments, billing, and records. The system should:
•	Reduce manual paperwork
•	Improve patient/doctor efficiency
•	Ensure security of medical records
•	Handle large-scale concurrent operations
________________________________________
📊 Workflows
Patient Workflow
1.	Patient registers → Authentication with JWT
2.	Books appointment with doctor
3.	Receives notifications (SMS/Email)
4.	Pays bill online/offline
5.	Accesses medical history & prescriptions
Doctor Workflow
1.	Doctor login → Dashboard
2.	View assigned appointments
3.	Update patient diagnosis, prescriptions
4.	Track patient medical history
Admin Workflow
1.	Manage doctors, departments, schedules
2.	Manage patients, room allocation
3.	Generate bills & insurance claims
4.	Audit logs, reporting
________________________________________
⚙️ Technical Details
Frontend
•	Angular + Bootstrap → Responsive UI for patients, doctors, admins
Backend (Spring Boot Microservices)
•	Patient Service
•	Doctor Service
•	Appointment Service
•	Billing Service
•	Notification Service
•	Audit/Logs Service
Databases
•	MySQL → Structured (patients, doctors, appointments, billing)
•	MongoDB → Unstructured (medical records, prescriptions, logs)
Messaging
•	Kafka → Async notifications, appointment updates, billing events
Security
•	JWT / OAuth2 → Authentication & role-based access (Doctor, Patient, Admin)
________________________________________
✅ Best Practices
•	Pagination for patient records, billing history
•	AOP Logging for sensitive actions (medical updates, payments)
•	Event-driven design with Kafka
•	Auditing (HIPAA/GDPR readiness)
________________________________________
🎯 Outcome of the Project
By the end, you will have a production-ready HMS with:
•	Secure login for doctors, patients, admins
•	Online appointment booking
•	Billing & payment system (with pagination & history)
•	Medical records stored securely
•	Notifications for patients & doctors
•	Admin dashboards with reports & audit logs
________________________________________
🛠️ Tech Stack
•	Spring Boot (backend microservices)
•	Angular (frontend)
•	MySQL (transactional DB)
•	MongoDB (medical records/logs)
•	Apache Kafka (event-driven communication)
•	Bootstrap (responsive UI)
•	JWT (authentication & authorization)
________________________________________
📂 Reference Documents
📌 Figma Wireframes / Mockups

