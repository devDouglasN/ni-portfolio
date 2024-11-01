import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {

  certificates = [
    {
      title: 'Google Cybersecurity Certificate',
      imageUrl: 'https://images.credly.com/size/680x680/images/0bf0f2da-a699-4c82-82e2-56dcf1f2e1c7/image.png',
      credlyUrl: 'https://www.credly.com/badges/63b022a1-a343-48c5-af43-9e66a769dd2e/linked_in_profile',
      hoverText: 'Ver no Credly'
    },
    {
      title: 'Introduction to Cybersecurity',
      imageUrl: 'https://images.credly.com/size/680x680/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png',
      credlyUrl: 'https://www.credly.com/badges/a1300f5f-7397-4c2a-b0ae-6844c57ddd48/linked_in_profile',
      hoverText: 'Ver no Credly'
    },
    {
      title: 'Fundamentos em Cibersegurança',
      imageUrl: 'https://certs.ibsec.com.br/wp-content/uploads/tutor-certificates/IJQo4srfLB-ba732cdf12a2e23a.jpg',
      certificateUrl: 'https://certs.ibsec.com.br/?cert_hash=ba732cdf12a2e23a',
      hoverText: 'Ver Certificado'
    },
    {
      title: 'AWS Cloud Quest: Cloud Practitioner',
      imageUrl: 'https://images.credly.com/size/680x680/images/2784d0d8-327c-406f-971e-9f0e15097003/image.png',
      credlyUrl: 'https://www.credly.com/badges/a4e15995-0285-4ab1-b83b-258c219e9f08/linked_in_profile',
      hoverText: 'Ver no Credly'
    },
    {
      title: 'Intro to Splunk',
      imageUrl: 'assets/ni-splunk.png',
      certificateUrl: 'assets/ni-splunk.png',
      hoverText: 'Ver Certificado'
    },
    {
      title: 'FCF - Getting Started in Cybersecurity 2.0 Self-Paced',
      imageUrl: 'assets/ni-fortnet.png',
      certificateUrl: 'assets/ni-fortnet.png',
      hoverText: 'Ver Certificado'
    },
    {
      title: 'Cybersecurity Awareness - CAPC',
      imageUrl: 'https://images.credly.com/size/680x680/images/712a773b-9acc-4bc8-90fa-6afdfc95da1e/image.png',
      credlyUrl: 'https://www.credly.com/badges/a16e80e9-8909-4632-a26f-db6eade6ad06/linked_in_profile',
      hoverText: 'Ver no Credly'
    },
    {
      title: 'Endpoint Security',
      imageUrl: 'https://images.credly.com/size/680x680/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/EndpointSecurity.png',
      credlyUrl: 'https://www.credly.com/badges/52910958-57a4-4648-b090-26f98961024d/linked_in_profile',
      hoverText: 'Ver no Credly'
    },
    {
      title: 'Lifelong Learning',
      imageUrl: 'https://images.credly.com/size/680x680/images/21e16d4d-d2df-46e6-9098-526caab49e63/blob',
      credlyUrl: 'https://www.credly.com/badges/881ab0c0-5666-4fee-b10d-8edd2dfb8f52/linked_in_profile',
      hoverText: 'Ver no Credly'
    }
  ];

}
