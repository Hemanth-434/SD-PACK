import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  @ViewChild('track', { static: false }) track: any;
  public intervalId: any;
  public currentIndex = 0;

  ngOnInit(): void {
    this.revealOnScroll();
  }

  navigateToProducts(packagingType: string) {
    this.router.navigate(['/product'], { queryParams: { type: packagingType } });
  }
  navigateToService(packagingType: string) {
    this.router.navigate(['/product'], { queryParams: { type: packagingType } });
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.revealOnScroll();
  }

  revealOnScroll() {
    const boxes = document.querySelectorAll('.fade-in');
    boxes.forEach((box: any) => {
      const top = box.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.85;
      if (top < trigger) {
        box.classList.add('visible');
      }
    });
  }

  images = [
    'assets/AboutImage.jpg',
    'assets/AboutImage1.JPG',
    'assets/AboutImage2.jpg'
  ];




  ngAfterViewInit() {
    this.startScroll();  // Start automatic scrolling
  }

  startScroll() {
    this.stopScroll(); // Prevent duplicate intervals
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopScroll() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  onMouseEnter() {
    this.stopScroll();
  }

  onMouseLeave() {
    this.startScroll();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateTransform();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateTransform();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateTransform();
  }

  updateTransform() {
    const trackEl = this.track?.nativeElement;
    if (trackEl) {
      trackEl.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
  }

  ngOnDestroy() {
    this.stopScroll();
  }

}
