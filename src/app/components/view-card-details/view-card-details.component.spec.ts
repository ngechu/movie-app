import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from '../card/card.component';

import { ViewCardDetailsComponent } from './view-card-details.component';

describe('ViewCardDetailsComponent', () => {
  let component: ViewCardDetailsComponent;
  let fixture: ComponentFixture<ViewCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: CardComponent,
          },
        ]),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should pop an alert message when clicked', () => {
    const addToFavouriteButtonMock = spyOn(
      component,
      'addToFavourite'
    ).and.callThrough();

    const addToFavouriteButton: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector('.favouriteButton');
    addToFavouriteButton.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(addToFavouriteButtonMock).toHaveBeenCalledTimes(1);
    });
  });
});
