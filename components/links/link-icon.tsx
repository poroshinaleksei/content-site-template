import {
  ArrowUpRight,
  AtSign,
  BookOpen,
  Calendar,
  ExternalLink,
  Mail,
  MapPin,
  Network,
  Phone,
  ShoppingBag,
  Video,
  type LucideIcon,
} from "lucide-react";

import type { LinkIcon as LinkIconName } from "@/config/types";

type LinkIconProps = {
  icon: LinkIconName;
  className?: string;
};

const icons = {
  "arrow-up-right": ArrowUpRight,
  "book-open": BookOpen,
  calendar: Calendar,
  facebook: Network,
  instagram: AtSign,
  linkedin: Network,
  mail: Mail,
  "map-pin": MapPin,
  phone: Phone,
  "shopping-bag": ShoppingBag,
  x: ExternalLink,
  youtube: Video,
} satisfies Record<LinkIconName, LucideIcon>;

export function LinkIcon({ icon, className }: LinkIconProps) {
  const Icon = icons[icon];

  return <Icon aria-hidden="true" className={className} />;
}
