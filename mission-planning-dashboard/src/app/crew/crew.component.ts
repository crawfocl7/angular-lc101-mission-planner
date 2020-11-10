import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
<<<<<<< HEAD:src/app/crew/crew.component.ts
  memberBeingEdited: object = null;

  @Input() crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

=======
  crew: string[] = ["Jessica Watkins", "Raja Chari", "Jasmin Moghbeli"];
>>>>>>> fe6eab5defea18495ecdd919cbcd09ee7ecf076e:mission-planning-dashboard/src/app/crew/crew.component.ts
  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    this.crew.push({name: memberName, firstMission: isFirst});
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
 }

 save(name: string, member: object) {
  member['name'] = name;
  this.memberBeingEdited = null;
  }
  
}

