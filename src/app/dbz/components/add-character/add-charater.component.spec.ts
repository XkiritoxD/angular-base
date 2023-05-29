/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';


import { AddcharacterComponet } from './add-charater.component';

describe('AddcharacterComponet', () => {
  let component: AddcharacterComponet;
  let fixture: ComponentFixture<AddcharacterComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcharacterComponet ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcharacterComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
