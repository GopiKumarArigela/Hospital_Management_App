package com.gk.appointment.service;


import java.util.List;

import com.gk.appointment.entity.Appointment;

public interface AppointmentService {

    Appointment bookAppointment(Appointment appointment);

    List<Appointment> getAppointmentsByDoctorId(Long doctorId);

    List<Appointment> getAppointmentsByPatientId(Long patientId);

    List<Appointment> getAllAppointments();
}
