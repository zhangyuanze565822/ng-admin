
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor(private http: HttpClient) { }
  getShopCount() {
    return this.http.get(`https://elm.cangdu.org/shopping/restaurants/count`)
  }
  getShopList(params: any) {
    return this.http.get(`https://elm.cangdu.org/shopping/restaurants`, {
      params: {
        latitude: "31.23037",
        longitude: "121.473701",
        offset: params.currentPage,
        limit: params.pageSize
      }
    })
  }

}
