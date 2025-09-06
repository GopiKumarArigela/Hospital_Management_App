package com.gk.patient.service;


import java.util.List;

import com.gk.patient.entity.Patient;

public interface PatientService {
    Patient createPatient(Patient patient);
    Patient getPatientById(Long id);
    List<Patient> getAllPatients();
}
