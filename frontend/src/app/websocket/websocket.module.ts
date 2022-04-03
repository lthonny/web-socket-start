import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from './websocket.service';
import { WebSocketConfig } from './websocket.interfaces';
import { config } from './websocket.config';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    WebsocketService
  ]
})
export class WebsocketModule {
  public static config(wsConfig: WebSocketConfig) {
    return {
      ngModule: WebsocketModule,
      providers: [{provide: config, useValue: wsConfig}]
    }
  }
}
