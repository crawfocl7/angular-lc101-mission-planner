import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
<<<<<<< HEAD:src/app/header/header.component.ts

  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
  editingMission: boolean = false;
  editingRocket: boolean = false;

=======
  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
  
>>>>>>> fe6eab5defea18495ecdd919cbcd09ee7ecf076e:mission-planning-dashboard/src/app/header/header.component.ts
  constructor() { }

  ngOnInit() {
  }

  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
  }

  updateRocket(updatedName: string) {
    this.rocketName = updatedName;
    this.editingRocket = false;
  }
}
