package com.gk.doctor.service;


import java.util.List;

import com.gk.doctor.entity.Doctor;

public interface DoctorService {

    Doctor createDoctor(Doctor doctor);

    Doctor getDoctorById(Long id);

    List<Doctor> getAllDoctors();
}
