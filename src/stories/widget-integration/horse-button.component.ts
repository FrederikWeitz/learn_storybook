import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'horse-button',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" version="1.1" viewBox="0 0 250 250">
      <g transform="matrix(5,0,0,5,0,0)">
        <defs>
          <style>
            .a {fill:#614b44}
            .b {fill:#947063}
            .c {fill:none}
            .c,.f {stroke:#45413c}
            .c,.f,.g,.l {stroke-linecap:round; stroke-linejoin:round; stroke-width:1.25px}
            .f {fill:#bf8256}
            .g {fill:#ffcebf; stroke:#ffb59e}
            .j {fill:#45413c}
            .k {fill:#20b2aa}
            .l {fill:none; stroke:#008080}
            .m {fill:#00ffff}
          </style>
        </defs>
        <path class="a"
              d="M36.313 12.973c3.7-.152 6.639 3.568 6.922 7.324a7.886 7.886 0 0 1 .012 1.008 20.655 20.655 0 0 0-.2 2.7 1.137 1.137 0 0 0 .348.856 1.02 1.02 0 0 0 .667.154 2.651 2.651 0 0 0 1.014-.257c.6 2.173-1.76 3.66-3.6 3.942a6.331 6.331 0 0 1-6.051-2.2 3.9 3.9 0 0 1-.209-.33 5.885 5.885 0 0 1-.452-1.14 25.725 25.725 0 0 0-1.918-4.873 6.525 6.525 0 0 1-.7-1.455 5.18 5.18 0 0 1-.109-1.413 4.514 4.514 0 0 1 .327-2.25 3.644 3.644 0 0 1 1.615-1.463 5.919 5.919 0 0 1 2.334-.603z"/>
        <path class="b"
              d="M45.079 24.759a2.627 2.627 0 0 1-1.014.256 1.013 1.013 0 0 1-.667-.153 1.138 1.138 0 0 1-.348-.857 20.839 20.839 0 0 1 .2-2.7 7.705 7.705 0 0 0-.011-1.008c-.283-3.756-3.226-7.476-6.922-7.324a5.934 5.934 0 0 0-2.333.6 3.931 3.931 0 0 0-1.019.713c4.276-.057 7.66 4.261 7.99 8.632a9.234 9.234 0 0 1 .013 1.188 24.553 24.553 0 0 0-.232 3.184 1.345 1.345 0 0 0 .411 1.01 1.2 1.2 0 0 0 .786.181 3.1 3.1 0 0 0 1.017-.238c1.389-.643 2.574-1.872 2.129-3.484z"/>
        <path class="c"
              d="M36.313 12.973c3.7-.152 6.639 3.568 6.922 7.324a7.886 7.886 0 0 1 .012 1.008 20.655 20.655 0 0 0-.2 2.7 1.137 1.137 0 0 0 .348.856 1.02 1.02 0 0 0 .667.154 2.651 2.651 0 0 0 1.014-.257c.6 2.173-1.76 3.66-3.6 3.942a6.331 6.331 0 0 1-6.051-2.2 3.9 3.9 0 0 1-.209-.33 5.885 5.885 0 0 1-.452-1.14 25.725 25.725 0 0 0-1.918-4.873 6.525 6.525 0 0 1-.7-1.455 5.18 5.18 0 0 1-.109-1.413 4.514 4.514 0 0 1 .327-2.25 3.644 3.644 0 0 1 1.615-1.463 5.919 5.919 0 0 1 2.334-.603z"/>
        <path class="a"
              d="M35.436 25.931c4.4-1.14 8.9 2.569 10.216 7.01a9.557 9.557 0 0 1 .275 1.208 25.626 25.626 0 0 0 .463 3.3 1.4 1.4 0 0 0 .64.939 1.253 1.253 0 0 0 .842.012 3.258 3.258 0 0 0 1.152-.571c1.285 2.456-1.167 4.855-3.3 5.669-2.5.953-5.793.822-7.841-1.073a4.74 4.74 0 0 1-.337-.343 7.16 7.16 0 0 1-.838-1.252 31.574 31.574 0 0 0-3.569-5.361 7.947 7.947 0 0 1-1.224-1.569 6.352 6.352 0 0 1-.5-1.67 5.557 5.557 0 0 1-.19-2.789 4.5 4.5 0 0 1 1.562-2.177 7.287 7.287 0 0 1 2.649-1.333z"/>
        <path class="b"
              d="M49.024 37.825a3.249 3.249 0 0 1-1.152.571 1.25 1.25 0 0 1-.841-.012 1.4 1.4 0 0 1-.64-.939 25.453 25.453 0 0 1-.464-3.3 9.652 9.652 0 0 0-.275-1.209c-1.313-4.441-5.813-8.149-10.216-7.009a7.287 7.287 0 0 0-2.647 1.332 4.862 4.862 0 0 0-1.04 1.12c5.124-1.176 10.31 3.138 11.838 8.3a11.386 11.386 0 0 1 .324 1.425A30.168 30.168 0 0 0 44.457 42a1.651 1.651 0 0 0 .755 1.107 1.483 1.483 0 0 0 .993.014 3.838 3.838 0 0 0 1.16-.549c1.506-1.137 2.612-2.925 1.659-4.747z"/>
        <path class="c"
              d="M35.436 25.931c4.4-1.14 8.9 2.569 10.216 7.01a9.557 9.557 0 0 1 .275 1.208 25.626 25.626 0 0 0 .463 3.3 1.4 1.4 0 0 0 .64.939 1.253 1.253 0 0 0 .842.012 3.258 3.258 0 0 0 1.152-.571c1.285 2.456-1.167 4.855-3.3 5.669-2.5.953-5.793.822-7.841-1.073a4.74 4.74 0 0 1-.337-.343 7.16 7.16 0 0 1-.838-1.252 31.574 31.574 0 0 0-3.569-5.361 7.947 7.947 0 0 1-1.224-1.569 6.352 6.352 0 0 1-.5-1.67 5.557 5.557 0 0 1-.19-2.789 4.5 4.5 0 0 1 1.562-2.177 7.287 7.287 0 0 1 2.649-1.333z"/>
        <path
          d="M12.194 35.358c-.125.044 3.166.22 3.132.6-.24 2.68 0 11.084 0 11.084 8.091 1.834 17.949 2.017 25.551-3.194-1.433-8.25-6.863-19.4-12.521-26.64"
          style="fill:#bf8256"/>
        <path
          d="M37.977 34.211a73.524 73.524 0 0 0-9.622-17L12.194 35.358c-.125.044 3.166.22 3.132.6-.158 1.769-.108 6.02-.056 8.713a22.463 22.463 0 0 0 4.73.515c8.611 0 15.005-4.686 17.977-10.975z"
          style="fill:#915e3a"/>
        <path class="c"
              d="M12.194 35.358c-.125.044 3.166.22 3.132.6-.24 2.68 0 11.084 0 11.084 8.091 1.834 17.949 2.017 25.551-3.194-1.433-8.25-6.863-19.4-12.521-26.64"/>
        <path class="f"
              d="M25.2 7.713a33.324 33.324 0 0 1 6.117-5.551 1.878 1.878 0 0 1 2.826.7c.906 1.924 2.066 4.828 1.91 6.817a9.179 9.179 0 0 1-4.01 6.861z"/>
        <path class="g"
              d="M27.335 8.572a19.218 19.218 0 0 1 3.524-3.2 1.082 1.082 0 0 1 1.629.4 9.379 9.379 0 0 1 1.1 3.929 5.19 5.19 0 0 1-.807 2.4z"/>
        <path class="f"
              d="M11.39 8.648a34.381 34.381 0 0 0-6.019-5.422 1.878 1.878 0 0 0-2.826.7C1.639 5.85.479 8.753.635 10.743a9.357 9.357 0 0 0 3.346 6.394z"/>
        <path class="g"
              d="M9.45 9.778a18.01 18.01 0 0 0-3.624-3.34 1.083 1.083 0 0 0-1.629.4 9.362 9.362 0 0 0-1.1 3.928 5.406 5.406 0 0 0 2.04 3.776z"/>
        <path class="f"
              d="M36.926 28.518C35.694 36.024 29.354 42.4 20.013 42.4S4.007 36.1 3.1 28.518C1.245 13.012 9.992 6.933 19.333 6.933s20.138 6.079 17.593 21.585z"/>
        <path
          d="M35.665 32.673c-4.746-3.653-14.29-7.47-22.88-7.47a56.331 56.331 0 0 0-9.893.813c.039.807.1 1.638.208 2.5C4.007 36.1 10.672 42.4 20.013 42.4a16.687 16.687 0 0 0 15.652-9.727z"
          style="fill:#f0d5a8"/>
        <path
          d="M11.785 27.2c8.56 0 18.062 3.789 22.825 7.431a16.586 16.586 0 0 0 1.055-1.961c-4.746-3.653-14.29-7.47-22.88-7.47a56.331 56.331 0 0 0-9.893.813c.029.592.078 1.2.14 1.825a57.864 57.864 0 0 1 8.753-.638z"
          style="fill:#f7e5c6"/>
        <path class="c"
              d="M35.665 32.673c-4.746-3.653-14.29-7.47-22.88-7.47a56.331 56.331 0 0 0-9.893.813c.039.807.1 1.638.208 2.5C4.007 36.1 10.672 42.4 20.013 42.4a16.687 16.687 0 0 0 15.652-9.727z"/>
        <circle class="j" cx="9.34" cy="22.089" r="1.065"/>
        <circle class="j" cx="23.504" cy="23.089" r="1.065"/>
        <path [ngClass]="hoverCurl ? 'm' : 'a'"
              d="M14.789 5.67a4.924 4.924 0 0 0-3.035 3.411 8.767 8.767 0 0 0-.134 3.929 8.875 8.875 0 0 0 1.32 2.948 9.9 9.9 0 0 0 2.56 2.705 15.772 15.772 0 0 0 2.336 1.26 9.811 9.811 0 0 0 1.392.567 9.8 9.8 0 0 0 1.617.28 3.381 3.381 0 0 0 1.967-.165c.048-.025.1-.061.1-.114a.174.174 0 0 0-.069-.125 5.257 5.257 0 0 1-1.473-4.306 6.448 6.448 0 0 0 2.553.207c-3.474-5.4.878-6.589 1.765-7.227A.951.951 0 0 0 26 8.457a1.1 1.1 0 0 0-.289-.917 2.684 2.684 0 0 0-.8-.613A15.835 15.835 0 0 0 21.4 5.614a12.914 12.914 0 0 0-3.977-.514 8.033 8.033 0 0 0-2.069.36c-.191.063-.38.132-.565.21z"/>
        <path [ngClass]="hoverCurl ? 'k' : 'b'"
              d="M25.715 7.539a2.7 2.7 0 0 0-.8-.612A15.888 15.888 0 0 0 21.4 5.613a12.944 12.944 0 0 0-3.977-.513 8.033 8.033 0 0 0-2.069.36c-.191.061-.38.13-.565.208a4.928 4.928 0 0 0-3.036 3.411 11.338 11.338 0 0 0-.232 1.387c3.248-4.547 11.167-1.209 12.42-.514.035.019.068.044.1.065.654-.481 1.345-.764 1.644-.979a.951.951 0 0 0 .315-.58 1.1 1.1 0 0 0-.285-.919z"/>
        <path [ngClass]="hoverCurl ? 'l' : 'c'"
              d="M14.789 5.67a4.924 4.924 0 0 0-3.035 3.411 8.767 8.767 0 0 0-.134 3.929 8.875 8.875 0 0 0 1.32 2.948 9.9 9.9 0 0 0 2.56 2.705 15.772 15.772 0 0 0 2.336 1.26 9.811 9.811 0 0 0 1.392.567 9.8 9.8 0 0 0 1.617.28 3.381 3.381 0 0 0 1.967-.165c.048-.025.1-.061.1-.114a.174.174 0 0 0-.069-.125 5.257 5.257 0 0 1-1.473-4.306 6.448 6.448 0 0 0 2.553.207c-3.474-5.4.878-6.589 1.765-7.227A.951.951 0 0 0 26 8.457a1.1 1.1 0 0 0-.289-.917 2.684 2.684 0 0 0-.8-.613A15.835 15.835 0 0 0 21.4 5.614a12.914 12.914 0 0 0-3.977-.514 8.033 8.033 0 0 0-2.069.36c-.191.063-.38.132-.565.21z"/>
        <ellipse class="j" cx="13.316" cy="32.562" rx="1.632" ry="2.366" transform="rotate(-20.23 13.315 32.561)"/>
        <ellipse class="j" cx="18.066" cy="32.878" rx="2.366" ry="1.632"
                 transform="rotate(-63.919 18.065 32.878)"/>
      </g>
    </svg>
  `
})
export default class HorseButtonComponent {
  @Input()
  hoverCurl = false;
}
