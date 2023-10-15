import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitstatsComponent } from './gitstats.component';

describe('GitstatsComponent', () => {
  let component: GitstatsComponent;
  let fixture: ComponentFixture<GitstatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitstatsComponent]
    });
    fixture = TestBed.createComponent(GitstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
