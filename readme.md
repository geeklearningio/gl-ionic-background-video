![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Ionic Background Video Web Component

This is a very simple Web Component for *Ionic 4* applications to have a *fullscreen video playing in the background of a page*.

## Why make a Web component?

Turns out there are many tweaks to do to make it work perfectly, like we need for a clean and profesionnal app. So I figured I would save you the trouble.

## Remarks

The video will not play correctly on iOS 9 and less. it was not supported yet: https://webkit.org/blog/6784/new-video-policies-for-ios/

This component is designed to play a video that is already on the device.


## How to use it with you Ionic App

For more information about importing it in your app, refer to the Stencil documentation: https://stenciljs.com/docs/angular

### Manual modifications

First, you have to allow inline media playback in your Cordova `config.xml`, otherwise it will not work on iOS :

```
<preference name="AllowInlineMediaPlayback" value="true" />
```

### Install with npm

Install this Web Component with NPM:

```
npm install --save gl-ionic-background-video
```

### Import it

Import it in the module of the page which will use it (home.module.ts for example):
```
import 'gl-ionic-background-video';
```

### Include the Custom Element Schema

You also need to tell your page's module to allow non-angular elements. Add the `CUSTOM_ELEMENTS_SCHEMA` to the list of schemas of you module:

```
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // here is the schema declaration to add
})
export class HomePageModule {}
```

### Call defineCustomElements
Call the defineCustomElements function from the Stencil component collection in your `main.ts` like this:
```
import { defineCustomElements } from 'gl-ionic-background-video/dist/loader'; // add this line

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err)); // This is already in main.ts, it's just to show you where to put everything.
  
defineCustomElements(window); // call the function here
```

