
export interface FeatureItem {
  name: string;
  details?: string[];
  subFeatures?: FeatureItem[];
  excluded?: boolean;
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
    excluded?: boolean;
  }[];
}

export interface ModuleFeature {
  name: string;
  excluded?: boolean;
}

export interface SystemModule {
  id: string;
  title: string;
  description: string;
  iconName: "LayoutDashboard" | "Users" | "Gavel" | "Map" | "Server" | "Smartphone";
  features: ModuleFeature[];
  excluded?: boolean;
}

export interface PaymentTerm {
  text: string;
  oldText?: string;
  highlight?: boolean;
}

export interface ProposalComparison {
  pros: string[];
  cons: string[];
}

export interface ProposalData {
  clientName: string;
  projectName: string;
  companyName: string;
  objective?: string;
  totalPrice?: string;
  oldTotalPrice?: string;
  paymentTerms?: PaymentTerm[];
  assumptions?: string[];
  comparison?: ProposalComparison;
  colors: {
    primary: string;
    secondary: string;
  };
  stages: ProposalStage[];
  modules?: SystemModule[];
}
