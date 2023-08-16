import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageConverterService {
  byteArrayToImageUrl(base64String: string): string {
    const byteArray = this.stringToUint8Array(base64String);
    const blob = new Blob([byteArray], { type: 'image/jpeg' }); 
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  }

  stringToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  imageToByteArray(imageFile: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        const result = event.target?.result as ArrayBuffer | null;
        if (result) {
          resolve(result);
        } else {
          reject('Failed to convert image to byte array.');
        }
      };
  
      reader.onerror = () => {
        reject('Error reading the image file.');
      };
  
      reader.readAsArrayBuffer(imageFile);
    });
  }
  
}
