# IframeTable

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Installation

npm i @genifrtab/iframe-table

## Code scaffolding

Run `ng generate component component-name --project iframe-table` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project iframe-table`.
> Note: Don't forget to add `--project iframe-table` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build iframe-table` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build iframe-table`, go to the dist folder `cd dist/iframe-table` and run `npm publish`.

## Running unit tests

Run `ng test iframe-table` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Use

''' Import

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IframeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

'''
 ---- html


  @Input() videoList: VideoModel[] = [];
  @Input() width:number = 560;
  @Input() height:number = 315;
  @Input() backgroundColor: string ="white";
  @Input() titleColor: string ="black";
  @Input() textColor: string = "black";
  @Input() row_col :string ="col-md-4";

  <iframe-table [videoList]="videoList" [row_col]="'col-md-4'" [width]="?" [height]="?" [backgroundColor]="?" [titleColor]="?" [textColor]="?" ></iframe-table>

  ---Component 

        import { Component } from '@angular/core';
        import { VideoModel } from 'iframe-table';

        @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
        })
        export class AppComponent {
        title = 'angularProject';

        videoList: VideoModel[] = [
            { url: 'https://www.youtube.com/embed/5w6n_a32WE4',titler:"aaaa",description:"llll" },
            { url: 'https://www.youtube.com/embed/5w6n_a32WE4',titler:"aaaa",description:"llll" },
            { url: 'https://www.youtube.com/embed/5w6n_a32WE4' ,titler:"aaaa",description:"llll"},
            { url: 'https://www.youtube.com/embed/5w6n_a32WE4' ,titler:"aaaa",description:"llll"},
            { url: 'https://www.youtube.com/embed/5w6n_a32WE4' ,titler:"aaaa",description:"llll"},
            { url: 'https://www.youtube.com/embed/5w6n_a32WE4' ,titler:"aaaa",description:"llll"}
        
        ];
        }
