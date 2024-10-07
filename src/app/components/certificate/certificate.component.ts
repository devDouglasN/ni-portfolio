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
      credlyUrl: 'https://www.credly.com/badges/63b022a1-a343-48c5-af43-9e66a769dd2e/linked_in_profile'
    },
    {
      title: 'Introduction to Cybersecurity',
      imageUrl: 'https://images.credly.com/size/680x680/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png',
      credlyUrl: 'https://www.credly.com/badges/a1300f5f-7397-4c2a-b0ae-6844c57ddd48/linked_in_profile'
    },
    {
      title: 'Fundamentos em Cibersegurança',
      imageUrl: 'https://certs.ibsec.com.br/wp-content/uploads/tutor-certificates/IJQo4srfLB-ba732cdf12a2e23a.jpg',
      credlyUrl: 'https://certs.ibsec.com.br/?cert_hash=ba732cdf12a2e23a'
    }
  ];

  selectedCertificate: any = null;

  openModal(certificate: any) {
    this.selectedCertificate = certificate;
  }

  closeModal() {
    this.selectedCertificate = null;
  }

}
