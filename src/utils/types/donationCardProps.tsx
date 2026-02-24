export type DonationCardProps = {
  category: string;
  imageSrc: string;
  title: string;
  goal: string;
  raised: string;
  progress: number;
  url: string;
  onDonate?: () => void;
  onShare?: () => void;
};

