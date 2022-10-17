import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'rectangle-animation',
  template: `
    <svg [attr.width]="1.575 * size" [attr.height]="1.575 * size" [attr.viewBox]="'0 0 ' + 1.575 * size + ' ' + 1.575 * size">
      <rect [attr.x]="size * 0.2875" [attr.y]="size * 0.2875" [attr.width]="size" [attr.height]="size" [attr.fill]="fillColor" [attr.stroke]="strokeColor"
        (mouseover)="stopRotation(false)" (mouseleave)="stopRotation(true)">
        <animateTransform
          *ngIf="animated"
          repeatCount="indefinite"
          attributeName="transform"
          type="rotate"
          [attr.from]="'0 ' + (size * 0.7875).toString() + ' ' + (size * 0.7875).toString()"
          [attr.to]="'360 ' + (size * 0.7875).toString() + ' ' + (size * 0.7875).toString()"
          begin="0"
          dur="5s"/>
      </rect>
      <circle *ngIf="withCenter" [attr.cx]="size * 0.7875" [attr.cy]="size * 0.7875" r="3" color="lightblue" stroke="blue"></circle>
      <line *ngIf="withCrosshairs" [attr.x1]="0.7875 * size" y1="0" [attr.x2]="0.7875 * size" [attr.y2]="1.575 * size" stroke="black"></line>
      <line *ngIf="withCrosshairs" x1="0" [attr.y1]="0.7875 * size" [attr.x2]="1.575 * size" [attr.y2]="0.7875 * size" stroke="black"></line>
      <circle *ngIf="withInnerCircle" [attr.cx]="size * 0.7875" [attr.cy]="size * 0.7875" [attr.r]="size / 2" fill="none" stroke="blue"></circle>
    </svg>
  `
})
export default class RectangleAnimationComponent {
  @Input()
  size = 60;

  @Input()
  hover = false;

  @Input()
  animated = false;

  @Input()
  fill: 'blue' | 'red' | 'green' = 'green';

  @Input()
  withCenter = true;

  @Input()
  withCrosshairs = false;

  @Input()
  withInnerCircle = false;

  public stopRotation(hovered: boolean) {
    this.animated = this.hover ? hovered : this.animated;
  }

  public get fillColor() {
    if (this.fill == 'green') return 'lightgreen';
    if (this.fill == 'blue') return 'lightblue';
    return 'salmon';
  }

  public get strokeColor() {
      if (this.fill == 'green') return 'darkgreen';
      if (this.fill == 'blue') return 'darkblue';
      return 'red';
    }
}
