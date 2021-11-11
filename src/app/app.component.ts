import {Component} from '@angular/core';
import {person} from "./types";

const PERSONS: person[] = [
  {firstName: 'Holly', lastName: 'Wood', title: 'Mr', age: 70},
  {firstName: 'Random', lastName: 'User', title:'X', age: 55},
  new person('Martina', 'Musterfrau', 'Mrs', 29)
];

@Component({
  selector: 'app-root',
  template: `
    <h1 class="center">Welcome to the testinggrounds!</h1>
    <h3 class="center">Feel free to experiment</h3>
    <label>How many randomly generated persons do you want to create?
      <input [(ngModel)]="inputNumberOfPersonsGenerated" (keydown.arrowUp)="incrementInputNumberOfPersonsGenerated()"
             (keydown.arrowDown)="decrementInputNumberOfPersonsGenerated()" appMandatory="39">
    </label>
    <div [class.hidden]="inputNumberOfPersonsGenerated>0">The selected number has to be greater than 0!</div>
    <button (click)="checkInCaseFetchData()">FETCH!</button>
    <br>
    <br>
    <p-tabView>
      <p-tabPanel *ngFor="let user of users; let i = index" [header]="(i+1) + '. Person: '">
        {{user}}
      </p-tabPanel>
    </p-tabView>
    <br>
    <br>
    <div>
        <ul>
          <li *ngFor="let givenUser of givenUsers">
            {{givenUser | person: true :true :false}}</li>
        </ul>
    </div>
    <br>
    <br>
    <!--
    <button (click)="fetchDataForPipeExercise()">FETCH FOR PIPERESULTS!</button>
    <br>
    <br>
    <p-tabView>
      <p-tabPanel *ngFor="let transformedUser of usersForPipe">
        {{transformedUser | person: true :true :true}}
      </p-tabPanel>
    </p-tabView> -->
    <br>
    <br>
    <app-countdown></app-countdown>
  `,
  styles: []
})
export class AppComponent {
  users;//u.U noch einen check ob users.length > 0 - sonst ausgabe "no users found"
  inputNumberOfPersonsGenerated = 0;
  givenUsers = PERSONS;
  //usersForPipe;

  checkInCaseFetchData(): void {
    if (this.inputNumberOfPersonsGenerated > 0) {
      this.fetchData()
    } else {
      console.log('ERROR: Number of persons to generate has to be bigger than 0!')
    }
  }

  fetchData(): any {
    fetch('https://randomuser.me/api?results=' + this.inputNumberOfPersonsGenerated)
      .then(response => response.json())
      .then(data => data.results)
      .then(users => {
        const femaleUsers = users
          .filter(user => user.gender === 'female')
          .map(user => user.name.title + ' ' + user.name.first + ' ' + user.name.last)
        //.join(', ') -> würde alles zu einem datensatzstring machen
        console.log(femaleUsers);
        this.users = femaleUsers;
      })
  }

  /*fetchDataForPipeExercise(): any{
    fetch('https://randomuser.me/api?results=' + this.inputNumberOfPersonsGenerated)
      .then(response => response.json())
      .then(data => data.results)
      .then(users => {
        const femaleUsers = users
          .filter(user => user.gender === 'female')
        this.usersForPipe = femaleUsers;
      })
    this.transformUsersForPipe()
  }

  transformUsersForPipe():void{
    const transferArray: person[] = [];
    for(let user of this.usersForPipe){
      let transformedUser = new person(user.name.first, user.name.last, user.name.title, user.dob.age)
      //{firstName: user.name.first, lastName: user.name.last, title: user.name.title, age: user.dob.age}
      transferArray.push(transformedUser);
    }
    console.log(transferArray);
    this.usersForPipe = transferArray;
    console.log(this.usersForPipe);
  }*/

  incrementInputNumberOfPersonsGenerated() {
    this.inputNumberOfPersonsGenerated++;
  }

  decrementInputNumberOfPersonsGenerated() {
    this.inputNumberOfPersonsGenerated--;
  }
}
