import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Check if the category titles are displaying correctly
  it('should have a section title of Top 250 Movies', async () => {
    fixture = TestBed.createComponent(CardComponent);
    const data = fixture.nativeElement;
    expect(data.querySelector('.top250').textContent).toContain(
      'Top 250 Movies'
    );
  });
  it('should have a section title of comingSoon Movies', async () => {
    fixture = TestBed.createComponent(CardComponent);
    const data = fixture.nativeElement;
    expect(data.querySelector('.comingSoon').textContent).toContain(
      'Coming Soon'
    );
  });
  it('should have a section title of most Popular Movies', async () => {
    fixture = TestBed.createComponent(CardComponent);
    const data = fixture.nativeElement;
    expect(data.querySelector('.mostPopularMovies').textContent).toContain(
      'Most Popular Movies'
    );
  });
  it('should have a section title of most Popular Tv shows', async () => {
    fixture = TestBed.createComponent(CardComponent);
    const data = fixture.nativeElement;
    expect(data.querySelector('.mostPopularTv').textContent).toContain(
      'Most Popular Tv Shows'
    );
  });
  it('should have a section title of Intheater shows', async () => {
    fixture = TestBed.createComponent(CardComponent);
    const data = fixture.nativeElement;
    expect(data.querySelector('.inTheaters').textContent).toContain(
      'In Theaters Now!'
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
