import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Business routes
  app.get("/api/businesses", async (req, res) => {
    try {
      const category = req.query.category as string;
      const businesses = category 
        ? await storage.getBusinessesByCategory(category)
        : await storage.getAllBusinesses();
      res.json(businesses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch businesses" });
    }
  });

  app.get("/api/businesses/:slug", async (req, res) => {
    try {
      const business = await storage.getBusiness(req.params.slug);
      if (!business) {
        return res.status(404).json({ message: "Business not found" });
      }
      res.json(business);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch business" });
    }
  });

  // Template routes
  app.get("/api/templates", async (req, res) => {
    try {
      const category = req.query.category as string;
      const templates = category
        ? await storage.getTemplatesByCategory(category)
        : await storage.getAllTemplates();
      res.json(templates);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch templates" });
    }
  });

  app.get("/api/templates/:id", async (req, res) => {
    try {
      const template = await storage.getTemplate(parseInt(req.params.id));
      if (!template) {
        return res.status(404).json({ message: "Template not found" });
      }
      res.json(template);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch template" });
    }
  });

  // Service routes
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
