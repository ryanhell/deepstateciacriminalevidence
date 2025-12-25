import {
  BetweenHorizontalStart,
  Video,
  VideoIcon,
  FileVideo,
  Brain,
  Activity,
  ScanEye,
  Antenna,
} from "lucide-react";

export const navItems = [
  {
    id: 1,
    name: "Rivercom 911",
    path: "/911Calls",
    icon: {
      name: "Activity",
      classes: "h-6 w-6",
      icon: Activity,
    },
  },
  {
    id: 2,
    name: "Tampered Evidence Videos",
    path: "/videos",
    icon: {
      name: "file-video",
      classes: "h-6 w-6",
      icon: FileVideo,
    },
  },
  {
    id: 3,
    name: "City's Chief Prosecutor Caught Onseen Orchastrating",
    path: "/SallyBagshaw",
    icon: {
      name: "brain",
      classes: "h-6 w-6",
      icon: Brain,
    },
  },
  {
    id: 4,
    name: "Kidnapper Revelaed as Rivercom 911 Operation Manager",
    path: "/JeremiahJohnson",
    icon: {
      name: "activity",
      classes: "h-6 w-6",
      icon: Activity,
    },
  },
  {
    id: 5,
    name: "My Bio",
    path: "/aboutRyan",
    icon: {
      name: "Activity",
      classes: "h-6 w-6",
      icon: Activity,
    },
  },
  {
    id: 6,
    name: "Files",
    path: "/Downloads",
    icon: {
      name: "ScanEye",
      classes: "h-6 w-6",
      icon: ScanEye,
    },
  },
  {
    id: 7,
    name: "Police Report",
    path: "/PoliceReport",
    icon: {
      name: "ScanEye",
      classes: "h-6 w-6",
      icon: ScanEye,
    },
  },
  {
    id: 8,
    name: "CAD Files",
    path: "/CADFiles",
    icon: {
      name: "Antenna",
      classes: "h-6 w-6",
      icon: Antenna,
    },
  },
];
