import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'gl-background-video',
  styleUrl: 'gl-background-video.css',
  shadow: true
})
export class GLBackgroundVideoComponent {
  @Prop() src: string;
  @Prop() poster: string;
  @Prop() muted: boolean = true;

  @Element() private videoElement: HTMLVideoElement;

  componentDidLoad() {
    // sometimes, as the component is loaded dynamically, the video starts with sound, even if muted property is set to true
    if (this.muted) {
      this.videoElement.muted = true;
    }
  }

  render() {
    return <video autoplay loop playsinline preload="auto" muted={this.muted} src={this.src} poster={this.poster}></video>;
  }
}
