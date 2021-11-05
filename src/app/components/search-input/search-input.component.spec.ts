import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewCardDetailsComponent } from '../view-card-details/view-card-details.component';

//

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule.withRoutes([
          {
            path: 'view/:id',
            component: ViewCardDetailsComponent,
          },
        ]),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
  });

  it('Should allow user to search movie', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const changeEventMock = spyOn(component, 'search').and.callThrough();
      const userInputElement: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('searchInput');
      userInputElement.value = 'squid';
      userInputElement.dispatchEvent(new Event('input'));
      expect(changeEventMock).toHaveBeenCalledTimes(1);
    });
  });
});
