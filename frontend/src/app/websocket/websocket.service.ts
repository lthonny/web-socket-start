import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  /*
  * connect to WebSocked
  * */
  private connect(): void {

  }



  /*
  * reconnect if not connecting or errors
  * */
  private reconnect(): void {

  }


  /*
  * on message event
  * */
  public on<T>(event: string): Observable<T> {

  }


  /*
  * on message to server
  * */
  public send(event: string, data: any = {}): void {
    if(event && this.isConnected) {
      
    } 
    else {
      console.log('Send error!');
    }
  }
}
