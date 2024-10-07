import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'] // Correção aqui
})
export class CertificateComponent {

  certificates = [
    {
      title: 'Google Cybersecurity Certificate',
      imageUrl: 'https://images.credly.com/size/680x680/images/0bf0f2da-a699-4c82-82e2-56dcf1f2e1c7/image.png',
      credlyUrl: 'https://www.credly.com/badges/d8b49429-31b2-418c-9569-2aa5bafea1dc/linked_in_profile'
    },
    {
      title: 'Introduction to Cybersecurity',
      imageUrl: 'https://images.credly.com/size/680x680/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png',
      credlyUrl: 'https://www.credly.com/badges/3214cd5f-dcfd-4716-a7cf-a07bd6a8e918/linked_in_profile'
    },
  ];

  selectedCertificate: any = null;

  openModal(certificate: any) {
    this.selectedCertificate = certificate;
  }

  closeModal() {
    this.selectedCertificate = null;
  }

}
