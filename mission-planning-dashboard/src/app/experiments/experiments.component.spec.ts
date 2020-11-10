import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
=======
<<<<<<< HEAD:mission-planning-dashboard/src/app/equipment/equipment.component.spec.ts
import { EquipmentComponent } from './equipment.component';

describe('EquipmentComponent', () => {
  let component: EquipmentComponent;
  let fixture: ComponentFixture<EquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentComponent ]
=======
>>>>>>> fe6eab5defea18495ecdd919cbcd09ee7ecf076e
import { ExperimentsComponent } from './experiments.component';

describe('ExperimentsComponent', () => {
  let component: ExperimentsComponent;
  let fixture: ComponentFixture<ExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentsComponent ]
<<<<<<< HEAD
=======
>>>>>>> fe6eab5defea18495ecdd919cbcd09ee7ecf076e:mission-planning-dashboard/src/app/experiments/experiments.component.spec.ts
>>>>>>> fe6eab5defea18495ecdd919cbcd09ee7ecf076e
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(ExperimentsComponent);
=======
<<<<<<< HEAD:mission-planning-dashboard/src/app/equipment/equipment.component.spec.ts
    fixture = TestBed.createComponent(EquipmentComponent);
=======
    fixture = TestBed.createComponent(ExperimentsComponent);
>>>>>>> fe6eab5defea18495ecdd919cbcd09ee7ecf076e:mission-planning-dashboard/src/app/experiments/experiments.component.spec.ts
>>>>>>> fe6eab5defea18495ecdd919cbcd09ee7ecf076e
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
