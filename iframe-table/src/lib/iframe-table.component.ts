import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


export interface VideoModel {
  url: string;
  titler:string;
  description:string;
}

export class VideoListModel{
  url:SafeResourceUrl | undefined;
  titler:string | undefined;
  description:string | undefined;
}

@Component({
  selector: 'iframe-table',
  templateUrl: './iframe-table.html',
  styleUrls: ['./iframetable.scss']
})
export class IframeTableComponent implements OnChanges{

  @Input() videoList: VideoModel[] = [];
  @Input() width:number = 560;
  @Input() height:number = 315;
  @Input() backgroundColor: string ="white";
  @Input() titleColor: string ="black";
  @Input() textColor: string = "black";
  @Input() row_col :string ="col-md-4";

  videoList_model :VideoListModel[] = [];

  modeldata:VideoListModel = new VideoListModel();

  constructor(private sanitizer: DomSanitizer) {

   }

   ngOnChanges() {
    this.videoList.forEach(element => {
      this.modeldata.description = element.description;
      this.modeldata.titler = element.titler;
      this.modeldata.url = this.getSafeUrl(element.url);
        this.videoList_model.push(this.modeldata);
    });
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
