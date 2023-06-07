import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-coleccion1',
  templateUrl: './coleccion1.component.html',
  styleUrls: ['./coleccion1.component.css']
})
export class Coleccion1Component {
  constructor(private sanitizer: DomSanitizer) {}

  videoUrl!: SafeResourceUrl; 
  ngOnInit() {
    const videoPath = 'assets/video/video.mp4'; // Ruta relativa al video dentro de la carpeta "assets"
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);
  }

}
