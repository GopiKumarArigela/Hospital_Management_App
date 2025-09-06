package com.gk.medicalRecords.service;


import java.util.List;

import com.gk.medicalRecords.entities.MedicalRecord;

public interface MedicalRecordService {
    MedicalRecord createRecord(MedicalRecord record);
    List<MedicalRecord> getRecordsByPatientId(Long patientId);
    List<MedicalRecord> getAllRecords();
}
