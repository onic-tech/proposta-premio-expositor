import { LucideIcon } from "lucide-react";

export interface FeatureItem {
  name: string;
  details?: string[];
  subFeatures?: FeatureItem[];
}

export interface ProposalStage {
  id: number;
  title: string;
  dateRange: string;
  description?: string;
  price?: string;
  categories: {
    name: string;
    items: FeatureItem[];
  }[];
}

export interface SystemModule {
  id: string;
  title: string;
  description: string;
  iconName: "LayoutDashboard" | "Users" | "Gavel" | "Map" | "Server" | "Smartphone";
  features: string[];
}

export interface ProposalData {
  clientName: string;
  projectName: string;
  companyName: string;
  objective?: string;
  totalPrice?: string;
  assumptions?: string[];
  colors: {
    primary: string;
    secondary: string;
  };
  stages: ProposalStage[];
  modules?: SystemModule[];
}
