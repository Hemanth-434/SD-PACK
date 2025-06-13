import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const type = params['type'];
      this.selectedType = type === 'secondary' ? 'secondary' : type === 'special' ? 'special' : 'primary';
    });
  }
  selectedType: 'primary' | 'secondary' | 'special' = 'primary';

  primaryProducts = [
    {
      image: 'assets/AluminiumSeals.jpg',
      title: 'Aluminium Seals',
      description: 'Aluminum seals are used in various applications, from protecting product integrity in pharmaceuticals ' +
        'to securing shipping containers and meters. These seals offer a reliable way to ensure tamper-proof ' +
        'protection and maintain the integrity of sealed items. They are commonly found in pharmaceutical ' +
        'packaging, shipping containers, and meters. Key features of aluminum seals include tamper-evident closures for ' +
        'vials, availability in flip-off and tear-off types, custom colors and embossing options, and ensuring ' +
        'product integrity and safety.',
      link: 'https://www.vitamed.si/default.asp?mid=en&pid=modul_it&wid=13497'
    },
    {
      image: 'assets/Rubber-Stoppers.jpg',
      title: 'Rubber-Stoppers',
      description: 'Rubber stoppers are essential components in pharmaceutical packaging, ensuring the safety and integrity of medications. ' +
        'They are designed to provide an airtight seal for vials, preventing contamination and maintaining sterility. Key features include: ' +
        '- Ensures airtight sealing for vials, ' +
        '- Made from high-quality bromobutyl and chlorobutyl rubber, ' +
        '- Sterilizable and compatible with various drugs, ' +
        '- Sizes and types customizable (serum, lyophilization).',
      link: 'https://www.bormiolipharma.com/en/news/tappi-gomma-farmaceutici'
    },
    {
      image: 'assets/ContainersAndCaps.jpg',
      title: 'Containers And Caps',
      description: 'Containers and caps/closures play a vital role in pharmaceutical packaging by protecting and storing ' +
        'medications. Containers serve as the primary vessels for holding medications, while caps/closures ensure a secure ' +
        'seal to prevent contamination. These components are essential for maintaining the safety and effectiveness of drugs throughout ' +
        'their lifecycle, from production to patient use. Key features include HDPE, PET, and PP containers, tamper-evident and child-resistant caps, various ' +
        'capacities and designs available, and suitability for tablets, powders, and liquids.',
      link: 'https://mrpsolutions.com/markets/pharmaceutical'
    },
    {
      image: 'assets/GlassVials.jpg',
      title: 'Glass Vials',
      description: 'Glass vials are essential in the pharmaceutical industry for packaging injectables and liquid medicines. ' +
        'They provide a safe and reliable solution for storing sensitive substances, ensuring product integrity ' +
        'and maintaining sterility. These vials are widely used due to their durability, chemical resistance, ' +
        'and ability to preserve the quality of the contents. Key features include: ' +
        '- Used for packaging injectables and liquid medicines, ' +
        '- Available in clear and amber color, ' +
        '- Sizes ranging from 2ml to 100ml, ' +
        '- Compliant with USP / EP standards, ' +
        '- Customizable as per client needs.',
      link: 'https://www.bormiolipharma.com/en/news/packaging-farmaceutico-vetro'
    },
    {
      image: 'assets/Silica.jpg',
      title: 'Silica Gel Canisters/Sachets',
      description: 'Silica gel canisters and sachets are widely used in pharmaceutical packaging to control moisture and ' +
        'protect sensitive drugs from degradation. These desiccants are essential for maintaining the ' +
        'stability and shelf life of medications by preventing moisture-related issues such as clumping, ' +
        'microbial growth, and loss of potency. Key features include: ' +
        '- Moisture control packaging for drug protection, ' +
        '- Non-toxic and pharma-grade, ' +
        '- Available in sachet, canister, and strip forms, ' +
        '- Custom sizes and printing available.',
      link: 'https://en.wikipedia.org/wiki/Silica_gel'
    },
    {
      image: 'assets/LamiTubes.jpg',
      title: 'Lami Tubes',
      description: 'Lami Tubes are widely used in the pharmaceutical and cosmetic industries for packaging creams, gels, ' +
        'and ointments. These tubes are designed to provide excellent protection for the contents while ensuring ease of use ' +
        'and maintaining hygiene. Their multi-layer structure offers superior barrier properties, making them ideal for sensitive ' +
        'formulations. Key features include: ' +
        '- Ideal for creams, gels, and ointments, ' +
        '- Multi-layer structure for better protection, ' +
        '- Customizable size, cap, and artwork, ' +
        '- Sleek and hygienic product presentation.',
      link: 'https://www.antillapropack.com/index.php/products/category/Lami_Tubes'
    }
  ];

  secondaryProducts = [
    {
      image: 'assets/Pharma-Carton-Printing.jpg',
      title: 'Carton Printing',
      description: 'Printed cartons are essential for pharmaceutical packaging, offering both protection and branding opportunities. ' +
        'These cartons are designed to safeguard products during transport while enhancing brand visibility through high-quality printing and finishes. ' +
        'They provide a durable and lightweight packaging solution, ensuring the safety of pharmaceutical products. Key features include: ' +
        '- Protection during transport and storage, ' +
        '- Custom-designed for brand visibility and regulatory compliance, ' +
        '- High-quality printing and finishes (UV, matte, gloss), ' +
        '- Available in multiple sizes and styles, ' +
        '- Eco-friendly options using recyclable materials.',
      link: 'https://www.rajatl.com/products/printed-cartons-labels'
    },
    {
      image: 'assets/Labels.JPG',
      title: 'Labels',
      description: 'In the pharmaceutical industry, labels are crucial for ensuring patient safety, accurate medication use, and regulatory compliance. ' +
        'They provide essential information about the drug\'s contents, dosage, administration, storage, and warnings, ultimately acting as a bridge between manufacturers and consumers. ' +
        'Pharmaceutical labels are designed to meet stringent regulatory standards and are often customized to include anti-counterfeiting features. Key features include: ' +
        '- Clear and legible printing for patient safety, ' +
        '- Compliance with regulatory requirements, ' +
        '- Tamper-evident and anti-counterfeiting features, ' +
        '- Customizable designs for branding and product differentiation, ' +
        '- Durable materials to withstand various storage conditions.',
      link: 'https://www.slideshare.net/slideshow/pharmaceutical-labelling-46661344/46661344'
    },
    {
      image: 'assets/leaflets.JPG',
      title: 'Leaflets',
      description: 'Leaflets are informative inserts included with pharmaceutical products to provide essential details about usage, dosage, and safety. ' +
        'They are designed to ensure compliance with regulatory standards and enhance patient understanding. Key features include: ' +
        '- Informative inserts for product usage and compliance, ' +
        '- Printed with precision and readability, ' +
        '- Multi-fold designs to fit compactly in cartons, ' +
        '- Available in multiple languages for global distribution.',
      link: 'https://www.linkedin.com/pulse/creating-effective-patient-information-leaflets-guidelines-plloc'
    }
  ];
  SpeciailPackaging = [
    {
      image: 'assets/Blister Foils.jpg',
      title: 'Blister Foils',
      description: 'Blister foils are a critical component in pharmaceutical packaging, providing a secure and protective barrier for tablets and capsules. ' +
        'These foils ensure product integrity, extend shelf life, and maintain the efficacy of medications. Key features include: ' +
        '- High-barrier protection for tablets and capsules, ' +
        '- Excellent formability and seal integrity, ' +
        '- Customized structures available to meet specific requirements, ' +
        '- Regulatory-compliant pharma-grade materials for safety and compliance.',
      link: 'https://www.flexipack.com/en/get-to-know-blister-foil/'
    },
    {
      image: 'assets/Alu-Alu.jpg',
      title: 'Alu-Alu',
      description: 'Alu Alu foil is an excellent multilayered structure designed for highly sensitive range of pharmaceutical and generic medicines which are highly hygroscopic or light sensitive and cannot be suitably packed with barrier plastic films. ' +
        'It provides 100% barrier protection against moisture, air, gases, and light, ensuring the stability and efficacy of the packaged products. ' +
        'This packaging solution is known for its superior fracture-free forming capabilities, long-term delamination resistance, and compliance with stringent pharmaceutical standards. ' +
        'Key features include: ' +
        '- Multilayered structure for maximum protection, ' +
        '- Ideal for hygroscopic and light-sensitive medicines, ' +
        '- Ensures zero defects and superior sealing, ' +
        '- Extends shelf life and maintains product integrity, ' +
        '- Customizable to meet specific pharmaceutical requirements.',
      link: 'https://packagingsouthasia.com/application/pharma/alu-alu-blister-packaging/'
    }
  ];
  selectProduct(type: 'primary' | 'secondary' | 'special') {
    this.selectedType = type;
  }
}
