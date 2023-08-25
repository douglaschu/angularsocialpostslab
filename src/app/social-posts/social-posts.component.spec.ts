import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SocialPostsComponent } from './social-posts.component';

describe('SocialPostsComponent', () => {
  let component: SocialPostsComponent;
  let fixture: ComponentFixture<SocialPostsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
