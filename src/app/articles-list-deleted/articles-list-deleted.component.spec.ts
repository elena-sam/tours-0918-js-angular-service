import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListDeletedComponent } from './articles-list-deleted.component';

describe('ArticlesListDeletedComponent', () => {
  let component: ArticlesListDeletedComponent;
  let fixture: ComponentFixture<ArticlesListDeletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesListDeletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
