import { businesses, templates, services, type Business, type Template, type Service, type InsertBusiness, type InsertTemplate, type InsertService } from "@shared/schema";

export interface IStorage {
  // Business operations
  getBusiness(slug: string): Promise<Business | undefined>;
  getAllBusinesses(): Promise<Business[]>;
  getBusinessesByCategory(category: string): Promise<Business[]>;
  createBusiness(business: InsertBusiness): Promise<Business>;
  
  // Template operations
  getTemplate(id: number): Promise<Template | undefined>;
  getTemplatesByCategory(category: string): Promise<Template[]>;
  getAllTemplates(): Promise<Template[]>;
  createTemplate(template: InsertTemplate): Promise<Template>;
  
  // Service operations
  getAllServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
}

export class MemStorage implements IStorage {
  private businesses: Map<string, Business>;
  private templates: Map<number, Template>;
  private services: Map<number, Service>;
  private currentBusinessId: number;
  private currentTemplateId: number;
  private currentServiceId: number;

  constructor() {
    this.businesses = new Map();
    this.templates = new Map();
    this.services = new Map();
    this.currentBusinessId = 1;
    this.currentTemplateId = 1;
    this.currentServiceId = 1;
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample businesses
    const sampleBusinesses: InsertBusiness[] = [
      {
        slug: "cumnockgolfclub",
        name: "Cumnock Golf Club",
        category: "golfclub",
        location: "Cumnock, NSW",
        description: "Experience championship golf in the heart of beautiful countryside. Our 18-hole course offers challenging play for golfers of all skill levels.",
        tagline: "Experience Championship Golf in Beautiful Countryside",
        contact: {
          phone: "(02) 6367 1234",
          email: "info@cumnockgolf.com",
          address: "123 Golf Course Road, Cumnock, NSW 2867"
        },
        status: "ready"
      },
      {
        slug: "abcplumbing",
        name: "ABC Plumbing Services",
        category: "tradesman",
        location: "Sydney, NSW",
        description: "Professional plumbing services you can trust. Available 24/7 for emergency callouts with fully licensed and insured technicians.",
        tagline: "Professional Plumbing Services You Can Trust",
        contact: {
          phone: "0400 123 456",
          email: "info@abcplumbing.com.au",
          address: "456 Trade Street, Sydney, NSW 2000"
        },
        status: "ready"
      }
    ];

    // Sample templates
    const sampleTemplates: InsertTemplate[] = [
      {
        name: "Classic Golf",
        category: "golfclub",
        templateNumber: 1,
        theme: "Traditional & Elegant",
        description: "A classic design featuring scenic course photography and elegant typography",
        heroImage: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b",
        features: ["Hero Section", "Course Info", "Booking System", "Photo Gallery"],
        sections: { hero: true, about: true, gallery: true, contact: true, services: true }
      },
      {
        name: "Modern Golf",
        category: "golfclub",
        templateNumber: 2,
        theme: "Clean & Contemporary",
        description: "A modern layout with clean lines and contemporary styling",
        heroImage: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb",
        features: ["Modern Design", "Event Calendar", "Member Portal", "Pro Shop"],
        sections: { hero: true, about: true, gallery: true, contact: true, services: true }
      },
      {
        name: "Scenic Golf",
        category: "golfclub",
        templateNumber: 3,
        theme: "Showcase Your Course",
        description: "Emphasizes beautiful course photography and scenic views",
        heroImage: "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8",
        features: ["Large Gallery", "Virtual Tour", "Course Map", "Weather Widget"],
        sections: { hero: true, about: true, gallery: true, contact: true, services: true }
      },
      {
        name: "Premium Golf",
        category: "golfclub",
        templateNumber: 4,
        theme: "Luxury Experience",
        description: "A premium design for upscale golf clubs and resorts",
        heroImage: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa",
        features: ["Luxury Design", "Concierge Services", "Fine Dining", "Events"],
        sections: { hero: true, about: true, gallery: true, contact: true, services: true }
      },
      // Tradesman templates
      {
        name: "Professional Services",
        category: "tradesman",
        templateNumber: 1,
        theme: "Professional & Trustworthy",
        description: "Clean professional design emphasizing credentials and reliability",
        heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
        features: ["Service Areas", "Testimonials", "License Display", "Emergency Contact"],
        sections: { hero: true, about: true, gallery: true, contact: true, services: true }
      },
      {
        name: "Service Focused",
        category: "tradesman",
        templateNumber: 2,
        theme: "Service-Oriented Design",
        description: "Focuses on showcasing services and getting quick quotes",
        heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
        features: ["Service List", "Quick Quote", "Before/After", "Service Areas"],
        sections: { hero: true, about: true, gallery: true, contact: true, services: true }
      },
      {
        name: "Portfolio Showcase",
        category: "tradesman",
        templateNumber: 3,
        theme: "Work Portfolio Focus",
        description: "Highlights completed work and project galleries",
        heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
        features: ["Project Gallery", "Case Studies", "Work Process", "Estimates"],
        sections: { hero: true, about: true, gallery: true, contact: true, services: true }
      },
      {
        name: "Emergency Services",
        category: "tradesman",
        templateNumber: 4,
        theme: "24/7 Emergency Ready",
        description: "Designed for emergency services with prominent contact options",
        heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
        features: ["24/7 Contact", "Emergency Form", "Live Chat", "Service Areas"],
        sections: { hero: true, about: true, gallery: true, contact: true, services: true }
      }
    ];

    // Sample services
    const sampleServices: InsertService[] = [
      {
        name: "Professional Hosting",
        description: "Reliable hosting with 99.9% uptime guarantee",
        price: 29,
        interval: "monthly",
        features: ["99.9% uptime guarantee", "SSL certificate included", "Daily backups", "24/7 support"],
        popular: false
      },
      {
        name: "Website Updates",
        description: "Monthly content updates and maintenance",
        price: 59,
        interval: "monthly",
        features: ["Monthly content updates", "Photo replacements", "Contact info changes", "Everything in hosting"],
        popular: true
      },
      {
        name: "Custom Domain",
        description: "Professional domain setup and management",
        price: 89,
        interval: "monthly",
        features: ["Your own domain name", "Professional email setup", "Domain management", "Everything in updates"],
        popular: false
      }
    ];

    // Initialize data
    sampleBusinesses.forEach(business => {
      const id = this.currentBusinessId++;
      const businessWithId: Business = { 
        ...business, 
        id,
        createdAt: new Date().toISOString()
      };
      this.businesses.set(business.slug, businessWithId);
    });

    sampleTemplates.forEach(template => {
      const id = this.currentTemplateId++;
      const templateWithId: Template = { ...template, id };
      this.templates.set(id, templateWithId);
    });

    sampleServices.forEach(service => {
      const id = this.currentServiceId++;
      const serviceWithId: Service = { ...service, id };
      this.services.set(id, serviceWithId);
    });
  }

