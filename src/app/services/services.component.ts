import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const type = params['type'];
      this.selectedType = type === 'Serialization' ? 'Serialization' : type === 'Artwork' ? 'Artwork' : 'Blister';
    });
  }
  selectedType: 'Blister' | 'Serialization' | 'Artwork' = 'Blister';

  BlisterTools = [
    {
      image: 'assets/BlisterTool.jpg',
      title: 'Blister Tool Support',
      description: 'Blister tools are specialized equipment used in the pharmaceutical industry for the packaging of medications in blister packs. ' +
        'These tools ensure precision and efficiency in forming, sealing, and cutting blister packs, which protect medications from environmental factors ' +
        'such as moisture and light. Key features include: ' +
        '- High precision forming and sealing, ' +
        '- Compatibility with various materials (PVC, PVDC, Alu-Alu), ' +
        '- Customizable designs for different tablet and capsule sizes, ' +
        '- Ensures compliance with pharmaceutical packaging standards.',
      link: 'https://www.iqsdirectory.com/articles/contract-packaging/blister-packaging.html'
    }
  ];

  SerializationSupport = [
    {
      image: 'assets/Serialization.JPG',
      title: 'Serialization Support',
      description: 'Serialization support is a critical component in the pharmaceutical industry to ensure the safety and traceability of medications. ' +
        'It involves assigning unique identifiers to individual product packages, enabling tracking throughout the supply chain. Key features include: ' +
        '- 2D barcode and data matrix integration, ' +
        '- Full track-and-trace system support, ' +
        '- USFDA, EU FMD compliance, ' +
        '- Aggregation and reporting support.',
      link: 'https://www.visiott.com/blog/pharma-serialization-comprehensive-description/#:~:text=What%20is%20Pharma%20Serialization%3F,the%20packaging%20by%20any%20method.'
    }
  ];

  ArtworkSupport = [
    {
      image: 'assets/ArtDevelopment.JPG',
      title: 'Artwork Development Support',
      description: 'Artwork development support focuses on creating high-quality, compliant artwork for pharmaceutical packaging. Key features include: ' +
        '- Label, carton, and leaflet artwork design, ' +
        '- Regulatory compliance checks (font size, layout), ' +
        '- Digital mockups for client review, ' +
        '- Fast revisions and approval workflows. ' +
        'Additionally, art development ensures that the packaging design aligns with brand guidelines while adhering to industry standards. ' +
        'It involves collaboration with regulatory teams to ensure all necessary information is accurately represented. ' +
        'Modern tools and software are utilized to create visually appealing and functional designs that meet client expectations.',
      link: 'https://clear-pak.com.au/effective-pharmaceutical-packaging/'
    }
  ];

  selectService(type: 'Blister' | 'Serialization' | 'Artwork') {
    this.selectedType = type;
  }
}
