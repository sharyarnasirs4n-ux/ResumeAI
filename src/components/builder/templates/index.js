import ModernTemplate from "./ModernTemplate";

import TokyoNeoTechTemplate from "./TokyoNeoTechTemplate";
import TheEditorialSerifTemplate from "./TheEditorialSerifTemplate";
import SwissGridTemplate from "./SwissGridTemplate";
import MinimalTemplate from "./MinimalTemplate";
import TechATSTemplate from "./TechATSTemplate";
import SlateTemplate from "./SlateTemplate";
import AcademicCVTemplate from "./AcademicCVTemplate";
import LeftAccentTemplate from "./LeftAccentTemplate";
import SlateModernGridTemplate from "./SlateModernGridTemplate";
import WarmSerifTemplate from "./WarmSerifTemplate";
import ExecutiveTemplate from "./ExecutiveTemplate";
import CreativeTemplate from "./CreativeTemplate";
import ProfessionalTemplate from "./ProfessionalTemplate";
import NordicMinimalistTemplate from "./NordicMinimalistTemplate";
import HighImpactHeaderTemplate from "./HighImpactHeaderTemplate";
import CreativePortfolioTemplate from "./CreativePortfolioTemplate";



export const TEMPLATES_REGISTRY = {
  modern: {
    id: "modern",
    name: "Modern",
    description: "Bold Accent Layout",
    component: ModernTemplate,
  },

  minimal: {
    id: "minimal",
    name: "Minimal",
    description: "Clean Typography",
    component: MinimalTemplate,
  },

  executive: {
    id: "executive",
    name: "Executive",
    description: "Double Column Layout",
    component: ExecutiveTemplate,
  },

  creative: {
    id: "creative",
    name: "Creative",
    description: "Elegant Serif Style",
    component: CreativeTemplate,
  },

  ats_tech: {
    id: "ats_tech",
    name: "Tech ATS",
    description: "Highly readable ATS-friendly standard",
    component: TechATSTemplate,
  },

  slate: {
    id: "slate",
    name: "Slate Modern",
    description: "Impact & Metrics Layout",
    component: SlateTemplate,
  },

  warm_serif: {
    id: "warm_serif",
    name: "Elegant Serif",
    description: "Academic & Creative Editorial style",
    component: WarmSerifTemplate,
  },

  professional: {
    id: "professional",
    name: "Professional",
    description: "Modern two-column professional resume",
    component: ProfessionalTemplate,
  },

  
  nordic_minimalist: {
    id: "nordic_minimalist",
    name: "Nordic Minimal",
    description: "Architectural thin line layout",
    component: NordicMinimalistTemplate
  },
  high_impact: {
    id: "high_impact",
    name: "Command High-Impact",
    description: "Corporate dark banner block",
    component: HighImpactHeaderTemplate
  },
  creative_portfolio: {
    id: "creative_portfolio",
    name: "Vibrant Portfolio",
    description: "Modern asymmetrical violet accents",
    component: CreativePortfolioTemplate
  },
  academic_cv: {
    id: "academic_cv",
    name: "Academic CV",
    description: "Sober scholastic clean book layout",
    component: AcademicCVTemplate
  },
  left_accent: {
    id: "left_accent",
    name: "Accent Timeline",
    description: "Left-aligned guide line professional layout",
    component: LeftAccentTemplate
  },
  slate_grid: {
    id: "slate_grid",
    name: "Modular Slate Grid",
    description: "Boxed layout card highlights",
    component: SlateModernGridTemplate
  },
  tokyo_tech: {
    id: "tokyo_tech",
    name: "Tokyo Neo-Tech",
    description: "Sleek glowing tech sidebar design",
    component: TokyoNeoTechTemplate
  },
  editorial_serif: {
    id: "editorial_serif",
    name: "The Editorial Serif",
    description: "Elegant serif book/magazine profile style",
    component: TheEditorialSerifTemplate
  },
  swiss_grid: {
    id: "swiss_grid",
    name: "Swiss Grid Minimalist",
    description: "High-end rigid grid design",
    component: SwissGridTemplate
  }
};