  async getBusiness(slug: string): Promise<Business | undefined> {
    return this.businesses.get(slug);
  }

  async getAllBusinesses(): Promise<Business[]> {
    return Array.from(this.businesses.values());
  }

  async getBusinessesByCategory(category: string): Promise<Business[]> {
    return Array.from(this.businesses.values()).filter(b => b.category === category);
  }

  async createBusiness(insertBusiness: InsertBusiness): Promise<Business> {
    const id = this.currentBusinessId++;
    const business: Business = { 
      ...insertBusiness, 
      id,
      createdAt: new Date().toISOString()
    };
    this.businesses.set(insertBusiness.slug, business);
    return business;
  }

  async getTemplate(id: number): Promise<Template | undefined> {
    return this.templates.get(id);
  }

  async getTemplatesByCategory(category: string): Promise<Template[]> {
    return Array.from(this.templates.values()).filter(t => t.category === category);
  }

  async getAllTemplates(): Promise<Template[]> {
    return Array.from(this.templates.values());
  }

  async createTemplate(insertTemplate: InsertTemplate): Promise<Template> {
    const id = this.currentTemplateId++;
    const template: Template = { ...insertTemplate, id };
    this.templates.set(id, template);
    return template;
  }

  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }
}

export const storage = new MemStorage();
