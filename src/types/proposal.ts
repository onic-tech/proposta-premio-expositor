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
}
