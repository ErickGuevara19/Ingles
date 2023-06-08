import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-coleccion1',
  templateUrl: './coleccion1.component.html',
  styleUrls: ['./coleccion1.component.css']
})
export class Coleccion1Component {
  constructor(private sanitizer: DomSanitizer) {}

  videoUrl2!:SafeResourceUrl;

  videoUrl1!: SafeResourceUrl;
  ngOnInit() {
    const videoPath = '../../../assets/video/woman.mp4'; // Ruta relativa al video dentro de la carpeta "assets"
    this.videoUrl1 = this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);

    const videoPath2= '../../../assets/video/man.mp4';
    this.videoUrl2=this.sanitizer.bypassSecurityTrustResourceUrl(videoPath2);
  }

}
