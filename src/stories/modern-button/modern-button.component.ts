import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modern-button',
  template: ` <div [style.display]="'inline-block'"><button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="textClasses"
    [style.display]="'flex'" [style.align-items]="'center'" [style.flex-direction]="imageAlign=='left' ? 'row' : 'row-reverse'"
  >
    <img src="{{ imagePath }}" [ngClass]="imageClasses" [style.display]="imagePath=='' ? 'none' : 'inline-block'"/>
    <div>{{ label }}</div>
  </button></div>`,
  styleUrls: ['./modern-button.scss'],
})
export default class ModernButtonComponent {
  @Input()
  functionType: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

  @Input()
  fontSize: 'small' | 'regular' | 'large' = 'regular';

  @Input()
  roundedCorners = false;

  @Input()
  isFilled = true;

  @Input()
  label = 'Button';

  @Input()
  imagePath = '';

  @Input()
  imageAlign: 'left' | 'right' = 'left';

  @Output()
  onClick = new EventEmitter<Event>();

  public get textClasses(): string[] {
    const corner = this.roundedCorners ? '' : 'modern-button--square';
    const fill = this.isFilled ? `modern-button--${this.functionType}` : 'modern-button--notFilled';
    const fontColor = (!this.isFilled || this.functionType == 'light') ? `modern-button--darkFont` : `modern-button--lightFont`;

    return ['modern-button', `modern-button--${this.functionType}-borderColor`,`modern-button--${this.fontSize}`, fontColor, fill, corner];
  }

  public get imageClasses(): string[] {
    return [`modern-button--image-${this.fontSize}`, `modern-button--image-${this.fontSize}-${this.imageAlign}`];
  }
}
