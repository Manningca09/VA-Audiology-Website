import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component ({
  selector: 'appointments',
  styleUrls: ['./appointments.component.css'],
  templateUrl: './appointments.component.html'
})

export class AppointmentsComponent {

  constructor(private router: Router) {};
<<<<<<< HEAD
  
  //buttons for deciding the type of appointment
=======

  /**
   * This function will be triggered when the "Initial Assessment" button is clicked
   * then it will route to the ts-screener page to start testing.
   * It creates a console log to inform the developer which button was being pressed.
   */
>>>>>>> d49b3d5d291373f5bdb7628c765fe5c4d51f6ff6
  public onInitialAssessment() {
    console.log('Initial Assessment');
    this.router.navigateByUrl('/ts');
  }
  /**
   * This function will be triggered when the "Hearing Aids Fitting" button is clicked
   * then it will route to the ts-screener page to start testing.
   * It creates a console log to inform the developer which button was being pressed.
   */
  public onHearingAidsFitting() {
    console.log('Hearing Aids Fitting');
    this.router.navigateByUrl('/ts');
  }
  /**
   * This function will be triggered when the "Hearing Aids Evaluation" button is clicked
   * then it will route to the ts-screener page to start testing.
   * It creates a console log to inform the developer which button was being pressed.
   */
  public onHearingAidsEvaluation() {
    console.log('Hearing Aids Evaluation');
    this.router.navigateByUrl('/ts');
  }
}
