import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/restaurante';
import { NgxGlideComponent } from 'ngx-glide';
import { ThrowStmt } from '@angular/compiler';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss'],
})
export class SecondComponentComponent implements OnInit {
  @Input() datos!: Restaurante;
  isLoading: boolean;
  backdrops: number[];
  showCustomArrows!: boolean;
  showArrows!: boolean;
  showBullets!: boolean;
  arrowLeftLabel!: string;
  arrowRightLabel!: string;
  type!: string;
  startAt!: number;
  perView!: number;
  focusAt!: number | string;
  gap!: number;
  autoplay!: number | boolean;
  hoverpause!: boolean;
  keyboard!: boolean;
  bound!: boolean;
  swipeThreshold!: number | boolean;
  dragThreshold!: number | boolean;
  perTouch!: number | boolean;
  touchRatio!: number;
  touchAngle!: number;
  animationDuration!: number;
  rewind!: boolean;
  rewindDuration!: number;
  animationTimingFunc!: string;
  direction!: string;
  classes!: object;
  isCenter!: boolean;
  isAutoplay!: boolean;
  isSwipeThreshold!: boolean;
  isDragThreshold!: boolean;
  isPerTouch!: boolean;
  logs: { event: string; data?: object }[];

  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;
  constructor() {
    this.isLoading = false;
    this.backdrops = [];
    this.logs = [];
    this.reset();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.backdrops = [...new Array(20).keys()];
      this.isLoading = true;
    }, 0);
  }
  reset(): void {
    this.showCustomArrows = false;
    this.showArrows = false;
    this.showBullets = true;
    this.arrowLeftLabel = 'left';
    this.arrowRightLabel = 'right';
    this.type = 'slider';
    this.startAt = 0;
    this.perView = 3;
    this.isCenter = true;
    this.focusAt = 0;
    this.gap = 12;
    this.isAutoplay = true;
    this.autoplay = 1500;
    this.hoverpause = false;
    this.keyboard = false;
    this.bound = false;
    this.isSwipeThreshold = false;
    this.swipeThreshold = 80;
    this.isDragThreshold = false;
    this.dragThreshold = 120;
    this.isPerTouch = false;
    this.perTouch = 3;
    this.touchRatio = 0.5;
    this.touchAngle = 45;
    this.animationDuration = 400;
    this.rewind = true;
    this.rewindDuration = 800;
    this.animationTimingFunc = 'cubic-bezier(0.165, 0.840, 0.440, 1.000)';
    this.direction = 'ltr';
  }
  recreate(): void {
    if (this.ngxGlide) {
      this.ngxGlide.recreate();
    }
  }

  onMountedBefore(): void {
    this.logs.push({ event: 'mountedBefore' });
  }

  onMountedAfter(): void {
    this.logs.push({ event: 'mountedAfter' });
  }

  onUpdated(): void {
    this.logs.push({ event: 'updated' });
  }

  onPlayed(): void {
    this.logs.push({ event: 'played' });
  }

  onPaused(): void {
    this.logs.push({ event: 'paused' });
  }

  onBuildedBefore(): void {
    this.logs.push({ event: 'buildedBefore' });
  }

  onBuildedAfter(): void {
    this.logs.push({ event: 'buildedAfter' });
  }

  onRanBefore(move: object): void {
    this.logs.push({ event: 'ranBefore', data: move });
  }

  onRan(move: object): void {
    this.logs.push({ event: 'ran', data: move });
  }

  onRanAfter(move: object): void {
    this.logs.push({ event: 'ranAfter', data: move });
  }

  onRanOffset(move: object): void {
    this.logs.push({ event: 'ranOffset', data: move });
  }

  onRunStarted(move: object): void {
    this.logs.push({ event: 'runStarted', data: move });
  }

  onRunEnded(move: object): void {
    this.logs.push({ event: 'runEnded', data: move });
  }

  onMoved(movement: object): void {
    this.logs.push({ event: 'moved', data: movement });
  }

  onMovedAfter(movement: object): void {
    this.logs.push({ event: 'movedAfter', data: movement });
  }

  onResized(): void {
    this.logs.push({ event: 'resized' });
  }

  onSwipeStarted(): void {
    this.logs.push({ event: 'swipeStarted' });
  }

  onSwipeMoved(): void {
    this.logs.push({ event: 'swipeMoved' });
  }

  onSwipeEnded(): void {
    this.logs.push({ event: 'swipeEnded' });
  }

  onTranslateJumped(movement: object): void {
    this.logs.push({ event: 'translateJumped', data: movement });
  }
}
